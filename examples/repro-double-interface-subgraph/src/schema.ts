/* eslint-disable @typescript-eslint/no-unsafe-return */
import { printSchema } from 'graphql';
import { builder } from './builder';

export const User = builder.objectRef<{ id: string }>('User');

builder.node(User, {
  id: {
    resolve: (user) => user.id,
  },
  loadOne: () => ({ id: 'foo' }),
});

builder.queryType({
  fields: (t) => ({
    user: t.field({
      type: User,
      resolve: () => ({ id: 'foo' }),
    }),
  }),
});

console.log('==== SCHEMA A ====:\n', printSchema(builder.toSchema({ subGraph: 'A' })));

console.log('\n\n==== SCHEMA B ====\n', printSchema(builder.toSchema({ subGraph: 'B' })));
