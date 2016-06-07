import React from "react";
import d3 from 'd3';

var data = {
"links": [
  {
      "from": "ccbc7817-5cc1-4d51-98c3-fc565641c7ab",
      "to": "69c12bae-7bc5-4b19-bc5c-642270a56f6b",
      "relationId": "e1846647-ad4f-41cf-8c77-51405518cd1d",
      "binaryFactTypeId": "881da0d3-ac44-499b-b5fe-224acab1675c",
      "originalLabel": "used in",
      "style": "arrow"
  },
  {
      "from": "de32819b-f76c-4e67-ab43-cb087feac577",
      "to": "69c12bae-7bc5-4b19-bc5c-642270a56f6b",
      "relationId": "991296c1-a92e-4ac8-a4d2-63b461dc1921",
      "binaryFactTypeId": "881da0d3-ac44-499b-b5fe-224acab1675c",
      "originalLabel": "used in",
      "style": "arrow"
  },
  {
      "from": "de32819b-f76c-4e67-ab43-cb087feac577",
      "to": "c358f2ba-bc3d-4066-a362-ead8e52740a4",
      "relationId": "9c8f6232-33d1-4271-8bda-d70332a5a77d",
      "binaryFactTypeId": "881da0d3-ac44-499b-b5fe-224acab1675c",
      "originalLabel": "used in",
      "style": "arrow"
  },
  {
      "from": "de32819b-f76c-4e67-ab43-cb087feac577",
      "to": "96b184a4-ccc0-4b70-a8f6-9a2fc9536fe5",
      "relationId": "2d5a75d5-75bc-42a5-80c3-b77cff7354a9",
      "binaryFactTypeId": "881da0d3-ac44-499b-b5fe-224acab1675c",
      "originalLabel": "used in",
      "style": "arrow"
  },
  {
      "from": "de32819b-f76c-4e67-ab43-cb087feac577",
      "to": "7896baca-c911-4fe9-ab56-5b1d828833b5",
      "relationId": "9350780c-7be9-4396-a8a6-f5f91f4aba70",
      "binaryFactTypeId": "881da0d3-ac44-499b-b5fe-224acab1675c",
      "originalLabel": "used in",
      "style": "arrow"
  },
  {
      "from": "de32819b-f76c-4e67-ab43-cb087feac577",
      "to": "db93bb81-05eb-40c7-be71-f2a991cebc63",
      "relationId": "fcb68d60-da09-4c0e-bfad-acb926f3c5f5",
      "binaryFactTypeId": "881da0d3-ac44-499b-b5fe-224acab1675c",
      "originalLabel": "used in",
      "style": "arrow"
  },
  {
      "from": "7fe88ce0-9a23-4146-a039-5c645fbd06f2",
      "to": "c358f2ba-bc3d-4066-a362-ead8e52740a4",
      "relationId": "6b57c9c5-9480-43cd-86a5-40f6e0ddb07e",
      "binaryFactTypeId": "881da0d3-ac44-499b-b5fe-224acab1675c",
      "originalLabel": "used in",
      "style": "arrow"
  },
  {
      "from": "7fe88ce0-9a23-4146-a039-5c645fbd06f2",
      "to": "7896baca-c911-4fe9-ab56-5b1d828833b5",
      "relationId": "8a16422b-5ae3-43d5-9f6b-2b2747e3d083",
      "binaryFactTypeId": "881da0d3-ac44-499b-b5fe-224acab1675c",
      "originalLabel": "used in",
      "style": "arrow"
  },
  {
      "from": "7fe88ce0-9a23-4146-a039-5c645fbd06f2",
      "to": "96b184a4-ccc0-4b70-a8f6-9a2fc9536fe5",
      "relationId": "4e556eda-2021-40e8-b687-854397bc9461",
      "binaryFactTypeId": "881da0d3-ac44-499b-b5fe-224acab1675c",
      "originalLabel": "used in",
      "style": "arrow"
  },
  {
      "from": "98f3cc14-272d-4aa6-9f82-dbc324074792",
      "to": "7896baca-c911-4fe9-ab56-5b1d828833b5",
      "relationId": "82b54b05-1ba2-4c46-bf63-f60df052f3c6",
      "binaryFactTypeId": "881da0d3-ac44-499b-b5fe-224acab1675c",
      "originalLabel": "used in",
      "style": "arrow"
  },
  {
      "from": "98f3cc14-272d-4aa6-9f82-dbc324074792",
      "to": "db93bb81-05eb-40c7-be71-f2a991cebc63",
      "relationId": "f8615cac-ba52-43fc-b29e-16eb08ac6d1e",
      "binaryFactTypeId": "881da0d3-ac44-499b-b5fe-224acab1675c",
      "originalLabel": "used in",
      "style": "arrow"
  },
  {
      "from": "98f3cc14-272d-4aa6-9f82-dbc324074792",
      "to": "951204f7-3e02-4c17-8d13-33ad2a06abd9",
      "relationId": "a77ac9c8-0ce5-4502-af13-79d4bfb1685b",
      "binaryFactTypeId": "881da0d3-ac44-499b-b5fe-224acab1675c",
      "originalLabel": "used in",
      "style": "arrow"
  },
  {
      "from": "7fe88ce0-9a23-4146-a039-5c645fbd06f2",
      "to": "951204f7-3e02-4c17-8d13-33ad2a06abd9",
      "relationId": "768b5207-5b9f-4946-94e8-cc3956fac8b0",
      "binaryFactTypeId": "881da0d3-ac44-499b-b5fe-224acab1675c",
      "originalLabel": "used in",
      "style": "arrow"
  },
  {
      "from": "98f3cc14-272d-4aa6-9f82-dbc324074792",
      "to": "d4720b3f-b61d-4f18-aefb-0dfd18fe47fa",
      "relationId": "6ec11234-21ec-4314-a5f4-4772734dd778",
      "binaryFactTypeId": "881da0d3-ac44-499b-b5fe-224acab1675c",
      "originalLabel": "used in",
      "style": "arrow"
  },
  {
      "from": "7fe88ce0-9a23-4146-a039-5c645fbd06f2",
      "to": "d4720b3f-b61d-4f18-aefb-0dfd18fe47fa",
      "relationId": "31a3b1f1-b9f8-49b8-ab89-14627b9367df",
      "binaryFactTypeId": "881da0d3-ac44-499b-b5fe-224acab1675c",
      "originalLabel": "used in",
      "style": "arrow"
  },
  {
      "from": "98f3cc14-272d-4aa6-9f82-dbc324074792",
      "to": "f314a8f9-3fc2-4ec2-87d3-39ba19f3ec97",
      "relationId": "a896651b-504e-461c-b224-6864157d0b0a",
      "binaryFactTypeId": "881da0d3-ac44-499b-b5fe-224acab1675c",
      "originalLabel": "used in",
      "style": "arrow"
  },
  {
      "from": "98f3cc14-272d-4aa6-9f82-dbc324074792",
      "to": "dd7d912c-ce16-4089-a4f5-adcc203979e4",
      "relationId": "a4f18758-fa8f-4ae6-a70b-cf89c5920559",
      "binaryFactTypeId": "881da0d3-ac44-499b-b5fe-224acab1675c",
      "originalLabel": "used in",
      "style": "arrow"
  },
  {
      "from": "7fe88ce0-9a23-4146-a039-5c645fbd06f2",
      "to": "56a37075-210a-4765-ba3e-2bd832311c68",
      "relationId": "385918cd-db52-4075-af1c-9e485c3b84f1",
      "binaryFactTypeId": "881da0d3-ac44-499b-b5fe-224acab1675c",
      "originalLabel": "used in",
      "style": "arrow"
  },
  {
      "from": "7fe88ce0-9a23-4146-a039-5c645fbd06f2",
      "to": "1b4fa9e5-a4ba-4abf-b17c-f86eb84f594d",
      "relationId": "b92cdf70-4601-4961-b67f-a481b997383f",
      "binaryFactTypeId": "b86dea18-4422-4fda-855c-ddcef826ad99",
      "originalLabel": "uses",
      "style": "arrow"
  },
  {
      "from": "7fe88ce0-9a23-4146-a039-5c645fbd06f2",
      "to": "fc241754-06d4-4ac4-bc90-3442d87d0f05",
      "relationId": "c6441053-9490-463e-a851-72f52350f649",
      "binaryFactTypeId": "b86dea18-4422-4fda-855c-ddcef826ad99",
      "originalLabel": "uses",
      "style": "arrow"
  },
  {
      "from": "7fe88ce0-9a23-4146-a039-5c645fbd06f2",
      "to": "cd664eed-45e4-4378-aacf-59acdcfed813",
      "relationId": "f58d3d17-a2b4-4166-b05f-e2a7522cc08d",
      "binaryFactTypeId": "b86dea18-4422-4fda-855c-ddcef826ad99",
      "originalLabel": "uses",
      "style": "arrow"
  },
  {
      "from": "7fe88ce0-9a23-4146-a039-5c645fbd06f2",
      "to": "5d44dbf0-6e10-46f5-a1a7-946083768f1c",
      "relationId": "6aa0d800-9679-4828-b804-960e98b8f8d1",
      "binaryFactTypeId": "b86dea18-4422-4fda-855c-ddcef826ad99",
      "originalLabel": "uses",
      "style": "arrow"
  },
  {
      "from": "98f3cc14-272d-4aa6-9f82-dbc324074792",
      "to": "830cfbce-ebd2-4d31-83f8-6a6e221a49da",
      "relationId": "2b555b5d-aee2-4009-a5ef-75bd46efc3d0",
      "binaryFactTypeId": "b86dea18-4422-4fda-855c-ddcef826ad99",
      "originalLabel": "uses",
      "style": "arrow"
  },
  {
      "from": "98f3cc14-272d-4aa6-9f82-dbc324074792",
      "to": "f92394b7-79cb-4d80-83c3-c69f5a2dcf0c",
      "relationId": "fe10334c-371f-47b0-b981-05ff29bb58a8",
      "binaryFactTypeId": "b86dea18-4422-4fda-855c-ddcef826ad99",
      "originalLabel": "uses",
      "style": "arrow"
  },
  {
      "from": "7fe88ce0-9a23-4146-a039-5c645fbd06f2",
      "to": "f92394b7-79cb-4d80-83c3-c69f5a2dcf0c",
      "relationId": "4e249e58-f523-4079-8d4b-bfd39f60a759",
      "binaryFactTypeId": "b86dea18-4422-4fda-855c-ddcef826ad99",
      "originalLabel": "uses",
      "style": "arrow"
  },
  {
      "from": "7fe88ce0-9a23-4146-a039-5c645fbd06f2",
      "to": "6130782a-6d38-4a94-99f0-91417c63a878",
      "relationId": "015112d3-9184-4a07-9533-ae0cbae1cc3d",
      "binaryFactTypeId": "b86dea18-4422-4fda-855c-ddcef826ad99",
      "originalLabel": "uses",
      "style": "arrow"
  },
  {
      "from": "7fe88ce0-9a23-4146-a039-5c645fbd06f2",
      "to": "3f19a156-8f29-4e65-aaf5-785901a5e8d6",
      "relationId": "20a4b5b8-9663-4ed9-ad94-56de34e2d1ee",
      "binaryFactTypeId": "b86dea18-4422-4fda-855c-ddcef826ad99",
      "originalLabel": "uses",
      "style": "arrow"
  },
  {
      "from": "7fe88ce0-9a23-4146-a039-5c645fbd06f2",
      "to": "d60f7b58-a760-49b4-91c6-765b2b74c913",
      "relationId": "235840a6-41e2-487a-b5b2-65a57100b1fb",
      "binaryFactTypeId": "b86dea18-4422-4fda-855c-ddcef826ad99",
      "originalLabel": "uses",
      "style": "arrow"
  },
  {
      "from": "98f3cc14-272d-4aa6-9f82-dbc324074792",
      "to": "4b6907bb-2f39-4e69-b3ac-433f173e04e8",
      "relationId": "5c6b1958-aba6-4547-a5cc-511b49d38bf7",
      "binaryFactTypeId": "b86dea18-4422-4fda-855c-ddcef826ad99",
      "originalLabel": "uses",
      "style": "arrow"
  },
  {
      "from": "7fe88ce0-9a23-4146-a039-5c645fbd06f2",
      "to": "4b6907bb-2f39-4e69-b3ac-433f173e04e8",
      "relationId": "8d481490-70bd-4a72-a122-4f37b68a1ff7",
      "binaryFactTypeId": "b86dea18-4422-4fda-855c-ddcef826ad99",
      "originalLabel": "uses",
      "style": "arrow"
  },
  {
      "from": "98f3cc14-272d-4aa6-9f82-dbc324074792",
      "to": "a5557e8f-25a9-4f5a-a37c-74b9486ea3ee",
      "relationId": "19947ad6-86d9-471c-a574-a78ef43cc724",
      "binaryFactTypeId": "b86dea18-4422-4fda-855c-ddcef826ad99",
      "originalLabel": "uses",
      "style": "arrow"
  },
  {
      "from": "7fe88ce0-9a23-4146-a039-5c645fbd06f2",
      "to": "a5557e8f-25a9-4f5a-a37c-74b9486ea3ee",
      "relationId": "9e5daf10-9e5c-4aac-b689-02c58fee5126",
      "binaryFactTypeId": "b86dea18-4422-4fda-855c-ddcef826ad99",
      "originalLabel": "uses",
      "style": "arrow"
  },
  {
      "from": "98f3cc14-272d-4aa6-9f82-dbc324074792",
      "to": "53dde314-7c28-4749-bf8b-ecde2c2e7f09",
      "relationId": "dfa19298-3b13-4595-953a-01dfdf7c5cfe",
      "binaryFactTypeId": "b86dea18-4422-4fda-855c-ddcef826ad99",
      "originalLabel": "uses",
      "style": "arrow"
  },
  {
      "from": "7fe88ce0-9a23-4146-a039-5c645fbd06f2",
      "to": "37ab56c3-a018-48b2-b3c4-b953e7dc0631",
      "relationId": "1bda7555-0ca7-415e-b416-9b63921af928",
      "binaryFactTypeId": "b86dea18-4422-4fda-855c-ddcef826ad99",
      "originalLabel": "uses",
      "style": "arrow"
  },
  {
      "from": "98f3cc14-272d-4aa6-9f82-dbc324074792",
      "to": "bb7eee34-affa-4ec3-9a28-2ab2e495e911",
      "relationId": "99ddb0a8-b691-4e2f-954f-36bf3b78f403",
      "binaryFactTypeId": "b86dea18-4422-4fda-855c-ddcef826ad99",
      "originalLabel": "uses",
      "style": "arrow"
  },
  {
      "from": "7fe88ce0-9a23-4146-a039-5c645fbd06f2",
      "to": "bb7eee34-affa-4ec3-9a28-2ab2e495e911",
      "relationId": "27aecb0e-8354-419d-b290-5b953bf71b1e",
      "binaryFactTypeId": "b86dea18-4422-4fda-855c-ddcef826ad99",
      "originalLabel": "uses",
      "style": "arrow"
  },
  {
      "from": "98f3cc14-272d-4aa6-9f82-dbc324074792",
      "to": "ec41bae9-569f-430b-8263-53a9d070f4cf",
      "relationId": "f74cce1c-6fb4-4249-aa5f-21bab9f33828",
      "binaryFactTypeId": "b86dea18-4422-4fda-855c-ddcef826ad99",
      "originalLabel": "uses",
      "style": "arrow"
  },
  {
      "from": "7fe88ce0-9a23-4146-a039-5c645fbd06f2",
      "to": "ec41bae9-569f-430b-8263-53a9d070f4cf",
      "relationId": "3c4099e8-bdf7-48bf-b0c0-ae20b2fb18e1",
      "binaryFactTypeId": "b86dea18-4422-4fda-855c-ddcef826ad99",
      "originalLabel": "uses",
      "style": "arrow"
  },
  {
      "from": "7fe88ce0-9a23-4146-a039-5c645fbd06f2",
      "to": "2b61dfa5-20f8-4881-9a9a-2321a838bc3b",
      "relationId": "c08709f3-22d2-41aa-abca-831adee15196",
      "binaryFactTypeId": "b86dea18-4422-4fda-855c-ddcef826ad99",
      "originalLabel": "uses",
      "style": "arrow"
  },
  {
      "from": "7fe88ce0-9a23-4146-a039-5c645fbd06f2",
      "to": "e67d1bdc-e2f7-4ede-a9d1-6f0d3dc483f2",
      "relationId": "263c3b33-c0a0-4e78-a6d5-5b94cf91adfd",
      "binaryFactTypeId": "b86dea18-4422-4fda-855c-ddcef826ad99",
      "originalLabel": "uses",
      "style": "arrow"
  },
  {
      "from": "7fe88ce0-9a23-4146-a039-5c645fbd06f2",
      "to": "15e0b49b-eac7-4a44-be48-df79b71a15f0",
      "relationId": "2e06ca31-3b0f-4afb-ab95-f8640149f7b9",
      "binaryFactTypeId": "b86dea18-4422-4fda-855c-ddcef826ad99",
      "originalLabel": "uses",
      "style": "arrow"
  },
  {
      "from": "7fe88ce0-9a23-4146-a039-5c645fbd06f2",
      "to": "0a43b37f-6932-41a0-9a09-030932af15b9",
      "relationId": "9f40ff15-276f-437b-960e-bad25e71a9f6",
      "binaryFactTypeId": "b86dea18-4422-4fda-855c-ddcef826ad99",
      "originalLabel": "uses",
      "style": "arrow"
  },
  {
      "from": "7fe88ce0-9a23-4146-a039-5c645fbd06f2",
      "to": "9aa37973-c057-49ac-a008-d4903bb3a330",
      "relationId": "390a5229-94fd-488c-86fe-5ec129b23f84",
      "binaryFactTypeId": "b86dea18-4422-4fda-855c-ddcef826ad99",
      "originalLabel": "uses",
      "style": "arrow"
  },
  {
      "from": "de32819b-f76c-4e67-ab43-cb087feac577",
      "to": "15e0b49b-eac7-4a44-be48-df79b71a15f0",
      "relationId": "4f88eb28-8e63-42ff-b96c-fd959a84564b",
      "binaryFactTypeId": "b86dea18-4422-4fda-855c-ddcef826ad99",
      "originalLabel": "uses",
      "style": "arrow"
  },
  {
      "from": "de32819b-f76c-4e67-ab43-cb087feac577",
      "to": "2b61dfa5-20f8-4881-9a9a-2321a838bc3b",
      "relationId": "070babc1-c432-416e-9fa2-6750fb52a8cb",
      "binaryFactTypeId": "b86dea18-4422-4fda-855c-ddcef826ad99",
      "originalLabel": "uses",
      "style": "arrow"
  },
  {
      "from": "de32819b-f76c-4e67-ab43-cb087feac577",
      "to": "ec41bae9-569f-430b-8263-53a9d070f4cf",
      "relationId": "fccaabb8-19d7-426e-bc9c-61a7f04923a5",
      "binaryFactTypeId": "b86dea18-4422-4fda-855c-ddcef826ad99",
      "originalLabel": "uses",
      "style": "arrow"
  },
  {
      "from": "de32819b-f76c-4e67-ab43-cb087feac577",
      "to": "fc241754-06d4-4ac4-bc90-3442d87d0f05",
      "relationId": "6dbce2ee-e679-4a57-a13e-7d4937e1d322",
      "binaryFactTypeId": "b86dea18-4422-4fda-855c-ddcef826ad99",
      "originalLabel": "uses",
      "style": "arrow"
  },
  {
      "from": "de32819b-f76c-4e67-ab43-cb087feac577",
      "to": "5d44dbf0-6e10-46f5-a1a7-946083768f1c",
      "relationId": "56a27dd1-fbff-409e-a98b-027c52464025",
      "binaryFactTypeId": "b86dea18-4422-4fda-855c-ddcef826ad99",
      "originalLabel": "uses",
      "style": "arrow"
  },
  {
      "from": "de32819b-f76c-4e67-ab43-cb087feac577",
      "to": "a5557e8f-25a9-4f5a-a37c-74b9486ea3ee",
      "relationId": "c51370d9-dd08-4a85-a3b7-8e7c67f06cf3",
      "binaryFactTypeId": "b86dea18-4422-4fda-855c-ddcef826ad99",
      "originalLabel": "uses",
      "style": "arrow"
  },
  {
      "from": "de32819b-f76c-4e67-ab43-cb087feac577",
      "to": "4b6907bb-2f39-4e69-b3ac-433f173e04e8",
      "relationId": "c9f8a0f4-9679-4c74-9504-f2c2fd149b8a",
      "binaryFactTypeId": "b86dea18-4422-4fda-855c-ddcef826ad99",
      "originalLabel": "uses",
      "style": "arrow"
  },
  {
      "from": "de32819b-f76c-4e67-ab43-cb087feac577",
      "to": "f7e67579-7f08-4c9d-afa3-02c3354da343",
      "relationId": "1b31abc1-065f-48d2-aff9-f444e6aa06f8",
      "binaryFactTypeId": "b86dea18-4422-4fda-855c-ddcef826ad99",
      "originalLabel": "uses",
      "style": "arrow"
  },
  {
      "from": "f76ded8c-6026-456f-a319-25b8c7f86a02",
      "to": "de32819b-f76c-4e67-ab43-cb087feac577",
      "relationId": "6b54745e-ae86-4e7c-b6e7-f7060f36b907",
      "binaryFactTypeId": "d92b4298-5d12-460b-91db-9c6590bf5c21",
      "originalLabel": "governed by",
      "style": "arrow"
  },
  {
      "from": "5595de35-6ce9-4d19-a700-05ba093dab83",
      "to": "de32819b-f76c-4e67-ab43-cb087feac577",
      "relationId": "a8f13581-8c59-4485-8d69-60291424191f",
      "binaryFactTypeId": "d92b4298-5d12-460b-91db-9c6590bf5c21",
      "originalLabel": "governed by",
      "style": "arrow"
  },
  {
      "from": "20d9379e-a469-43e5-88cb-bb4466d258ca",
      "to": "de32819b-f76c-4e67-ab43-cb087feac577",
      "relationId": "7e7f3eba-20dc-44da-ab43-a5f70e1a10df",
      "binaryFactTypeId": "d92b4298-5d12-460b-91db-9c6590bf5c21",
      "originalLabel": "governed by",
      "style": "arrow"
  },
  {
      "from": "e26409b4-bef6-4700-bec3-2399e9e3db73",
      "to": "de32819b-f76c-4e67-ab43-cb087feac577",
      "relationId": "ab1672ec-5fb7-45a9-b23d-945d40513633",
      "binaryFactTypeId": "d92b4298-5d12-460b-91db-9c6590bf5c21",
      "originalLabel": "governed by",
      "style": "arrow"
  },
  {
      "from": "de267440-9da3-44fb-9e7d-578cccc75d8e",
      "to": "de32819b-f76c-4e67-ab43-cb087feac577",
      "relationId": "22e6eb0c-09cd-428b-9253-6280695cb569",
      "binaryFactTypeId": "d92b4298-5d12-460b-91db-9c6590bf5c21",
      "originalLabel": "governed by",
      "style": "arrow"
  },
  {
      "from": "e26409b4-bef6-4700-bec3-2399e9e3db73",
      "to": "98f3cc14-272d-4aa6-9f82-dbc324074792",
      "relationId": "6ac690b7-9468-4807-ab12-61db66edb068",
      "binaryFactTypeId": "d92b4298-5d12-460b-91db-9c6590bf5c21",
      "originalLabel": "governed by",
      "style": "arrow"
  },
  {
      "from": "573f7073-9974-457e-a19e-4c2611be0e4f",
      "to": "98f3cc14-272d-4aa6-9f82-dbc324074792",
      "relationId": "1e2178a9-7aa5-48c9-88f6-5cab46fa2817",
      "binaryFactTypeId": "d92b4298-5d12-460b-91db-9c6590bf5c21",
      "originalLabel": "governed by",
      "style": "arrow"
  },
  {
      "from": "37ac2f05-7d36-454f-aacb-9bc945a84d57",
      "to": "98f3cc14-272d-4aa6-9f82-dbc324074792",
      "relationId": "4e8293c7-2eb8-4f19-95ee-d53fdaa78126",
      "binaryFactTypeId": "d92b4298-5d12-460b-91db-9c6590bf5c21",
      "originalLabel": "governed by",
      "style": "arrow"
  },
  {
      "from": "226a01c9-d0ce-4bd8-9bee-cf64e823216f",
      "to": "98f3cc14-272d-4aa6-9f82-dbc324074792",
      "relationId": "9bba6a74-22f2-4d13-a004-a5a10d4edd67",
      "binaryFactTypeId": "d92b4298-5d12-460b-91db-9c6590bf5c21",
      "originalLabel": "governed by",
      "style": "arrow"
  },
  {
      "from": "f983b55c-9e31-4e50-a8f2-7f842dcf3033",
      "to": "7fe88ce0-9a23-4146-a039-5c645fbd06f2",
      "relationId": "01d9e87a-7b06-4a14-b984-60c9219b5e38",
      "binaryFactTypeId": "d92b4298-5d12-460b-91db-9c6590bf5c21",
      "originalLabel": "governed by",
      "style": "arrow"
  },
  {
      "from": "3f6e3514-f1fc-486c-af59-0689166e5ad4",
      "to": "7fe88ce0-9a23-4146-a039-5c645fbd06f2",
      "relationId": "c67f52c6-ebd0-4991-a6aa-11fa19e12cc4",
      "binaryFactTypeId": "d92b4298-5d12-460b-91db-9c6590bf5c21",
      "originalLabel": "governed by",
      "style": "arrow"
  },
  {
      "from": "46a888ee-44f2-4afe-8394-c619ef06f5aa",
      "to": "7fe88ce0-9a23-4146-a039-5c645fbd06f2",
      "relationId": "20c68d10-323e-49bf-ba77-9bba70aef725",
      "binaryFactTypeId": "d92b4298-5d12-460b-91db-9c6590bf5c21",
      "originalLabel": "governed by",
      "style": "arrow"
  },
  {
      "from": "e5788eec-5def-4730-818c-72d2e07c2891",
      "to": "7fe88ce0-9a23-4146-a039-5c645fbd06f2",
      "relationId": "970f7152-eb26-4d8d-989d-009330aa41ed",
      "binaryFactTypeId": "d92b4298-5d12-460b-91db-9c6590bf5c21",
      "originalLabel": "governed by",
      "style": "arrow"
  },
  {
      "from": "f983b55c-9e31-4e50-a8f2-7f842dcf3033",
      "to": "ccbc7817-5cc1-4d51-98c3-fc565641c7ab",
      "relationId": "928c2f24-be8c-4440-a6f8-1fbf11c651d1",
      "binaryFactTypeId": "d92b4298-5d12-460b-91db-9c6590bf5c21",
      "originalLabel": "governed by",
      "style": "arrow"
  },
  {
      "from": "ccbc7817-5cc1-4d51-98c3-fc565641c7ab",
      "to": "15edeb74-a51b-42d4-9b92-70ddac97abbc",
      "relationId": "ff8bb554-e61b-472c-9c97-cdb46c75337a",
      "binaryFactTypeId": "b86dea18-4422-4fda-855c-ddcef826ad99",
      "originalLabel": "uses",
      "style": "arrow"
  }
],
"nodes": [
        {
            "id": "69c12bae-7bc5-4b19-bc5c-642270a56f6b",
            "termId": "ef52c9a3-c627-40a4-89e3-04bad791aa40",
            "termSignifier": "Bike",
            "resourceType": "TE",
            "conceptTypeId": "00000000-0000-0000-0000-000000011001",
            "conceptTypeSignifier": "Business Term"
        },
        {
            "id": "c358f2ba-bc3d-4066-a362-ead8e52740a4",
            "termId": "702af7db-7a93-4949-9723-caceefa2ba9a",
            "termSignifier": "AVI - Doctoraatsonderzoek wet. personeel binnen de opdracht v.d. instelling",
            "resourceType": "TE",
            "conceptTypeId": "00000000-0000-0000-0000-000000011001",
            "conceptTypeSignifier": "Business Term"
        },
        {
            "id": "96b184a4-ccc0-4b70-a8f6-9a2fc9536fe5",
            "termId": "d2db666f-eeaf-4611-82bb-eae7fee6fb7d",
            "termSignifier": "Boatowners - Property",
            "resourceType": "TE",
            "conceptTypeId": "00000000-0000-0000-0000-000000011001",
            "conceptTypeSignifier": "Business Term"
        },
        {
            "id": "7896baca-c911-4fe9-ab56-5b1d828833b5",
            "termId": "caf813aa-6c47-42e6-9ce4-ddf05bc09297",
            "termSignifier": "Buitenl. industriële ondernemingen",
            "resourceType": "TE",
            "conceptTypeId": "00000000-0000-0000-0000-000000011001",
            "conceptTypeSignifier": "Business Term"
        },
        {
            "id": "db93bb81-05eb-40c7-be71-f2a991cebc63",
            "termId": "bb2705b6-99a8-4832-a871-856f3b8b53c2",
            "termSignifier": "Buitenl. privé-opdrachtgever - onbepaald",
            "resourceType": "TE",
            "conceptTypeId": "00000000-0000-0000-0000-000000011001",
            "conceptTypeSignifier": "Business Term"
        },
        {
            "id": "951204f7-3e02-4c17-8d13-33ad2a06abd9",
            "termId": "1749008a-9719-4bfe-ad09-89c4fbe2a13d",
            "termSignifier": "AVI - Projectmatig onderzoek",
            "resourceType": "TE",
            "conceptTypeId": "00000000-0000-0000-0000-000000011001",
            "conceptTypeSignifier": "Business Term"
        },
        {
            "id": "d4720b3f-b61d-4f18-aefb-0dfd18fe47fa",
            "termId": "97a13f51-cbe5-4b45-a717-87d5d09be124",
            "termSignifier": "Bilaterale internationale samenwerking",
            "resourceType": "TE",
            "conceptTypeId": "00000000-0000-0000-0000-000000011001",
            "conceptTypeSignifier": "Business Term"
        },
        {
            "id": "f314a8f9-3fc2-4ec2-87d3-39ba19f3ec97",
            "termId": "4cc08e96-fb88-4f08-9bdc-2a05d66a5ae2",
            "termSignifier": "Boatowners - Liability",
            "resourceType": "TE",
            "conceptTypeId": "00000000-0000-0000-0000-000000011001",
            "conceptTypeSignifier": "Business Term"
        },
        {
            "id": "dd7d912c-ce16-4089-a4f5-adcc203979e4",
            "termId": "190f9386-d3b2-475a-922a-2b6a65c38ba8",
            "termSignifier": "Buitenl. stichtingen, fondsen e.d. met wet. oogmerk",
            "resourceType": "TE",
            "conceptTypeId": "00000000-0000-0000-0000-000000011001",
            "conceptTypeSignifier": "Business Term"
        },
        {
            "id": "56a37075-210a-4765-ba3e-2bd832311c68",
            "termId": "752e1f25-9723-4a44-a111-ed22c9cd65d3",
            "termSignifier": "Buitenl. Universiteiten en wetenschappelijke instellingen",
            "resourceType": "TE",
            "conceptTypeId": "00000000-0000-0000-0000-000000011001",
            "conceptTypeSignifier": "Business Term"
        },
        {
            "id": "ccbc7817-5cc1-4d51-98c3-fc565641c7ab",
            "termId": "38750f7e-2f31-4374-ba78-a61787c63af7",
            "termSignifier": "38750f7e-2f31-4374-ba78-a61787c63af7",
            "resourceType": "CR",
            "conceptTypeId": "00000000-0000-0000-0000-000000007501",
            "conceptTypeSignifier": "Data Usage"
        },
        {
            "id": "de32819b-f76c-4e67-ab43-cb087feac577",
            "termId": "63de71da-ac3c-479f-919e-d8d871c96f1e",
            "termSignifier": "63de71da-ac3c-479f-919e-d8d871c96f1e",
            "resourceType": "CR",
            "conceptTypeId": "00000000-0000-0000-0000-000000007501",
            "conceptTypeSignifier": "Data Usage"
        },
        {
            "id": "7fe88ce0-9a23-4146-a039-5c645fbd06f2",
            "termId": "7610c8ef-fad9-427f-b842-7b22499b9bee",
            "termSignifier": "7610c8ef-fad9-427f-b842-7b22499b9bee",
            "resourceType": "CR",
            "conceptTypeId": "00000000-0000-0000-0000-000000007501",
            "conceptTypeSignifier": "Data Usage"
        },
        {
            "id": "98f3cc14-272d-4aa6-9f82-dbc324074792",
            "termId": "a24ece2d-1b80-4c1c-b37d-88fba31d6fc1",
            "termSignifier": "a24ece2d-1b80-4c1c-b37d-88fba31d6fc1",
            "resourceType": "CR",
            "conceptTypeId": "00000000-0000-0000-0000-000000007501",
            "conceptTypeSignifier": "Data Usage"
        },
        {
            "id": "1b4fa9e5-a4ba-4abf-b17c-f86eb84f594d",
            "termId": "c49a150b-4075-4701-a65c-19bf1e735328",
            "termSignifier": "100",
            "resourceType": "TE",
            "conceptTypeId": "00000000-0000-0000-0000-000000021001",
            "conceptTypeSignifier": "Code Value"
        },
        {
            "id": "fc241754-06d4-4ac4-bc90-3442d87d0f05",
            "termId": "5a154bc2-5227-42c4-bbd5-14474e7dba02",
            "termSignifier": "101",
            "resourceType": "TE",
            "conceptTypeId": "00000000-0000-0000-0000-000000021001",
            "conceptTypeSignifier": "Code Value"
        },
        {
            "id": "cd664eed-45e4-4378-aacf-59acdcfed813",
            "termId": "43a3d278-7893-4e5b-b060-3a292b8b8b41",
            "termSignifier": "102",
            "resourceType": "TE",
            "conceptTypeId": "00000000-0000-0000-0000-000000021001",
            "conceptTypeSignifier": "Code Value"
        },
        {
            "id": "5d44dbf0-6e10-46f5-a1a7-946083768f1c",
            "termId": "742199e4-c309-49a8-b9a8-469570ea7856",
            "termSignifier": "104",
            "resourceType": "TE",
            "conceptTypeId": "00000000-0000-0000-0000-000000021001",
            "conceptTypeSignifier": "Code Value"
        },
        {
            "id": "830cfbce-ebd2-4d31-83f8-6a6e221a49da",
            "termId": "daf8c7e3-e464-4283-9b27-ad428eac0063",
            "termSignifier": "105",
            "resourceType": "TE",
            "conceptTypeId": "00000000-0000-0000-0000-000000021001",
            "conceptTypeSignifier": "Code Value"
        },
        {
            "id": "f92394b7-79cb-4d80-83c3-c69f5a2dcf0c",
            "termId": "01886501-8789-4e68-9f9f-4352a08cda4d",
            "termSignifier": "106",
            "resourceType": "TE",
            "conceptTypeId": "00000000-0000-0000-0000-000000021001",
            "conceptTypeSignifier": "Code Value"
        },
        {
            "id": "6130782a-6d38-4a94-99f0-91417c63a878",
            "termId": "f3874b3c-9dd1-4c15-96a1-474680b48c30",
            "termSignifier": "107",
            "resourceType": "TE",
            "conceptTypeId": "00000000-0000-0000-0000-000000021001",
            "conceptTypeSignifier": "Code Value"
        },
        {
            "id": "3f19a156-8f29-4e65-aaf5-785901a5e8d6",
            "termId": "4f958b67-214c-4624-90ad-d3e4b69978bf",
            "termSignifier": "108",
            "resourceType": "TE",
            "conceptTypeId": "00000000-0000-0000-0000-000000021001",
            "conceptTypeSignifier": "Code Value"
        },
        {
            "id": "d60f7b58-a760-49b4-91c6-765b2b74c913",
            "termId": "7793a848-6026-4628-8d18-2edd6a637478",
            "termSignifier": "109",
            "resourceType": "TE",
            "conceptTypeId": "00000000-0000-0000-0000-000000021001",
            "conceptTypeSignifier": "Code Value"
        },
        {
            "id": "4b6907bb-2f39-4e69-b3ac-433f173e04e8",
            "termId": "08c87f23-7a72-40b5-9e76-8ddd094dcc68",
            "termSignifier": "110",
            "resourceType": "TE",
            "conceptTypeId": "00000000-0000-0000-0000-000000021001",
            "conceptTypeSignifier": "Code Value"
        },
        {
            "id": "a5557e8f-25a9-4f5a-a37c-74b9486ea3ee",
            "termId": "ec7fc532-1441-454c-bca2-d43c5a5034c0",
            "termSignifier": "111",
            "resourceType": "TE",
            "conceptTypeId": "00000000-0000-0000-0000-000000021001",
            "conceptTypeSignifier": "Code Value"
        },
        {
            "id": "53dde314-7c28-4749-bf8b-ecde2c2e7f09",
            "termId": "bf581f91-71f9-4153-a5f4-dd4bfa17be82",
            "termSignifier": "112",
            "resourceType": "TE",
            "conceptTypeId": "00000000-0000-0000-0000-000000021001",
            "conceptTypeSignifier": "Code Value"
        },
        {
            "id": "37ab56c3-a018-48b2-b3c4-b953e7dc0631",
            "termId": "48e23463-cc80-42e3-92d7-005b15a5943c",
            "termSignifier": "113",
            "resourceType": "TE",
            "conceptTypeId": "00000000-0000-0000-0000-000000021001",
            "conceptTypeSignifier": "Code Value"
        },
        {
            "id": "bb7eee34-affa-4ec3-9a28-2ab2e495e911",
            "termId": "b2d69da0-ff6a-4132-85c1-7766ab57ad34",
            "termSignifier": "114",
            "resourceType": "TE",
            "conceptTypeId": "00000000-0000-0000-0000-000000021001",
            "conceptTypeSignifier": "Code Value"
        },
        {
            "id": "ec41bae9-569f-430b-8263-53a9d070f4cf",
            "termId": "f8d42209-00ad-4cc4-b66a-fd5940f21c77",
            "termSignifier": "115",
            "resourceType": "TE",
            "conceptTypeId": "00000000-0000-0000-0000-000000021001",
            "conceptTypeSignifier": "Code Value"
        },
        {
            "id": "2b61dfa5-20f8-4881-9a9a-2321a838bc3b",
            "termId": "579dae5b-5161-4db7-a5e7-eb48673a2d27",
            "termSignifier": "116",
            "resourceType": "TE",
            "conceptTypeId": "00000000-0000-0000-0000-000000021001",
            "conceptTypeSignifier": "Code Value"
        },
        {
            "id": "e67d1bdc-e2f7-4ede-a9d1-6f0d3dc483f2",
            "termId": "a49ada82-3cd2-4fec-bae1-75d8ea44d3c4",
            "termSignifier": "117",
            "resourceType": "TE",
            "conceptTypeId": "00000000-0000-0000-0000-000000021001",
            "conceptTypeSignifier": "Code Value"
        },
        {
            "id": "15e0b49b-eac7-4a44-be48-df79b71a15f0",
            "termId": "a5728914-f670-45e0-8042-3da667c911ba",
            "termSignifier": "120",
            "resourceType": "TE",
            "conceptTypeId": "00000000-0000-0000-0000-000000021001",
            "conceptTypeSignifier": "Code Value"
        },
        {
            "id": "0a43b37f-6932-41a0-9a09-030932af15b9",
            "termId": "d96a17f9-9c91-47bf-966b-17e8d8a11de5",
            "termSignifier": "122",
            "resourceType": "TE",
            "conceptTypeId": "00000000-0000-0000-0000-000000021001",
            "conceptTypeSignifier": "Code Value"
        },
        {
            "id": "9aa37973-c057-49ac-a008-d4903bb3a330",
            "termId": "ec2a2e02-8005-4cb3-869f-a0c6cbca2e29",
            "termSignifier": "123",
            "resourceType": "TE",
            "conceptTypeId": "00000000-0000-0000-0000-000000021001",
            "conceptTypeSignifier": "Code Value"
        },
        {
            "id": "f7e67579-7f08-4c9d-afa3-02c3354da343",
            "termId": "9b757880-a371-407c-9835-34e6821d55f5",
            "termSignifier": "103",
            "resourceType": "TE",
            "conceptTypeId": "00000000-0000-0000-0000-000000021001",
            "conceptTypeSignifier": "Code Value"
        },
        {
            "id": "15edeb74-a51b-42d4-9b92-70ddac97abbc",
            "termId": "bee122a2-cbc5-4af5-833c-4a23f2021387",
            "termSignifier": "3.2.2",
            "resourceType": "TE",
            "conceptTypeId": "00000000-0000-0000-0000-000000021001",
            "conceptTypeSignifier": "Code Value"
        },
        {
            "id": "f76ded8c-6026-456f-a319-25b8c7f86a02",
            "termId": "1e9287ea-071a-492d-8c62-78fc53c0e34d",
            "termSignifier": "Broker Validation",
            "resourceType": "TE",
            "conceptTypeId": "00000000-0000-0000-0000-000000031205",
            "conceptTypeSignifier": "Data Quality Rule"
        },
        {
            "id": "5595de35-6ce9-4d19-a700-05ba093dab83",
            "termId": "db8b4e7d-4244-4fd3-b1b5-c8affcd4f478",
            "termSignifier": "Data Quality metric 1",
            "resourceType": "TE",
            "conceptTypeId": "00000000-0000-0000-0000-000000031107",
            "conceptTypeSignifier": "Data Quality Metric"
        },
        {
            "id": "20d9379e-a469-43e5-88cb-bb4466d258ca",
            "termId": "6b82ae16-7c88-41cb-ab4d-1f93f9459c24",
            "termSignifier": "Data Quality rule 1",
            "resourceType": "TE",
            "conceptTypeId": "00000000-0000-0000-0000-000000031205",
            "conceptTypeSignifier": "Data Quality Rule"
        },
        {
            "id": "e26409b4-bef6-4700-bec3-2399e9e3db73",
            "termId": "2f9e913f-3f1b-4055-b779-fd63409566bb",
            "termSignifier": "Data Quality rule 3",
            "resourceType": "TE",
            "conceptTypeId": "00000000-0000-0000-0000-000000031205",
            "conceptTypeSignifier": "Data Quality Rule"
        },
        {
            "id": "de267440-9da3-44fb-9e7d-578cccc75d8e",
            "termId": "ffb089e4-3cd7-4509-a6a4-970cdb58b1f8",
            "termSignifier": "Maximum Cover Validation",
            "resourceType": "TE",
            "conceptTypeId": "00000000-0000-0000-0000-000000031205",
            "conceptTypeSignifier": "Data Quality Rule"
        },
        {
            "id": "573f7073-9974-457e-a19e-4c2611be0e4f",
            "termId": "79b5646d-2316-427a-aa07-beec39372b75",
            "termSignifier": "Business rule 3",
            "resourceType": "TE",
            "conceptTypeId": "00000000-0000-0000-0000-000000031204",
            "conceptTypeSignifier": "Business Rule"
        },
        {
            "id": "37ac2f05-7d36-454f-aacb-9bc945a84d57",
            "termId": "4a3f789a-c99a-4355-a2b0-ee5ec8cc039f",
            "termSignifier": "Cover Validation",
            "resourceType": "TE",
            "conceptTypeId": "00000000-0000-0000-0000-000000031205",
            "conceptTypeSignifier": "Data Quality Rule"
        },
        {
            "id": "226a01c9-d0ce-4bd8-9bee-cf64e823216f",
            "termId": "89459718-f2c8-4d85-a314-b8f38845a4bd",
            "termSignifier": "Data Quality rule 2",
            "resourceType": "TE",
            "conceptTypeId": "00000000-0000-0000-0000-000000031205",
            "conceptTypeSignifier": "Data Quality Rule"
        },
        {
            "id": "f983b55c-9e31-4e50-a8f2-7f842dcf3033",
            "termId": "00545892-da5d-498e-b6e6-613efe0ed0ec",
            "termSignifier": "Business rule 1",
            "resourceType": "TE",
            "conceptTypeId": "00000000-0000-0000-0000-000000031204",
            "conceptTypeSignifier": "Business Rule"
        },
        {
            "id": "3f6e3514-f1fc-486c-af59-0689166e5ad4",
            "termId": "fa843ac4-f552-4a9d-ac6f-14107f1a78bc",
            "termSignifier": "Business rule 2",
            "resourceType": "TE",
            "conceptTypeId": "00000000-0000-0000-0000-000000031204",
            "conceptTypeSignifier": "Business Rule"
        },
        {
            "id": "46a888ee-44f2-4afe-8394-c619ef06f5aa",
            "termId": "2d1b6143-5758-41ef-93cd-5a5794720d79",
            "termSignifier": "Data Quality metric 2",
            "resourceType": "TE",
            "conceptTypeId": "00000000-0000-0000-0000-000000031107",
            "conceptTypeSignifier": "Data Quality Metric"
        },
        {
            "id": "e5788eec-5def-4730-818c-72d2e07c2891",
            "termId": "fced4a36-30f1-46ad-8d03-0c066d2a96c3",
            "termSignifier": "Data Quality metric 3",
            "resourceType": "TE",
            "conceptTypeId": "00000000-0000-0000-0000-000000031107",
            "conceptTypeSignifier": "Data Quality Metric"
        }
] }

var NODE_HEIGHT = 50;

d3.sankey = function() {
  var sankey = {},
      nodeWidth = 24,
      nodePadding = 8,
      size = [1, 1],
      nodes = [],
      links = [];
 
  sankey.nodeWidth = function(_) {
    if (!arguments.length) return nodeWidth;
    nodeWidth = +_;
    return sankey;
  };
 
  sankey.nodePadding = function(_) {
    if (!arguments.length) return nodePadding;
    nodePadding = +_;
    return sankey;
  };
 
  sankey.nodes = function(_) {
    if (!arguments.length) return nodes;
    nodes = _;
    return sankey;
  };
 
  sankey.links = function(_) {
    if (!arguments.length) return links;
    links = _;
    return sankey;
  };
 
  sankey.size = function(_) {
    if (!arguments.length) return size;
    size = _;
    return sankey;
  };
 
  sankey.layout = function(iterations) {
    computeNodeLinks();
    computeNodeValues();
    computeNodeBreadths();
    computeNodeDepths(iterations);
    computeLinkDepths();
    return sankey;
  };
 
  sankey.relayout = function() {
    computeLinkDepths();
    return sankey;
  };
 
  sankey.link = function() {
    var curvature = 0.8;
    var halfNodeHeight = NODE_HEIGHT / 2;
 
    function link(d) {
      var x0 = d.source.x + d.source.dx,
          x1 = d.target.x,
          xi = d3.interpolateNumber(x0, x1),
          x2 = xi(curvature),
          x3 = xi(1 - curvature),
          y0 = d.source.y + d.sy/2 + halfNodeHeight,
          y1 = d.target.y + d.ty/2 + halfNodeHeight;
      return "M" + x0 + "," + y0
           + "C" + x2 + "," + y0
           + " " + x3 + "," + y1
           + " " + x1 + "," + y1;
    }
 
    link.curvature = function(_) {
      if (!arguments.length) return curvature;
      curvature = +_;
      return link;
    };
 
    return link;
  };
 
  // Populate the sourceLinks and targetLinks for each node.
  // Also, if the source and target are not objects, assume they are indices.
  function computeNodeLinks() {
    nodes.forEach(function(node) {
      node.sourceLinks = [];
      node.targetLinks = [];
    });
    links.forEach(function(link) {
      var source = link.source,
          target = link.target;
      if (typeof source === "number") source = link.source = nodes[link.source];
      if (typeof target === "number") target = link.target = nodes[link.target];
      source.sourceLinks.push(link);
      target.targetLinks.push(link);
    });
  }
 
  // Compute the value (size) of each node by summing the associated links.
  function computeNodeValues() {
    nodes.forEach(function(node) {
      node.value = Math.max(
        d3.sum(node.sourceLinks, value),
        d3.sum(node.targetLinks, value)
      );
    });
  }
 
  // Iteratively assign the breadth (x-position) for each node.
  // Nodes are assigned the maximum breadth of incoming neighbors plus one;
  // nodes with no incoming links are assigned breadth zero, while
  // nodes with no outgoing links are assigned the maximum breadth.
  function computeNodeBreadths() {
    var remainingNodes = nodes,
        nextNodes,
        x = 0;
 
    while (remainingNodes.length) {
      nextNodes = [];
      remainingNodes.forEach(function(node) {
        node.x = x;
        node.dx = nodeWidth;
        node.sourceLinks.forEach(function(link) {
          nextNodes.push(link.target);
        });
      });
      remainingNodes = nextNodes;
      ++x;
    }
 
    //
    moveSinksRight(x);
    scaleNodeBreadths((size[0] - nodeWidth) / (x - 1));
  }
 
  function moveSourcesRight() {
    nodes.forEach(function(node) {
      if (!node.targetLinks.length) {
        node.x = d3.min(node.sourceLinks, function(d) { return d.target.x; }) - 1;
      }
    });
  }
 
  function moveSinksRight(x) {
    nodes.forEach(function(node) {
      if (!node.sourceLinks.length) {
        node.x = x - 1;
      }
    });
  }
 
  function scaleNodeBreadths(kx) {
    nodes.forEach(function(node) {
      node.x *= kx;
    });
  }
 
  function computeNodeDepths(iterations) {
    var nodesByBreadth = d3.nest()
        .key(function(d) { return d.x; })
        .sortKeys(d3.ascending)
        .entries(nodes)
        .map(function(d) { return d.values; });
 
    //
    initializeNodeDepth();
    resolveCollisions();
    for (var alpha = 1; iterations > 0; --iterations) {
      relaxRightToLeft(alpha *= .99);
      resolveCollisions();
      relaxLeftToRight(alpha);
      resolveCollisions();
    }
 
    function initializeNodeDepth() {
      var ky = d3.min(nodesByBreadth, function(nodes) {
        return (size[1] - (nodes.length - 1) * nodePadding) / d3.sum(nodes, value);
      });
 
      nodesByBreadth.forEach(function(nodes) {
        nodes.forEach(function(node, i) {
          node.y = i;
          node.dy = NODE_HEIGHT;
        });
      });
 
      links.forEach(function(link) {
        link.dy = 1;
      });
    }
 
    function relaxLeftToRight(alpha) {
      nodesByBreadth.forEach(function(nodes, breadth) {
        nodes.forEach(function(node) {
          if (node.targetLinks.length) {
            var y = d3.sum(node.targetLinks, weightedSource) / d3.sum(node.targetLinks, value);
            node.y += (y - center(node)) * alpha;
          }
        });
      });
 
      function weightedSource(link) {
        return center(link.source) * link.value;
      }
    }
 
    function relaxRightToLeft(alpha) {
      nodesByBreadth.slice().reverse().forEach(function(nodes) {
        nodes.forEach(function(node) {
          if (node.sourceLinks.length) {
            var y = d3.sum(node.sourceLinks, weightedTarget) / d3.sum(node.sourceLinks, value);
            node.y += (y - center(node)) * alpha;
          }
        });
      });
 
      function weightedTarget(link) {
        return center(link.target) * link.value;
      }
    }
 
    function resolveCollisions() {
      nodesByBreadth.forEach(function(nodes) {
        var node,
            dy,
            y0 = 0,
            n = nodes.length,
            i;
 
        // Push any overlapping nodes down.
        nodes.sort(ascendingDepth);
        for (i = 0; i < n; ++i) {
          node = nodes[i];
          dy = y0 - node.y;
          if (dy > 0) node.y += dy;
          y0 = node.y + node.dy + nodePadding;
        }
 
        // If the bottommost node goes outside the bounds, push it back up.
        dy = y0 - nodePadding - size[1];
        if (dy > 0) {
          y0 = node.y -= dy;
 
          // Push any overlapping nodes back up.
          for (i = n - 2; i >= 0; --i) {
            node = nodes[i];
            dy = node.y + node.dy + nodePadding - y0;
            if (dy > 0) node.y -= dy;
            y0 = node.y;
          }
        }
      });
    }
 
    function ascendingDepth(a, b) {
      return a.y - b.y;
    }
  }
 
  function computeLinkDepths() {
    nodes.forEach(function(node) {
      node.sourceLinks.sort(ascendingTargetDepth);
      node.targetLinks.sort(ascendingSourceDepth);
    });
    nodes.forEach(function(node) {
      var sy = 0, ty = 0;
      node.sourceLinks.forEach(function(link) {
        link.sy = sy;
        sy += link.dy;
      });
      node.targetLinks.forEach(function(link) {
        link.ty = ty;
        ty += link.dy;
      });
    });
 
    function ascendingSourceDepth(a, b) {
      return a.source.y - b.source.y;
    }
 
    function ascendingTargetDepth(a, b) {
      return a.target.y - b.target.y;
    }
  }
 
  function center(node) {
    return node.y + node.dy / 2;
  }
 
  function value(link) {
    return link.value;
  }
 
  return sankey;
};

export default class DiagramChart extends React.Component {
  renderTree() {
    var units = "Widgets";
     
    var margin = {top: 10, right: 10, bottom: 10, left: 10},
        width = 1200 - margin.left - margin.right,
        height = 2000 - margin.top - margin.bottom;
     
    var formatNumber = d3.format(",.0f"),    // zero decimal places
        format = function(d) { return formatNumber(d) + " " + units; },
        color = d3.scale.category20();
     
    // append the svg canvas to the page
    var svg = d3.select("#diagramChart").append("svg")
        .attr("width", width + margin.left + margin.right)
        .attr("height", height + margin.top + margin.bottom)
      .append("g")
        .attr("transform", 
              "translate(" + margin.left + "," + margin.top + ")");
     
    // Set the sankey diagram properties
    var sankey = d3.sankey()
        .nodeWidth(36)
        .nodePadding(10)
        .size([width, height]);
     
    var path = sankey.link();
     
    var nodeMap = {};
    data.nodes.forEach(function(x) { 
      nodeMap[x.id] = x;
      if (x.resourceType === "CR") {
        x.name = x.conceptTypeSignifier;
      } else {
        x.name = x.termSignifier;
      }
    });
    data.links = data.links.map(function(x) {
      return {
        source: nodeMap[x.from],
        target: nodeMap[x.to],
        value: 1,
        originalLabel: x.originalLabel
      };
    });
   
    sankey
        .nodes(data.nodes)
        .links(data.links)
        .layout(32);
   
  // add in the links
    var link = svg.append("g").selectAll(".link")
        .data(data.links)
        .enter().append("path")
        .attr("class", "link")
        .attr("d", path)
        .style("stroke-width", 2) //function(d) { return Math.max(1, d.dy)+2; })
        .style("stroke", function(d) {
            return "blue";
        })
        .sort(function(a, b) { return b.dy - a.dy; });
   
  // add the link titles
    link.append("text").text(function(d) {return d.originalLabel;});


      var highlightConnected = function(g) {
          link.filter(function (d) { return d.source === g || d.target === g; })
              .style("stroke", "red");
      };

      var fadeUnconnected = function(g) {
          link.filter(function (d) { return d.source !== g && d.target !== g; })
              .style("stroke", "blue");
      };

      var fadeConnected = function(g) {
          link.filter(function (d) { return d.source === g || d.target === g; })
              .style("stroke", "blue");
      };


  // add in the nodes
    var node = svg.append("g").selectAll(".node")
        .data(data.nodes)
      .enter().append("g")
        .attr("class", "node")
        .attr("transform", function(d) { 
        return "translate(" + d.x + "," + d.y + ")"; })
      .call(d3.behavior.drag()
        .origin(function(d) { return d; })
        .on("dragstart", function() { 
        this.parentNode.appendChild(this); })

        .on("drag", dragmove)
      );



      node.on("mouseenter", function(node) {
          highlightConnected(node);
          fadeUnconnected(node);
      });

      node.on("mouseleave", function(node) {
          fadeConnected(node);
      });
   
  // add the rectangles for the nodes
    node.append("rect")
        .attr("height", function(d) { return d.dy; })
        .attr("width", sankey.nodeWidth())
        .style("fill", function(d) { 
        return d.color = color(d.name.replace(/ .*/, "")); })
        .style("stroke", function(d) { 
        return d3.rgb(d.color).darker(2); })
      .append("title")
        .text(function(d) { 
        return d.name + "\n" + format(d.value); });
   
  // add in the title for the nodes
    node.append("text")
        .attr("x", -6)
        .attr("y", function(d) { return d.dy / 4; })
        .attr("dy", ".35em")
        .attr("text-anchor", "end")
        .attr("transform", null)
        .text(function(d) { return d.name; })
      .filter(function(d) { return d.x < width / 2; })
        .attr("x", 6 + sankey.nodeWidth())
        .attr("text-anchor", "start")
        .filter(function(d) { return d.name == "Data Usage";})
        .attr("y", 0);
   
  // the function for moving the nodes
    function dragmove(d) {
      d3.select(this).attr("transform", 
          "translate(" + (
               d.x = Math.max(0, Math.min(width - d.dx, d3.event.x))
            ) + "," + (
                     d.y = Math.max(0, Math.min(height - d.dy, d3.event.y))
              ) + ")");
      sankey.relayout();
      link.attr("d", path);
    }
  }

  componentDidMount() {
    this.renderTree();
  }

  render() {
    return <div id="diagramChart"></div>;
  }
}