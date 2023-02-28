import SchemaBuilder from '@pothos/core';
import RelayPlugin from '@pothos/plugin-relay';
import SubGraphPlugin from '@pothos/plugin-sub-graph';

export const builder = new SchemaBuilder<{
  SubGraphs: 'A' | 'B';
}>({
  plugins: [SubGraphPlugin, RelayPlugin],
  relayOptions: {},
  subGraphs: {
    defaultForTypes: ['A', 'B'],
    fieldsInheritFromTypes: true,
  },
});
