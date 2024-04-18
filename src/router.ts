import { components, hooks, utils } from '@generouted/react-router/client';

export type Path =
  | `/`
  | `/project`;

export type Params = {
  // Define any route parameters if needed
};

export type ModalPath = never;

export const { Link, Navigate } = components<Path, Params>();
export const { useModals, useNavigate, useParams } = hooks<Path, Params, ModalPath>();
export const { redirect } = utils<Path, Params>();

// Add the Project route
export const routes = {
  home: '/',
  project: '/project'
};
