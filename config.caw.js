import {
  ADDON_CATEGORY,
  ADDON_TYPE,
  PLUGIN_TYPE,
  PROPERTY_TYPE,
} from "./template/enums.js";
import _version from "./version.js";
export const addonType = ADDON_TYPE.BEHAVIOR;
export const type = PLUGIN_TYPE.OBJECT;
export const id = "piranha305_fsm";
export const name = "FSM";
export const version = _version;
export const author = "piranha305";
export const website = "https://piranha305.itch.io";
export const documentation = "https://www.construct.net";
export const description = "A Finite State Machine (FSM) Behavior, Used to control the flow of logic for objects";
export const category = ADDON_CATEGORY.GENERAL;

export const hasDomside = false;
export const files = {
  extensionScript: {},
  fileDependencies: [],
};

// categories that are not filled will use the folder name
export const aceCategories = {
  general: "General"
};

export const info = {
  // icon: "icon.svg",
  // PLUGIN world only
  // defaultImageUrl: "default-image.png",
  Set: {
    // COMMON to all
    CanBeBundled: true,
    IsDeprecated: false,
    GooglePlayServicesEnabled: false,

    // BEHAVIOR only
    IsOnlyOneAllowed: false,

    // PLUGIN world only
    IsResizable: false,
    IsRotatable: false,
    Is3D: false,
    HasImage: false,
    IsTiled: false,
    SupportsZElevation: false,
    SupportsColor: false,
    SupportsEffects: false,
    MustPreDraw: false,

    // PLUGIN object only
    IsSingleGlobal: true,
  },
  // PLUGIN only
  AddCommonACEs: {
    Position: false,
    SceneGraph: false,
    Size: false,
    Angle: false,
    Appearance: false,
    ZOrder: false,
  },
};

export const properties = [
  {
    type: PROPERTY_TYPE.CHECK,
    id: "enabled",
    options: {
      initialValue: true,
      interpolatable: false,
    },
    name: "Enabled",
    desc: "Enable or disable the FSM",
  },
  {
    type: PROPERTY_TYPE.TEXT,
    id: "initialState",
    options: {
      initialValue: "",
      interpolatable: false,
    },
    name: "Initial State",
    desc: "The initial state of the FSM",
  },
  {
    type: PROPERTY_TYPE.CHECK,
    id: "triggerInitialState",
    options: {
      initialValue: false,
      interpolatable: false,
    },
    name: "Trigger Initial State",
    desc: "Trigger the initial OnStateEnter event",
  }
];
