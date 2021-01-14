let data: any = {}

data.activity = {
  "_id": "5a3aad9828f10d10437110de",
  "objectType": "Activity",
  "surveyForm": {
    "sender": "diogo.rosas.ferreira@gmail.com",
    "sendingDate": "2017-05-29T19:46:10.609Z",
    "objectType": "SurveyForm",
    "surveyFormType": "FORM_INTERVIEW",
    "surveyTemplate": null,
    "isDiscarded": false,
    "version": 1,
    "acronym": "ACTDC",
    "name": "ACTIMETRIA DEVOLUÇÃO"
  },
  "mode": "ONLINE",
  "category": {
    "name": "C0",
    "objectType": "ActivityCategory",
    "label": "Normal",
    "disabled": false,
    "isDefault": true
  },
  "participantData": {
    "recruitmentNumber": 755555,
    "name": "VALERIA CRISTINA OLIVEIRA DA NOBREGA",
    "sex": "F",
    "birthdate": {
      "objectType": "ImmutableDate",
      "value": "1965-05-12 00:00:00.000"
    },
    "fieldCenter": {
      "name": "Rio de Janeiro",
      "code": 4,
      "acronym": "RJ",
      "country": null,
      "state": null,
      "address": null,
      "complement": null,
      "zip": null,
      "phone": null
    }
  },
  "interviews": [
    {
      "objectType": "Interview",
      "date": "2017-12-20T18:36:58.476Z",
      "interviewer": {
        "objectType": "Interviewer",
        "name": "Gabriel",
        "email": "ggrandemagne.santos@gmail.com"
      }
    }
  ],
  "fillContainer": {
    "fillingList": [
      {
        "objectType": "QuestionFill",
        "questionID": "ACTDC1",
        "answer": {
          "value": null,
          "objectType": "AnswerFill",
          "type": "CalendarQuestion"
        },
        "forceAnswer": false,
        "metadata": {
          "objectType": "MetadataFill",
          "value": "1"
        },
        "comment": ""
      },
      {
        "objectType": "QuestionFill",
        "questionID": "ACTDC2",
        "answer": {
          "value": 10,
          "objectType": "AnswerFill",
          "type": "IntegerQuestion"
        },
        "forceAnswer": false,
        "metadata": {
          "objectType": "MetadataFill",
          "value": null
        },
        "comment": ""
      },
      {
        "objectType": "QuestionFill",
        "questionID": "ACTDC3",
        "answer": {
          "value": null,
          "objectType": "AnswerFill",
          "type": "IntegerQuestion"
        },
        "forceAnswer": false,
        "metadata": {
          "objectType": "MetadataFill",
          "value": "1"
        },
        "comment": ""
      },
      {
        "objectType": "QuestionFill",
        "questionID": "ACTDC4",
        "answer": {
          "value": null,
          "objectType": "AnswerFill",
          "type": "SingleSelectionQuestion"
        },
        "forceAnswer": false,
        "metadata": {
          "objectType": "MetadataFill",
          "value": "1"
        },
        "comment": ""
      },
      {
        "objectType": "QuestionFill",
        "questionID": "ACTDC7",
        "answer": {
          "value": null,
          "objectType": "AnswerFill",
          "type": "FileUploadQuestion"
        },
        "forceAnswer": false,
        "metadata": {
          "objectType": "MetadataFill",
          "value": "1"
        },
        "comment": ""
      }
    ]
  },
  "statusHistory": [
    {
      "objectType": "ActivityStatus",
      "name": "CREATED",
      "date": "2017-12-20T18:36:08.213Z",
      "user": {
        "name": "Gabriel",
        "surname": "Grandemagne dos Santos",
        "phone": "51985221997",
        "email": "ggrandemagne.santos@gmail.com"
      }
    },
    {
      "objectType": "ActivityStatus",
      "name": "OPENED",
      "date": "2017-12-20T18:36:57.639Z",
      "user": {
        "name": "Gabriel",
        "surname": "Grandemagne dos Santos",
        "phone": "51985221997",
        "email": "ggrandemagne.santos@gmail.com"
      }
    },
    {
      "objectType": "ActivityStatus",
      "name": "INITIALIZED_ONLINE",
      "date": "2017-12-20T18:36:58.476Z",
      "user": {
        "name": "Gabriel",
        "surname": "Grandemagne dos Santos",
        "phone": "51985221997",
        "email": "ggrandemagne.santos@gmail.com"
      }
    },
    {
      "objectType": "ActivityStatus",
      "name": "SAVED",
      "date": "2017-12-20T18:37:45.411Z",
      "user": {
        "name": "Gabriel",
        "surname": "Grandemagne dos Santos",
        "phone": "51985221997",
        "email": "ggrandemagne.santos@gmail.com"
      }
    }
  ],
  "isDiscarded": false,
  "navigationTracker": {
    "objectType": "NavigationTracker",
    "items": [
      {
        "objectType": "NavigationTrackingItem",
        "id": "ACTDC1",
        "state": "ANSWERED",
        "previous": null,
        "inputs": [],
        "outputs": [
          "ACTDC2"
        ]
      },
      {
        "objectType": "NavigationTrackingItem",
        "id": "ACTDC2",
        "state": "ANSWERED",
        "previous": "ACTDC1",
        "inputs": [
          "ACTDC1"
        ],
        "outputs": [
          "ACTDC3"
        ]
      },
      {
        "objectType": "NavigationTrackingItem",
        "id": "ACTDC3",
        "state": "ANSWERED",
        "previous": "ACTDC2",
        "inputs": [
          "ACTDC2"
        ],
        "outputs": [
          "ACTDC4"
        ]
      },
      {
        "objectType": "NavigationTrackingItem",
        "id": "ACTDC4",
        "state": "ANSWERED",
        "previous": "ACTDC3",
        "inputs": [
          "ACTDC3"
        ],
        "outputs": [
          "ACTDC7",
          "ACTDC5"
        ]
      },
      {
        "objectType": "NavigationTrackingItem",
        "id": "ACTDC5",
        "state": "SKIPPED",
        "previous": null,
        "inputs": [
          "ACTDC4"
        ],
        "outputs": [
          "ACTDC7",
          "ACTDC6"
        ]
      },
      {
        "objectType": "NavigationTrackingItem",
        "id": "ACTDC6",
        "state": "SKIPPED",
        "previous": null,
        "inputs": [
          "ACTDC5"
        ],
        "outputs": [
          "ACTDC7"
        ]
      },
      {
        "objectType": "NavigationTrackingItem",
        "id": "ACTDC7",
        "state": "ANSWERED",
        "previous": "ACTDC4",
        "inputs": [
          "ACTDC6",
          "ACTDC4",
          "ACTDC5"
        ],
        "outputs": [
          "ACTDC8"
        ]
      },
      {
        "objectType": "NavigationTrackingItem",
        "id": "ACTDC8",
        "state": "VISITED",
        "previous": "ACTDC7",
        "inputs": [
          "ACTDC7"
        ],
        "outputs": []
      }
    ],
    "lastVisitedIndex": 7
  },
  "externalID": "123",
  "stageId": "5f8755f9a56c24306f4df6d3",
  "toJSON": () => { return data.activity }
},
  data.survey = {
    "_id": "5b60d280bc2b237a56650274",
    "sender": "diogo.rosas.ferreira@gmail.com",
    "sendingDate": "2017-05-29T19:46:10.609Z",
    "objectType": "SurveyForm",
    "surveyFormType": "FORM_INTERVIEW",
    "surveyTemplate": {
      "extents": "StudioObject",
      "objectType": "Survey",
      "oid": "dXNlclVVSUQ6W3VuZGVmaW5lZF1zdXJ2ZXlVVUlEOls1YTA5OTExMC0zYTVmLTExZTctYjdiYy1hMTkyYThjZDc5YzhdcmVwb3NpdG9yeVVVSUQ6WyBOb3QgZG9uZSB5ZXQgXQ==",
      "identity": {
        "extents": "StudioObject",
        "objectType": "SurveyIdentity",
        "name": "ACTIMETRIA DEVOLUÇÃO",
        "acronym": "ACTDC",
        "recommendedTo": "",
        "description": "",
        "keywords": []
      },
      "dataSources": [],
      "metainfo": {
        "extents": "StudioObject",
        "objectType": "SurveyMetaInfo",
        "creationDatetime": "2017-05-16T17:44:46.497Z",
        "otusStudioVersion": ""
      },
      "itemContainer": [
        {
          "label": {
            "ptBR": {
              "extends": "StudioObject",
              "objectType": "Label",
              "oid": "",
              "plainText": "DEVOLUÇÃO DATA DE DEVOLUÇÃO:",
              "formattedText": "<b>DEVOLUÇÃO</b><div>DATA DE DEVOLUÇÃO:<br></div>"
            },
            "enUS": {
              "extends": "StudioObject",
              "objectType": "Label",
              "oid": "",
              "plainText": "",
              "formattedText": ""
            },
            "esES": {
              "extends": "StudioObject",
              "objectType": "Label",
              "oid": "",
              "plainText": "",
              "formattedText": ""
            }
          },
          "metadata": {
            "extents": "StudioObject",
            "objectType": "MetadataGroup",
            "options": [
              {
                "extends": "StudioObject",
                "objectType": "MetadataAnswer",
                "dataType": "Integer",
                "value": 1,
                "extractionValue": ".Q",
                "label": {
                  "ptBR": {
                    "extends": "StudioObject",
                    "objectType": "Label",
                    "oid": "",
                    "plainText": "Não quer responder",
                    "formattedText": "Não quer responder"
                  },
                  "enUS": {
                    "extends": "StudioObject",
                    "objectType": "Label",
                    "oid": "",
                    "plainText": "",
                    "formattedText": ""
                  },
                  "esES": {
                    "extends": "StudioObject",
                    "objectType": "Label",
                    "oid": "",
                    "plainText": "",
                    "formattedText": ""
                  }
                }
              },
              {
                "extends": "StudioObject",
                "objectType": "MetadataAnswer",
                "dataType": "Integer",
                "value": 2,
                "extractionValue": ".S",
                "label": {
                  "ptBR": {
                    "extends": "StudioObject",
                    "objectType": "Label",
                    "oid": "",
                    "plainText": "Não sabe",
                    "formattedText": "Não sabe"
                  },
                  "enUS": {
                    "extends": "StudioObject",
                    "objectType": "Label",
                    "oid": "",
                    "plainText": "",
                    "formattedText": ""
                  },
                  "esES": {
                    "extends": "StudioObject",
                    "objectType": "Label",
                    "oid": "",
                    "plainText": "",
                    "formattedText": ""
                  }
                }
              },
              {
                "extends": "StudioObject",
                "objectType": "MetadataAnswer",
                "dataType": "Integer",
                "value": 3,
                "extractionValue": ".A",
                "label": {
                  "ptBR": {
                    "extends": "StudioObject",
                    "objectType": "Label",
                    "oid": "",
                    "plainText": "Não se aplica",
                    "formattedText": "Não se aplica"
                  },
                  "enUS": {
                    "extends": "StudioObject",
                    "objectType": "Label",
                    "oid": "",
                    "plainText": "",
                    "formattedText": ""
                  },
                  "esES": {
                    "extends": "StudioObject",
                    "objectType": "Label",
                    "oid": "",
                    "plainText": "",
                    "formattedText": ""
                  }
                }
              },
              {
                "extends": "StudioObject",
                "objectType": "MetadataAnswer",
                "dataType": "Integer",
                "value": 4,
                "extractionValue": ".F",
                "label": {
                  "ptBR": {
                    "extends": "StudioObject",
                    "objectType": "Label",
                    "oid": "",
                    "plainText": "Não há dados",
                    "formattedText": "Não há dados"
                  },
                  "enUS": {
                    "extends": "StudioObject",
                    "objectType": "Label",
                    "oid": "",
                    "plainText": "",
                    "formattedText": ""
                  },
                  "esES": {
                    "extends": "StudioObject",
                    "objectType": "Label",
                    "oid": "",
                    "plainText": "",
                    "formattedText": ""
                  }
                }
              }
            ]
          },
          "fillingRules": {
            "extends": "StudioObject",
            "objectType": "FillingRules",
            "options": {
              "pastDate": {
                "data": {
                  "reference": true,
                  "canBeIgnored": true
                },
                "extends": "StudioObject",
                "objectType": "Rule",
                "validatorType": "pastDate"
              },
              "mandatory": {
                "data": {
                  "reference": true,
                  "canBeIgnored": false
                },
                "extends": "StudioObject",
                "objectType": "Rule",
                "validatorType": "mandatory"
              }
            }
          },
          "extents": "SurveyItem",
          "objectType": "CalendarQuestion",
          "templateID": "ACTDC1",
          "customID": "ACTC6",
          "dataType": "LocalDate"
        },
        {
          "unit": {
            "ptBR": {
              "extends": "StudioObject",
              "objectType": "Unit",
              "oid": "",
              "plainText": "minutos/semana",
              "formattedText": "minutos/semana"
            },
            "enUS": {
              "extends": "StudioObject",
              "objectType": "Unit",
              "oid": "",
              "plainText": "",
              "formattedText": ""
            },
            "esES": {
              "extends": "StudioObject",
              "objectType": "Unit",
              "oid": "",
              "plainText": "",
              "formattedText": ""
            }
          },
          "label": {
            "ptBR": {
              "extends": "StudioObject",
              "objectType": "Label",
              "oid": "",
              "plainText": "INFORMAÇÕES DO ACTÍGRAFO  PRÁTICA DE ATIVIDADE FÍSICA - atividades físicas moderadas ou vigorosas:",
              "formattedText": "<div><b>INFORMAÇÕES DO ACTÍGRAFO</b></div><div>PRÁTICA DE ATIVIDADE FÍSICA - atividades físicas moderadas ou vigorosas:</div>"
            },
            "enUS": {
              "extends": "StudioObject",
              "objectType": "Label",
              "oid": "",
              "plainText": "",
              "formattedText": ""
            },
            "esES": {
              "extends": "StudioObject",
              "objectType": "Label",
              "oid": "",
              "plainText": "",
              "formattedText": ""
            }
          },
          "metadata": {
            "extents": "StudioObject",
            "objectType": "MetadataGroup",
            "options": [
              {
                "extends": "StudioObject",
                "objectType": "MetadataAnswer",
                "dataType": "Integer",
                "value": 1,
                "extractionValue": ".Q",
                "label": {
                  "ptBR": {
                    "extends": "StudioObject",
                    "objectType": "Label",
                    "oid": "",
                    "plainText": "Não quer responder",
                    "formattedText": "<span style='letter-spacing: 0.14px;'>Não quer responder</span>"
                  },
                  "enUS": {
                    "extends": "StudioObject",
                    "objectType": "Label",
                    "oid": "",
                    "plainText": "",
                    "formattedText": ""
                  },
                  "esES": {
                    "extends": "StudioObject",
                    "objectType": "Label",
                    "oid": "",
                    "plainText": "",
                    "formattedText": ""
                  }
                }
              },
              {
                "extends": "StudioObject",
                "objectType": "MetadataAnswer",
                "dataType": "Integer",
                "value": 2,
                "extractionValue": ".S",
                "label": {
                  "ptBR": {
                    "extends": "StudioObject",
                    "objectType": "Label",
                    "oid": "",
                    "plainText": "Não sabe",
                    "formattedText": "<span style='letter-spacing: 0.14px;'>Não sabe</span>"
                  },
                  "enUS": {
                    "extends": "StudioObject",
                    "objectType": "Label",
                    "oid": "",
                    "plainText": "",
                    "formattedText": ""
                  },
                  "esES": {
                    "extends": "StudioObject",
                    "objectType": "Label",
                    "oid": "",
                    "plainText": "",
                    "formattedText": ""
                  }
                }
              },
              {
                "extends": "StudioObject",
                "objectType": "MetadataAnswer",
                "dataType": "Integer",
                "value": 3,
                "extractionValue": ".A",
                "label": {
                  "ptBR": {
                    "extends": "StudioObject",
                    "objectType": "Label",
                    "oid": "",
                    "plainText": "Não se aplica",
                    "formattedText": "<span style='letter-spacing: 0.14px;'>Não se aplica</span>"
                  },
                  "enUS": {
                    "extends": "StudioObject",
                    "objectType": "Label",
                    "oid": "",
                    "plainText": "",
                    "formattedText": ""
                  },
                  "esES": {
                    "extends": "StudioObject",
                    "objectType": "Label",
                    "oid": "",
                    "plainText": "",
                    "formattedText": ""
                  }
                }
              },
              {
                "extends": "StudioObject",
                "objectType": "MetadataAnswer",
                "dataType": "Integer",
                "value": 4,
                "extractionValue": ".F",
                "label": {
                  "ptBR": {
                    "extends": "StudioObject",
                    "objectType": "Label",
                    "oid": "",
                    "plainText": "Não há dados",
                    "formattedText": "<span style='letter-spacing: 0.14px;'>Não há dados</span>"
                  },
                  "enUS": {
                    "extends": "StudioObject",
                    "objectType": "Label",
                    "oid": "",
                    "plainText": "",
                    "formattedText": ""
                  },
                  "esES": {
                    "extends": "StudioObject",
                    "objectType": "Label",
                    "oid": "",
                    "plainText": "",
                    "formattedText": ""
                  }
                }
              }
            ]
          },
          "fillingRules": {
            "extends": "StudioObject",
            "objectType": "FillingRules",
            "options": {
              "upperLimit": {
                "data": {
                  "reference": 500,
                  "canBeIgnored": true
                },
                "extends": "StudioObject",
                "objectType": "Rule",
                "validatorType": "upperLimit"
              },
              "lowerLimit": {
                "data": {
                  "reference": 0,
                  "canBeIgnored": true
                },
                "extends": "StudioObject",
                "objectType": "Rule",
                "validatorType": "lowerLimit"
              },
              "mandatory": {
                "data": {
                  "reference": true,
                  "canBeIgnored": false
                },
                "extends": "StudioObject",
                "objectType": "Rule",
                "validatorType": "mandatory"
              },
              "accept": {
                "data": {
                  "reference": true,
                  "canBeIgnored": false
                },
                "extends": "StudioObject",
                "objectType": "Rule",
                "validatorType": "accept"
              }
            }
          },
          "extents": "SurveyItem",
          "objectType": "IntegerQuestion",
          "templateID": "ACTDC2",
          "customID": "ACTC8",
          "dataType": "Integer"
        },
        {
          "unit": {
            "ptBR": {
              "extends": "StudioObject",
              "objectType": "Unit",
              "oid": "",
              "plainText": "média de passos/dia",
              "formattedText": "média de passos/dia"
            },
            "enUS": {
              "extends": "StudioObject",
              "objectType": "Unit",
              "oid": "",
              "plainText": "",
              "formattedText": ""
            },
            "esES": {
              "extends": "StudioObject",
              "objectType": "Unit",
              "oid": "",
              "plainText": "",
              "formattedText": ""
            }
          },
          "label": {
            "ptBR": {
              "extends": "StudioObject",
              "objectType": "Label",
              "oid": "",
              "plainText": "INFORMAÇÕES DO ACTÍGRAFO Nº DE PASSOS:",
              "formattedText": "<b>INFORMAÇÕES DO ACTÍGRAFO</b><div>Nº DE PASSOS:<br></div>"
            },
            "enUS": {
              "extends": "StudioObject",
              "objectType": "Label",
              "oid": "",
              "plainText": "",
              "formattedText": ""
            },
            "esES": {
              "extends": "StudioObject",
              "objectType": "Label",
              "oid": "",
              "plainText": "",
              "formattedText": ""
            }
          },
          "metadata": {
            "extents": "StudioObject",
            "objectType": "MetadataGroup",
            "options": [
              {
                "extends": "StudioObject",
                "objectType": "MetadataAnswer",
                "dataType": "Integer",
                "value": 1,
                "extractionValue": ".Q",
                "label": {
                  "ptBR": {
                    "extends": "StudioObject",
                    "objectType": "Label",
                    "oid": "",
                    "plainText": "Não quer responder",
                    "formattedText": "<span style='letter-spacing: 0.14px;'>Não quer responder</span>"
                  },
                  "enUS": {
                    "extends": "StudioObject",
                    "objectType": "Label",
                    "oid": "",
                    "plainText": "",
                    "formattedText": ""
                  },
                  "esES": {
                    "extends": "StudioObject",
                    "objectType": "Label",
                    "oid": "",
                    "plainText": "",
                    "formattedText": ""
                  }
                }
              },
              {
                "extends": "StudioObject",
                "objectType": "MetadataAnswer",
                "dataType": "Integer",
                "value": 2,
                "extractionValue": ".S",
                "label": {
                  "ptBR": {
                    "extends": "StudioObject",
                    "objectType": "Label",
                    "oid": "",
                    "plainText": "Não sabe",
                    "formattedText": "<span style='letter-spacing: 0.14px;'>Não sabe</span>"
                  },
                  "enUS": {
                    "extends": "StudioObject",
                    "objectType": "Label",
                    "oid": "",
                    "plainText": "",
                    "formattedText": ""
                  },
                  "esES": {
                    "extends": "StudioObject",
                    "objectType": "Label",
                    "oid": "",
                    "plainText": "",
                    "formattedText": ""
                  }
                }
              },
              {
                "extends": "StudioObject",
                "objectType": "MetadataAnswer",
                "dataType": "Integer",
                "value": 3,
                "extractionValue": ".A",
                "label": {
                  "ptBR": {
                    "extends": "StudioObject",
                    "objectType": "Label",
                    "oid": "",
                    "plainText": "Não se aplica",
                    "formattedText": "<span style='letter-spacing: 0.14px;'>Não se aplica</span>"
                  },
                  "enUS": {
                    "extends": "StudioObject",
                    "objectType": "Label",
                    "oid": "",
                    "plainText": "",
                    "formattedText": ""
                  },
                  "esES": {
                    "extends": "StudioObject",
                    "objectType": "Label",
                    "oid": "",
                    "plainText": "",
                    "formattedText": ""
                  }
                }
              },
              {
                "extends": "StudioObject",
                "objectType": "MetadataAnswer",
                "dataType": "Integer",
                "value": 4,
                "extractionValue": ".F",
                "label": {
                  "ptBR": {
                    "extends": "StudioObject",
                    "objectType": "Label",
                    "oid": "",
                    "plainText": "Não há dados",
                    "formattedText": "<span style='letter-spacing: 0.14px;'>Não há dados</span>"
                  },
                  "enUS": {
                    "extends": "StudioObject",
                    "objectType": "Label",
                    "oid": "",
                    "plainText": "",
                    "formattedText": ""
                  },
                  "esES": {
                    "extends": "StudioObject",
                    "objectType": "Label",
                    "oid": "",
                    "plainText": "",
                    "formattedText": ""
                  }
                }
              }
            ]
          },
          "fillingRules": {
            "extends": "StudioObject",
            "objectType": "FillingRules",
            "options": {
              "upperLimit": {
                "data": {
                  "reference": 15000,
                  "canBeIgnored": true
                },
                "extends": "StudioObject",
                "objectType": "Rule",
                "validatorType": "upperLimit"
              },
              "lowerLimit": {
                "data": {
                  "reference": 2500,
                  "canBeIgnored": true
                },
                "extends": "StudioObject",
                "objectType": "Rule",
                "validatorType": "lowerLimit"
              },
              "mandatory": {
                "data": {
                  "reference": true,
                  "canBeIgnored": false
                },
                "extends": "StudioObject",
                "objectType": "Rule",
                "validatorType": "mandatory"
              },
              "accept": {
                "data": {
                  "reference": true,
                  "canBeIgnored": false
                },
                "extends": "StudioObject",
                "objectType": "Rule",
                "validatorType": "accept"
              }
            }
          },
          "extents": "SurveyItem",
          "objectType": "IntegerQuestion",
          "templateID": "ACTDC3",
          "customID": "ACTC9",
          "dataType": "Integer"
        },
        {
          "options": [
            {
              "extents": "StudioObject",
              "objectType": "AnswerOption",
              "dataType": "Integer",
              "label": {
                "ptBR": {
                  "extends": "StudioObject",
                  "objectType": "Label",
                  "oid": "",
                  "plainText": "Sim",
                  "formattedText": "Sim"
                },
                "enUS": {
                  "extends": "StudioObject",
                  "objectType": "Label",
                  "oid": "",
                  "plainText": "",
                  "formattedText": ""
                },
                "esES": {
                  "extends": "StudioObject",
                  "objectType": "Label",
                  "oid": "",
                  "plainText": "",
                  "formattedText": ""
                }
              },
              "value": 1,
              "extractionValue": "1"
            },
            {
              "extents": "StudioObject",
              "objectType": "AnswerOption",
              "dataType": "Integer",
              "label": {
                "ptBR": {
                  "extends": "StudioObject",
                  "objectType": "Label",
                  "oid": "",
                  "plainText": "Não",
                  "formattedText": "Não"
                },
                "enUS": {
                  "extends": "StudioObject",
                  "objectType": "Label",
                  "oid": "",
                  "plainText": "",
                  "formattedText": ""
                },
                "esES": {
                  "extends": "StudioObject",
                  "objectType": "Label",
                  "oid": "",
                  "plainText": "",
                  "formattedText": ""
                }
              },
              "value": 2,
              "extractionValue": "0"
            }
          ],
          "label": {
            "ptBR": {
              "extends": "StudioObject",
              "objectType": "Label",
              "oid": "",
              "plainText": "Alteração do Protocolo:",
              "formattedText": "Alteração do Protocolo:"
            },
            "enUS": {
              "extends": "StudioObject",
              "objectType": "Label",
              "oid": "",
              "plainText": "",
              "formattedText": ""
            },
            "esES": {
              "extends": "StudioObject",
              "objectType": "Label",
              "oid": "",
              "plainText": "",
              "formattedText": ""
            }
          },
          "metadata": {
            "extents": "StudioObject",
            "objectType": "MetadataGroup",
            "options": [
              {
                "extends": "StudioObject",
                "objectType": "MetadataAnswer",
                "dataType": "Integer",
                "value": 1,
                "extractionValue": ".Q",
                "label": {
                  "ptBR": {
                    "extends": "StudioObject",
                    "objectType": "Label",
                    "oid": "",
                    "plainText": "Não quer responder",
                    "formattedText": "<span style='letter-spacing: 0.14px;'>Não quer responder</span>"
                  },
                  "enUS": {
                    "extends": "StudioObject",
                    "objectType": "Label",
                    "oid": "",
                    "plainText": "",
                    "formattedText": ""
                  },
                  "esES": {
                    "extends": "StudioObject",
                    "objectType": "Label",
                    "oid": "",
                    "plainText": "",
                    "formattedText": ""
                  }
                }
              },
              {
                "extends": "StudioObject",
                "objectType": "MetadataAnswer",
                "dataType": "Integer",
                "value": 2,
                "extractionValue": ".S",
                "label": {
                  "ptBR": {
                    "extends": "StudioObject",
                    "objectType": "Label",
                    "oid": "",
                    "plainText": "Não sabe",
                    "formattedText": "<span style='letter-spacing: 0.14px;'>Não sabe</span>"
                  },
                  "enUS": {
                    "extends": "StudioObject",
                    "objectType": "Label",
                    "oid": "",
                    "plainText": "",
                    "formattedText": ""
                  },
                  "esES": {
                    "extends": "StudioObject",
                    "objectType": "Label",
                    "oid": "",
                    "plainText": "",
                    "formattedText": ""
                  }
                }
              },
              {
                "extends": "StudioObject",
                "objectType": "MetadataAnswer",
                "dataType": "Integer",
                "value": 3,
                "extractionValue": ".A",
                "label": {
                  "ptBR": {
                    "extends": "StudioObject",
                    "objectType": "Label",
                    "oid": "",
                    "plainText": "Não se aplica",
                    "formattedText": "<span style='letter-spacing: 0.14px;'>Não se aplica</span>"
                  },
                  "enUS": {
                    "extends": "StudioObject",
                    "objectType": "Label",
                    "oid": "",
                    "plainText": "",
                    "formattedText": ""
                  },
                  "esES": {
                    "extends": "StudioObject",
                    "objectType": "Label",
                    "oid": "",
                    "plainText": "",
                    "formattedText": ""
                  }
                }
              },
              {
                "extends": "StudioObject",
                "objectType": "MetadataAnswer",
                "dataType": "Integer",
                "value": 4,
                "extractionValue": ".F",
                "label": {
                  "ptBR": {
                    "extends": "StudioObject",
                    "objectType": "Label",
                    "oid": "",
                    "plainText": "Não há dados",
                    "formattedText": "<span style='letter-spacing: 0.14px;'>Não há dados</span>"
                  },
                  "enUS": {
                    "extends": "StudioObject",
                    "objectType": "Label",
                    "oid": "",
                    "plainText": "",
                    "formattedText": ""
                  },
                  "esES": {
                    "extends": "StudioObject",
                    "objectType": "Label",
                    "oid": "",
                    "plainText": "",
                    "formattedText": ""
                  }
                }
              }
            ]
          },
          "fillingRules": {
            "extends": "StudioObject",
            "objectType": "FillingRules",
            "options": {
              "mandatory": {
                "data": {
                  "reference": true,
                  "canBeIgnored": false
                },
                "extends": "StudioObject",
                "objectType": "Rule",
                "validatorType": "mandatory"
              }
            }
          },
          "extents": "SurveyItem",
          "objectType": "SingleSelectionQuestion",
          "templateID": "ACTDC4",
          "customID": "ACTCalt",
          "dataType": "Integer"
        },
        {
          "options": [
            {
              "extents": "StudioObject",
              "objectType": "CheckboxAnswerOption",
              "optionID": "ACTCaltqa",
              "customOptionID": "ACTCalt1",
              "dataType": "Boolean",
              "label": {
                "ptBR": {
                  "extends": "StudioObject",
                  "objectType": "Label",
                  "oid": "",
                  "plainText": "Não utilizou o actígrafo durante toda a semana",
                  "formattedText": "Não utilizou o actígrafo durante toda a semana"
                },
                "enUS": {
                  "extends": "StudioObject",
                  "objectType": "Label",
                  "oid": "",
                  "plainText": "",
                  "formattedText": ""
                },
                "esES": {
                  "extends": "StudioObject",
                  "objectType": "Label",
                  "oid": "",
                  "plainText": "",
                  "formattedText": ""
                }
              }
            },
            {
              "extents": "StudioObject",
              "objectType": "CheckboxAnswerOption",
              "optionID": "ACTCaltqb",
              "customOptionID": "ACTCalt2",
              "dataType": "Boolean",
              "label": {
                "ptBR": {
                  "extends": "StudioObject",
                  "objectType": "Label",
                  "oid": "",
                  "plainText": "O actígrafo teve problemas de funcionamento",
                  "formattedText": "O actígrafo teve problemas de funcionamento"
                },
                "enUS": {
                  "extends": "StudioObject",
                  "objectType": "Label",
                  "oid": "",
                  "plainText": "",
                  "formattedText": ""
                },
                "esES": {
                  "extends": "StudioObject",
                  "objectType": "Label",
                  "oid": "",
                  "plainText": "",
                  "formattedText": ""
                }
              }
            },
            {
              "extents": "StudioObject",
              "objectType": "CheckboxAnswerOption",
              "optionID": "ACTCaltqc",
              "customOptionID": "ACTCalt3",
              "dataType": "Boolean",
              "label": {
                "ptBR": {
                  "extends": "StudioObject",
                  "objectType": "Label",
                  "oid": "",
                  "plainText": "Outra",
                  "formattedText": "Outra"
                },
                "enUS": {
                  "extends": "StudioObject",
                  "objectType": "Label",
                  "oid": "",
                  "plainText": "",
                  "formattedText": ""
                },
                "esES": {
                  "extends": "StudioObject",
                  "objectType": "Label",
                  "oid": "",
                  "plainText": "",
                  "formattedText": ""
                }
              }
            }
          ],
          "label": {
            "ptBR": {
              "extends": "StudioObject",
              "objectType": "Label",
              "oid": "",
              "plainText": "Alteração do Protocolo - Qual:",
              "formattedText": "Alteração do Protocolo - Qual:"
            },
            "enUS": {
              "extends": "StudioObject",
              "objectType": "Label",
              "oid": "",
              "plainText": "",
              "formattedText": ""
            },
            "esES": {
              "extends": "StudioObject",
              "objectType": "Label",
              "oid": "",
              "plainText": "",
              "formattedText": ""
            }
          },
          "metadata": {
            "extents": "StudioObject",
            "objectType": "MetadataGroup",
            "options": []
          },
          "fillingRules": {
            "extends": "StudioObject",
            "objectType": "FillingRules",
            "options": {
              "mandatory": {
                "data": {
                  "reference": true,
                  "canBeIgnored": false
                },
                "extends": "StudioObject",
                "objectType": "Rule",
                "validatorType": "mandatory"
              }
            }
          },
          "extents": "SurveyItem",
          "objectType": "CheckboxQuestion",
          "templateID": "ACTDC5",
          "customID": "ACTCaltq",
          "dataType": "Array"
        },
        {
          "label": {
            "ptBR": {
              "extends": "StudioObject",
              "objectType": "Label",
              "oid": "",
              "plainText": "Outra (especifique:",
              "formattedText": "Outra (especifique:"
            },
            "enUS": {
              "extends": "StudioObject",
              "objectType": "Label",
              "oid": "",
              "plainText": "",
              "formattedText": ""
            },
            "esES": {
              "extends": "StudioObject",
              "objectType": "Label",
              "oid": "",
              "plainText": "",
              "formattedText": ""
            }
          },
          "metadata": {
            "extents": "StudioObject",
            "objectType": "MetadataGroup",
            "options": [
              {
                "extends": "StudioObject",
                "objectType": "MetadataAnswer",
                "dataType": "Integer",
                "value": 1,
                "extractionValue": ".Q",
                "label": {
                  "ptBR": {
                    "extends": "StudioObject",
                    "objectType": "Label",
                    "oid": "",
                    "plainText": "Não quer responder",
                    "formattedText": "<span style='letter-spacing: 0.14px;'>Não quer responder</span>"
                  },
                  "enUS": {
                    "extends": "StudioObject",
                    "objectType": "Label",
                    "oid": "",
                    "plainText": "",
                    "formattedText": ""
                  },
                  "esES": {
                    "extends": "StudioObject",
                    "objectType": "Label",
                    "oid": "",
                    "plainText": "",
                    "formattedText": ""
                  }
                }
              },
              {
                "extends": "StudioObject",
                "objectType": "MetadataAnswer",
                "dataType": "Integer",
                "value": 2,
                "extractionValue": ".S",
                "label": {
                  "ptBR": {
                    "extends": "StudioObject",
                    "objectType": "Label",
                    "oid": "",
                    "plainText": "Não sabe",
                    "formattedText": "<span style='letter-spacing: 0.14px;'>Não sabe</span>"
                  },
                  "enUS": {
                    "extends": "StudioObject",
                    "objectType": "Label",
                    "oid": "",
                    "plainText": "",
                    "formattedText": ""
                  },
                  "esES": {
                    "extends": "StudioObject",
                    "objectType": "Label",
                    "oid": "",
                    "plainText": "",
                    "formattedText": ""
                  }
                }
              },
              {
                "extends": "StudioObject",
                "objectType": "MetadataAnswer",
                "dataType": "Integer",
                "value": 3,
                "extractionValue": ".A",
                "label": {
                  "ptBR": {
                    "extends": "StudioObject",
                    "objectType": "Label",
                    "oid": "",
                    "plainText": "Não se aplica",
                    "formattedText": "<span style='letter-spacing: 0.14px;'>Não se aplica</span>"
                  },
                  "enUS": {
                    "extends": "StudioObject",
                    "objectType": "Label",
                    "oid": "",
                    "plainText": "",
                    "formattedText": ""
                  },
                  "esES": {
                    "extends": "StudioObject",
                    "objectType": "Label",
                    "oid": "",
                    "plainText": "",
                    "formattedText": ""
                  }
                }
              },
              {
                "extends": "StudioObject",
                "objectType": "MetadataAnswer",
                "dataType": "Integer",
                "value": 4,
                "extractionValue": ".F",
                "label": {
                  "ptBR": {
                    "extends": "StudioObject",
                    "objectType": "Label",
                    "oid": "",
                    "plainText": "Não há dados",
                    "formattedText": "<span style='letter-spacing: 0.14px;'>Não há dados</span>"
                  },
                  "enUS": {
                    "extends": "StudioObject",
                    "objectType": "Label",
                    "oid": "",
                    "plainText": "",
                    "formattedText": ""
                  },
                  "esES": {
                    "extends": "StudioObject",
                    "objectType": "Label",
                    "oid": "",
                    "plainText": "",
                    "formattedText": ""
                  }
                }
              }
            ]
          },
          "fillingRules": {
            "extends": "StudioObject",
            "objectType": "FillingRules",
            "options": {
              "minLength": {
                "data": {
                  "reference": 1,
                  "canBeIgnored": true
                },
                "extends": "StudioObject",
                "objectType": "Rule",
                "validatorType": "minLength"
              },
              "mandatory": {
                "data": {
                  "reference": true,
                  "canBeIgnored": false
                },
                "extends": "StudioObject",
                "objectType": "Rule",
                "validatorType": "mandatory"
              },
              "maxLength": {
                "data": {
                  "reference": 300,
                  "canBeIgnored": true
                },
                "extends": "StudioObject",
                "objectType": "Rule",
                "validatorType": "maxLength"
              }
            }
          },
          "extents": "SurveyItem",
          "objectType": "TextQuestion",
          "templateID": "ACTDC6",
          "customID": "ACTCaltqou",
          "dataType": "String"
        },
        {
          "label": {
            "ptBR": {
              "extends": "StudioObject",
              "objectType": "Label",
              "oid": "",
              "plainText": "Upload Arquivo(s",
              "formattedText": "Upload Arquivo(s"
            },
            "enUS": {
              "extends": "StudioObject",
              "objectType": "Label",
              "oid": "",
              "plainText": "",
              "formattedText": ""
            },
            "esES": {
              "extends": "StudioObject",
              "objectType": "Label",
              "oid": "",
              "plainText": "",
              "formattedText": ""
            }
          },
          "metadata": {
            "extents": "StudioObject",
            "objectType": "MetadataGroup",
            "options": [
              {
                "extends": "StudioObject",
                "objectType": "MetadataAnswer",
                "dataType": "Integer",
                "value": 1,
                "extractionValue": ".Q",
                "label": {
                  "ptBR": {
                    "extends": "StudioObject",
                    "objectType": "Label",
                    "oid": "",
                    "plainText": "Não quer responder",
                    "formattedText": "<span style='letter-spacing: 0.14px;'>Não quer responder</span>"
                  },
                  "enUS": {
                    "extends": "StudioObject",
                    "objectType": "Label",
                    "oid": "",
                    "plainText": "",
                    "formattedText": ""
                  },
                  "esES": {
                    "extends": "StudioObject",
                    "objectType": "Label",
                    "oid": "",
                    "plainText": "",
                    "formattedText": ""
                  }
                }
              },
              {
                "extends": "StudioObject",
                "objectType": "MetadataAnswer",
                "dataType": "Integer",
                "value": 2,
                "extractionValue": ".S",
                "label": {
                  "ptBR": {
                    "extends": "StudioObject",
                    "objectType": "Label",
                    "oid": "",
                    "plainText": "Não sabe",
                    "formattedText": "<span style='letter-spacing: 0.14px;'>Não sabe</span>"
                  },
                  "enUS": {
                    "extends": "StudioObject",
                    "objectType": "Label",
                    "oid": "",
                    "plainText": "",
                    "formattedText": ""
                  },
                  "esES": {
                    "extends": "StudioObject",
                    "objectType": "Label",
                    "oid": "",
                    "plainText": "",
                    "formattedText": ""
                  }
                }
              },
              {
                "extends": "StudioObject",
                "objectType": "MetadataAnswer",
                "dataType": "Integer",
                "value": 3,
                "extractionValue": ".A",
                "label": {
                  "ptBR": {
                    "extends": "StudioObject",
                    "objectType": "Label",
                    "oid": "",
                    "plainText": "Não se aplica",
                    "formattedText": "<span style='letter-spacing: 0.14px;'>Não se aplica</span>"
                  },
                  "enUS": {
                    "extends": "StudioObject",
                    "objectType": "Label",
                    "oid": "",
                    "plainText": "",
                    "formattedText": ""
                  },
                  "esES": {
                    "extends": "StudioObject",
                    "objectType": "Label",
                    "oid": "",
                    "plainText": "",
                    "formattedText": ""
                  }
                }
              },
              {
                "extends": "StudioObject",
                "objectType": "MetadataAnswer",
                "dataType": "Integer",
                "value": 4,
                "extractionValue": ".F",
                "label": {
                  "ptBR": {
                    "extends": "StudioObject",
                    "objectType": "Label",
                    "oid": "",
                    "plainText": "Não há dados",
                    "formattedText": "<span style='letter-spacing: 0.14px;'>Não há dados</span>"
                  },
                  "enUS": {
                    "extends": "StudioObject",
                    "objectType": "Label",
                    "oid": "",
                    "plainText": "",
                    "formattedText": ""
                  },
                  "esES": {
                    "extends": "StudioObject",
                    "objectType": "Label",
                    "oid": "",
                    "plainText": "",
                    "formattedText": ""
                  }
                }
              }
            ]
          },
          "fillingRules": {
            "extends": "StudioObject",
            "objectType": "FillingRules",
            "options": {
              "mandatory": {
                "data": {
                  "reference": false,
                  "canBeIgnored": false
                },
                "extends": "StudioObject",
                "objectType": "Rule",
                "validatorType": "mandatory"
              }
            }
          },
          "extents": "SurveyItem",
          "objectType": "FileUploadQuestion",
          "templateID": "ACTDC7",
          "customID": "ACTCupload",
          "dataType": "Binary"
        },
        {
          "value": {
            "ptBR": {
              "extends": "StudioObject",
              "objectType": "Label",
              "oid": "",
              "plainText": "Obrigado(a.",
              "formattedText": "<i>Obrigado(a.</i>"
            },
            "enUS": {
              "extends": "StudioObject",
              "objectType": "Label",
              "oid": "",
              "plainText": "",
              "formattedText": ""
            },
            "esES": {
              "extends": "StudioObject",
              "objectType": "Label",
              "oid": "",
              "plainText": "",
              "formattedText": ""
            }
          },
          "extents": "SurveyItem",
          "objectType": "TextItem",
          "templateID": "ACTDC8",
          "customID": "ACTDCZ",
          "dataType": "String"
        }
      ],
      "navigationList": [
        {
          "extents": "SurveyTemplateObject",
          "objectType": "Navigation",
          "origin": "BEGIN NODE",
          "index": 0,
          "inNavigations": [],
          "isDefault": false,
          "routes": [
            {
              "extents": "SurveyTemplateObject",
              "objectType": "Route",
              "origin": "BEGIN NODE",
              "destination": "ACTDC1",
              "name": "BEGIN NODE_ACTDC1",
              "isDefault": true,
              "conditions": []
            }
          ]
        },
        {
          "extents": "SurveyTemplateObject",
          "objectType": "Navigation",
          "origin": "END NODE",
          "index": 1,
          "inNavigations": [
            {
              "origin": "ACTDC8"
            }
          ],
          "isDefault": false,
          "routes": []
        },
        {
          "extents": "SurveyTemplateObject",
          "objectType": "Navigation",
          "origin": "ACTDC1",
          "index": 2,
          "inNavigations": [
            {
              "origin": "BEGIN NODE"
            }
          ],
          "isDefault": false,
          "routes": [
            {
              "extents": "SurveyTemplateObject",
              "objectType": "Route",
              "origin": "ACTDC1",
              "destination": "ACTDC2",
              "name": "ACTDC1_ACTDC2",
              "isDefault": true,
              "conditions": []
            }
          ]
        },
        {
          "extents": "SurveyTemplateObject",
          "objectType": "Navigation",
          "origin": "ACTDC2",
          "index": 3,
          "inNavigations": [
            {
              "origin": "ACTDC1"
            }
          ],
          "isDefault": false,
          "routes": [
            {
              "extents": "SurveyTemplateObject",
              "objectType": "Route",
              "origin": "ACTDC2",
              "destination": "ACTDC3",
              "name": "ACTDC2_ACTDC3",
              "isDefault": true,
              "conditions": []
            }
          ]
        },
        {
          "extents": "SurveyTemplateObject",
          "objectType": "Navigation",
          "origin": "ACTDC3",
          "index": 4,
          "inNavigations": [
            {
              "origin": "ACTDC2"
            }
          ],
          "isDefault": false,
          "routes": [
            {
              "extents": "SurveyTemplateObject",
              "objectType": "Route",
              "origin": "ACTDC3",
              "destination": "ACTDC4",
              "name": "ACTDC3_ACTDC4",
              "isDefault": true,
              "conditions": []
            }
          ]
        },
        {
          "extents": "SurveyTemplateObject",
          "objectType": "Navigation",
          "origin": "ACTDC4",
          "index": 5,
          "inNavigations": [
            {
              "origin": "ACTDC3"
            }
          ],
          "isDefault": false,
          "routes": [
            {
              "extents": "SurveyTemplateObject",
              "objectType": "Route",
              "origin": "ACTDC4",
              "destination": "ACTDC7",
              "name": "ACTDC4_ACTDC7",
              "isDefault": true,
              "conditions": []
            },
            {
              "extents": "SurveyTemplateObject",
              "objectType": "Route",
              "origin": "ACTDC4",
              "destination": "ACTDC5",
              "name": "ACTDC4_ACTDC5",
              "isDefault": false,
              "conditions": [
                {
                  "extents": "StudioObject",
                  "objectType": "RouteCondition",
                  "name": "ROUTE_CONDITION_0",
                  "rules": [
                    {
                      "extents": "SurveyTemplateObject",
                      "objectType": "Rule",
                      "when": "ACTDC4",
                      "operator": "equal",
                      "answer": "1",
                      "isMetadata": false,
                      "isCustom": false
                    }
                  ]
                }
              ]
            }
          ]
        },
        {
          "extents": "SurveyTemplateObject",
          "objectType": "Navigation",
          "origin": "ACTDC5",
          "index": 6,
          "inNavigations": [
            {
              "origin": "ACTDC4"
            }
          ],
          "isDefault": false,
          "routes": [
            {
              "extents": "SurveyTemplateObject",
              "objectType": "Route",
              "origin": "ACTDC5",
              "destination": "ACTDC7",
              "name": "ACTDC5_ACTDC7",
              "isDefault": true,
              "conditions": []
            },
            {
              "extents": "SurveyTemplateObject",
              "objectType": "Route",
              "origin": "ACTDC5",
              "destination": "ACTDC6",
              "name": "ACTDC5_ACTDC6",
              "isDefault": false,
              "conditions": [
                {
                  "extents": "StudioObject",
                  "objectType": "RouteCondition",
                  "name": "ROUTE_CONDITION_0",
                  "rules": [
                    {
                      "extents": "SurveyTemplateObject",
                      "objectType": "Rule",
                      "when": "ACTDC5",
                      "operator": "contains",
                      "answer": "ACTCalt3",
                      "isMetadata": false,
                      "isCustom": true
                    }
                  ]
                }
              ]
            }
          ]
        },
        {
          "extents": "SurveyTemplateObject",
          "objectType": "Navigation",
          "origin": "ACTDC6",
          "index": 7,
          "inNavigations": [
            {
              "origin": "ACTDC5"
            }
          ],
          "isDefault": false,
          "routes": [
            {
              "extents": "SurveyTemplateObject",
              "objectType": "Route",
              "origin": "ACTDC6",
              "destination": "ACTDC7",
              "name": "ACTDC6_ACTDC7",
              "isDefault": true,
              "conditions": []
            }
          ]
        },
        {
          "extents": "SurveyTemplateObject",
          "objectType": "Navigation",
          "origin": "ACTDC7",
          "index": 8,
          "inNavigations": [
            {
              "origin": "ACTDC6"
            },
            {
              "origin": "ACTDC4"
            },
            {
              "origin": "ACTDC5"
            }
          ],
          "isDefault": false,
          "routes": [
            {
              "extents": "SurveyTemplateObject",
              "objectType": "Route",
              "origin": "ACTDC7",
              "destination": "ACTDC8",
              "name": "ACTDC7_ACTDC8",
              "isDefault": true,
              "conditions": []
            }
          ]
        },
        {
          "extents": "SurveyTemplateObject",
          "objectType": "Navigation",
          "origin": "ACTDC8",
          "index": 9,
          "inNavigations": [
            {
              "origin": "ACTDC7"
            }
          ],
          "isDefault": false,
          "routes": [
            {
              "extents": "SurveyTemplateObject",
              "objectType": "Route",
              "origin": "ACTDC8",
              "destination": "END NODE",
              "name": "ACTDC8_END NODE",
              "isDefault": true,
              "conditions": []
            }
          ]
        }
      ]
    },
    "version": 1,
    "isDiscarded": false,
    "toJSON": () => { return data.survey }
  },
  data.participant = {
    "_id": "5f0333dd9deac667e0c1461f",
    "recruitmentNumber": 755555,
    "name": "Carolina",
    "sex": "F",
    "birthdate": {
      "objectType": "ImmutableDate",
      "value": "2018-09-28 00:00:00.000"
    },
    "fieldCenter": {
      "code": 5,
      "acronym": "BA"
    },
    "late": false,
    "email": "",
    "password": "gf6L/odXbD7LIkJvjleEc4KRes8=",
    "tokenList": [],
    "toJSON": () => { return data.participant }
  }

export default data
