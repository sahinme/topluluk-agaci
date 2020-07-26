import React, { useState } from 'react';
import { renderImage } from './ProfileCard';
import EditIcon from '@material-ui/icons/Edit';
import { TextField } from '@material-ui/core';
import CheckCircleOutlineIcon from '@material-ui/icons/CheckCircleOutline';
import HighlightOffIcon from '@material-ui/icons/HighlightOff';

export default function ExampleProfileCard({
  img,
  username,
  email,
  bio,
  id,
  onMessage,
  gender,
  sPoint,
  isEditMode,
  onSubmit
}) {
  const [isEdit, setEdit] = useState(false);
  const [values, setValues] = useState({ profileImage: '', bio: '' });

  const handleChange = (event, input) => {
    event.preventDefault();
    let imageFile = event.target.files[0];
    const newValues = {};
    newValues.profileImage = imageFile;
    onSubmit(newValues);
  };

  const handleBioChange = (e) => {
    const newValues = { ...values };
    newValues.bio = e.target.value;
    setValues(newValues);
  };

  const handleBioSubmit = () => {
    const bio = values.bio;
    onSubmit({ bio });
    setEdit(false);
  };
  return (
    <>
      <div className="card_pro">
        <div className="ds-top"></div>
        <div className="avatar-holder">
          <img
            style={{ borderRadius: '50%' }}
            src={renderImage(img, gender)}
            alt=""
          />
          {isEditMode && (
            <div className="edit_icon">
              <label htmlFor="myInput">
                <EditIcon className="profile_edit_icon" />
              </label>
              <input
                id="myInput"
                style={{ display: 'none' }}
                type={'file'}
                onChange={(event) => handleChange(event, { name: 'file' })}
              />
            </div>
          )}
        </div>
        <div className="name">
          <a target="_blank">{username}</a>
        </div>
        {!isEditMode && (
          <div className="button_pro">
            <a
              style={{ backgroundColor: '#007bff' }}
              onClick={onMessage}
              className="btn"
            >
              Mesaj <i className="fas fa-paper-plane"></i>
            </a>
          </div>
        )}
        <div className="ds-info">
          <div className="ds pens">
            <h6>
              SP <i className="fas fa-star"></i>
            </h6>
            <p>{sPoint}</p>
          </div>
        </div>
        <div className="ds-skill">
          <h6>
            Bio <i className="fa fa-sticky-note-o" aria-hidden="true"></i>
          </h6>
          <div className="profile-bio">
            {isEdit ? (
              <div>
                <TextField
                  style={{ width: '100%' }}
                  id="outlined-multiline-static"
                  label="bio"
                  multiline
                  onChange={handleBioChange}
                  name="bio"
                  rows={6}
                  rowsMax={6}
                  defaultValue={bio}
                  variant="outlined"
                />

                <div>
                  <HighlightOffIcon
                    onClick={() => setEdit(!isEdit)}
                    className="close_icon"
                  />
                  <CheckCircleOutlineIcon
                    onClick={handleBioSubmit}
                    className="check_icon"
                  />
                </div>
              </div>
            ) : (
              <>
                <p>{bio}</p>
                {isEditMode && (
                  <div className="edit_icon">
                    <EditIcon
                      onClick={() => setEdit(!isEdit)}
                      className="profile_edit_icon"
                    />
                  </div>
                )}
              </>
            )}
          </div>
        </div>
      </div>
    </>
  );
}
