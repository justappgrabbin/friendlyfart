
export class AddressRegistry {
  register(entity, address){
    return {
      entity,
      address,
      status: 'registered'
    };
  }
}
