import React from 'react';
import '../../styles/comments.scss';

const CommentEditForm = props => {
  return (
    <div className="comment-edit-form">
      <div className="row">
        <form className="col s12">
          <div className="row">
            <div className="input-field col s12">
              <textarea
                id="textarea1"
                className="materialize-textarea comment-edit"
                value={props.commentText}
                onChange={props.commentTextChange}
              />
              <label htmlFor="textarea1" className="comment-label">
                Edit your comment here
              </label>
            </div>
          </div>
          <input
            type="submit"
            value="Save"
            className="btn right"
            onClick={props.handleSubmit}
          />
          <button className="btn right cancel" onClick={props.toggleEditForm}>
            Cancel
          </button>
        </form>
      </div>
    </div>
  );
};

export default CommentEditForm;
