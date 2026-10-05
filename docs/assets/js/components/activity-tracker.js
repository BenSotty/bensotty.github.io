export class ActivityTracker {
  constructor() {
    this.enabled = !!window.activityTrackerEnabled;
    window.activityTracker = this;
  }

  static getInstance() {
    if (window.activityTracker) {
      return window.activityTracker;
    } else {
      return new ActivityTracker();
    }
  }

  trackEvent (event, data) {
    if (this.enabled) {
      umami.track(event, data);
      console.log("ActivityTracker enabled:track:" + event, data);
    } else {
      console.log("ActivityTracker disabled:track:" + event, data);
    }
  }
}
