import DefaultWidget from './types/DefaultWidget';
import ExampleWidget from './types/ExampleWidget';
import JenkinsJobWidget from "./types/JenkinsJobWidget";
import SonarQubeWidget from "./types/SonarQubeWidget";
import ServiceCheckWidget from "./types/ServiceCheckWidget";
import BambooPlanWidget from "./types/BambooPlanWidget";
import IFrameEmbedWidget from "./types/IFrameEmbedWidget";
import CheckboxWidget from './types/CheckboxWidget';

const widgetTypes = {
  DefaultWidget: {
    name: 'Default',
    component: DefaultWidget
  },
  ExampleWidget: {
    name: 'Example widget',
    component: ExampleWidget,
    dialogFields: ['SchedulePeriod']
  },
  JenkinsJobWidget: {
    name: 'Jenkins Job widget',
    component: JenkinsJobWidget,
    dialogFields: ['EndpointField', 'SchedulePeriod', 'Path']
  },
  SonarQubeWidget: {
    name: 'SonarQube widget',
    component: SonarQubeWidget,
    dialogFields: ['EndpointField', 'SchedulePeriod', 'Key', 'IdNumber', 'SonarQubeMetricsInput']
  },
  ServiceCheckWidget: {
    name: 'Service Check widget',
    component: ServiceCheckWidget,
    dialogFields: ['SchedulePeriod', 'URL', 'StatusCode']
  },
  BambooPlanWidget: {
    name: 'Bamboo Plan widget',
    component: BambooPlanWidget,
    dialogFields: ['EndpointField', 'SchedulePeriod', 'IdString']
  },
  IFrameEmbedWidget: {
    name: 'IFrame Embed widget',
    component: IFrameEmbedWidget,
    dialogFields: ['UrlForContent']
  },
  CheckboxWidget: {
    name: 'Checkbox widget',
    component: CheckboxWidget
  }
};

export default widgetTypes;