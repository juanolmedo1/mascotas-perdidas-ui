export const getProfile = ({ session }) => session.profileInfo;
export const getLoggedUserId = ({ session }) => session.profileInfo.id;
