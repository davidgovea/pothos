# bug repro

## when using relay nodes with the subgraph plugin,
### the second schema receives duplicate `implements Node & Node`

```
==== SCHEMA A ====:
 interface Node {
  id: ID!
}

type Query {
  node(id: ID!): Node
  nodes(ids: [ID!]!): [Node]!
  user: User!
}

type User implements Node {
  firstName: String!
  id: ID!
  lastName: String!
}


==== SCHEMA B ====
 interface Node {
  id: ID!
}

type Query {
  node(id: ID!): Node
  nodes(ids: [ID!]!): [Node]!
  user: User!
}

// BUG HERE!
type User implements Node & Node {
  firstName: String!
  id: ID!
  lastName: String!
}
```