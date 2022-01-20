import state from './moduleVehicleState';
import actions from './moduleVehicleActions';
import mutations from './moduleVehicleMutations';
import getters from './moduleVehicleGetters'

export default {
  namespace: true,
  state: state,
  actions: actions,
  mutations,
  getters
}