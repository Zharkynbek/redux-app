import React from "react";
import { connect } from "react-redux";
import * as actions from "../../redux/phonebookActions";

const PhonebookFilter = ({ filterValue, onFilterContact }) => {
  return (
    <>
      <div className="PhonebookFilter">
        <label>
          <p>filter contacts</p>
          <input
            type="text"
            name="filter"
            id=""
            value={filterValue}
            onInput={onFilterContact}
          />
        </label>
      </div>
      <h3>Contacts</h3>
    </>
  );
};

const mapStateToProps = (state) => ({
  filterValue: state.filter,
});

const mapDispatchToProps = (dispatch) => ({
  onFilterContact: (e) => dispatch(actions.handleFilterContacts(e)),
});

export default connect(mapStateToProps, mapDispatchToProps)(PhonebookFilter);
