export class AuthorizationDataModel {
  constructor(
    public email: string,
    public password: string,
    public rememberMe?: boolean
  ) {
  }
}
