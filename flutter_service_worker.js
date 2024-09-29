'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"version.json": "f8bfe61d1538c983f3d48c0fe9d56e1b",
"index.html": "53cabce6ed0e65cf67af4185af069803",
"/": "53cabce6ed0e65cf67af4185af069803",
"main.dart.js": "c7fa093a25130ee33fc1fb12d861b4cd",
"flutter.js": "c71a09214cb6f5f8996a531350400a9a",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "90d5a5850138bf3665ea0a24beba1529",
".git/config": "c3fc0e8f1e0e90256475061d23e994db",
".git/objects/61/9e395e1c92df0c2cbe0e1c2ba0114aade87f7f": "645935ba93424d43a5d59cab4266907c",
".git/objects/61/f74c2646e8b0d832efdea4c152b2905bc07487": "490012909a7f2d69b1c2212b9ea9a044",
".git/objects/0d/c7a8ce264c24e712a98bba9e86b960a4e4eebc": "7fbb8a306f99d09145d0af16c5946c84",
".git/objects/59/a9e5c05fc44af14e4d0e0d34b1edb6a9247821": "cb656eda37e2b3c46687a27d5866263c",
".git/objects/59/7e8b7121b0a2479eb390d5767ca51a2357d7dc": "bb4b7cb85141e5b990c34159be9b6549",
".git/objects/92/61448fc43dc54172816cf6787cebb708627b90": "ba0cccabcd6080d1cf3ee8d0f5755d8f",
".git/objects/3e/61c8a25d4a861a75bec44c1075469fc8abea06": "c10e4a0dfe825e05e64f542614cc2b4a",
".git/objects/6f/c3c179c0bbe092a19fa391b3eafb60a70c0bec": "437fc99d1df3167f0a557a2cd92673f3",
".git/objects/6f/9cad4c116bc8d72e2497226abb5c05ee64982c": "0d104480d68c1652a53721377a02a882",
".git/objects/03/191a9d0f89f83cff6df57bdc51369b494bde36": "8bac78d9f70847af7438654393a14c22",
".git/objects/04/c4ad3bec7924768dc65c18a0ea9fc1f75b3ae4": "af7283c938ba6981e6890bb390de06ae",
".git/objects/6a/4594fdcaf1fddd481a19f8510e50b9684cdcd7": "996c381d6bfd85905eed4deb124726ca",
".git/objects/6a/6ea59b0d1bb7212c421f6c71d4615d494e9efa": "4646025303a0243ddd65da393bbcc3b5",
".git/objects/35/ac1174f145c4c97476d284fcff266930b5e339": "2a613495757f8b482cb4bc8cae75d961",
".git/objects/3d/67a48a8ed58fbf382ea394999861e178db3cf6": "a0b883feea700b3bb47f072703b4e911",
".git/objects/94/bfb1463ad8331bfd687bc751b8920b133da744": "fd2d8c0d844b234856b36b93f652048f",
".git/objects/94/c765cdbd31df85daa82045829f1c237bd6d0a6": "035a7b0ae9754b0e6f1b585286f49427",
".git/objects/94/0071d05ab599271da221f25a7fa10a943cd88a": "eff75b9d679abce2fa42ae730c785a69",
".git/objects/5a/702106e5a56546df637eff626241e0d55fcada": "2a3525171507b096f5704cc7b15dd79f",
".git/objects/9c/7bd1660ae6cdd469c9227e5a0186467be44094": "c30c5cb2629223a8028b771e08a132a3",
".git/objects/a4/cdbcd9377ecfa8007b6503c997090ce32b9b70": "26a3665bae210d08d3765fc44d73d667",
".git/objects/b5/0254288cc6319d153c4af1d64870d95ee2436f": "468a6506934a07c970a4739eae75eedd",
".git/objects/b2/889a1bcf90b2a39ce243a5fdbe417e96cb78cd": "7d0718bae55c33274d7bededcc91fffa",
".git/objects/d7/245aae46435c540e91ac74a8bec62019830269": "58423591b419345aa5c0f2934b6790cf",
".git/objects/be/d2a1448aceb35b22649d925991f0be83064a80": "cead96de9112b07692e66672135731af",
".git/objects/b3/e89f63c067dca3a74b32fc2810d9ba0033c824": "23ea32667b790dfaea3bfda3aaae81ac",
".git/objects/b4/22f1829759a1a28c970c573aa588c502529567": "2a9804bcf9db77b6b5f3ebaf876423f0",
".git/objects/a5/51f8a371cd6c364b174370dbf03c0c0277197d": "f158723b8e87a710a59b31f2c1172b6e",
".git/objects/bd/69911dc5f8f0499c97951c2a32e1fe2c18c693": "9b056121e4e40b0b8d85da2eb67addb1",
".git/objects/d1/e21ec01fc73fdf5ddf43cb7cdd97e696293e54": "1e93f5dd7d5cbbb784b30a199daa1308",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/d8/f0be88bdea80f82c21037523e07dd75bfb65df": "271117f28e4f359081547362507c2b3d",
".git/objects/ab/26e0cb2d72a8dfd504efff4da3a59eceec8ff1": "01f61aa5e4dd525a17c2ed49f3e621cb",
".git/objects/f4/27c276a02d820e1675fc53fd14a13b3899b835": "74c4659828e7a0bbfb4ab228fc28b894",
".git/objects/f3/4e50b939f9f905c9d8190c36135123156c0173": "562b9b34ecb6237ab2a4ceb119df9cd8",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/c7/b30c3a6d8acb25bc58c0fb18ccd946740680d2": "c3c9b0f1b1b3fdaedbe01bc5f84d860f",
".git/objects/c0/bd32fcdfc4c8aad7ddef6b5d4e8d4ba63930ab": "1aef9e4f3c9d46cfaeace2dfe8dfe8a5",
".git/objects/ee/b475c0c958853f66b33f12cae79ca24d30fd1b": "9e12590d08e8ae6fffda7c348ec868dc",
".git/objects/f2/04823a42f2d890f945f70d88b8e2d921c6ae26": "6b47f314ffc35cf6a1ced3208ecc857d",
".git/objects/f2/2945957343cf121d5346b6e06e39edc90e63db": "c991484a63f9529f1ba4db3bfd9d7287",
".git/objects/cf/61049e8a51b6442c63948f67bfc47b6bfbd089": "4132d63dacf8b07f3313fb10bce71839",
".git/objects/fe/8e2d1fa1c15444d7c28a3829b2c34b6ea4f2ee": "7f70ee1ac065e29edce234e2f06d8ca6",
".git/objects/c1/532fc40d27b9094cb4b8558c5dc8853082f7c6": "0f16279f8d53172850f58891aa518d00",
".git/objects/c6/8a4968e327d61d0a2d5bf1e0abc7a2d84a13d6": "b07310cfc154ad71a6c83c6cc37cf853",
".git/objects/ec/6a47fb36147d6451e751b2f621e8d1f126ef6c": "e9b5c9cb52fc3e42ca016a178425877d",
".git/objects/20/a112d090ad4dd27f099fea2ed890d763771831": "fe0861c7dbbd0eed14854021de467cf3",
".git/objects/20/1afe538261bd7f9a38bed0524669398070d046": "82a4d6c731c1d8cdc48bce3ab3c11172",
".git/objects/20/b6d0bb797f4ec8eb5a3228a4409dd9f427a41b": "0689397984a5917ae25e647f8221bf30",
".git/objects/18/82a9fd3dd97be13b6cff50b711dbc4c76a67cb": "981bfe7d36f0b429d030b2343c8df17c",
".git/objects/27/b17d8c6959f80a02898bf73d4ce2437e5a0a59": "fae98379e62514f6ef634a43e3658b55",
".git/objects/4b/d2b85af7c87b93f05dd2d03506f8ce62717953": "f55c738366e3152454f56bb874b66631",
".git/objects/4b/63fb95da4003a5410ffb2a398ae96c1b3d0d09": "c1a3ffdbaa370feec762795a5f24cd3f",
".git/objects/4b/825dc642cb6eb9a060e54bf8d69288fbee4904": "75589287973d2772c2fc69d664e10822",
".git/objects/11/7f76d4354ab25915d54c9cf82de49ecffbda06": "6bc29d4eb1f2921a3b93cf7f14e88a0c",
".git/objects/11/fa38abacf40707465ad479c1b1d53265dd29ec": "4b4aceda8068c05ae77a19266d5c7d4d",
".git/objects/7d/e276cf0496b0dc3425b8d1afab3b6f0b98be93": "a47d706bcaa213d9963856b1ad8799c1",
".git/objects/7c/27689a0c53b2356838e61f7011278cbbecb0bc": "3530a561b2b29d4cf4b871c88ec32fb3",
".git/objects/16/5ce0ddf03a820a38f48cba9aa0c9df9b6e6b79": "71df17c95c3124eada62b59e7dabda78",
".git/objects/1f/45b5bcaac804825befd9117111e700e8fcb782": "7a9d811fd6ce7c7455466153561fb479",
".git/objects/73/9dc29676333b432230cde004a6173f16ccc974": "497fa3a1d5ba5a7269e3fee35e775f50",
".git/objects/8f/a387a4af209b2db6a48892ff46d8f71a042f38": "29c27d883848e213cfb03ef632606262",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/7e/45e034c25a45515df6cd1c427a0cfb4ce4b011": "f85626a822a0437750694a99888c2527",
".git/objects/26/76c07dbbd6c115edc711256bc4d0166bafbf18": "cb7ac9bcc69a5119ae66eb303112837e",
".git/objects/21/79ebd2a63d1aa05798cc94b23bc2da380e6432": "6d9cca7d12237dccfc882eb721c0d44a",
".git/objects/75/546a14dae9cc121bd368eb778d45dd9fbc04ef": "e58efbdaa99ac8516cc07e452ca168f7",
".git/objects/86/a73104552b07e536a1e571e780c9daf4133777": "99d8b26c050c0924dc13bee2e3032945",
".git/objects/2a/41fc23b7f8521f92fd07be3ad1eeef42e611f8": "941b03efe1c214a3d6dc01beb0f7387b",
".git/objects/2f/c4591636157f8fe1429347bbd9c566b32a7db0": "a68b8fdcb2189ea5e1c5ea6c47a74fbd",
".git/objects/2f/b9ed68a3fbfdbce2ace5021699165331265c6a": "ad6f953af7c73bb3d437caa6394c456c",
".git/objects/88/23042e2b2a59f9f929c77fff0217ef74581c06": "273bf72445567ea74c0e55b4d8f38f7b",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/88/9465da908d5302d219fc467de13c5506fbfc02": "914a57c4450499c80ea21d98bbc00a29",
".git/objects/6b/fdd1f590fc681dcfcf13dfa5b0df689a9c72f8": "5748f58f7911f19f6ee0dfe4d8314d19",
".git/objects/07/74c17c0fa7a7e87e24a6935830998d92b52c75": "cd62ee54b7ceea7b2a7804e69b1d9134",
".git/objects/38/306d72a69ac3bb8e4e2c03dd9f53a10e2ffa7b": "16f174c6a4a9193a49743c2570fda7b2",
".git/objects/00/2be3e9995885d07870d2426407269a645e20e7": "eed7b826106716dd68eb8d0d11269553",
".git/objects/6e/0fc5aa531c9bcdeaa1be49b4837b67b63fc8a5": "e493c69da5562c9db11619e4e8a47df4",
".git/objects/6e/732ea631a1cd85924d968ea909ae6ab0186aa6": "5e5038ec9dc34664942355c382a95030",
".git/objects/36/f8ac895b1742e49bf923d7d191fe284299d363": "f534d8bb06fdc0516e706b635295d524",
".git/objects/36/a05c2317888573e9f826019c33c3feee8d959c": "196d7a22d6249689ea54eab5262dfac2",
".git/objects/5d/97c3007e75f13c2bb3489ddc122d2beb5be315": "c38dc7c7ed6a3e7a12aaa572bbb73851",
".git/objects/5d/56a3a0d65c654ed14631323daf0029dabec5ae": "7a3a19a8d718aff4f868f398c8e70c98",
".git/objects/31/3ad4ea2462976078a4ab28270957a72b83ce63": "9cfe328177c02bfc86632cc76c50589c",
".git/objects/3a/cdf7eaf9fc13e8ee8cdef63466f78f1f271e51": "946ecc1c3a8f7f988ac71a0e90e779b8",
".git/objects/98/b5aa867327f4673eb2d345a08ffe03dc467dc5": "35d1e03274c35f788fbbbbacc273d608",
".git/objects/3f/e47864397e06bd30a9e21fc71846c2736e0c84": "0432073998194976feb4fab88e2c1649",
".git/objects/30/95ba96c9ba78a439ee6aaf79b6f5d80fa1466c": "c6d7d82702ba66201e7bb61e4ae6844e",
".git/objects/30/45b2e97be0f3cb1b581dc80c077c2a66a20482": "eb7fe373d8579056f92c888c16eab891",
".git/objects/5b/07224c8509f49372110cec31ba8395b84843f9": "a8e278839b5e554ca4b848733349b9df",
".git/objects/5b/6bc622fda11da8e919600ed07bfd257251e56e": "9fe5e08f8131a3d4bc46b363ea83c0a1",
".git/objects/06/041490eb552cdc7a7ae18aae133ad4eba6d67a": "24c717addc56730a74f285e6f6be86af",
".git/objects/6c/ae6c13d36bc7c4f7a0518e55142fb0630c0097": "777db3b9914af63a5e26233bbf672bb0",
".git/objects/52/222119b600fcc8e0cc23acba01a983816f981d": "350e6bdee3e4e44b966c33894e52272e",
".git/objects/63/53c3fa3692c89c63e5365dc90b84cbc06b672d": "83322e9c3fe33e23d66a1e160ea07d88",
".git/objects/0a/1cdb5ef02f0f0d994d8a33efb26c1150c7b351": "ec15677bbeab6006e77d34a97e921cba",
".git/objects/d4/3532a2348cc9c26053ddb5802f0e5d4b8abc05": "3dad9b209346b1723bb2cc68e7e42a44",
".git/objects/d4/4eee58ec6e898872092ec04d5af93d48101f28": "33fc95b7d06fa179417738912979679f",
".git/objects/ba/5317db6066f0f7cfe94eec93dc654820ce848c": "9b7629bf1180798cf66df4142eb19a4e",
".git/objects/a7/38432277d13b19146a357bde110eba7d0d5d13": "f2ed7cad50616b800dcde17d91c15f09",
".git/objects/b6/ecfcb662a16fb1a35ab01dcd40d910d5d4e086": "cf2eca01fce23d86449b400d2925bca6",
".git/objects/a9/b3ba8b6cd881d2b970d8218bccaac65dc84734": "6b8636c52d66169f9af4a588aac2ecce",
".git/objects/d2/3a38122b159e21b14293dc8844d9c96649bd90": "8a42f1e826d79477e938cc8d681c9ab2",
".git/objects/af/742adee0a85dd21ea96cbd84182e30e085d6cf": "aa25b932ec40efacb1efe27e7cf25d82",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b7/8cf9fcd4471f46182eb6b2a3083e1cc0515e5e": "5bedcfaaa4417dba43b6fa0a1fbdac0e",
".git/objects/a8/104bd42c19c559ed33d7d15bbcf1fb19b37b81": "9671a95fadfd0fd47040b9de2716aca4",
".git/objects/a8/77d874923b0a1096dddc9ef173dad71fd8d9cd": "649642240d8f4b3a341168b81356db39",
".git/objects/de/2cd3c98316c33e1ba05e9675780a317d8e2fd6": "66f52eebe6b34358f4f4a965466e8c65",
".git/objects/de/06d2fdf1b5ba0fa687627f30ba99c50c68c0fa": "7ff2637b6e6e37a1d34344900f2c4dec",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/b9/04ccd6053c572656e1d872915e3ef0f3858a22": "55f16d5720dd321c961cd595c873ecfb",
".git/objects/ef/f66b6378796251c8b4a95ffafdf056849db04e": "86c74138baa3f777439f8e85d466d2db",
".git/objects/ef/a94a90d042be0737788c1d5063fc5e4f13f4d9": "eb8bf7cc140ca37ad625ac5a6f24f2a9",
".git/objects/c3/4f0849b2b88b481f466907b1ce238751fa9c2a": "63a32b78d913081ecde238821b448cde",
".git/objects/c3/70b9cc763ef7a2c73164c9a8787f91e8805821": "6a23928e2425f2aa0c26024ab11d8be7",
".git/objects/c4/0a8b832187f54183a1378d181dbae7e5e7c6ac": "37c963c0558dce47f1db93d252b99987",
".git/objects/ea/4f38a629c9d9bd5e49d927ad4bd659bab0ca82": "c4db8594f106bc5468055f9b9bd53628",
".git/objects/e1/8a40df3b1b0eb9a61edd992104cd07bcc43495": "5f88dba8827cc39c5a9edb0b0cbbfe32",
".git/objects/cc/6dfd1678961a3e663b56dc3b5bb833a0ebcb5d": "1996048755acca0b9710ca3e069f1003",
".git/objects/e6/26563bcff67200450b4a0982bfe20657e80be9": "0bf9bba250ae4a18bf991c6dc48d3b29",
".git/objects/e8/2c5850db3a3482d0c954a4dc122c02de555ce7": "d357cd906b3805bf81477f5527cca086",
".git/objects/e8/68f92afebffd643fc7bdec9b6e68f345d460df": "b91ead2932466b1b4c25aa721c3e2b50",
".git/objects/ff/7098bed3536c70191fb7d2dd9a342ea26786db": "b6f99bc18bcf569438860089c9170bfc",
".git/objects/c5/f4bc2a4da91586f3005813077f0d0aa9040f82": "3191028b787554cee4652f5050144bff",
".git/objects/c5/49d9c788b64c382a494601f2373f23106adfe4": "0e8ce403f6dfe43059af459e62aea14f",
".git/objects/e9/2aed7c1538aa745772d76dfe31e91657009eeb": "5cab132b5534212933f108bb592a3b71",
".git/objects/f1/ab5b92e23269dda134e655612b1ab92d8c516c": "57fa9d058e2b88b50f06b3903a644335",
".git/objects/e7/be6fe716fd530681fcd106f7bdfe801b402375": "c44218ce573d2510ed4f856b6f1f0baf",
".git/objects/cb/d31cccb7fc9077866708c4b8e63977556dfc3f": "d1ef33f6c9e7fe13f86ee310c693fef9",
".git/objects/ce/893420f01dd55b6c1a7efdb1936da386050594": "cc422c5966578271b25e7f2847a35718",
".git/objects/2c/592ed66a28c3d58fb28a75daada721dac0a496": "1ff3516165a1e222cceccb63da5e92c0",
".git/objects/2d/502ccb233bd3542d358fc119d7699072a66eb2": "416d9719ac9d590596bac0ebd2521840",
".git/objects/41/d4e48fc3807ff1659d2f80ffe65f89ac8736a3": "ea7c203e2c1680d642eebea89709ed29",
".git/objects/48/a43aaac782bf2cd30b983e7a3d4b3cbf838562": "53fd0f8114021059bb1ac90b1e4c4374",
".git/objects/70/84ef8ab92e5d7f3b36b2f0b8f8e9e1dc0dd3a6": "7df88df64da7b49255f8587bc423575f",
".git/objects/1e/c6f20490b3b0bf8f1f00b9f3ae3801d6c34444": "eaa4e4e2d14ffa5e27f5f50b37194536",
".git/objects/4a/39079e580dc9be820cba2fae41238c49eaa798": "ada1a19fea32fbb6719120809b9eae60",
".git/objects/4a/f02979dc8248064bf13d5e8859e9a12c47674f": "e2cf64fc16c74869cde24e515dfe4329",
".git/objects/23/04778b31891942880c52ec21e373d7dfb4af78": "b50a285b1269639a362e5b23c3995386",
".git/objects/15/84f76c399d1bf6abdda9fd89cbad4bf60aa4d3": "6a1e3c87aaf1101188a4562508906ff6",
".git/objects/15/5c14a39805e6b4f97cb724a94050c54c664674": "1a93ecf9843e46c735fd96baadd1d109",
".git/objects/85/6a39233232244ba2497a38bdd13b2f0db12c82": "eef4643a9711cce94f555ae60fecd388",
".git/objects/71/7117947090611c3967f8681ab1ac0f79bca7fc": "ad4e74c0da46020e04043b5cf7f91098",
".git/objects/1c/47109a767e91e994f53fa228f018d7e0d7c4d4": "0c7535cf56b41cd3cd55e20518f316b3",
".git/objects/1c/d040c247271e863ec326143f1b09afc8d952c4": "c0bcf60c15bea558ba3bcb10b3a4b649",
".git/objects/49/58dc0e2e0838e923fcfad748a109046f9731c0": "10c9c5de6edb8c8c7b2a39934071e9c4",
".git/objects/2e/215ec80aa2598a81940693686366bd1519238d": "b2c68a5faf27a55e168a9ecf67e57a4d",
".git/objects/7f/d9b92d67983fd4f287bb8fde0fe4af7824c6a8": "d2e50c49e96fa722773fd8ded047ce7e",
".git/objects/22/6945d233fb65b3bc678caa0c1b8a1696ab9448": "b21d719c6dafcacf1dbef61740792143",
".git/objects/25/8b3eee70f98b2ece403869d9fe41ff8d32b7e1": "05e38b9242f2ece7b4208c191bc7b258",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "b2b2073f2b353d42fc6457bae4bd4c90",
".git/logs/refs/heads/main": "b2b2073f2b353d42fc6457bae4bd4c90",
".git/logs/refs/remotes/origin/main": "a696282bcc20dcec2365da5f1f5aae23",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/refs/heads/main": "dc0818a1d44282ac56b75e74929b71e1",
".git/refs/remotes/origin/main": "dc0818a1d44282ac56b75e74929b71e1",
".git/index": "bb13c7f9550dcf29cd3f3aa54a3cdc04",
".git/COMMIT_EDITMSG": "db8880e29dbfb0d094c5ccb209d10965",
"assets/AssetManifest.json": "0001ae9deb174c2c26a41ba3276dcef0",
"assets/NOTICES": "b2b5772d3689ed18b826ec8f4d9e48b2",
"assets/FontManifest.json": "08640ddded4f65f9d53ad2470ed24e39",
"assets/AssetManifest.bin.json": "78365349e180d0cc0ddf2164d650ddfa",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "e986ebe42ef785b27164c36a9abc7818",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"assets/AssetManifest.bin": "e58ac32617dd9f1aaab64fcc8539210d",
"assets/fonts/MaterialIcons-Regular.otf": "f98935e199d7d2c66cbf9fa8bed9939d",
"assets/assets/templates/shablon_akta.docx": "313bd68061a874fc7be8b48beaa43a0d",
"assets/assets/fonts/futura-pt-book-oblique.ttf": "02738f97b87fd3e6979a5de80beb58bd",
"assets/assets/fonts/futura-pt-book.ttf": "0d987efe9bc0b858a7bc0367c2d5922c",
"canvaskit/skwasm.js": "445e9e400085faead4493be2224d95aa",
"canvaskit/skwasm.js.symbols": "741d50ffba71f89345996b0aa8426af8",
"canvaskit/canvaskit.js.symbols": "38cba9233b92472a36ff011dc21c2c9f",
"canvaskit/skwasm.wasm": "e42815763c5d05bba43f9d0337fa7d84",
"canvaskit/chromium/canvaskit.js.symbols": "4525682ef039faeb11f24f37436dca06",
"canvaskit/chromium/canvaskit.js": "43787ac5098c648979c27c13c6f804c3",
"canvaskit/chromium/canvaskit.wasm": "f5934e694f12929ed56a671617acd254",
"canvaskit/canvaskit.js": "c86fbd9e7b17accae76e5ad116583dc4",
"canvaskit/canvaskit.wasm": "3d2a2d663e8c5111ac61a46367f751ac",
"canvaskit/skwasm.worker.js": "bfb704a6c714a75da9ef320991e88b03"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"assets/AssetManifest.bin.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
