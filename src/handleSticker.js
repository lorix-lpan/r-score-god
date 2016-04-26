import handleGif from './handleGif';

function handleSticker(id) {
  console.log(id);
  switch(id) {
    // medium size like sticker
    case 369239263222822:
      return '(y)';

    // Large size like sticker
    case 369239343222814:
      return '(y)';

    default:
      return handleGif();
  }
}

export default handleSticker;
