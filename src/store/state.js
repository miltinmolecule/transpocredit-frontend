const userLoc = JSON.parse(localStorage.getItem("trcppyInfo")) || {}

const getData = () => {
  return userLoc;
}

const state = {
  user: {},
  AppUser: getData()
}

export default state;