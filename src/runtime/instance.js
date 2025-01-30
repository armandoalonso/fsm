import { id } from "../../config.caw.js";

export default function (parentClass) {
  return class extends parentClass {
    constructor() {
      super();

      this.previousState = "";
      this.currentState = "";
      this.initialState = "";
      this.enabled = false;
      this.triggerOnStart = false;

      const properties = this._getInitProperties();
      if (properties) {
        this.enabled = properties[0];
        this.initialState = properties[1];
        this.triggerOnStart = properties[2];
      }

      // check if initial state is empty string, if so set to default
      if (this.initialState == "") {
        this.initialState = "default";
      }

      if (this.triggerOnStart) {
        this.#triggerInitialOnStateEnter();
      }
    }

    #triggerInitialOnStateEnter() {
      setTimeout(() => {
        this.previousState = "";
        this.currentState = this.initialState;
        this._trigger("OnStateChange");
        this._trigger("OnStateEnter");
        this._trigger("OnStateEnterInList");
      }, 0.0001);
    }

    goToState(state) {
      if (this.enabled && this.currentState != state) {
        this.previousState = this.currentState;
        this.currentState = state;
        this._trigger("OnStateChange");
        this._trigger("OnStateExit");
        this._trigger("OnStateExitInList");
        this._trigger("OnStateEnter");
        this._trigger("OnStateEnterInList");
        this._trigger("OnStateTransition");
      }
    }

    _trigger(method) {
      super._trigger(self.C3.Behaviors[id].Cnds[method]);
    }

    _release() {
      super._release();
    }

    _saveToJson() {
      return {
        enabled: this.enabled,
        currentState: this.currentState,
        previousState: this.previousState,
        initialState: this.initialState,
        triggerOnStart: this.triggerOnStart,
      };
    }

    _loadFromJson(o) {
      this.enabled = o.enabled;
      this.currentState = o.currentState;
      this.previousState = o.previousState;
      this.initialState = o.initialState;
      this.triggerOnStart = o.triggerOnStart;
    }

    _getDebuggerProperties()
    {
      return [{
        title: "piranha305.fsm",
        properties: [
          {name: "$enabled",	value: this.enabled,	onedit: v => this.enabled = v},
          {name: "$current-state",	value: this.currentState,	onedit: v => this.goToState(v)},
          {name: "$previous-state",	value: this.previousState,	onedit: v => this.previousState = v}
        ]
      }];
    }
  };
}
