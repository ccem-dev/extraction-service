import {Schema, Types} from "mongoose";
import ObjectId = Types.ObjectId;

const ActivitySchema: Schema = new Schema(
  {
    objectType: {
      type: String,
      required: true
    },
    date: {
      type: Date,
      default: Date.now
    },
    participant: {
      type: ObjectId,
      required: true
    },
    eventId: {
      type: ObjectId
    },
    activated: {
      type: Boolean,
      default: true
    },
    description: {
      type:String,
      required: true
    },
    status: {
      type: String,
      default: "PENDING"
    }
  },
  {
    discriminatorKey: "objectType",
    versionKey: false
  }
);

ActivitySchema.statics.exist = async function (activityId: ObjectId) {
  return this.collection.findOne(
    { "activity": activityId }
  );
};

ActivitySchema.statics.getByActivity = async function (activityId: ObjectId) {
  return this.collection.findOne({ "activityId": activityId})
};

ActivitySchema.statics.getExtractionByActivity = async function (id: ObjectId) {
  return this.collection.aggregate([
      {
        $match: {
          "participant": id,
          "activated": true
        }
      },
      {
        $group: {
          "_id": "$eventId",
          "eventIds": {$push: "$$ROOT"}
        }
      }
    ]
  ).toArray()
};

export default ActivitySchema;
