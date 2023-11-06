export const generateImageUrl = (inputString: string | undefined) => {
    if (inputString) {
        const [_, imageName, imageSize, imageFormat] = inputString.split('-');
        const imageUrl = `https://cdn.sanity.io/images/e0lpb9nx/production/${imageName}-${imageSize}.${imageFormat}`;
        return imageUrl;
    }
};
