import React from 'react';
import './TodoFilter.scss';
import { connect } from 'react-redux';
import * as todosActions from '../../redux/todos/todos-actions';
import todosSelectors from '../../redux/todos/todos-selectors';

const TodoFilter = ({ value, onChange }) => (
  <div className="TodoFilter">
    <p className="TodoFilter__label">Фильтр по содержимому</p>
    <input
      type="text"
      className="TodoFilter__input"
      value={value}
      onChange={onChange}
    />
  </div>
);

const mapStateToProps = state => ({
  value: todosSelectors.getFilter(state),
});

const mapDispatchToProps = dispatch => ({
  onChange: e => dispatch(todosActions.changeFilter(e.target.value)),
});

export default connect(mapStateToProps, mapDispatchToProps)(TodoFilter);
