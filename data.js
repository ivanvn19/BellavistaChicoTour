var APP_DATA = {
  "scenes": [
    {
      "id": "0-fachada-i",
      "name": "FACHADA I",
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
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1344,
      "initialViewParameters": {
        "yaw": 0.46561511058684246,
        "pitch": -0.14004467552759792,
        "fov": 1.2752188746020257
      },
      "linkHotspots": [
        {
          "yaw": -0.3838561038777346,
          "pitch": 0.11123679737698033,
          "rotation": 0,
          "target": "1-fachada-ii"
        },
        {
          "yaw": 0.40793853520654366,
          "pitch": -0.02532111358255662,
          "rotation": 0,
          "target": "2-ingreso"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "1-fachada-ii",
      "name": "FACHADA II",
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
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1344,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 1.632850454509132,
          "pitch": 0.3361957959676225,
          "rotation": 0,
          "target": "0-fachada-i"
        },
        {
          "yaw": -0.7386841907916839,
          "pitch": 0.03666166769829182,
          "rotation": 0,
          "target": "26-garage"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "2-ingreso",
      "name": "INGRESO",
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
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1344,
      "initialViewParameters": {
        "yaw": 0.12288121024734977,
        "pitch": 0.017739530814125715,
        "fov": 1.2752188746020257
      },
      "linkHotspots": [
        {
          "yaw": 0.12288121024734977,
          "pitch": 0.017739530814125715,
          "rotation": 0,
          "target": "3-ingreso"
        },
        {
          "yaw": -3.0918215891624534,
          "pitch": 0.22837780923063988,
          "rotation": 0,
          "target": "0-fachada-i"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "3-ingreso",
      "name": "INGRESO",
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
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1344,
      "initialViewParameters": {
        "yaw": -0.10673070743818158,
        "pitch": 0.15155647114895743,
        "fov": 1.2752188746020257
      },
      "linkHotspots": [
        {
          "yaw": -3.1365733401806217,
          "pitch": 0.05743923268503082,
          "rotation": 0,
          "target": "2-ingreso"
        },
        {
          "yaw": -2.746829850345879,
          "pitch": -0.06970019888361456,
          "rotation": 0,
          "target": "14-descanso-escalera-"
        },
        {
          "yaw": -1.4970278360756488,
          "pitch": 0.15540254785192786,
          "rotation": 0,
          "target": "4-ingreso-toilet"
        },
        {
          "yaw": -0.2976454099236072,
          "pitch": 0.06315751534592273,
          "rotation": 0,
          "target": "6-living---comedor"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "4-ingreso-toilet",
      "name": "INGRESO TOILET",
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
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1344,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 2.8363856934804472,
          "pitch": 0.12673401049073618,
          "rotation": 0,
          "target": "3-ingreso"
        },
        {
          "yaw": -1.5720017255703986,
          "pitch": 0.03520499205679073,
          "rotation": 0,
          "target": "5-toilet"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "5-toilet",
      "name": "TOILET",
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
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1344,
      "initialViewParameters": {
        "yaw": -0.1495996501709449,
        "pitch": 0.6006098289924822,
        "fov": 1.2752188746020257
      },
      "linkHotspots": [
        {
          "yaw": -2.7579988092935466,
          "pitch": 0.10404929014316977,
          "rotation": 0,
          "target": "4-ingreso-toilet"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "6-living---comedor",
      "name": "LIVING - COMEDOR",
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
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1344,
      "initialViewParameters": {
        "yaw": -0.9399351899099457,
        "pitch": 0.219037850033029,
        "fov": 1.2752188746020257
      },
      "linkHotspots": [
        {
          "yaw": 2.5938337982261057,
          "pitch": 0.1339794704536459,
          "rotation": 0,
          "target": "3-ingreso"
        },
        {
          "yaw": -1.1959440454175585,
          "pitch": 0.07689470544318411,
          "rotation": 0,
          "target": "7-cocina"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "7-cocina",
      "name": "COCINA",
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
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1344,
      "initialViewParameters": {
        "yaw": 0.11932353049348876,
        "pitch": 0.0608212485055617,
        "fov": 1.2752188746020257
      },
      "linkHotspots": [
        {
          "yaw": -2.9117679557012863,
          "pitch": 0.08186061562210156,
          "rotation": 0,
          "target": "6-living---comedor"
        },
        {
          "yaw": 0.053915722488982354,
          "pitch": 0.13570638997687468,
          "rotation": 0,
          "target": "8-cocina-ii"
        },
        {
          "yaw": 1.7878684552561648,
          "pitch": 0.2595176919979849,
          "rotation": 0,
          "target": "10-galera"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "8-cocina-ii",
      "name": "COCINA II",
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
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1344,
      "initialViewParameters": {
        "yaw": 0.06233318757123385,
        "pitch": 0.5195148309850381,
        "fov": 1.2752188746020257
      },
      "linkHotspots": [
        {
          "yaw": -3.1364542966897524,
          "pitch": 0.1484088165350066,
          "rotation": 0,
          "target": "7-cocina"
        },
        {
          "yaw": -1.5588864050317817,
          "pitch": 0.09578008605639177,
          "rotation": 0,
          "target": "9-lavadero"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "9-lavadero",
      "name": "LAVADERO",
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
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1344,
      "initialViewParameters": {
        "yaw": 0.028495171461132784,
        "pitch": 0.2914351490891782,
        "fov": 1.2752188746020257
      },
      "linkHotspots": [
        {
          "yaw": -2.009171139806522,
          "pitch": 0.10356174431433196,
          "rotation": 0.7853981633974483,
          "target": "8-cocina-ii"
        },
        {
          "yaw": -2.9011300818549763,
          "pitch": 0.0865841106067311,
          "rotation": 5.497787143782138,
          "target": "26-garage"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "10-galera",
      "name": "GALERÍA",
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
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1344,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 1.5336866011971715,
          "pitch": 0.34517986465266404,
          "rotation": 10.995574287564278,
          "target": "13-pileta"
        },
        {
          "yaw": 0.0767698012026301,
          "pitch": 0.16476391149517866,
          "rotation": 0,
          "target": "12-parque"
        },
        {
          "yaw": -1.4716155792955732,
          "pitch": 0.17011832264061866,
          "rotation": 0,
          "target": "24-parrilla"
        },
        {
          "yaw": -3.044120517264533,
          "pitch": 0.2233617716609988,
          "rotation": 0,
          "target": "7-cocina"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "11-bao-exterior",
      "name": "BAÑO EXTERIOR",
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
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1344,
      "initialViewParameters": {
        "yaw": -2.7504623465082645,
        "pitch": 0.6323593159761369,
        "fov": 1.2752188746020257
      },
      "linkHotspots": [
        {
          "yaw": 1.06187663536722,
          "pitch": 0.2851871524194962,
          "rotation": 0,
          "target": "24-parrilla"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "12-parque",
      "name": "PARQUE",
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
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1344,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -2.9256965724972126,
          "pitch": 0.05917802421655338,
          "rotation": 0,
          "target": "10-galera"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "13-pileta",
      "name": "PILETA",
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
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1344,
      "initialViewParameters": {
        "yaw": 0.2261804234727336,
        "pitch": 0.01013687475092695,
        "fov": 1.2752188746020257
      },
      "linkHotspots": [
        {
          "yaw": -1.4688240584350947,
          "pitch": 0.12573379625475845,
          "rotation": 0,
          "target": "10-galera"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "14-descanso-escalera-",
      "name": "DESCANSO ESCALERA ",
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
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1344,
      "initialViewParameters": {
        "yaw": -0.28495171461132074,
        "pitch": 0.3370510854683495,
        "fov": 1.2752188746020257
      },
      "linkHotspots": [
        {
          "yaw": 2.875038679157271,
          "pitch": 0.1629862609692232,
          "rotation": 3.141592653589793,
          "target": "3-ingreso"
        },
        {
          "yaw": 1.5727882817642298,
          "pitch": -0.1997930182580756,
          "rotation": 0.7853981633974483,
          "target": "15-pa"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "15-pa",
      "name": "PA",
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
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1344,
      "initialViewParameters": {
        "yaw": 0.12567434304510705,
        "pitch": 0.4813607451918891,
        "fov": 1.2752188746020257
      },
      "linkHotspots": [
        {
          "yaw": -2.594558511891071,
          "pitch": 0.13574059231525837,
          "rotation": 10.210176124166829,
          "target": "14-descanso-escalera-"
        },
        {
          "yaw": -1.4589797051454347,
          "pitch": 0.08093609479038655,
          "rotation": 0,
          "target": "16-pa-ii"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "16-pa-ii",
      "name": "PA II",
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
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1344,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 0.11975483592725311,
          "pitch": 0.14300932416496082,
          "rotation": 0,
          "target": "23-bao-pa"
        },
        {
          "yaw": -1.9955029249158969,
          "pitch": 0.12731597447931975,
          "rotation": 0,
          "target": "17-habitacin-i"
        },
        {
          "yaw": -1.0725563340479134,
          "pitch": 0.11046980082072722,
          "rotation": 0,
          "target": "18-habitacin-ii"
        },
        {
          "yaw": 1.022101290668063,
          "pitch": 0.18395598857181206,
          "rotation": 0,
          "target": "19-habitacin-principal"
        },
        {
          "yaw": -3.139080128179206,
          "pitch": 0.0673394929060045,
          "rotation": 0,
          "target": "15-pa"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "17-habitacin-i",
      "name": "HABITACIÓN I",
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
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1344,
      "initialViewParameters": {
        "yaw": -0.19768525201159903,
        "pitch": 0.26862718089959614,
        "fov": 1.2752188746020257
      },
      "linkHotspots": [
        {
          "yaw": 2.921616699903775,
          "pitch": 0.16218147808280037,
          "rotation": 0,
          "target": "16-pa-ii"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "18-habitacin-ii",
      "name": "HABITACIÓN II",
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
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1344,
      "initialViewParameters": {
        "yaw": 0.2778279217460291,
        "pitch": 0.2508876500854704,
        "fov": 1.2752188746020257
      },
      "linkHotspots": [
        {
          "yaw": -2.77240444328924,
          "pitch": 0.0914470629511488,
          "rotation": 0,
          "target": "16-pa-ii"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "19-habitacin-principal",
      "name": "HABITACIÓN PRINCIPAL",
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
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1344,
      "initialViewParameters": {
        "yaw": 0.3989338755202567,
        "pitch": 0.21034015108174486,
        "fov": 1.2752188746020257
      },
      "linkHotspots": [
        {
          "yaw": 0.03240278424412679,
          "pitch": 0.16248036418199518,
          "rotation": 0,
          "target": "22-terraza"
        },
        {
          "yaw": -1.1192410882553148,
          "pitch": 0.12534686528153394,
          "rotation": 0,
          "target": "20-ingreso-bao---vestidor"
        },
        {
          "yaw": -2.5080769429867757,
          "pitch": 0.09690252479095918,
          "rotation": 0,
          "target": "16-pa-ii"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "20-ingreso-bao---vestidor",
      "name": "INGRESO BAÑO - VESTIDOR",
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
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1344,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -1.5219107364357054,
          "pitch": -0.21471518323302163,
          "rotation": 0,
          "target": "25-bao-habitacin-principal"
        },
        {
          "yaw": 1.728077655499069,
          "pitch": -0.10752690158262013,
          "rotation": 0,
          "target": "21-vesitdor"
        },
        {
          "yaw": -2.884400873150831,
          "pitch": 0.12860113375896098,
          "rotation": 0.7853981633974483,
          "target": "19-habitacin-principal"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "21-vesitdor",
      "name": "VESITDOR",
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
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1344,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 3.1244323811609576,
          "pitch": 0.2066355808703868,
          "rotation": 0,
          "target": "20-ingreso-bao---vestidor"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "22-terraza",
      "name": "TERRAZA",
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
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1344,
      "initialViewParameters": {
        "yaw": 0.0641223187031219,
        "pitch": 0.02788804952940893,
        "fov": 1.2752188746020257
      },
      "linkHotspots": [
        {
          "yaw": 3.0920370986483174,
          "pitch": 0.17054989217621142,
          "rotation": 0,
          "target": "19-habitacin-principal"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "23-bao-pa",
      "name": "BAÑO PA",
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
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1344,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 3.0114371609371933,
          "pitch": 0.0999180184037165,
          "rotation": 0,
          "target": "16-pa-ii"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "24-parrilla",
      "name": "PARRILLA",
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
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1344,
      "initialViewParameters": {
        "yaw": 0.45236084694546363,
        "pitch": 0.10897140357247181,
        "fov": 1.2752188746020257
      },
      "linkHotspots": [
        {
          "yaw": 1.0014260510333006,
          "pitch": 0.03525579672660406,
          "rotation": 0,
          "target": "11-bao-exterior"
        },
        {
          "yaw": -2.6631208026626734,
          "pitch": 0.27151518385145756,
          "rotation": 0,
          "target": "10-galera"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "25-bao-habitacin-principal",
      "name": "BAÑO HABITACIÓN PRINCIPAL",
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
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1344,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -2.9066709718932344,
          "pitch": 0.041933765581131155,
          "rotation": 0,
          "target": "20-ingreso-bao---vestidor"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "26-garage",
      "name": "GARAGE",
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
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1344,
      "initialViewParameters": {
        "yaw": 0.18700001539740008,
        "pitch": 0.045615936379171274,
        "fov": 1.2752188746020257
      },
      "linkHotspots": [
        {
          "yaw": -0.3628210903345668,
          "pitch": 0.11422910008640841,
          "rotation": 0,
          "target": "9-lavadero"
        },
        {
          "yaw": -2.925402962617296,
          "pitch": 0.3228630213234993,
          "rotation": 0,
          "target": "1-fachada-ii"
        }
      ],
      "infoHotspots": []
    }
  ],
  "name": "BELLA VISTA CHICO - VR TOUR",
  "settings": {
    "mouseViewMode": "drag",
    "autorotateEnabled": true,
    "fullscreenButton": false,
    "viewControlButtons": false
  }
};
