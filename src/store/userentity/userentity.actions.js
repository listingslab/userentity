export function userentityUpdate (userentity) {
  return (dispatch) => {
    dispatch(_reduce.appToggleSideMenu(userentity));
  }
}
const _reduce = {
  userentityUpdate: (userentity) => {
    return {
      type: 'USERENTITY_UPDATE',
      userentity
    };
  },
}