/**
 * @generated SignedSource<<fbc3f29667e186233738e2f33eb61d0f>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { Fragment, ReaderFragment } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type MemoCard_timeline$data = {
  readonly message: string;
  readonly " $fragmentType": "MemoCard_timeline";
};
export type MemoCard_timeline$key = {
  readonly " $data"?: MemoCard_timeline$data;
  readonly " $fragmentSpreads": FragmentRefs<"MemoCard_timeline">;
};

const node: ReaderFragment = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "MemoCard_timeline",
  "selections": [
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "message",
      "storageKey": null
    }
  ],
  "type": "Timeline",
  "abstractKey": null
};

(node as any).hash = "2413d0a8fc1a78c2d85f6ca9b04a07d6";

export default node;
