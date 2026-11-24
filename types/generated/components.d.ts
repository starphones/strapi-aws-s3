import type { Schema, Struct } from '@strapi/strapi';

export interface AnswerHubFaq extends Struct.ComponentSchema {
  collectionName: 'components_answer_hub_faqs';
  info: {
    description: 'A question and answer embedded in Answer Hub content';
    displayName: 'Answer Hub FAQ';
  };
  attributes: {
    answer: Schema.Attribute.Text & Schema.Attribute.Required;
    question: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface AnswerHubSection extends Struct.ComponentSchema {
  collectionName: 'components_answer_hub_sections';
  info: {
    description: 'A structured section of an Answer Hub guide';
    displayName: 'Answer Hub Section';
  };
  attributes: {
    anchorId: Schema.Attribute.String & Schema.Attribute.Required;
    heading: Schema.Attribute.String & Schema.Attribute.Required;
    paragraphs: Schema.Attribute.Component<'answer-hub.text-item', true> &
      Schema.Attribute.Required;
    steps: Schema.Attribute.Component<'answer-hub.text-item', true>;
  };
}

export interface AnswerHubTextItem extends Struct.ComponentSchema {
  collectionName: 'components_answer_hub_text_items';
  info: {
    description: 'A paragraph or ordered step in an Answer Hub section';
    displayName: 'Answer Hub Text Item';
  };
  attributes: {
    text: Schema.Attribute.Text & Schema.Attribute.Required;
  };
}

export interface AuthorAuthor extends Struct.ComponentSchema {
  collectionName: 'components_author_authors';
  info: {
    displayName: 'author';
  };
  attributes: {
    bio: Schema.Attribute.Text;
    name: Schema.Attribute.String & Schema.Attribute.Required;
    photo: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
  };
}

export interface BoxContentDetailsBoxContentDetails
  extends Struct.ComponentSchema {
  collectionName: 'components_box_content_details_box_content_details';
  info: {
    displayName: 'boxContentDetails';
    icon: 'cup';
  };
  attributes: {
    detail: Schema.Attribute.String;
    value: Schema.Attribute.String;
  };
}

export interface BoxContentBoxContent extends Struct.ComponentSchema {
  collectionName: 'components_box_content_box_contents';
  info: {
    displayName: 'boxContent';
  };
  attributes: {
    boxContentDetails: Schema.Attribute.Component<
      'box-content-details.box-content-details',
      true
    >;
    boxContentInside: Schema.Attribute.Component<
      'box-content.box-content-inside',
      true
    >;
  };
}

export interface BoxContentBoxContentInside extends Struct.ComponentSchema {
  collectionName: 'components_box_content_box_content_insides';
  info: {
    displayName: 'boxContentInside';
  };
  attributes: {
    insideContent: Schema.Attribute.String;
  };
}

export interface DeviceCollectionDeviceCollection
  extends Struct.ComponentSchema {
  collectionName: 'components_device_collection_device_collections';
  info: {
    description: '';
    displayName: 'device_collection';
  };
  attributes: {
    duo_1: Schema.Attribute.Media<'images' | 'files'>;
    duo_2: Schema.Attribute.Media<'files' | 'images'>;
    featured_model_button_link: Schema.Attribute.String;
    featured_model_button_name: Schema.Attribute.String;
    featured_model_img: Schema.Attribute.Media<'images' | 'files'>;
    featured_model_ptype: Schema.Attribute.String;
    filter_string: Schema.Attribute.Text;
    link: Schema.Attribute.String;
    link_duo_1: Schema.Attribute.String;
    link_duo_2: Schema.Attribute.String;
    link2: Schema.Attribute.String;
    Solo_1: Schema.Attribute.Media<'files' | 'images'>;
    Solo_2: Schema.Attribute.Media<'images' | 'files'>;
  };
}

export interface FaqFaq extends Struct.ComponentSchema {
  collectionName: 'components_faq_faqs';
  info: {
    displayName: 'Faq';
  };
  attributes: {
    answer: Schema.Attribute.Text &
      Schema.Attribute.Required &
      Schema.Attribute.Unique &
      Schema.Attribute.DefaultTo<'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'>;
    question: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.Unique &
      Schema.Attribute.DefaultTo<'Example Question?'>;
  };
}

export interface FeatureFeature extends Struct.ComponentSchema {
  collectionName: 'components_feature_features';
  info: {
    displayName: 'feature';
    icon: 'emotionUnhappy';
  };
  attributes: {
    description: Schema.Attribute.Text;
    icon: Schema.Attribute.String;
    image: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    title: Schema.Attribute.String;
  };
}

export interface GeometryGeometry extends Struct.ComponentSchema {
  collectionName: 'components_geometry_geometries';
  info: {
    description: '';
    displayName: 'geometry';
    icon: 'pinMap';
  };
  attributes: {
    location: Schema.Attribute.Component<'location.location', false>;
  };
}

export interface LocationLocation extends Struct.ComponentSchema {
  collectionName: 'components_location_locations';
  info: {
    description: '';
    displayName: 'location';
    icon: 'pinMap';
  };
  attributes: {
    defaultZoom: Schema.Attribute.Decimal;
    lat: Schema.Attribute.String;
    lng: Schema.Attribute.String;
  };
}

export interface MetadataMetadata extends Struct.ComponentSchema {
  collectionName: 'components_metadata_metadata';
  info: {
    description: '';
    displayName: 'metadata';
    icon: 'search';
  };
  attributes: {
    metaDescription: Schema.Attribute.Text & Schema.Attribute.Required;
    metaTitle: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface ProductCollectionFeaturedCollection
  extends Struct.ComponentSchema {
  collectionName: 'components_product_collection_featured_collections';
  info: {
    displayName: 'featured collection';
  };
  attributes: {
    image: Schema.Attribute.Media<'images' | 'files'>;
    product_collection: Schema.Attribute.Relation<
      'oneToOne',
      'api::product-collection.product-collection'
    >;
    rank: Schema.Attribute.Integer;
    title: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface ProductCollectionProductCollections
  extends Struct.ComponentSchema {
  collectionName: 'components_product_collection_product_collections';
  info: {
    description: '';
    displayName: 'Product Collections';
    icon: 'gift';
  };
  attributes: {
    collectionDescription: Schema.Attribute.Text & Schema.Attribute.Required;
    collectionLink: Schema.Attribute.String & Schema.Attribute.Required;
    collectionTitle: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.Unique;
    featureImage: Schema.Attribute.Media<'images'> & Schema.Attribute.Required;
  };
}

export interface ProductFeatureProductFeature extends Struct.ComponentSchema {
  collectionName: 'components_product_feature_product_features';
  info: {
    displayName: 'Product Feature';
    icon: 'cup';
  };
  attributes: {
    Description: Schema.Attribute.Text;
    feature: Schema.Attribute.Component<'feature.feature', true>;
    Title: Schema.Attribute.String;
  };
}

export interface ProductsProductFilters extends Struct.ComponentSchema {
  collectionName: 'components_products_product_filters';
  info: {
    displayName: 'Product Filters';
    icon: 'bulletList';
  };
  attributes: {};
}

export interface ServiceFeature extends Struct.ComponentSchema {
  collectionName: 'components_service_features';
  info: {
    description: '';
    displayName: 'feature';
  };
  attributes: {
    description: Schema.Attribute.Text & Schema.Attribute.Required;
    icon: Schema.Attribute.Enumeration<
      [
        'Activity',
        'Award',
        'Battery',
        'BatteryCharging',
        'Biohazard',
        'Bubbles',
        'CalendarDays',
        'CheckCircle',
        'CircleDollarSign',
        'Clock',
        'Code',
        'Crosshair',
        'Crown',
        'DatabaseBackup',
        'Droplets',
        'HardDriveDownload',
        'HeartPlus',
        'Laptop',
        'MapPin',
        'MapPinPlus',
        'Phone',
        'PlugZap',
        'ScanSearch',
        'Shield',
        'ShieldCheck',
        'ShieldUser',
        'Smile',
        'Smartphone',
        'SmartphoneCharging',
        'Sparkles',
        'SquareStack',
        'Star',
        'Tablet',
        'TriangleAlert',
        'Wrench',
        'Zap',
      ]
    > &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<'Star'>;
    title: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface ServiceFeaturedServices extends Struct.ComponentSchema {
  collectionName: 'components_service_featured_services';
  info: {
    description: '';
    displayName: 'featuredServices';
  };
  attributes: {
    description: Schema.Attribute.Text & Schema.Attribute.Required;
    feature: Schema.Attribute.Component<'service.feature', true>;
    footerText: Schema.Attribute.Text;
    heroFeatureImage: Schema.Attribute.Component<
      'service.hero-feature-image',
      false
    >;
    primaryButton: Schema.Attribute.Component<'service.primary-button', false>;
    secondaryButton: Schema.Attribute.Component<
      'service.secondary-button',
      false
    >;
    tag: Schema.Attribute.String;
    title: Schema.Attribute.Blocks & Schema.Attribute.Required;
  };
}

export interface ServiceHeroFeatureImage extends Struct.ComponentSchema {
  collectionName: 'components_service_hero_feature_images';
  info: {
    displayName: 'heroFeatureImage';
  };
  attributes: {
    image: Schema.Attribute.Media<'files' | 'images'>;
    tag: Schema.Attribute.String;
  };
}

export interface ServiceIconAndText extends Struct.ComponentSchema {
  collectionName: 'components_service_icon_and_texts';
  info: {
    description: '';
    displayName: 'iconAndText';
  };
  attributes: {
    icon: Schema.Attribute.Enumeration<
      [
        'Activity',
        'Award',
        'Battery',
        'BatteryCharging',
        'Biohazard',
        'Bubbles',
        'CalendarDays',
        'CheckCircle',
        'CircleDollarSign',
        'Clock',
        'Code',
        'Crosshair',
        'Crown',
        'DatabaseBackup',
        'Droplets',
        'HardDriveDownload',
        'HeartPlus',
        'Laptop',
        'MapPin',
        'MapPinPlus',
        'Phone',
        'PlugZap',
        'ScanSearch',
        'Shield',
        'ShieldCheck',
        'ShieldUser',
        'Smile',
        'Smartphone',
        'SmartphoneCharging',
        'Sparkles',
        'SquareStack',
        'Star',
        'Tablet',
        'TriangleAlert',
        'Wrench',
        'Zap',
      ]
    > &
      Schema.Attribute.Required;
    text: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface ServicePrimaryButton extends Struct.ComponentSchema {
  collectionName: 'components_service_primary_buttons';
  info: {
    description: '';
    displayName: 'primaryButton';
  };
  attributes: {
    icon: Schema.Attribute.Enumeration<
      [
        'Activity',
        'Award',
        'Battery',
        'BatteryCharging',
        'Biohazard',
        'Bubbles',
        'CalendarDays',
        'CheckCircle',
        'CircleDollarSign',
        'Clock',
        'Code',
        'Crosshair',
        'Crown',
        'DatabaseBackup',
        'Droplets',
        'HardDriveDownload',
        'HeartPlus',
        'Laptop',
        'MapPin',
        'MapPinPlus',
        'Phone',
        'PlugZap',
        'ScanSearch',
        'Shield',
        'ShieldCheck',
        'ShieldUser',
        'Smile',
        'Smartphone',
        'SmartphoneCharging',
        'Sparkles',
        'SquareStack',
        'Star',
        'Tablet',
        'TriangleAlert',
        'Wrench',
        'Zap',
      ]
    >;
    title: Schema.Attribute.String & Schema.Attribute.Required;
    url: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface ServiceSecondaryButton extends Struct.ComponentSchema {
  collectionName: 'components_service_secondary_buttons';
  info: {
    description: '';
    displayName: 'secondaryButton';
  };
  attributes: {
    icon: Schema.Attribute.Enumeration<
      [
        'Activity',
        'Award',
        'Battery',
        'BatteryCharging',
        'Biohazard',
        'Bubbles',
        'CalendarDays',
        'CheckCircle',
        'CircleDollarSign',
        'Clock',
        'Code',
        'Crosshair',
        'Crown',
        'DatabaseBackup',
        'Droplets',
        'HardDriveDownload',
        'HeartPlus',
        'Laptop',
        'MapPin',
        'MapPinPlus',
        'Phone',
        'PlugZap',
        'ScanSearch',
        'Shield',
        'ShieldCheck',
        'ShieldUser',
        'Smile',
        'Smartphone',
        'SmartphoneCharging',
        'Sparkles',
        'SquareStack',
        'Star',
        'Tablet',
        'TriangleAlert',
        'Wrench',
        'Zap',
      ]
    >;
    title: Schema.Attribute.String & Schema.Attribute.Required;
    url: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface ServiceServiceFeatures extends Struct.ComponentSchema {
  collectionName: 'components_service_service_features';
  info: {
    description: '';
    displayName: 'ServiceFeatures';
    icon: 'doctor';
  };
  attributes: {
    button: Schema.Attribute.String;
    featureImage: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios'
    >;
    markdown: Schema.Attribute.Text;
    title: Schema.Attribute.String & Schema.Attribute.Required;
    url: Schema.Attribute.String;
  };
}

export interface ServiceServiceHero extends Struct.ComponentSchema {
  collectionName: 'components_service_service_heroes';
  info: {
    description: '';
    displayName: 'serviceHero';
  };
  attributes: {
    description: Schema.Attribute.Text;
    headerIconTitle: Schema.Attribute.Component<'service.icon-and-text', false>;
    heroFeatureImage: Schema.Attribute.Component<
      'service.hero-feature-image',
      false
    >;
    primaryButton: Schema.Attribute.Component<'service.primary-button', false>;
    secondaryButton: Schema.Attribute.Component<
      'service.secondary-button',
      false
    >;
    title: Schema.Attribute.Blocks;
  };
}

export interface SpecsFeatureSpecsFeature extends Struct.ComponentSchema {
  collectionName: 'components_specs_feature_specs_features';
  info: {
    displayName: 'specsFeature';
  };
  attributes: {
    icon: Schema.Attribute.String;
    shortDesc: Schema.Attribute.String;
    title: Schema.Attribute.String;
    value: Schema.Attribute.String;
  };
}

export interface SpecsSpecs extends Struct.ComponentSchema {
  collectionName: 'components_specs_specs';
  info: {
    displayName: 'specs';
  };
  attributes: {
    specsFeature: Schema.Attribute.Component<
      'specs-feature.specs-feature',
      true
    >;
    subtitle: Schema.Attribute.String;
    title: Schema.Attribute.String;
  };
}

export interface StoreDetailsAboutUs extends Struct.ComponentSchema {
  collectionName: 'components_store_details_aboutuses';
  info: {
    displayName: 'AboutUs';
    icon: 'chartBubble';
  };
  attributes: {
    description: Schema.Attribute.Text &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<'Unable to access your phone to charge it? Accidentally dropped your phone and cracked the screen? Don\u2019t worry, we can fix it for you right away!  Star Phones mobile repair in Parramatta can have your phone fixed and looking brand new in no time! No matter how big or small the job, you can rely on us to ensure your phone is working like new again.'>;
    featureImage: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios'
    > &
      Schema.Attribute.Required;
    subTitle: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<'Choose our reliable, affordable, and efficient phone repair services. Our experienced, trustworthy technicians provide quick, professional repairs, ensuring your device is fixed with care and precision.'>;
    title: Schema.Attribute.String &
      Schema.Attribute.DefaultTo<'Mobile Phone Repairs'>;
  };
}

export interface StoreDetailsMapBannerInfo extends Struct.ComponentSchema {
  collectionName: 'components_store_details_map_banner_infos';
  info: {
    displayName: 'MapBannerInfo';
    icon: 'book';
  };
  attributes: {
    description: Schema.Attribute.Text &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<"We got you! Whether your phone isn't charging or you've cracked the screen, we've got you covered. Our expert team will promptly fix your phone, restoring it to like-new condition. Whatever the problem, you can rely on us to bring your phone back to its best!">;
    intro: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<'Looking for a phone repair near Parramatta?'>;
    subTitle: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<'Your trusted phone accessories shop in Parramatta'>;
    title: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<'Phone Repair'>;
  };
}

export interface StoreHoursStoreHours extends Struct.ComponentSchema {
  collectionName: 'components_store_hours_store_hours';
  info: {
    displayName: 'storeHours';
  };
  attributes: {
    friday: Schema.Attribute.String;
    monday: Schema.Attribute.String;
    saturday: Schema.Attribute.String;
    sunday: Schema.Attribute.String;
    thursday: Schema.Attribute.String;
    tuesday: Schema.Attribute.String;
    wednesday: Schema.Attribute.String;
  };
}

export interface TagsTags extends Struct.ComponentSchema {
  collectionName: 'components_tags_tags';
  info: {
    displayName: 'tags';
  };
  attributes: {
    tags: Schema.Attribute.String;
  };
}

export interface ViewportViewport extends Struct.ComponentSchema {
  collectionName: 'components_viewport_viewports';
  info: {
    description: '';
    displayName: 'viewport';
  };
  attributes: {
    east: Schema.Attribute.String;
    north: Schema.Attribute.String;
    south: Schema.Attribute.String;
    west: Schema.Attribute.String;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'answer-hub.faq': AnswerHubFaq;
      'answer-hub.section': AnswerHubSection;
      'answer-hub.text-item': AnswerHubTextItem;
      'author.author': AuthorAuthor;
      'box-content-details.box-content-details': BoxContentDetailsBoxContentDetails;
      'box-content.box-content': BoxContentBoxContent;
      'box-content.box-content-inside': BoxContentBoxContentInside;
      'device-collection.device-collection': DeviceCollectionDeviceCollection;
      'faq.faq': FaqFaq;
      'feature.feature': FeatureFeature;
      'geometry.geometry': GeometryGeometry;
      'location.location': LocationLocation;
      'metadata.metadata': MetadataMetadata;
      'product-collection.featured-collection': ProductCollectionFeaturedCollection;
      'product-collection.product-collections': ProductCollectionProductCollections;
      'product-feature.product-feature': ProductFeatureProductFeature;
      'products.product-filters': ProductsProductFilters;
      'service.feature': ServiceFeature;
      'service.featured-services': ServiceFeaturedServices;
      'service.hero-feature-image': ServiceHeroFeatureImage;
      'service.icon-and-text': ServiceIconAndText;
      'service.primary-button': ServicePrimaryButton;
      'service.secondary-button': ServiceSecondaryButton;
      'service.service-features': ServiceServiceFeatures;
      'service.service-hero': ServiceServiceHero;
      'specs-feature.specs-feature': SpecsFeatureSpecsFeature;
      'specs.specs': SpecsSpecs;
      'store-details.about-us': StoreDetailsAboutUs;
      'store-details.map-banner-info': StoreDetailsMapBannerInfo;
      'store-hours.store-hours': StoreHoursStoreHours;
      'tags.tags': TagsTags;
      'viewport.viewport': ViewportViewport;
    }
  }
}
