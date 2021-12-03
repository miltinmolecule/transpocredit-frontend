const userLoc = JSON.parse(localStorage.getItem("trcppy")) || {}

const getData = () => {
  return userLoc;
}

const state = {
  user: {},
  AppUser: getData()
}

export default state;