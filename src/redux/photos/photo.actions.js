import photoReducer from "./photo.reducer"

export const galleryData = photos => ({
    type: 'ALL_PHOTOS',
    payload: photos
});