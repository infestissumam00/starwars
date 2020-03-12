import React from 'react';
import PropTypes from 'prop-types';
import Dropzone from 'react-dropzone';

import './fileUploaderStyles.scss';

const FileUploader = ({ accept, label, multiple, onDrop }) => {
  const handleFileDrop = files => {
    onDrop(
      files.map(file =>
        Object.assign(file, {
          preview: URL.createObjectURL(file),
        }),
      ),
    );
  };

  return (
    <Dropzone accept={accept} multiple={multiple} onDrop={handleFileDrop}>
      {({ getRootProps, getInputProps }) => (
        <div className="file-uploader">
          {label && <p className="mb-1">{label}</p>}
          <div
            {...getRootProps({
              className: 'dropzone d-flex justify-content-center align-items-center',
              onDrop: event => event.stopPropagation(),
            })}>
            <input {...getInputProps()} />
            <p>Drag 'n' drop some files here, or click to select files</p>
          </div>
        </div>
      )}
    </Dropzone>
  );
};

FileUploader.propTypes = {
  accept: PropTypes.string,
  label: PropTypes.string,
  multiple: PropTypes.bool,
  onDrop: PropTypes.func.isRequired,
};

FileUploader.defaultProps = {
  accept: '',
  label: '',
  multiple: false,
};

export default FileUploader;
