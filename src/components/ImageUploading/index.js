import React from "react";
import ImageUploading from "react-images-uploading";
import SoftButton from "components/SuiButton";
import SuiBox from "components/SuiBox";
import CancelIcon from "@material-ui/icons/Cancel";

import "./styles.css";

function ImageUpload() {
  const [images, setImages] = React.useState([]);
  const maxNumber = 69;
  const onChange = (imageList, addUpdateIndex) => {
    console.log(imageList, addUpdateIndex);
    setImages(imageList);
  };

  return (
    <div className="App">
      <ImageUploading
        multiple
        value={images}
        onChange={onChange}
        maxNumber={maxNumber}
        dataURLKey="data_url"
        acceptType={["jpg"]}
      >
        {({
          imageList,
          onImageUpload,
          //onImageRemoveAll,
          //onImageUpdate,
          onImageRemove,
          //isDragging,
          //dragProps,
        }) => (
          <div className="upload__image-wrapper">
            {imageList.map((image, index) => (
              <div key={index} className="image-item">
                <img src={image.data_url} alt="" width="320" />
                <div className="content" id="close_button">
                  <CancelIcon
                    fontSize="large"
                    color="primary.dark"
                    onClick={() => onImageRemove(index)}
                  />
                </div>
              </div>
            ))}
            {images.length == 0 && (
              <SuiBox mb={2}>
                <SoftButton onClick={onImageUpload} variant="outlined" buttonColor="primary">
                  Upload Image
                </SoftButton>
              </SuiBox>
            )}
          </div>
        )}
      </ImageUploading>
    </div>
  );
}

export default ImageUpload;
