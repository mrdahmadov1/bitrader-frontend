export interface IRoute {
  children?: IRoute[];
  title?: string;
  path?: string;
  element?: JSX.Element;
}
