import React, { Component } from 'react';
import { connect } from 'react-redux';
import Container from '../components/Container';
import TodoList from '../components/TodoList';
import TodoEditor from '../components/TodoEditor';
import Filter from '../components/TodoFilter';
import Stats from '../components/Stats';
import Modal from '../components/Modal';
import IconButton from '../components/IconButton';
import { ReactComponent as AddIcon } from '../icons/add.svg';
import todosOperations from '../redux/todos/todos-operations';
import todosSelectors from '../redux/todos/todos-selectors';
import Btn from '../components/CounterButton';

const barStyles = {
  display: 'flex',
  alignItems: 'flex-end',
  marginBottom: 20,
};

class TodosView extends Component {
  state = {
    showModal: false,
  };

  componentDidMount() {
    this.props.fetchTodos();
  }

  toggleModal = () => {
    this.setState(({ showModal }) => ({
      showModal: !showModal,
    }));
  };

  render() {
    const { showModal } = this.state;
    // const totalTodoCount = todos.length;
    // const completedTodoCount = this.calculateCompletedTodos();

    return (
      <Container>
        {this.props.isLoadingTodos && <h1>Loaded...</h1>}
        <Btn />
        <div style={barStyles}>
          <Filter />
          <Stats />
          <IconButton onClick={this.toggleModal} aria-label="Добавить todo">
            <AddIcon width="40" height="40" fill="#fff" />
          </IconButton>
        </div>

        <TodoList />

        {showModal && (
          <Modal onClose={this.toggleModal}>
            <TodoEditor onSave={this.toggleModal} />
          </Modal>
        )}
      </Container>
    );
  }
}

const mapStateToProps = state => ({
  isLoadingTodos: todosSelectors.getLoading(state),
});

const mapDispatchToProps = dispatch => ({
  fetchTodos: () => dispatch(todosOperations.fetchTodos()),
});

export default connect(mapStateToProps, mapDispatchToProps)(TodosView);
