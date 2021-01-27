let data: any = {}

data.activity = {
  "activityId": "5a3aad9828f10d10437110de",
  "acronym": "ACTDC",
  "version": 1,
  "recruitment_number": "5001007",
  "participant_field_center": "RJ",
  "mode": "ONLINE",
  "type": "",
  "category": "C0",
  "participant_field_center_by_activity": "RJ",
  "interviewer": "fulano@gmail.com",
  "current_status": "FINALIZED",
  "current_status_date": "2020-12-18T16:59:41.188",
  "creation_date": "2020-12-18T16:55:55.511",
  "paper_realization_date": "",
  "paper_interviewer": "",
  "last_finalization_date": "2020-12-18T16:55:55.511",
  "external_id": "123",
  "fillingList": JSON.stringify( [
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
      "customID": null,
      "answer": {
        "value": [
          {
            "objectType": "FileAnswer",
            "name": "relatorio_elea_ehr.png",
            "size": 46509,
            "type": "image/png",
            "sentDate": "2020-12-07T19:33:59.089Z",
            "oid": "5fd3da52a165ba2acae71a55"
          }
        ],
        "objectType": "AnswerFill",
        "type": "FileUploadQuestion"
      },
      "forceAnswer": false,
      "metadata": {
        "objectType": "MetadataFill",
        "value": null
      },
      "comment": ""
    }
  ]),
  "navigationTrackingItems": [
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
  "toJSON": () => { return data.activity }
},
  data.survey = {
    "id": "5b60d280bc2b237a56650274",
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
    "toJSON": () => { return data.survey }
  },
  data.extractionsActivityAll = {
    activity: {
      "activityId": "5a3aad9828f10d10437110de",
      "acronym": "ACTDC",
      "version": 1,
      "recruitment_number": "5001007",
      "participant_field_center": "RJ",
      "mode": "ONLINE",
      "type": "",
      "category": "C0",
      "participant_field_center_by_activity": "RJ",
      "interviewer": "fulano@gmail.com",
      "current_status": "FINALIZED",
      "current_status_date": "2020-12-18T16:59:41.188",
      "creation_date": "2020-12-18T16:55:55.511",
      "paper_realization_date": "",
      "paper_interviewer": "",
      "last_finalization_date": "2020-12-18T16:55:55.511",
      "external_id": "123",
      "fillingList": JSON.stringify([
        {
          "objectType": "QuestionFill",
          "questionID": "ALL1",
          "customID": null,
          "answer": {
            "value": null,
            "objectType": "AnswerFill",
            "type": "CalendarQuestion"
          },
          "forceAnswer": false,
          "metadata": {
            "objectType": "MetadataFill",
            "value": "2"
          },
          "comment": ""
        },
        {
          "objectType": "QuestionFill",
          "questionID": "ALL4",
          "customID": null,
          "answer": {
            "value": null,
            "objectType": "AnswerFill",
            "type": "DecimalQuestion"
          },
          "forceAnswer": false,
          "metadata": {
            "objectType": "MetadataFill",
            "value": "2"
          },
          "comment": ""
        },
        {
          "objectType": "QuestionFill",
          "questionID": "ALL5",
          "customID": null,
          "answer": {
            "value": 1,
            "objectType": "AnswerFill",
            "type": "SingleSelectionQuestion"
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
          "questionID": "ALL6",
          "customID": null,
          "answer": {
            "value": "2",
            "objectType": "AnswerFill",
            "type": "SingleSelectionQuestion"
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
          "questionID": "ALL7",
          "customID": null,
          "answer": {
            "value": [
              {
                "option": "ALL7a",
                "state": false
              },
              {
                "option": "ALL7b",
                "state": true
              },
              {
                "option": "ALL7c",
                "state": false
              },
              {
                "option": "ALL7d",
                "state": false
              }
            ],
            "objectType": "AnswerFill",
            "type": "CheckboxQuestion"
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
          "questionID": "ALL9",
          "customID": null,
          "answer": {
            "value": null,
            "objectType": "AnswerFill",
            "type": "EmailQuestion"
          },
          "forceAnswer": false,
          "metadata": {
            "objectType": "MetadataFill",
            "value": "2"
          },
          "comment": ""
        },
        {
          "objectType": "QuestionFill",
          "questionID": "ALL2",
          "customID": null,
          "answer": {
            "value": null,
            "objectType": "AnswerFill",
            "type": "AutocompleteQuestion"
          },
          "forceAnswer": false,
          "metadata": {
            "objectType": "MetadataFill",
            "value": "2"
          },
          "comment": ""
        },
        {
          "objectType": "QuestionFill",
          "questionID": "ALL3",
          "customID": null,
          "answer": {
            "value": null,
            "objectType": "AnswerFill",
            "type": "IntegerQuestion"
          },
          "forceAnswer": false,
          "metadata": {
            "objectType": "MetadataFill",
            "value": "2"
          },
          "comment": ""
        },
        {
          "objectType": "QuestionFill",
          "questionID": "ALL8",
          "customID": null,
          "answer": {
            "value": null,
            "objectType": "AnswerFill",
            "type": "TextQuestion"
          },
          "forceAnswer": false,
          "metadata": {
            "objectType": "MetadataFill",
            "value": "2"
          },
          "comment": ""
        },
        {
          "objectType": "QuestionFill",
          "questionID": "ALL10",
          "customID": null,
          "answer": {
            "value": null,
            "objectType": "AnswerFill",
            "type": "TimeQuestion"
          },
          "forceAnswer": false,
          "metadata": {
            "objectType": "MetadataFill",
            "value": "2"
          },
          "comment": ""
        },
        {
          "objectType": "QuestionFill",
          "questionID": "ALL11",
          "customID": null,
          "answer": {
            "value": null,
            "objectType": "AnswerFill",
            "type": "PhoneQuestion"
          },
          "forceAnswer": false,
          "metadata": {
            "objectType": "MetadataFill",
            "value": "2"
          },
          "comment": ""
        },
        {
          "objectType": "QuestionFill",
          "questionID": "ALL15",
          "customID": null,
          "answer": {
            "value": [
              [
                {
                  "objectType": "GridTextAnswer",
                  "gridText": "ALL15a",
                  "value": "ferro;vitamina c"
                },
                {
                  "objectType": "GridTextAnswer",
                  "gridText": "ALL15b",
                  "value": "15;200"
                },
                {
                  "objectType": "GridTextAnswer",
                  "gridText": "ALL15c",
                  "value": "mg;mg"
                }
              ]
            ],
            "objectType": "AnswerFill",
            "type": "GridTextQuestion"
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
          "questionID": "ALL16",
          "customID": null,
          "answer": {
            "value": [
              [
                {
                  "objectType": "GridTextAnswer",
                  "gridText": "ALL16a",
                  "value": 1
                },
                {
                  "objectType": "GridTextAnswer",
                  "gridText": "ALL16b",
                  "value": 6
                },
                {
                  "objectType": "GridTextAnswer",
                  "gridText": "ALL16c",
                  "value": 7
                },
                {
                  "objectType": "GridTextAnswer",
                  "gridText": "ALL16d",
                  "value": 7
                },
                {
                  "objectType": "GridTextAnswer",
                  "gridText": "ALL16e",
                  "value": 7
                },
                {
                  "objectType": "GridTextAnswer",
                  "gridText": "ALL16f",
                  "value": 7
                }
              ]
            ],
            "objectType": "AnswerFill",
            "type": "GridIntegerQuestion"
          },
          "forceAnswer": false,
          "metadata": {
            "objectType": "MetadataFill",
            "value": null
          },
          "comment": ""
        }
      ]),
      "navigationTrackingItems": []
    },
    survey: {
      "id": "5eb9523b075bcf399151a4e8",
      "itemContainer": [
        {
          "label": {
            "ptBR": {
              "extends": "StudioObject",
              "objectType": "Label",
              "oid": "",
              "plainText": "Data",
              "formattedText": "Data"
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
                "extractionValue": "1",
                "label": {
                  "ptBR": {
                    "extends": "StudioObject",
                    "objectType": "Label",
                    "oid": "",
                    "plainText": "M1 aaaaaaaaaaaaa bbbbbbbbbbbcccccccccc",
                    "formattedText": "M1 aaaaaaaaaaaaa bbbbbbbbbbbcccccccccc"
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
                "extractionValue": "2",
                "label": {
                  "ptBR": {
                    "extends": "StudioObject",
                    "objectType": "Label",
                    "oid": "",
                    "plainText": "M2 ",
                    "formattedText": "M2&nbsp;"
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
                "extractionValue": "3",
                "label": {
                  "ptBR": {
                    "extends": "StudioObject",
                    "objectType": "Label",
                    "oid": "",
                    "plainText": "M3",
                    "formattedText": "M3"
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
              "minDate": {
                "data": {
                  "reference": {
                    "objectType": "ImmutableDate",
                    "value": "1950-01-01 00:00:00.000"
                  },
                  "canBeIgnored": true
                },
                "extends": "StudioObject",
                "objectType": "Rule",
                "validatorType": "minDate"
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
          "templateID": "ALL1",
          "customID": "ALL1",
          "dataType": "LocalDate"
        },
        {
          "dataSources": [
            "medicamentos"
          ],
          "label": {
            "ptBR": {
              "extends": "StudioObject",
              "objectType": "Label",
              "oid": "",
              "plainText": "Autocomplete",
              "formattedText": "Autocomplete"
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
                "extractionValue": "1",
                "label": {
                  "ptBR": {
                    "extends": "StudioObject",
                    "objectType": "Label",
                    "oid": "",
                    "plainText": "M1 aaaaaaaaaaaaa bbbbbbbbbbbcccccccccc",
                    "formattedText": "M1 aaaaaaaaaaaaa bbbbbbbbbbbcccccccccc"
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
                "extractionValue": "2",
                "label": {
                  "ptBR": {
                    "extends": "StudioObject",
                    "objectType": "Label",
                    "oid": "",
                    "plainText": "M2 ",
                    "formattedText": "M2&nbsp;"
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
                "extractionValue": "3",
                "label": {
                  "ptBR": {
                    "extends": "StudioObject",
                    "objectType": "Label",
                    "oid": "",
                    "plainText": "M3",
                    "formattedText": "M3"
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
          "objectType": "AutocompleteQuestion",
          "templateID": "ALL2",
          "customID": "ALL2",
          "dataType": "String"
        },
        {
          "unit": {
            "ptBR": {
              "extends": "StudioObject",
              "objectType": "Unit",
              "oid": "",
              "plainText": "",
              "formattedText": ""
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
              "plainText": "inteiro",
              "formattedText": "inteiro"
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
                "extractionValue": "1",
                "label": {
                  "ptBR": {
                    "extends": "StudioObject",
                    "objectType": "Label",
                    "oid": "",
                    "plainText": "M1 aaaaaaaaaaaaa bbbbbbbbbbbcccccccccc",
                    "formattedText": "M1 aaaaaaaaaaaaa bbbbbbbbbbbcccccccccc"
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
                "extractionValue": "2",
                "label": {
                  "ptBR": {
                    "extends": "StudioObject",
                    "objectType": "Label",
                    "oid": "",
                    "plainText": "M2 ",
                    "formattedText": "M2&nbsp;"
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
                "extractionValue": "3",
                "label": {
                  "ptBR": {
                    "extends": "StudioObject",
                    "objectType": "Label",
                    "oid": "",
                    "plainText": "M3",
                    "formattedText": "M3"
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
          "templateID": "ALL3",
          "customID": "ALL3",
          "dataType": "Integer"
        },
        {
          "unit": {
            "ptBR": {
              "extends": "StudioObject",
              "objectType": "Unit",
              "oid": "",
              "plainText": "",
              "formattedText": ""
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
              "plainText": "DECIMAL",
              "formattedText": "DECIMAL"
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
                "extractionValue": "1",
                "label": {
                  "ptBR": {
                    "extends": "StudioObject",
                    "objectType": "Label",
                    "oid": "",
                    "plainText": "M1 aaaaaaaaaaaaa bbbbbbbbbbbcccccccccc",
                    "formattedText": "M1 aaaaaaaaaaaaa bbbbbbbbbbbcccccccccc"
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
                "extractionValue": "2",
                "label": {
                  "ptBR": {
                    "extends": "StudioObject",
                    "objectType": "Label",
                    "oid": "",
                    "plainText": "M2 ",
                    "formattedText": "M2&nbsp;"
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
                "extractionValue": "3",
                "label": {
                  "ptBR": {
                    "extends": "StudioObject",
                    "objectType": "Label",
                    "oid": "",
                    "plainText": "M3",
                    "formattedText": "M3"
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
          "objectType": "DecimalQuestion",
          "templateID": "ALL4",
          "customID": "ALL4",
          "dataType": "Decimal"
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
                  "plainText": "op1",
                  "formattedText": "op1"
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
                  "plainText": "op2",
                  "formattedText": "op2"
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
              "extractionValue": "2"
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
                  "plainText": "op3",
                  "formattedText": "op3"
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
              "value": 3,
              "extractionValue": "3"
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
                  "plainText": "op4",
                  "formattedText": "op4"
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
              "value": 4,
              "extractionValue": "4"
            }
          ],
          "label": {
            "ptBR": {
              "extends": "StudioObject",
              "objectType": "Label",
              "oid": "",
              "plainText": "SIngle Selection",
              "formattedText": "SIngle Selection"
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
                "extractionValue": "1",
                "label": {
                  "ptBR": {
                    "extends": "StudioObject",
                    "objectType": "Label",
                    "oid": "",
                    "plainText": "M1 aaaaaaaaaaaaa bbbbbbbbbbbcccccccccc",
                    "formattedText": "M1 aaaaaaaaaaaaa bbbbbbbbbbbcccccccccc"
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
                "extractionValue": "2",
                "label": {
                  "ptBR": {
                    "extends": "StudioObject",
                    "objectType": "Label",
                    "oid": "",
                    "plainText": "M2 ",
                    "formattedText": "M2&nbsp;"
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
                "extractionValue": "3",
                "label": {
                  "ptBR": {
                    "extends": "StudioObject",
                    "objectType": "Label",
                    "oid": "",
                    "plainText": "M3",
                    "formattedText": "M3"
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
          "templateID": "ALL5",
          "customID": "ALL5",
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
                  "plainText": "op 11111111111111111111111111111111111111111111111111",
                  "formattedText": "op 11111111111111111111111111111111111111111111111111"
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
                  "plainText": "op 22222222222222222222222222222222222",
                  "formattedText": "op 22222222222222222222222222222222222"
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
              "extractionValue": "2"
            }
          ],
          "label": {
            "ptBR": {
              "extends": "StudioObject",
              "objectType": "Label",
              "oid": "",
              "plainText": "Single Selection com opções longas",
              "formattedText": "Single Selection com opções longas"
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
                "extractionValue": "1",
                "label": {
                  "ptBR": {
                    "extends": "StudioObject",
                    "objectType": "Label",
                    "oid": "",
                    "plainText": "M1 aaaaaaaaaaaaa bbbbbbbbbbbcccccccccc",
                    "formattedText": "M1 aaaaaaaaaaaaa bbbbbbbbbbbcccccccccc"
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
                "extractionValue": "2",
                "label": {
                  "ptBR": {
                    "extends": "StudioObject",
                    "objectType": "Label",
                    "oid": "",
                    "plainText": "M2 ",
                    "formattedText": "M2&nbsp;"
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
                "extractionValue": "3",
                "label": {
                  "ptBR": {
                    "extends": "StudioObject",
                    "objectType": "Label",
                    "oid": "",
                    "plainText": "M3",
                    "formattedText": "M3"
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
          "templateID": "ALL6",
          "customID": "ALL6",
          "dataType": "Integer"
        },
        {
          "options": [
            {
              "extents": "StudioObject",
              "objectType": "CheckboxAnswerOption",
              "optionID": "ALL7a",
              "customOptionID": "ALL7a",
              "dataType": "Boolean",
              "label": {
                "ptBR": {
                  "extends": "StudioObject",
                  "objectType": "Label",
                  "oid": "",
                  "plainText": "op1",
                  "formattedText": "op1"
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
              "optionID": "ALL7b",
              "customOptionID": "ALL7b",
              "dataType": "Boolean",
              "label": {
                "ptBR": {
                  "extends": "StudioObject",
                  "objectType": "Label",
                  "oid": "",
                  "plainText": "op2",
                  "formattedText": "op2"
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
              "optionID": "ALL7c",
              "customOptionID": "ALL7c",
              "dataType": "Boolean",
              "label": {
                "ptBR": {
                  "extends": "StudioObject",
                  "objectType": "Label",
                  "oid": "",
                  "plainText": "op3",
                  "formattedText": "op3"
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
              "optionID": "ALL7d",
              "customOptionID": "ALL7d",
              "dataType": "Boolean",
              "label": {
                "ptBR": {
                  "extends": "StudioObject",
                  "objectType": "Label",
                  "oid": "",
                  "plainText": "op4",
                  "formattedText": "op4"
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
              "plainText": "Checkbox",
              "formattedText": "Checkbox"
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
                "extractionValue": "1",
                "label": {
                  "ptBR": {
                    "extends": "StudioObject",
                    "objectType": "Label",
                    "oid": "",
                    "plainText": "M1 aaaaaaaaaaaaa bbbbbbbbbbbcccccccccc",
                    "formattedText": "M1 aaaaaaaaaaaaa bbbbbbbbbbbcccccccccc"
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
                "extractionValue": "2",
                "label": {
                  "ptBR": {
                    "extends": "StudioObject",
                    "objectType": "Label",
                    "oid": "",
                    "plainText": "M2 ",
                    "formattedText": "M2&nbsp;"
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
                "extractionValue": "3",
                "label": {
                  "ptBR": {
                    "extends": "StudioObject",
                    "objectType": "Label",
                    "oid": "",
                    "plainText": "M3",
                    "formattedText": "M3"
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
          "objectType": "CheckboxQuestion",
          "templateID": "ALL7",
          "customID": "ALL7",
          "dataType": "Array"
        },
        {
          "label": {
            "ptBR": {
              "extends": "StudioObject",
              "objectType": "Label",
              "oid": "",
              "plainText": "Texto",
              "formattedText": "Texto"
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
                "extractionValue": "1",
                "label": {
                  "ptBR": {
                    "extends": "StudioObject",
                    "objectType": "Label",
                    "oid": "",
                    "plainText": "M1 aaaaaaaaaaaaa bbbbbbbbbbbcccccccccc",
                    "formattedText": "M1 aaaaaaaaaaaaa bbbbbbbbbbbcccccccccc"
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
                "extractionValue": "2",
                "label": {
                  "ptBR": {
                    "extends": "StudioObject",
                    "objectType": "Label",
                    "oid": "",
                    "plainText": "M2 ",
                    "formattedText": "M2&nbsp;"
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
                "extractionValue": "3",
                "label": {
                  "ptBR": {
                    "extends": "StudioObject",
                    "objectType": "Label",
                    "oid": "",
                    "plainText": "M3",
                    "formattedText": "M3"
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
          "objectType": "TextQuestion",
          "templateID": "ALL8",
          "customID": "ALL8",
          "dataType": "String"
        },
        {
          "label": {
            "ptBR": {
              "extends": "StudioObject",
              "objectType": "Label",
              "oid": "",
              "plainText": "Email",
              "formattedText": "Email"
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
                "extractionValue": "1",
                "label": {
                  "ptBR": {
                    "extends": "StudioObject",
                    "objectType": "Label",
                    "oid": "",
                    "plainText": "M1 aaaaaaaaaaaaa bbbbbbbbbbbcccccccccc",
                    "formattedText": "M1 aaaaaaaaaaaaa bbbbbbbbbbbcccccccccc"
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
                "extractionValue": "2",
                "label": {
                  "ptBR": {
                    "extends": "StudioObject",
                    "objectType": "Label",
                    "oid": "",
                    "plainText": "M2 ",
                    "formattedText": "M2&nbsp;"
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
                "extractionValue": "3",
                "label": {
                  "ptBR": {
                    "extends": "StudioObject",
                    "objectType": "Label",
                    "oid": "",
                    "plainText": "M3",
                    "formattedText": "M3"
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
          "objectType": "EmailQuestion",
          "templateID": "ALL9",
          "customID": "ALL9",
          "dataType": "String"
        },
        {
          "options": {
            "extents": null,
            "objectType": "QuestionOption",
            "data": {

            }
          },
          "label": {
            "ptBR": {
              "extends": "StudioObject",
              "objectType": "Label",
              "oid": "",
              "plainText": "Hora",
              "formattedText": "Hora"
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
                "extractionValue": "1",
                "label": {
                  "ptBR": {
                    "extends": "StudioObject",
                    "objectType": "Label",
                    "oid": "",
                    "plainText": "M1 aaaaaaaaaaaaa bbbbbbbbbbbcccccccccc",
                    "formattedText": "M1 aaaaaaaaaaaaa bbbbbbbbbbbcccccccccc"
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
                "extractionValue": "2",
                "label": {
                  "ptBR": {
                    "extends": "StudioObject",
                    "objectType": "Label",
                    "oid": "",
                    "plainText": "M2 ",
                    "formattedText": "M2&nbsp;"
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
                "extractionValue": "3",
                "label": {
                  "ptBR": {
                    "extends": "StudioObject",
                    "objectType": "Label",
                    "oid": "",
                    "plainText": "M3",
                    "formattedText": "M3"
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
          "objectType": "TimeQuestion",
          "templateID": "ALL10",
          "customID": "ALL10",
          "dataType": "LocalTime"
        },
        {
          "label": {
            "ptBR": {
              "extends": "StudioObject",
              "objectType": "Label",
              "oid": "",
              "plainText": "Telefone minha casa",
              "formattedText": "Telefone minha casa"
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
                "extractionValue": "1",
                "label": {
                  "ptBR": {
                    "extends": "StudioObject",
                    "objectType": "Label",
                    "oid": "",
                    "plainText": "M1 aaaaaaaaaaaaa bbbbbbbbbbbcccccccccc",
                    "formattedText": "M1 aaaaaaaaaaaaa bbbbbbbbbbbcccccccccc"
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
                "extractionValue": "2",
                "label": {
                  "ptBR": {
                    "extends": "StudioObject",
                    "objectType": "Label",
                    "oid": "",
                    "plainText": "M2 ",
                    "formattedText": "M2&nbsp;"
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
                "extractionValue": "3",
                "label": {
                  "ptBR": {
                    "extends": "StudioObject",
                    "objectType": "Label",
                    "oid": "",
                    "plainText": "M3",
                    "formattedText": "M3"
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
          "objectType": "PhoneQuestion",
          "templateID": "ALL11",
          "customID": "ALL11",
          "dataType": "Integer"
        },
        {
          "value": {
            "ptBR": {
              "extends": "StudioObject",
              "objectType": "Label",
              "oid": "",
              "plainText": "Como um participante\neu quero que a usabilidade durante o preenchimento de uma atividade seja melhorada\npara que durante o preenchimento seja possivel ter mais informações em menos espaço, reduzindo espaços e tornando mais simples a iteração, além de alterar os controles para que que a iteração seja mais intuitiva e não seja necessário treinamento previo.\n\nObservação\nAlguns itens devem ser focados:\nMetadados: O conceito de metadado deve ser removido portanto o recurso deve ser modificado de modo que seja integrado com a resposta e não mais algo separado, removendo a palavra \"metadado\" e sua separação visual.\nObservações:  As observações devem sempre ser visíveis e acessíveis de forma simples\nQuestões respondidas:  Deve ser removido a necessidade de interagir com itens para poder ver questões respondidas de modo que as respostas dadas estejam visíveis em layout aproximado com as demais\nItens de controle: Botões de controle deve ser mais intuitivos, de modo que ao vê-los seja claro sua funcionalidade, não necessariamente na posição atual",
              "formattedText": "Como um participante<br>eu quero que a usabilidade durante o preenchimento de uma atividade seja melhorada<br>para que durante o preenchimento seja possivel ter mais informações em menos espaço, reduzindo espaços e tornando mais simples a iteração, além de alterar os controles para que que a iteração seja mais intuitiva e não seja necessário treinamento previo.<br><br>Observação<br>Alguns itens devem ser focados:<br><strong>Metadados</strong>: O conceito de metadado deve ser removido portanto o recurso deve ser modificado de modo que seja integrado com a resposta e não mais algo separado, removendo a palavra \"metadado\" e sua separação visual.<br><strong>Observações</strong>:  As observações devem sempre ser visíveis e acessíveis de forma simples<br><strong>Questões respondidas</strong>:  Deve ser removido a necessidade de interagir com itens para poder ver questões respondidas de modo que as respostas dadas estejam visíveis em layout aproximado com as demais<br><strong>Itens de controle</strong>: Botões de controle deve ser mais intuitivos, de modo que ao vê-los seja claro sua funcionalidade, não necessariamente na posição atual"
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
          "templateID": "ALL12",
          "customID": "ALL12",
          "dataType": "String"
        },
        {
          "url": "https://studio.hmg.ccem.ufrgs.br/otus-studio/app/assets/img/coruja_construtora.png",
          "footer": {
            "ptBR": {
              "extends": "StudioObject",
              "objectType": "Label",
              "oid": "",
              "plainText": "",
              "formattedText": ""
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
          "objectType": "ImageItem",
          "templateID": "ALL13",
          "customID": "ALL13",
          "dataType": "String"
        },
        {
          "label": {
            "ptBR": {
              "extends": "StudioObject",
              "objectType": "Label",
              "oid": "",
              "plainText": "Upload",
              "formattedText": "Upload"
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
                "extractionValue": "1",
                "label": {
                  "ptBR": {
                    "extends": "StudioObject",
                    "objectType": "Label",
                    "oid": "",
                    "plainText": "M1 aaaaaaaaaaaaa bbbbbbbbbbbcccccccccc",
                    "formattedText": "M1 aaaaaaaaaaaaa bbbbbbbbbbbcccccccccc"
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
                "extractionValue": "2",
                "label": {
                  "ptBR": {
                    "extends": "StudioObject",
                    "objectType": "Label",
                    "oid": "",
                    "plainText": "M2 ",
                    "formattedText": "M2&nbsp;"
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
                "extractionValue": "3",
                "label": {
                  "ptBR": {
                    "extends": "StudioObject",
                    "objectType": "Label",
                    "oid": "",
                    "plainText": "M3",
                    "formattedText": "M3"
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
          "objectType": "FileUploadQuestion",
          "templateID": "ALL14",
          "customID": "ALL14",
          "dataType": "Binary"
        },
        {
          "lines": [
            {
              "extents": "StudioObject",
              "objectType": "GridTextLine",
              "gridTextList": [
                {
                  "layout": {
                    "extents": "StudioObject",
                    "objectType": "LayoutGrid",
                    "width": "100"
                  },
                  "unit": {
                    "ptBR": {
                      "extends": "StudioObject",
                      "objectType": "Unit",
                      "oid": "",
                      "plainText": "area",
                      "formattedText": "area"
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
                      "plainText": "gngng",
                      "formattedText": "gngng"
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
                  "metadata": null,
                  "fillingRules": null,
                  "extents": "SurveyItem",
                  "objectType": "GridText",
                  "templateID": "ALL15a",
                  "customID": "ALL15a",
                  "dataType": "String"
                },
                {
                  "layout": {
                    "extents": "StudioObject",
                    "objectType": "LayoutGrid",
                    "width": "100"
                  },
                  "unit": {
                    "ptBR": {
                      "extends": "StudioObject",
                      "objectType": "Unit",
                      "oid": "",
                      "plainText": "tempo",
                      "formattedText": "tempo"
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
                      "plainText": "nggjgjg",
                      "formattedText": "nggjgjg"
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
                  "metadata": null,
                  "fillingRules": null,
                  "extents": "SurveyItem",
                  "objectType": "GridText",
                  "templateID": "ALL15b",
                  "customID": "ALL15b",
                  "dataType": "String"
                },
                {
                  "layout": {
                    "extents": "StudioObject",
                    "objectType": "LayoutGrid",
                    "width": "100"
                  },
                  "unit": {
                    "ptBR": {
                      "extends": "StudioObject",
                      "objectType": "Unit",
                      "oid": "",
                      "plainText": "tempo",
                      "formattedText": "tempo"
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
                      "plainText": "ccccccccc",
                      "formattedText": "ccccccccc"
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
                  "metadata": null,
                  "fillingRules": null,
                  "extents": "SurveyItem",
                  "objectType": "GridText",
                  "templateID": "ALL15c",
                  "customID": "ALL15c",
                  "dataType": "String"
                }
              ]
            }
          ],
          "label": {
            "ptBR": {
              "extends": "StudioObject",
              "objectType": "Label",
              "oid": "",
              "plainText": "Grade de texto",
              "formattedText": "Grade de texto"
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
                "extractionValue": "1",
                "label": {
                  "ptBR": {
                    "extends": "StudioObject",
                    "objectType": "Label",
                    "oid": "",
                    "plainText": "M1 aaaaaaaaaaaaa bbbbbbbbbbbcccccccccc",
                    "formattedText": "M1 aaaaaaaaaaaaa bbbbbbbbbbbcccccccccc"
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
                "extractionValue": "2",
                "label": {
                  "ptBR": {
                    "extends": "StudioObject",
                    "objectType": "Label",
                    "oid": "",
                    "plainText": "M2 ",
                    "formattedText": "M2&nbsp;"
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
                "extractionValue": "3",
                "label": {
                  "ptBR": {
                    "extends": "StudioObject",
                    "objectType": "Label",
                    "oid": "",
                    "plainText": "M3",
                    "formattedText": "M3"
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
          "objectType": "GridTextQuestion",
          "templateID": "ALL15",
          "customID": "ALL15",
          "dataType": null
        },
        {
          "lines": [
            {
              "extents": "StudioObject",
              "objectType": "GridIntegerLine",
              "gridIntegerList": [
                {
                  "layout": {
                    "extents": "StudioObject",
                    "objectType": "LayoutGrid",
                    "width": "100"
                  },
                  "unit": {
                    "ptBR": {
                      "extends": "StudioObject",
                      "objectType": "Unit",
                      "oid": "",
                      "plainText": "cm",
                      "formattedText": "cm"
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
                      "plainText": "aaaaaaaaaaa",
                      "formattedText": "aaaaaaaaaaa"
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
                  "metadata": null,
                  "fillingRules": null,
                  "extents": "SurveyItem",
                  "objectType": "GridInteger",
                  "templateID": "ALL16a",
                  "customID": "ALL16a",
                  "dataType": "Integer"
                },
                {
                  "layout": {
                    "extents": "StudioObject",
                    "objectType": "LayoutGrid",
                    "width": "100"
                  },
                  "unit": {
                    "ptBR": {
                      "extends": "StudioObject",
                      "objectType": "Unit",
                      "oid": "",
                      "plainText": "mg",
                      "formattedText": "mg"
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
                      "plainText": "bbbbbbbbbbbbbbbb",
                      "formattedText": "bbbbbbbbbbbbbbbb"
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
                  "metadata": null,
                  "fillingRules": null,
                  "extents": "SurveyItem",
                  "objectType": "GridInteger",
                  "templateID": "ALL16b",
                  "customID": "ALL16b",
                  "dataType": "Integer"
                },
                {
                  "layout": {
                    "extents": "StudioObject",
                    "objectType": "LayoutGrid",
                    "width": "100"
                  },
                  "unit": {
                    "ptBR": {
                      "extends": "StudioObject",
                      "objectType": "Unit",
                      "oid": "",
                      "plainText": "kg",
                      "formattedText": "kg"
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
                      "plainText": "cccccccccccccc",
                      "formattedText": "cccccccccccccc"
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
                  "metadata": null,
                  "fillingRules": null,
                  "extents": "SurveyItem",
                  "objectType": "GridInteger",
                  "templateID": "ALL16c",
                  "customID": "ALL16c",
                  "dataType": "Integer"
                }
              ]
            },
            {
              "extents": "StudioObject",
              "objectType": "GridIntegerLine",
              "gridIntegerList": [
                {
                  "layout": {
                    "extents": "StudioObject",
                    "objectType": "LayoutGrid",
                    "width": "100"
                  },
                  "unit": {
                    "ptBR": {
                      "extends": "StudioObject",
                      "objectType": "Unit",
                      "oid": "",
                      "plainText": "xx",
                      "formattedText": "xx"
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
                      "plainText": "dddddddddddddd",
                      "formattedText": "dddddddddddddd"
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
                  "metadata": null,
                  "fillingRules": null,
                  "extents": "SurveyItem",
                  "objectType": "GridInteger",
                  "templateID": "ALL16d",
                  "customID": "ALL16d",
                  "dataType": "Integer"
                },
                {
                  "layout": {
                    "extents": "StudioObject",
                    "objectType": "LayoutGrid",
                    "width": "100"
                  },
                  "unit": {
                    "ptBR": {
                      "extends": "StudioObject",
                      "objectType": "Unit",
                      "oid": "",
                      "plainText": "xx",
                      "formattedText": "xx"
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
                      "plainText": "eeeeeeeeeeeeeeeee",
                      "formattedText": "eeeeeeeeeeeeeeeee"
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
                  "metadata": null,
                  "fillingRules": null,
                  "extents": "SurveyItem",
                  "objectType": "GridInteger",
                  "templateID": "ALL16e",
                  "customID": "ALL16e",
                  "dataType": "Integer"
                },
                {
                  "layout": {
                    "extents": "StudioObject",
                    "objectType": "LayoutGrid",
                    "width": "100"
                  },
                  "unit": {
                    "ptBR": {
                      "extends": "StudioObject",
                      "objectType": "Unit",
                      "oid": "",
                      "plainText": "xx",
                      "formattedText": "xx"
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
                      "plainText": "fffffffffffff",
                      "formattedText": "fffffffffffff"
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
                  "metadata": null,
                  "fillingRules": null,
                  "extents": "SurveyItem",
                  "objectType": "GridInteger",
                  "templateID": "ALL16f",
                  "customID": "ALL16f",
                  "dataType": "Integer"
                }
              ]
            }
          ],
          "label": {
            "ptBR": {
              "extends": "StudioObject",
              "objectType": "Label",
              "oid": "",
              "plainText": "Grade de número",
              "formattedText": "Grade de número"
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
                "extractionValue": "1",
                "label": {
                  "ptBR": {
                    "extends": "StudioObject",
                    "objectType": "Label",
                    "oid": "",
                    "plainText": "M1 aaaaaaaaaaaaa bbbbbbbbbbbcccccccccc",
                    "formattedText": "M1 aaaaaaaaaaaaa bbbbbbbbbbbcccccccccc"
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
                "extractionValue": "2",
                "label": {
                  "ptBR": {
                    "extends": "StudioObject",
                    "objectType": "Label",
                    "oid": "",
                    "plainText": "M2 ",
                    "formattedText": "M2&nbsp;"
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
                "extractionValue": "3",
                "label": {
                  "ptBR": {
                    "extends": "StudioObject",
                    "objectType": "Label",
                    "oid": "",
                    "plainText": "M3",
                    "formattedText": "M3"
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
          "objectType": "GridIntegerQuestion",
          "templateID": "ALL16",
          "customID": "ALL16",
          "dataType": null
        }
      ]
    }
  }
data.client = {
  index: function (obj: any) { return { body: { _id: "1067FXMBfnuOBlCe39eo" } } },
  search: function (obj: any) { return {} },
  get: function (obj: any) { return {} },
  update: function (obj: any) { return {} },
  exists: function (obj: any) { return {} },
  delete: function (obj: any) { return {} },
  deleteByQuery: function (obj: any) { return {} },
};

export default data
