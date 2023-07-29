export const IsInTheWatchLater = (videos, videoId) => {
    return videos.find(({ _id }) => _id === videoId)
}