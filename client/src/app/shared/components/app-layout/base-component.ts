export class BaseComponent {
  protected requesting = false;
  protected fetching = false;

  get isRequesting() {
    return this.requesting;
  }

  get isFetching() {
    return this.fetching;
  }

  protected startRequest() {
    this.requesting = true;
  }

  protected endRequest() {
    this.requesting = false;
  }

  protected startFetching() {
    this.fetching = true;
  }

  protected endFetching() {
    this.fetching = false;
  }
}
