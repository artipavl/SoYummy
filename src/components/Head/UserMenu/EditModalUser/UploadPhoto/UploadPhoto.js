import { UploadContainer, UploadIconWrapper, UploadedImage, DeleteButton, HiddenInput, LoadIcon } from './UploadFoto.styled';
import { ReactComponent as RedCrossIcon } from '../../../../../images/icons/red-cross-icon.svg';

export const UploadFoto = ({image, handleImageUpload, handleImageRemove}) => {

  return (
    <UploadContainer>
      <UploadIconWrapper>
        <div style={{
          overflow: 'hidden',
          width: '100%',
          height: '100%',
          borderRadius: '50%'
        }}>
          {image ? (
            <>
              <UploadedImage src={image} alt="uploaded image" style={{ width: '100%', height: '100%' }} />
              <DeleteButton onClick={handleImageRemove} onMouseDown={(e) => e.stopPropagation()}>
                <RedCrossIcon />
              </DeleteButton>
            </>
          ) : (

            <LoadIcon width={24}/>

          )}
        </div>
        <HiddenInput id="imageUpload" onChange={handleImageUpload} />
      </UploadIconWrapper>
    </UploadContainer>
  );
};
