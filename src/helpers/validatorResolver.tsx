import { BaseSchema } from 'yup';

const manageErrors = (err: { inner: any[] }) =>
  err.inner.reduce((curr: any, next: { path: any; errors: any[] }) => {
    const currentKeys = Object.keys(curr);
    return {
      ...curr,
      ...(currentKeys.includes(next.path)
        ? curr[next.path].push(...next.errors)
        : { [next.path]: next.errors }),
    };
  }, {});

const validatorResolver = (values: any, schema: BaseSchema) =>
  schema
    .validate(values, {
      abortEarly: false,
    })
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    .then((_res: any) => {})
    .catch(manageErrors);

export default validatorResolver;
