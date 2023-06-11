/**
 * @generated SignedSource<<e7a8dee8bc5e772bde97bcf4d8322c6e>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest, Query } from 'relay-runtime';
export type MemoCardQuery$variables = {};
export type MemoCardQuery$data = {
  readonly timeline: ReadonlyArray<{
    readonly message: string;
  }>;
};
export type MemoCardQuery = {
  response: MemoCardQuery$data;
  variables: MemoCardQuery$variables;
};

const node: ConcreteRequest = (function(){
var v0 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "message",
  "storageKey": null
};
return {
  "fragment": {
    "argumentDefinitions": [],
    "kind": "Fragment",
    "metadata": null,
    "name": "MemoCardQuery",
    "selections": [
      {
        "alias": null,
        "args": null,
        "concreteType": "Timeline",
        "kind": "LinkedField",
        "name": "timeline",
        "plural": true,
        "selections": [
          (v0/*: any*/)
        ],
        "storageKey": null
      }
    ],
    "type": "Query",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": [],
    "kind": "Operation",
    "name": "MemoCardQuery",
    "selections": [
      {
        "alias": null,
        "args": null,
        "concreteType": "Timeline",
        "kind": "LinkedField",
        "name": "timeline",
        "plural": true,
        "selections": [
          (v0/*: any*/),
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "id",
            "storageKey": null
          }
        ],
        "storageKey": null
      }
    ]
  },
  "params": {
    "cacheID": "a06b18493497e0814455f67a2c80f316",
    "id": null,
    "metadata": {},
    "name": "MemoCardQuery",
    "operationKind": "query",
    "text": "query MemoCardQuery {\n  timeline {\n    message\n    id\n  }\n}\n"
  }
};
})();

(node as any).hash = "ba9b4665faa6803631edd5620c5d13bd";

export default node;
