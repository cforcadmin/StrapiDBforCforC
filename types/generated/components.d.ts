import type { Schema, Struct } from '@strapi/strapi';

export interface ProjectExternalLink extends Struct.ComponentSchema {
  collectionName: 'components_project_external_links';
  info: {
    displayName: 'External Link';
    icon: 'link';
  };
  attributes: {
    label: Schema.Attribute.String & Schema.Attribute.Required;
    url: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface ProjectPartner extends Struct.ComponentSchema {
  collectionName: 'components_project_partners';
  info: {
    displayName: 'Partner';
    icon: 'handshake';
  };
  attributes: {
    logo: Schema.Attribute.Media<'images'>;
    name: Schema.Attribute.String & Schema.Attribute.Required;
    url: Schema.Attribute.String;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'project.external-link': ProjectExternalLink;
      'project.partner': ProjectPartner;
    }
  }
}
