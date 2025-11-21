var APP_DATA = {
  "scenes": [
    {
      "id": "0-",
      "name": "로비",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 1024,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 0.7459161005844557,
          "pitch": 0.369121626620208,
          "rotation": 0,
          "target": "1-"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "1-",
      "name": "진입부",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 1024,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -0.03880044124292148,
          "pitch": 0.29046191361052465,
          "rotation": 0,
          "target": "2-"
        },
        {
          "yaw": 3.135536547617841,
          "pitch": 0.5376533443662499,
          "rotation": 0,
          "target": "0-"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "2-",
      "name": "무대",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 1024,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -0.9767553604324064,
          "pitch": -0.23350341128582563,
          "rotation": 0,
          "target": "4-"
        },
        {
          "yaw": -0.8190215134953842,
          "pitch": -0.2367321228682524,
          "rotation": 0,
          "target": "3-"
        },
        {
          "yaw": -0.17610305338972054,
          "pitch": 0.23287708580772737,
          "rotation": 0,
          "target": "1-"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "3-",
      "name": "관객석(자연광)",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 1024,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -0.06157735430877587,
          "pitch": 0.5744673653181067,
          "rotation": 0,
          "target": "2-"
        },
        {
          "yaw": 0.3663174411564327,
          "pitch": 0.5491141353764988,
          "rotation": 2.356194490192345,
          "target": "1-"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "4-",
      "name": "관객석(조명)",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 1024,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -0.08655701281426076,
          "pitch": 0.5784229434827459,
          "rotation": 0,
          "target": "2-"
        },
        {
          "yaw": 0.4112793063775424,
          "pitch": 0.548602681805292,
          "rotation": 2.356194490192345,
          "target": "1-"
        }
      ],
      "infoHotspots": []
    }
  ],
  "name": "Project Title",
  "settings": {
    "mouseViewMode": "drag",
    "autorotateEnabled": false,
    "fullscreenButton": false,
    "viewControlButtons": false
  }
};
