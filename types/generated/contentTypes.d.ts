import type { Schema, Struct } from '@strapi/strapi';

export interface AdminApiToken extends Struct.CollectionTypeSchema {
  collectionName: 'strapi_api_tokens';
  info: {
    description: '';
    displayName: 'Api Token';
    name: 'Api Token';
    pluralName: 'api-tokens';
    singularName: 'api-token';
  };
  options: {
    draftAndPublish: false;
  };
  pluginOptions: {
    'content-manager': {
      visible: false;
    };
    'content-type-builder': {
      visible: false;
    };
  };
  attributes: {
    accessKey: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.SetMinMaxLength<{
        minLength: 1;
      }>;
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    description: Schema.Attribute.String &
      Schema.Attribute.SetMinMaxLength<{
        minLength: 1;
      }> &
      Schema.Attribute.DefaultTo<''>;
    encryptedKey: Schema.Attribute.Text &
      Schema.Attribute.SetMinMaxLength<{
        minLength: 1;
      }>;
    expiresAt: Schema.Attribute.DateTime;
    lastUsedAt: Schema.Attribute.DateTime;
    lifespan: Schema.Attribute.BigInteger;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<'oneToMany', 'admin::api-token'> &
      Schema.Attribute.Private;
    name: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.Unique &
      Schema.Attribute.SetMinMaxLength<{
        minLength: 1;
      }>;
    permissions: Schema.Attribute.Relation<
      'oneToMany',
      'admin::api-token-permission'
    >;
    publishedAt: Schema.Attribute.DateTime;
    type: Schema.Attribute.Enumeration<['read-only', 'full-access', 'custom']> &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<'read-only'>;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
  };
}

export interface AdminApiTokenPermission extends Struct.CollectionTypeSchema {
  collectionName: 'strapi_api_token_permissions';
  info: {
    description: '';
    displayName: 'API Token Permission';
    name: 'API Token Permission';
    pluralName: 'api-token-permissions';
    singularName: 'api-token-permission';
  };
  options: {
    draftAndPublish: false;
  };
  pluginOptions: {
    'content-manager': {
      visible: false;
    };
    'content-type-builder': {
      visible: false;
    };
  };
  attributes: {
    action: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.SetMinMaxLength<{
        minLength: 1;
      }>;
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'admin::api-token-permission'
    > &
      Schema.Attribute.Private;
    publishedAt: Schema.Attribute.DateTime;
    token: Schema.Attribute.Relation<'manyToOne', 'admin::api-token'>;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
  };
}

export interface AdminPermission extends Struct.CollectionTypeSchema {
  collectionName: 'admin_permissions';
  info: {
    description: '';
    displayName: 'Permission';
    name: 'Permission';
    pluralName: 'permissions';
    singularName: 'permission';
  };
  options: {
    draftAndPublish: false;
  };
  pluginOptions: {
    'content-manager': {
      visible: false;
    };
    'content-type-builder': {
      visible: false;
    };
  };
  attributes: {
    action: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.SetMinMaxLength<{
        minLength: 1;
      }>;
    actionParameters: Schema.Attribute.JSON & Schema.Attribute.DefaultTo<{}>;
    conditions: Schema.Attribute.JSON & Schema.Attribute.DefaultTo<[]>;
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<'oneToMany', 'admin::permission'> &
      Schema.Attribute.Private;
    properties: Schema.Attribute.JSON & Schema.Attribute.DefaultTo<{}>;
    publishedAt: Schema.Attribute.DateTime;
    role: Schema.Attribute.Relation<'manyToOne', 'admin::role'>;
    subject: Schema.Attribute.String &
      Schema.Attribute.SetMinMaxLength<{
        minLength: 1;
      }>;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
  };
}

export interface AdminRole extends Struct.CollectionTypeSchema {
  collectionName: 'admin_roles';
  info: {
    description: '';
    displayName: 'Role';
    name: 'Role';
    pluralName: 'roles';
    singularName: 'role';
  };
  options: {
    draftAndPublish: false;
  };
  pluginOptions: {
    'content-manager': {
      visible: false;
    };
    'content-type-builder': {
      visible: false;
    };
  };
  attributes: {
    code: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.Unique &
      Schema.Attribute.SetMinMaxLength<{
        minLength: 1;
      }>;
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    description: Schema.Attribute.String;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<'oneToMany', 'admin::role'> &
      Schema.Attribute.Private;
    name: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.Unique &
      Schema.Attribute.SetMinMaxLength<{
        minLength: 1;
      }>;
    permissions: Schema.Attribute.Relation<'oneToMany', 'admin::permission'>;
    publishedAt: Schema.Attribute.DateTime;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    users: Schema.Attribute.Relation<'manyToMany', 'admin::user'>;
  };
}

export interface AdminSession extends Struct.CollectionTypeSchema {
  collectionName: 'strapi_sessions';
  info: {
    description: 'Session Manager storage';
    displayName: 'Session';
    name: 'Session';
    pluralName: 'sessions';
    singularName: 'session';
  };
  options: {
    draftAndPublish: false;
  };
  pluginOptions: {
    'content-manager': {
      visible: false;
    };
    'content-type-builder': {
      visible: false;
    };
    i18n: {
      localized: false;
    };
  };
  attributes: {
    absoluteExpiresAt: Schema.Attribute.DateTime & Schema.Attribute.Private;
    childId: Schema.Attribute.String & Schema.Attribute.Private;
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    deviceId: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.Private;
    expiresAt: Schema.Attribute.DateTime &
      Schema.Attribute.Required &
      Schema.Attribute.Private;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<'oneToMany', 'admin::session'> &
      Schema.Attribute.Private;
    origin: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.Private;
    publishedAt: Schema.Attribute.DateTime;
    sessionId: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.Private &
      Schema.Attribute.Unique;
    status: Schema.Attribute.String & Schema.Attribute.Private;
    type: Schema.Attribute.String & Schema.Attribute.Private;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    userId: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.Private;
  };
}

export interface AdminTransferToken extends Struct.CollectionTypeSchema {
  collectionName: 'strapi_transfer_tokens';
  info: {
    description: '';
    displayName: 'Transfer Token';
    name: 'Transfer Token';
    pluralName: 'transfer-tokens';
    singularName: 'transfer-token';
  };
  options: {
    draftAndPublish: false;
  };
  pluginOptions: {
    'content-manager': {
      visible: false;
    };
    'content-type-builder': {
      visible: false;
    };
  };
  attributes: {
    accessKey: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.SetMinMaxLength<{
        minLength: 1;
      }>;
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    description: Schema.Attribute.String &
      Schema.Attribute.SetMinMaxLength<{
        minLength: 1;
      }> &
      Schema.Attribute.DefaultTo<''>;
    expiresAt: Schema.Attribute.DateTime;
    lastUsedAt: Schema.Attribute.DateTime;
    lifespan: Schema.Attribute.BigInteger;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'admin::transfer-token'
    > &
      Schema.Attribute.Private;
    name: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.Unique &
      Schema.Attribute.SetMinMaxLength<{
        minLength: 1;
      }>;
    permissions: Schema.Attribute.Relation<
      'oneToMany',
      'admin::transfer-token-permission'
    >;
    publishedAt: Schema.Attribute.DateTime;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
  };
}

export interface AdminTransferTokenPermission
  extends Struct.CollectionTypeSchema {
  collectionName: 'strapi_transfer_token_permissions';
  info: {
    description: '';
    displayName: 'Transfer Token Permission';
    name: 'Transfer Token Permission';
    pluralName: 'transfer-token-permissions';
    singularName: 'transfer-token-permission';
  };
  options: {
    draftAndPublish: false;
  };
  pluginOptions: {
    'content-manager': {
      visible: false;
    };
    'content-type-builder': {
      visible: false;
    };
  };
  attributes: {
    action: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.SetMinMaxLength<{
        minLength: 1;
      }>;
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'admin::transfer-token-permission'
    > &
      Schema.Attribute.Private;
    publishedAt: Schema.Attribute.DateTime;
    token: Schema.Attribute.Relation<'manyToOne', 'admin::transfer-token'>;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
  };
}

export interface AdminUser extends Struct.CollectionTypeSchema {
  collectionName: 'admin_users';
  info: {
    description: '';
    displayName: 'User';
    name: 'User';
    pluralName: 'users';
    singularName: 'user';
  };
  options: {
    draftAndPublish: false;
  };
  pluginOptions: {
    'content-manager': {
      visible: false;
    };
    'content-type-builder': {
      visible: false;
    };
  };
  attributes: {
    blocked: Schema.Attribute.Boolean &
      Schema.Attribute.Private &
      Schema.Attribute.DefaultTo<false>;
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    email: Schema.Attribute.Email &
      Schema.Attribute.Required &
      Schema.Attribute.Private &
      Schema.Attribute.Unique &
      Schema.Attribute.SetMinMaxLength<{
        minLength: 6;
      }>;
    firstname: Schema.Attribute.String &
      Schema.Attribute.SetMinMaxLength<{
        minLength: 1;
      }>;
    isActive: Schema.Attribute.Boolean &
      Schema.Attribute.Private &
      Schema.Attribute.DefaultTo<false>;
    lastname: Schema.Attribute.String &
      Schema.Attribute.SetMinMaxLength<{
        minLength: 1;
      }>;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<'oneToMany', 'admin::user'> &
      Schema.Attribute.Private;
    password: Schema.Attribute.Password &
      Schema.Attribute.Private &
      Schema.Attribute.SetMinMaxLength<{
        minLength: 6;
      }>;
    preferedLanguage: Schema.Attribute.String;
    publishedAt: Schema.Attribute.DateTime;
    registrationToken: Schema.Attribute.String & Schema.Attribute.Private;
    resetPasswordToken: Schema.Attribute.String & Schema.Attribute.Private;
    roles: Schema.Attribute.Relation<'manyToMany', 'admin::role'> &
      Schema.Attribute.Private;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    username: Schema.Attribute.String;
  };
}

export interface ApiActivityActivity extends Struct.CollectionTypeSchema {
  collectionName: 'activities';
  info: {
    displayName: 'Activity';
    pluralName: 'activities';
    singularName: 'activity';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    Category: Schema.Attribute.String;
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    Date: Schema.Attribute.Date & Schema.Attribute.Required;
    Description: Schema.Attribute.Blocks & Schema.Attribute.Required;
    EngDescription: Schema.Attribute.Blocks;
    EngTitle: Schema.Attribute.String;
    Featured: Schema.Attribute.Boolean & Schema.Attribute.DefaultTo<false>;
    ImageAltText: Schema.Attribute.String & Schema.Attribute.Required;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'api::activity.activity'
    > &
      Schema.Attribute.Private;
    publishedAt: Schema.Attribute.DateTime;
    Slug: Schema.Attribute.String;
    Tags: Schema.Attribute.String;
    Title: Schema.Attribute.String & Schema.Attribute.Required;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    Visuals: Schema.Attribute.Media<'images' | 'files', true> &
      Schema.Attribute.Required;
  };
}

export interface ApiAuthTokenAuthToken extends Struct.CollectionTypeSchema {
  collectionName: 'auth_tokens';
  info: {
    description: 'Stores authentication tokens and credentials for members';
    displayName: 'AuthToken';
    pluralName: 'auth-tokens';
    singularName: 'auth-token';
  };
  options: {
    draftAndPublish: false;
  };
  attributes: {
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    email: Schema.Attribute.Email &
      Schema.Attribute.Required &
      Schema.Attribute.Unique;
    lastLoginAt: Schema.Attribute.DateTime;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'api::auth-token.auth-token'
    > &
      Schema.Attribute.Private;
    passwordHash: Schema.Attribute.Text;
    publishedAt: Schema.Attribute.DateTime;
    tokenExpiry: Schema.Attribute.DateTime;
    tokenHash: Schema.Attribute.String;
    tokenType: Schema.Attribute.Enumeration<['magic-link', 'password-reset']>;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
  };
}

export interface ApiIncomeRecordIncomeRecord
  extends Struct.CollectionTypeSchema {
  collectionName: 'income_records';
  info: {
    description: '\u0388\u03C3\u03BF\u03B4\u03B1 \u03C7\u03C9\u03C1\u03AF\u03C2 \u03B1\u03C0\u03CC\u03B4\u03B5\u03B9\u03BE\u03B7';
    displayName: 'Income Record';
    pluralName: 'income-records';
    singularName: 'income-record';
  };
  options: {
    draftAndPublish: false;
  };
  attributes: {
    Aa: Schema.Attribute.String;
    Amount: Schema.Attribute.Decimal & Schema.Attribute.Required;
    Category: Schema.Attribute.Enumeration<
      ['grant', 'donation', 'extraordinary', 'business', 'other']
    > &
      Schema.Attribute.Required;
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    CreatedBy: Schema.Attribute.String;
    Description: Schema.Attribute.String;
    DocRef: Schema.Attribute.String;
    FunderType: Schema.Attribute.Enumeration<
      ['public', 'european', 'private', 'services', 'other']
    >;
    FileId: Schema.Attribute.String;
    FileName: Schema.Attribute.String;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'api::income-record.income-record'
    > &
      Schema.Attribute.Private;
    Month: Schema.Attribute.String & Schema.Attribute.Required;
    Notes: Schema.Attribute.Text;
    PayerName: Schema.Attribute.String;
    PaymentDate: Schema.Attribute.Date;
    PaymentMethod: Schema.Attribute.Enumeration<['bank', 'cash', 'offset']> &
      Schema.Attribute.DefaultTo<'bank'>;
    publishedAt: Schema.Attribute.DateTime;
    SheetSynced: Schema.Attribute.Boolean & Schema.Attribute.DefaultTo<false>;
    TransactionId: Schema.Attribute.String;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
  };
}

export interface ApiExpenseExpense extends Struct.CollectionTypeSchema {
  collectionName: 'expenses';
  info: {
    description: '\u0388\u03BE\u03BF\u03B4\u03B1 \u03B1\u03BD\u03AC \u03BC\u03AE\u03BD\u03B1';
    displayName: 'Expense';
    pluralName: 'expenses';
    singularName: 'expense';
  };
  options: {
    draftAndPublish: false;
  };
  attributes: {
    ReconAcked: Schema.Attribute.Boolean & Schema.Attribute.DefaultTo<false>;
    Aa: Schema.Attribute.String & Schema.Attribute.Required;
    ApprovedAt: Schema.Attribute.DateTime;
    ApprovedBy: Schema.Attribute.String;
    Category: Schema.Attribute.Enumeration<
      ['Office Expenses', 'Services', 'Travel and Accommodation', 'Others']
    >;
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    DocNumber: Schema.Attribute.String;
    DocRef: Schema.Attribute.String;
    FileId: Schema.Attribute.String;
    FileName: Schema.Attribute.String;
    IssueDate: Schema.Attribute.Date & Schema.Attribute.Required;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'api::expense.expense'
    > &
      Schema.Attribute.Private;
    Mark: Schema.Attribute.String;
    Month: Schema.Attribute.String & Schema.Attribute.Required;
    NetAmount: Schema.Attribute.Decimal;
    Notes: Schema.Attribute.Text;
    PayableAmount: Schema.Attribute.Decimal;
    PaymentDate: Schema.Attribute.Date;
    PaymentMethod: Schema.Attribute.Enumeration<
      ['bank', 'cash', 'offset', 'unpaid']
    > &
      Schema.Attribute.DefaultTo<'unpaid'>;
    publishedAt: Schema.Attribute.DateTime;
    SheetSynced: Schema.Attribute.Boolean & Schema.Attribute.DefaultTo<false>;
    State: Schema.Attribute.Enumeration<['draft', 'approved']> &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<'draft'>;
    SupplierName: Schema.Attribute.String;
    SupplierTaxId: Schema.Attribute.String;
    TransactionId: Schema.Attribute.String;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    VatAmount: Schema.Attribute.Decimal;
    Withholding: Schema.Attribute.Decimal;
  };
}

export interface ApiSupplierAliasSupplierAlias
  extends Struct.CollectionTypeSchema {
  collectionName: 'supplier_aliases';
  info: {
    description: '\u039C\u03B7\u03C4\u03C1\u03CE\u03BF \u03C0\u03C1\u03BF\u03BC\u03B7\u03B8\u03B5\u03C5\u03C4\u03CE\u03BD';
    displayName: 'Supplier Alias';
    pluralName: 'supplier-aliases';
    singularName: 'supplier-alias';
  };
  options: {
    draftAndPublish: false;
  };
  attributes: {
    AliasKey: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.Unique;
    AutoPaid: Schema.Attribute.Boolean & Schema.Attribute.DefaultTo<false>;
    Category: Schema.Attribute.Enumeration<
      ['Office Expenses', 'Services', 'Travel and Accommodation', 'Others']
    >;
    Confirmations: Schema.Attribute.Integer & Schema.Attribute.DefaultTo<1>;
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    DefaultDocPrefix: Schema.Attribute.String &
      Schema.Attribute.DefaultTo<'2.1'>;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'api::supplier-alias.supplier-alias'
    > &
      Schema.Attribute.Private;
    Notes: Schema.Attribute.Text;
    publishedAt: Schema.Attribute.DateTime;
    SupplierName: Schema.Attribute.String & Schema.Attribute.Required;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
  };
}

export interface ApiTreasuryBalanceTreasuryBalance
  extends Struct.CollectionTypeSchema {
  collectionName: 'treasury_balances';
  info: {
    description: '\u03A7\u03B5\u03B9\u03C1\u03BF\u03BA\u03AF\u03BD\u03B7\u03C4\u03B7 \u03BC\u03AD\u03C4\u03C1\u03B7\u03C3\u03B7 \u03C4\u03B1\u03BC\u03B5\u03AF\u03BF\u03C5';
    displayName: 'Treasury Balance';
    pluralName: 'treasury-balances';
    singularName: 'treasury-balance';
  };
  options: {
    draftAndPublish: false;
  };
  attributes: {
    AsOf: Schema.Attribute.Date & Schema.Attribute.Required;
    Bank: Schema.Attribute.Decimal & Schema.Attribute.Required;
    Cash: Schema.Attribute.Decimal;
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'api::treasury-balance.treasury-balance'
    > &
      Schema.Attribute.Private;
    Notes: Schema.Attribute.Text;
    publishedAt: Schema.Attribute.DateTime;
    RecordedBy: Schema.Attribute.String;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
  };
}

export interface ApiOcTaskBoardOcTaskBoard
  extends Struct.CollectionTypeSchema {
  collectionName: 'oc_task_boards';
  info: {
    description: '\u03A0\u03AF\u03BD\u03B1\u03BA\u03B1\u03C2 \u03B5\u03BA\u03BA\u03C1\u03B5\u03BC\u03BF\u03C4\u03AE\u03C4\u03C9\u03BD';
    displayName: 'OC Task Board';
    pluralName: 'oc-task-boards';
    singularName: 'oc-task-board';
  };
  options: {
    draftAndPublish: false;
  };
  attributes: {
    Archived: Schema.Attribute.Boolean & Schema.Attribute.DefaultTo<false>;
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    Description: Schema.Attribute.Text;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'api::oc-task-board.oc-task-board'
    > &
      Schema.Attribute.Private;
    publishedAt: Schema.Attribute.DateTime;
    Scope: Schema.Attribute.Enumeration<
      ['coordination', 'members', 'project']
    > &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<'coordination'>;
    Slug: Schema.Attribute.UID<'Title'>;
    SortIndex: Schema.Attribute.Integer & Schema.Attribute.DefaultTo<0>;
    Title: Schema.Attribute.String & Schema.Attribute.Required;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
  };
}

export interface ApiOcContractOcContract extends Struct.CollectionTypeSchema {
  collectionName: 'oc_contracts';
  info: {
    description: '\u039C\u03B7\u03C4\u03C1\u03CE\u03BF \u03A3\u03C5\u03BC\u03B2\u03AC\u03C3\u03B5\u03C9\u03BD & \u03A0\u03BB\u03B7\u03C1\u03C9\u03BC\u03CE\u03BD \u03A3\u03C5\u03BD\u03B5\u03C1\u03B3\u03B1\u03C4\u03CE\u03BD \u2014 \u03B1\u03C5\u03B8\u03B5\u03BD\u03C4\u03AF\u03B1\u00B7 \u03C4\u03BF Google Sheet \u03B5\u03AF\u03BD\u03B1\u03B9 \u03BA\u03B1\u03B8\u03C1\u03AD\u03C6\u03C4\u03B7\u03C2';
    displayName: 'OC Contract';
    pluralName: 'oc-contracts';
    singularName: 'oc-contract';
  };
  options: {
    draftAndPublish: false;
  };
  attributes: {
    Aa: Schema.Attribute.Integer;
    Amount: Schema.Attribute.Decimal;
    Archived: Schema.Attribute.Boolean & Schema.Attribute.DefaultTo<false>;
    BankIban: Schema.Attribute.String;
    ContractFile: Schema.Attribute.String;
    ContractNotes: Schema.Attribute.Text;
    ContractStatus: Schema.Attribute.String;
    ContractType: Schema.Attribute.String;
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    CreatedByName: Schema.Attribute.String;
    Email: Schema.Attribute.String;
    EndDate: Schema.Attribute.Date;
    ExpenseDocsLink: Schema.Attribute.String;
    ExpenseListLink: Schema.Attribute.String;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'api::oc-contract.oc-contract'
    > &
      Schema.Attribute.Private;
    Name: Schema.Attribute.String & Schema.Attribute.Required;
    NoReminders: Schema.Attribute.Boolean & Schema.Attribute.DefaultTo<false>;
    ReminderLog: Schema.Attribute.JSON;
    NextPaymentDate: Schema.Attribute.Date;
    NextPaymentStatus: Schema.Attribute.String;
    PaymentFrequency: Schema.Attribute.String;
    PaymentHistory: Schema.Attribute.Text;
    PaymentMethod: Schema.Attribute.String;
    PaymentNotes: Schema.Attribute.Text;
    PaymentSchedule: Schema.Attribute.Text;
    PaymentStatus: Schema.Attribute.String;
    Phone: Schema.Attribute.String;
    Project: Schema.Attribute.String;
    publishedAt: Schema.Attribute.DateTime;
    Role: Schema.Attribute.Text;
    SortIndex: Schema.Attribute.Integer & Schema.Attribute.DefaultTo<0>;
    StartDate: Schema.Attribute.Date;
    TaxId: Schema.Attribute.String;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    UpdatedByName: Schema.Attribute.String;
  };
}

export interface ApiOcTaskOcTask extends Struct.CollectionTypeSchema {
  collectionName: 'oc_tasks';
  info: {
    description: '\u0395\u03BA\u03BA\u03C1\u03B5\u03BC\u03CC\u03C4\u03B7\u03C4\u03B1 \u03C3\u03B5 \u03C0\u03AF\u03BD\u03B1\u03BA\u03B1';
    displayName: 'OC Task';
    pluralName: 'oc-tasks';
    singularName: 'oc-task';
  };
  options: {
    draftAndPublish: false;
  };
  attributes: {
    assignees: Schema.Attribute.Relation<'manyToMany', 'api::member.member'>;
    board: Schema.Attribute.Relation<
      'manyToOne',
      'api::oc-task-board.oc-task-board'
    >;
    Categories: Schema.Attribute.JSON;
    Completed: Schema.Attribute.Boolean & Schema.Attribute.DefaultTo<false>;
    CompletedAt: Schema.Attribute.DateTime;
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    CreatedBy: Schema.Attribute.String;
    Description: Schema.Attribute.Text;
    DueDate: Schema.Attribute.Date;
    LegacyAssignees: Schema.Attribute.JSON;
    Links: Schema.Attribute.Text;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<'oneToMany', 'api::oc-task.oc-task'> &
      Schema.Attribute.Private;
    Priority: Schema.Attribute.Enumeration<['low', 'normal', 'high']> &
      Schema.Attribute.DefaultTo<'normal'>;
    publishedAt: Schema.Attribute.DateTime;
    SortIndex: Schema.Attribute.Integer & Schema.Attribute.DefaultTo<0>;
    Status: Schema.Attribute.Enumeration<
      ['not_started', 'in_progress', 'done']
    > &
      Schema.Attribute.DefaultTo<'not_started'>;
    Title: Schema.Attribute.String & Schema.Attribute.Required;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
  };
}

export interface ApiEventAttendanceEventAttendance
  extends Struct.CollectionTypeSchema {
  collectionName: 'event_attendances';
  info: {
    description: '\u03A0\u03B1\u03C1\u03BF\u03C5\u03C3\u03AF\u03B5\u03C2 \u03C3\u03B5 \u03B4\u03C1\u03AC\u03C3\u03B7';
    displayName: 'Event Attendance';
    pluralName: 'event-attendances';
    singularName: 'event-attendance';
  };
  options: {
    draftAndPublish: false;
  };
  attributes: {
    attendees: Schema.Attribute.Relation<'manyToMany', 'api::member.member'>;
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    EventCategory: Schema.Attribute.String;
    EventDate: Schema.Attribute.Date & Schema.Attribute.Required;
    EventId: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.Unique;
    EventTitle: Schema.Attribute.String & Schema.Attribute.Required;
    GuestNames: Schema.Attribute.Text;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'api::event-attendance.event-attendance'
    > &
      Schema.Attribute.Private;
    NonMemberCount: Schema.Attribute.Integer & Schema.Attribute.DefaultTo<0>;
    Notes: Schema.Attribute.Text;
    publishedAt: Schema.Attribute.DateTime;
    RecordedAt: Schema.Attribute.DateTime;
    RecordedBy: Schema.Attribute.String;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
  };
}

export interface ApiLibraryItemLibraryItem extends Struct.CollectionTypeSchema {
  collectionName: 'library_items';
  info: {
    description: '\u03A4\u03B5\u03BA\u03BC\u03AE\u03C1\u03B9\u03BF \u03C4\u03B7\u03C2 \u0391\u03BD\u03BF\u03B9\u03C7\u03C4\u03AE\u03C2 \u0392\u03B9\u03B2\u03BB\u03B9\u03BF\u03B8\u03AE\u03BA\u03B7\u03C2';
    displayName: 'Library Item';
    pluralName: 'library-items';
    singularName: 'library-item';
  };
  options: {
    draftAndPublish: false;
  };
  attributes: {
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    Description: Schema.Attribute.Text;
    DocType: Schema.Attribute.String & Schema.Attribute.Required;
    DriveFileId: Schema.Attribute.String;
    DuplicateOf: Schema.Attribute.Relation<
      'oneToOne',
      'api::library-item.library-item'
    >;
    FileName: Schema.Attribute.String;
    FileSize: Schema.Attribute.Integer;
    Language: Schema.Attribute.Enumeration<
      ['\u0395\u03BB\u03BB\u03B7\u03BD\u03B9\u03BA\u03AC', '\u0391\u03B3\u03B3\u03BB\u03B9\u03BA\u03AC', '\u0394\u03AF\u03B3\u03BB\u03C9\u03C3\u03C3\u03BF', '\u0386\u03BB\u03BB\u03B7']
    >;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'api::library-item.library-item'
    > &
      Schema.Attribute.Private;
    MimeType: Schema.Attribute.String;
    publishedAt: Schema.Attribute.DateTime;
    RejectionReason: Schema.Attribute.Text;
    ReviewedAt: Schema.Attribute.DateTime;
    ReviewedBy: Schema.Attribute.String;
    SourceUrl: Schema.Attribute.String;
    State: Schema.Attribute.Enumeration<['published', 'pending', 'rejected']> &
      Schema.Attribute.DefaultTo<'published'>;
    SecondaryThemes: Schema.Attribute.JSON;
    Subthemes: Schema.Attribute.JSON;
    SubmittedBy: Schema.Attribute.Relation<'manyToOne', 'api::member.member'>;
    SubmittedByName: Schema.Attribute.String;
    Theme: Schema.Attribute.String & Schema.Attribute.Required;
    Title: Schema.Attribute.String & Schema.Attribute.Required;
    TitleKey: Schema.Attribute.String;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    Year: Schema.Attribute.Integer;
  };
}

export interface ApiLibraryRejectionLibraryRejection
  extends Struct.CollectionTypeSchema {
  collectionName: 'library_rejections';
  info: {
    description: '\u038A\u03C7\u03BD\u03BF\u03C2 \u03B1\u03C0\u03BF\u03C1\u03C1\u03B9\u03C6\u03B8\u03B5\u03AF\u03C3\u03B1\u03C2 \u03BA\u03B1\u03C4\u03B1\u03C7\u03CE\u03C1\u03B7\u03C3\u03B7\u03C2 \u03C3\u03C4\u03B7\u03BD \u0391\u03BD\u03BF\u03B9\u03C7\u03C4\u03AE \u0392\u03B9\u03B2\u03BB\u03B9\u03BF\u03B8\u03AE\u03BA\u03B7';
    displayName: 'Library Rejection';
    pluralName: 'library-rejections';
    singularName: 'library-rejection';
  };
  options: {
    draftAndPublish: false;
  };
  attributes: {
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    DriveFileId: Schema.Attribute.String;
    DuplicateOfTitle: Schema.Attribute.String;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'api::library-rejection.library-rejection'
    > &
      Schema.Attribute.Private;
    publishedAt: Schema.Attribute.DateTime;
    RejectedBy: Schema.Attribute.String;
    RejectionReason: Schema.Attribute.Text;
    SharedWords: Schema.Attribute.Integer;
    SubmittedAt: Schema.Attribute.DateTime;
    SubmittedByEmail: Schema.Attribute.String;
    SubmittedByName: Schema.Attribute.String;
    Theme: Schema.Attribute.String;
    Title: Schema.Attribute.String & Schema.Attribute.Required;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
  };
}

export interface ApiListSnapshotListSnapshot
  extends Struct.CollectionTypeSchema {
  collectionName: 'list_snapshots';
  info: {
    description: '\u039C\u03B7\u03BD\u03B9\u03B1\u03AF\u03BF \u03C3\u03C4\u03B9\u03B3\u03BC\u03B9\u03CC\u03C4\u03C5\u03C0\u03BF \u03BB\u03B9\u03C3\u03C4\u03CE\u03BD';
    displayName: 'List Snapshot';
    pluralName: 'list-snapshots';
    singularName: 'list-snapshot';
  };
  options: {
    draftAndPublish: false;
  };
  attributes: {
    CapturedAt: Schema.Attribute.DateTime;
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    External: Schema.Attribute.Integer;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'api::list-snapshot.list-snapshot'
    > &
      Schema.Attribute.Private;
    Media: Schema.Attribute.Integer;
    Members: Schema.Attribute.Integer;
    Month: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.Unique;
    Paid: Schema.Attribute.Integer;
    publishedAt: Schema.Attribute.DateTime;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
  };
}

export interface ApiExitSurveyExitSurvey extends Struct.CollectionTypeSchema {
  collectionName: 'exit_surveys';
  info: {
    description: '\u03A6\u03CC\u03C1\u03BC\u03B5\u03C2 \u03B1\u03C0\u03BF\u03C7\u03CE\u03C1\u03B7\u03C3\u03B7\u03C2 \u03BC\u03B5\u03BB\u03CE\u03BD';
    displayName: 'Exit Survey';
    pluralName: 'exit-surveys';
    singularName: 'exit-survey';
  };
  options: {
    draftAndPublish: false;
  };
  attributes: {
    AllowFollowUp: Schema.Attribute.Boolean & Schema.Attribute.DefaultTo<false>;
    Anonymous: Schema.Attribute.Boolean &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<true>;
    Barriers: Schema.Attribute.JSON;
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    FinalComment: Schema.Attribute.Text;
    KeepNewsletter: Schema.Attribute.Boolean;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'api::exit-survey.exit-survey'
    > &
      Schema.Attribute.Private;
    MemberDocId: Schema.Attribute.String;
    MemberName: Schema.Attribute.String;
    MostUseful: Schema.Attribute.JSON;
    publishedAt: Schema.Attribute.DateTime;
    ReasonOther: Schema.Attribute.String;
    Reasons: Schema.Attribute.JSON;
    Satisfaction: Schema.Attribute.Integer &
      Schema.Attribute.SetMinMax<{ max: 5; min: 1 }, number>;
    SubmittedAt: Schema.Attribute.DateTime;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    WouldChange: Schema.Attribute.Text;
    WouldReturn: Schema.Attribute.JSON;
  };
}

export interface ApiMembershipApplicationMembershipApplication
  extends Struct.CollectionTypeSchema {
  collectionName: 'membership_applications';
  info: {
    description: 'Permanent dossier of every membership application (immutable after decision). No public API access — server token only.';
    displayName: 'Membership Application';
    pluralName: 'membership-applications';
    singularName: 'membership-application';
  };
  options: {
    draftAndPublish: false;
  };
  attributes: {
    AcceptPrivacy: Schema.Attribute.Boolean & Schema.Attribute.Required;
    AcceptRegulation: Schema.Attribute.Boolean & Schema.Attribute.Required;
    AcceptStatute: Schema.Attribute.Boolean & Schema.Attribute.Required;
    ActionFormats: Schema.Attribute.JSON;
    ActivityCityA: Schema.Attribute.String & Schema.Attribute.Required;
    ActivityCityB: Schema.Attribute.String;
    Address: Schema.Attribute.String;
    AgeRange: Schema.Attribute.String;
    ApplicationState: Schema.Attribute.Enumeration<
      ['submitted', 'approved', 'rejected', 'completed']
    > &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<'submitted'>;
    AssignedAM: Schema.Attribute.Integer;
    AudienceGroups: Schema.Attribute.JSON;
    Bio: Schema.Attribute.Text & Schema.Attribute.Required;
    BioEn: Schema.Attribute.Text;
    BoschAlumni: Schema.Attribute.Enumeration<['Ναι', 'Όχι']>;
    BoschPrograms: Schema.Attribute.Text;
    BoschProfile: Schema.Attribute.String;
    Challenges: Schema.Attribute.JSON;
    CompanyAddress: Schema.Attribute.String;
    CompanyName: Schema.Attribute.String;
    CompanyTaxId: Schema.Attribute.String &
      Schema.Attribute.SetMinMaxLength<{ maxLength: 9; minLength: 9 }>;
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    DecisionBy: Schema.Attribute.String;
    DecisionDate: Schema.Attribute.DateTime;
    DecisionNote: Schema.Attribute.Text;
    Disability: Schema.Attribute.Enumeration<
      ['Ναι', 'Όχι', 'Επιθυμώ να μη δηλώσω']
    >;
    Education: Schema.Attribute.Text;
    Email: Schema.Attribute.Email & Schema.Attribute.Required;
    EmploymentDetails: Schema.Attribute.JSON;
    EmploymentStatus: Schema.Attribute.JSON;
    Experience: Schema.Attribute.Text;
    Facebook: Schema.Attribute.String;
    FatherName: Schema.Attribute.String;
    FieldsOfActivity: Schema.Attribute.JSON;
    FirstName: Schema.Attribute.String & Schema.Attribute.Required;
    Gender: Schema.Attribute.Enumeration<
      ['Γυναίκα', 'Άνδρας', 'Μη-δυαδικό', 'Επιθυμώ να μη δηλώσω']
    >;
    Instagram: Schema.Attribute.String;
    LastName: Schema.Attribute.String & Schema.Attribute.Required;
    LinkedIn: Schema.Attribute.String;
    linkedMember: Schema.Attribute.Relation<'oneToOne', 'api::member.member'>;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'api::membership-application.membership-application'
    > &
      Schema.Attribute.Private;
    NameLatin: Schema.Attribute.String;
    NetworkContribution: Schema.Attribute.Text;
    NewsletterOptIn: Schema.Attribute.Boolean & Schema.Attribute.DefaultTo<false>;
    Phone: Schema.Attribute.String & Schema.Attribute.Required;
    Photo: Schema.Attribute.Media<'images'>;
    ProposedSolutions: Schema.Attribute.Text;
    Profession: Schema.Attribute.String & Schema.Attribute.Required;
    PublishConsent: Schema.Attribute.JSON;
    publishedAt: Schema.Attribute.DateTime;
    ReceiptType: Schema.Attribute.Enumeration<['Φυσικό πρόσωπο', 'Εταιρεία']> &
      Schema.Attribute.DefaultTo<'Φυσικό πρόσωπο'>;
    ResidenceCity: Schema.Attribute.String & Schema.Attribute.Required;
    ResidenceRegion: Schema.Attribute.String;
    SheetSynced: Schema.Attribute.Boolean & Schema.Attribute.DefaultTo<false>;
    StartFellow: Schema.Attribute.Enumeration<['Ναι', 'Όχι']>;
    SubmittedAt: Schema.Attribute.DateTime;
    TaxId: Schema.Attribute.String &
      Schema.Attribute.SetMinMaxLength<{ maxLength: 9; minLength: 9 }>;
    Themes: Schema.Attribute.JSON;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    Votes: Schema.Attribute.JSON;
    Website: Schema.Attribute.String;
  };
}

export interface ApiMemberMember extends Struct.CollectionTypeSchema {
  collectionName: 'members';
  info: {
    displayName: 'Member';
    pluralName: 'members';
    singularName: 'member';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    OcPrefs: Schema.Attribute.JSON;
    Bio: Schema.Attribute.Blocks & Schema.Attribute.Required;
    City: Schema.Attribute.String & Schema.Attribute.Required;
    EngBio: Schema.Attribute.Blocks;
    EngName: Schema.Attribute.String;
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    Email: Schema.Attribute.Email &
      Schema.Attribute.Required &
      Schema.Attribute.Unique;
    FieldsOfWork: Schema.Attribute.String & Schema.Attribute.Required;
    Image: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios',
      true
    > &
      Schema.Attribute.Required;
    IsLibrarian: Schema.Attribute.Boolean & Schema.Attribute.DefaultTo<false>;
    LibrarianUntil: Schema.Attribute.Date;
    lastLoginAt: Schema.Attribute.DateTime;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'api::member.member'
    > &
      Schema.Attribute.Private;
    magicLinkExpiry: Schema.Attribute.DateTime;
    magicLinkToken: Schema.Attribute.String;
    Name: Schema.Attribute.String & Schema.Attribute.Required;
    password: Schema.Attribute.String;
    Phone: Schema.Attribute.String;
    ProfileImageAltText: Schema.Attribute.String & Schema.Attribute.Required;
    Project1Description: Schema.Attribute.Blocks;
    Project1Pictures: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios',
      true
    >;
    Project1PicturesAltText: Schema.Attribute.String;
    Project1Links: Schema.Attribute.Text;
    Project1Tags: Schema.Attribute.String;
    Project1Title: Schema.Attribute.String;
    Project2Description: Schema.Attribute.Blocks;
    Project2Pictures: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios',
      true
    >;
    Project2PicturesAltText: Schema.Attribute.String;
    Project2Links: Schema.Attribute.Text;
    Project2Tags: Schema.Attribute.String;
    Project2Title: Schema.Attribute.String;
    Province: Schema.Attribute.String & Schema.Attribute.Required;
    publishedAt: Schema.Attribute.DateTime;
    Slug: Schema.Attribute.String & Schema.Attribute.Unique;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    Websites: Schema.Attribute.Text;
  };
}

export interface ApiNewsletterNewsletter extends Struct.CollectionTypeSchema {
  collectionName: 'newsletters';
  info: {
    displayName: 'Newsletter';
    pluralName: 'newsletters';
    singularName: 'newsletter';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    Date: Schema.Attribute.Date & Schema.Attribute.Required;
    DriveLink: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.SetMinMaxLength<{
        maxLength: 2000;
      }>;
    Image: Schema.Attribute.Media<'images'>;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'api::newsletter.newsletter'
    > &
      Schema.Attribute.Private;
    publishedAt: Schema.Attribute.DateTime;
    Slug: Schema.Attribute.UID<'Title'>;
    Title: Schema.Attribute.String & Schema.Attribute.Required;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
  };
}

export interface ApiNewsletterSubscriberNewsletterSubscriber
  extends Struct.CollectionTypeSchema {
  collectionName: 'newsletter_subscribers';
  info: {
    displayName: 'Newsletter Subscriber';
    pluralName: 'newsletter-subscribers';
    singularName: 'newsletter-subscriber';
  };
  options: {
    draftAndPublish: false;
  };
  attributes: {
    ConfirmedAt: Schema.Attribute.DateTime & Schema.Attribute.Required;
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    Email: Schema.Attribute.Email &
      Schema.Attribute.Required &
      Schema.Attribute.Unique;
    FirstName: Schema.Attribute.String;
    LastName: Schema.Attribute.String;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'api::newsletter-subscriber.newsletter-subscriber'
    > &
      Schema.Attribute.Private;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
  };
}

export interface ApiProfileChangeLogProfileChangeLog
  extends Struct.CollectionTypeSchema {
  collectionName: 'profile_change_logs';
  info: {
    displayName: 'Profile Change Log';
    pluralName: 'profile-change-logs';
    singularName: 'profile-change-log';
  };
  options: {
    draftAndPublish: false;
  };
  attributes: {
    changedAt: Schema.Attribute.DateTime & Schema.Attribute.Required;
    changedFields: Schema.Attribute.Text & Schema.Attribute.Required;
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'api::profile-change-log.profile-change-log'
    > &
      Schema.Attribute.Private;
    memberEmail: Schema.Attribute.Email & Schema.Attribute.Required;
    memberName: Schema.Attribute.String & Schema.Attribute.Required;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
  };
}

export interface ApiProjectProject extends Struct.CollectionTypeSchema {
  collectionName: 'projects';
  info: {
    displayName: 'Project';
    pluralName: 'projects';
    singularName: 'project';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    category: Schema.Attribute.Text;
    cover_image: Schema.Attribute.Media<'images'> & Schema.Attribute.Required;
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    end_date: Schema.Attribute.Date;
    external_links: Schema.Attribute.Component<
      'project.external-link',
      true
    >;
    featured: Schema.Attribute.Boolean & Schema.Attribute.DefaultTo<true>;
    full_description: Schema.Attribute.Blocks;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'api::project.project'
    > &
      Schema.Attribute.Private;
    partners: Schema.Attribute.Component<'project.partner', true>;
    project_images: Schema.Attribute.Media<'images', true>;
    project_link: Schema.Attribute.String &
      Schema.Attribute.SetMinMaxLength<{
        maxLength: 2000;
      }>;
    publishedAt: Schema.Attribute.DateTime;
    short_description: Schema.Attribute.Text;
    project_entries: Schema.Attribute.Relation<
      'oneToMany',
      'api::project-entry.project-entry'
    >;
    project_status: Schema.Attribute.Enumeration<
      ['active', 'in_progress', 'completed']
    >;
    slug: Schema.Attribute.UID<'title'>;
    sort_order: Schema.Attribute.Integer & Schema.Attribute.DefaultTo<0>;
    start_date: Schema.Attribute.Date;
    title: Schema.Attribute.String & Schema.Attribute.Required;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
  };
}

export interface ApiProjectEntryProjectEntry extends Struct.CollectionTypeSchema {
  collectionName: 'sima_entries';
  info: {
    displayName: 'Project Entry';
    pluralName: 'project-entries';
    singularName: 'project-entry';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    category: Schema.Attribute.String;
    cover_image: Schema.Attribute.Media<'images'>;
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    description: Schema.Attribute.Blocks;
    entry_link: Schema.Attribute.String &
      Schema.Attribute.SetMinMaxLength<{
        maxLength: 2000;
      }>;
    expiration_date: Schema.Attribute.DateTime;
    images: Schema.Attribute.Media<'images', true>;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'api::project-entry.project-entry'
    > &
      Schema.Attribute.Private;
    project: Schema.Attribute.Relation<
      'manyToOne',
      'api::project.project'
    >;
    publication_date: Schema.Attribute.DateTime;
    publishedAt: Schema.Attribute.DateTime;
    slug: Schema.Attribute.UID<'title'>;
    tags: Schema.Attribute.Text;
    title: Schema.Attribute.String & Schema.Attribute.Required;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    visibility: Schema.Attribute.Enumeration<['public', 'private']> &
      Schema.Attribute.DefaultTo<'private'>;
  };
}

export interface ApiCoordinationTeamCoordinationTeam
  extends Struct.CollectionTypeSchema {
  collectionName: 'coordination_teams';
  info: {
    displayName: 'Coordination Team';
    pluralName: 'coordination-teams';
    singularName: 'coordination-team';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    Admin: Schema.Attribute.Relation<'manyToOne', 'api::member.member'>;
    Coordinator: Schema.Attribute.Relation<'manyToOne', 'api::member.member'>;
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    Description: Schema.Attribute.Text;
    EngDescription: Schema.Attribute.Text;
    EngName: Schema.Attribute.String;
    Image: Schema.Attribute.Media<'images'>;
    ImageAltText: Schema.Attribute.String;
    IsCurrent: Schema.Attribute.Boolean & Schema.Attribute.DefaultTo<false>;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'api::coordination-team.coordination-team'
    > &
      Schema.Attribute.Private;
    Members: Schema.Attribute.Relation<'manyToMany', 'api::member.member'>;
    Name: Schema.Attribute.String & Schema.Attribute.Required;
    Period: Schema.Attribute.String & Schema.Attribute.Required;
    publishedAt: Schema.Attribute.DateTime;
    Slug: Schema.Attribute.UID<'Name'> & Schema.Attribute.Required;
    SortOrder: Schema.Attribute.Integer & Schema.Attribute.DefaultTo<0>;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
  };
}

export interface ApiPayerAliasPayerAlias extends Struct.CollectionTypeSchema {
  collectionName: 'payer_aliases';
  info: {
    description: 'Learned \u03b1\u03bd\u03c4\u03b9\u03c3\u03c4\u03bf\u03b9\u03c7\u03af\u03c3\u03b5\u03b9\u03c2 \u03c0\u03bb\u03b7\u03c1\u03c9\u03c4\u03ae \u2192 \u03bc\u03ad\u03bb\u03bf\u03c5\u03c2';
    displayName: 'Payer Alias';
    pluralName: 'payer-aliases';
    singularName: 'payer-alias';
  };
  options: {
    draftAndPublish: false;
  };
  attributes: {
    AliasKey: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.Unique;
    Confirmations: Schema.Attribute.Integer & Schema.Attribute.DefaultTo<1>;
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    LastUsed: Schema.Attribute.Date;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'api::payer-alias.payer-alias'
    > &
      Schema.Attribute.Private;
    member: Schema.Attribute.Relation<'manyToOne', 'api::member.member'>;
    MemberName: Schema.Attribute.String;
    PayerName: Schema.Attribute.String & Schema.Attribute.Required;
    publishedAt: Schema.Attribute.DateTime;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
  };
}

export interface ApiMonthlyCloseMonthlyClose extends Struct.CollectionTypeSchema {
  collectionName: 'monthly_closes';
  info: {
    description: '\u039A\u03BB\u03B5\u03AF\u03C3\u03B9\u03BC\u03BF \u03BC\u03AE\u03BD\u03B1 \u03B5\u03C3\u03CC\u03B4\u03C9\u03BD';
    displayName: 'Monthly Close';
    pluralName: 'monthly-closes';
    singularName: 'monthly-close';
  };
  options: {
    draftAndPublish: false;
  };
  attributes: {
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'api::monthly-close.monthly-close'
    > &
      Schema.Attribute.Private;
    Month: Schema.Attribute.String & Schema.Attribute.Required & Schema.Attribute.Unique;
    Notes: Schema.Attribute.Text;
    publishedAt: Schema.Attribute.DateTime;
    ReadyAt: Schema.Attribute.DateTime;
    ReadyBy: Schema.Attribute.String;
    SentAt: Schema.Attribute.DateTime;
    SentBy: Schema.Attribute.String;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
  };
}

export interface ApiReceiptReceipt extends Struct.CollectionTypeSchema {
  collectionName: 'receipts';
  info: {
    description: '\u039C\u03B7\u03C4\u03C1\u03CE\u03BF \u03B1\u03C0\u03BF\u03B4\u03B5\u03AF\u03BE\u03B5\u03C9\u03BD \u03B5\u03AF\u03C3\u03C0\u03C1\u03B1\u03BE\u03B7\u03C2';
    displayName: 'Receipt';
    pluralName: 'receipts';
    singularName: 'receipt';
  };
  options: {
    draftAndPublish: false;
  };
  attributes: {
    Aa: Schema.Attribute.String;
    Amount: Schema.Attribute.Decimal & Schema.Attribute.Required;
    CompanyAddress: Schema.Attribute.String;
    CompanyName: Schema.Attribute.String;
    CompanyTaxId: Schema.Attribute.String;
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    CreatedBy: Schema.Attribute.String;
    IssueDate: Schema.Attribute.Date & Schema.Attribute.Required;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'api::receipt.receipt'
    > &
      Schema.Attribute.Private;
    member: Schema.Attribute.Relation<'manyToOne', 'api::member.member'>;
    MemberName: Schema.Attribute.String;
    Notes: Schema.Attribute.Text;
    Number: Schema.Attribute.Integer &
      Schema.Attribute.Required &
      Schema.Attribute.Unique &
      Schema.Attribute.SetMinMax<{ min: 1 }, number>;
    PayerName: Schema.Attribute.String;
    PaymentDate: Schema.Attribute.Date;
    PaymentMethod: Schema.Attribute.Enumeration<['bank', 'cash']> &
      Schema.Attribute.DefaultTo<'bank'>;
    publishedAt: Schema.Attribute.DateTime;
    RegistrationFee: Schema.Attribute.Decimal;
    SentAt: Schema.Attribute.DateTime;
    SheetSynced: Schema.Attribute.Boolean & Schema.Attribute.DefaultTo<false>;
    SubscriptionFee: Schema.Attribute.Decimal;
    SubscriptionYear: Schema.Attribute.Integer;
    TransactionId: Schema.Attribute.String;
    Type: Schema.Attribute.Enumeration<
      [
        'registration',
        'subscription',
        'extraordinary',
        'donation',
        'grant',
        'other',
      ]
    > &
      Schema.Attribute.Required;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
  };
}

export interface ApiWorkingGroupWorkingGroup
  extends Struct.CollectionTypeSchema {
  collectionName: 'working_groups';
  info: {
    displayName: 'Working Group';
    pluralName: 'working-groups';
    singularName: 'working-group';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    Coordinator: Schema.Attribute.Relation<'manyToOne', 'api::member.member'>;
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    Description: Schema.Attribute.Text & Schema.Attribute.Required;
    EngDescription: Schema.Attribute.Text;
    EngName: Schema.Attribute.String;
    Image: Schema.Attribute.Media<'images'>;
    ImageAltText: Schema.Attribute.String;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'api::working-group.working-group'
    > &
      Schema.Attribute.Private;
    MaterialUrl: Schema.Attribute.String;
    Members: Schema.Attribute.Relation<'manyToMany', 'api::member.member'>;
    Name: Schema.Attribute.String & Schema.Attribute.Required;
    publishedAt: Schema.Attribute.DateTime;
    Slug: Schema.Attribute.UID<'Name'> & Schema.Attribute.Required;
    SortOrder: Schema.Attribute.Integer & Schema.Attribute.DefaultTo<0>;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
  };
}

export interface ApiOpenCallOpenCall extends Struct.CollectionTypeSchema {
  collectionName: 'open_calls';
  info: {
    displayName: 'Open Calls';
    pluralName: 'open-calls';
    singularName: 'open-call';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    Deadline: Schema.Attribute.Date & Schema.Attribute.Required;
    Description: Schema.Attribute.Blocks & Schema.Attribute.Required;
    EngDescription: Schema.Attribute.Blocks;
    EngTitle: Schema.Attribute.String;
    Image: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'> &
      Schema.Attribute.Required;
    ImageAltText: Schema.Attribute.String & Schema.Attribute.Required;
    Link: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.SetMinMaxLength<{
        maxLength: 2000;
      }>;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'api::open-call.open-call'
    > &
      Schema.Attribute.Private;
    Category: Schema.Attribute.Enumeration<
      [
        'Δικτύωση & Συνέδρια',
        'Εκπαίδευση & Κατάρτιση',
        'Καλλιτεχνικές Προσκλήσεις',
        'Χρηματοδοτήσεις & Επιχορηγήσεις',
        'Ψηφιακός Μετασχηματισμός',
      ]
    > &
      Schema.Attribute.Required;
    publishedAt: Schema.Attribute.DateTime;
    Title: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.SetMinMaxLength<{
        maxLength: 500;
      }>;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
  };
}

export interface PluginContentReleasesRelease
  extends Struct.CollectionTypeSchema {
  collectionName: 'strapi_releases';
  info: {
    displayName: 'Release';
    pluralName: 'releases';
    singularName: 'release';
  };
  options: {
    draftAndPublish: false;
  };
  pluginOptions: {
    'content-manager': {
      visible: false;
    };
    'content-type-builder': {
      visible: false;
    };
  };
  attributes: {
    actions: Schema.Attribute.Relation<
      'oneToMany',
      'plugin::content-releases.release-action'
    >;
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'plugin::content-releases.release'
    > &
      Schema.Attribute.Private;
    name: Schema.Attribute.String & Schema.Attribute.Required;
    publishedAt: Schema.Attribute.DateTime;
    releasedAt: Schema.Attribute.DateTime;
    scheduledAt: Schema.Attribute.DateTime;
    status: Schema.Attribute.Enumeration<
      ['ready', 'blocked', 'failed', 'done', 'empty']
    > &
      Schema.Attribute.Required;
    timezone: Schema.Attribute.String;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
  };
}

export interface PluginContentReleasesReleaseAction
  extends Struct.CollectionTypeSchema {
  collectionName: 'strapi_release_actions';
  info: {
    displayName: 'Release Action';
    pluralName: 'release-actions';
    singularName: 'release-action';
  };
  options: {
    draftAndPublish: false;
  };
  pluginOptions: {
    'content-manager': {
      visible: false;
    };
    'content-type-builder': {
      visible: false;
    };
  };
  attributes: {
    contentType: Schema.Attribute.String & Schema.Attribute.Required;
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    entryDocumentId: Schema.Attribute.String;
    isEntryValid: Schema.Attribute.Boolean;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'plugin::content-releases.release-action'
    > &
      Schema.Attribute.Private;
    publishedAt: Schema.Attribute.DateTime;
    release: Schema.Attribute.Relation<
      'manyToOne',
      'plugin::content-releases.release'
    >;
    type: Schema.Attribute.Enumeration<['publish', 'unpublish']> &
      Schema.Attribute.Required;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
  };
}

export interface PluginI18NLocale extends Struct.CollectionTypeSchema {
  collectionName: 'i18n_locale';
  info: {
    collectionName: 'locales';
    description: '';
    displayName: 'Locale';
    pluralName: 'locales';
    singularName: 'locale';
  };
  options: {
    draftAndPublish: false;
  };
  pluginOptions: {
    'content-manager': {
      visible: false;
    };
    'content-type-builder': {
      visible: false;
    };
  };
  attributes: {
    code: Schema.Attribute.String & Schema.Attribute.Unique;
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'plugin::i18n.locale'
    > &
      Schema.Attribute.Private;
    name: Schema.Attribute.String &
      Schema.Attribute.SetMinMax<
        {
          max: 50;
          min: 1;
        },
        number
      >;
    publishedAt: Schema.Attribute.DateTime;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
  };
}

export interface PluginReviewWorkflowsWorkflow
  extends Struct.CollectionTypeSchema {
  collectionName: 'strapi_workflows';
  info: {
    description: '';
    displayName: 'Workflow';
    name: 'Workflow';
    pluralName: 'workflows';
    singularName: 'workflow';
  };
  options: {
    draftAndPublish: false;
  };
  pluginOptions: {
    'content-manager': {
      visible: false;
    };
    'content-type-builder': {
      visible: false;
    };
  };
  attributes: {
    contentTypes: Schema.Attribute.JSON &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<'[]'>;
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'plugin::review-workflows.workflow'
    > &
      Schema.Attribute.Private;
    name: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.Unique;
    publishedAt: Schema.Attribute.DateTime;
    stageRequiredToPublish: Schema.Attribute.Relation<
      'oneToOne',
      'plugin::review-workflows.workflow-stage'
    >;
    stages: Schema.Attribute.Relation<
      'oneToMany',
      'plugin::review-workflows.workflow-stage'
    >;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
  };
}

export interface PluginReviewWorkflowsWorkflowStage
  extends Struct.CollectionTypeSchema {
  collectionName: 'strapi_workflows_stages';
  info: {
    description: '';
    displayName: 'Stages';
    name: 'Workflow Stage';
    pluralName: 'workflow-stages';
    singularName: 'workflow-stage';
  };
  options: {
    draftAndPublish: false;
    version: '1.1.0';
  };
  pluginOptions: {
    'content-manager': {
      visible: false;
    };
    'content-type-builder': {
      visible: false;
    };
  };
  attributes: {
    color: Schema.Attribute.String & Schema.Attribute.DefaultTo<'#4945FF'>;
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'plugin::review-workflows.workflow-stage'
    > &
      Schema.Attribute.Private;
    name: Schema.Attribute.String;
    permissions: Schema.Attribute.Relation<'manyToMany', 'admin::permission'>;
    publishedAt: Schema.Attribute.DateTime;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    workflow: Schema.Attribute.Relation<
      'manyToOne',
      'plugin::review-workflows.workflow'
    >;
  };
}

export interface PluginUploadFile extends Struct.CollectionTypeSchema {
  collectionName: 'files';
  info: {
    description: '';
    displayName: 'File';
    pluralName: 'files';
    singularName: 'file';
  };
  options: {
    draftAndPublish: false;
  };
  pluginOptions: {
    'content-manager': {
      visible: false;
    };
    'content-type-builder': {
      visible: false;
    };
  };
  attributes: {
    alternativeText: Schema.Attribute.String;
    caption: Schema.Attribute.String;
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    ext: Schema.Attribute.String;
    folder: Schema.Attribute.Relation<'manyToOne', 'plugin::upload.folder'> &
      Schema.Attribute.Private;
    folderPath: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.Private &
      Schema.Attribute.SetMinMaxLength<{
        minLength: 1;
      }>;
    formats: Schema.Attribute.JSON;
    hash: Schema.Attribute.String & Schema.Attribute.Required;
    height: Schema.Attribute.Integer;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'plugin::upload.file'
    > &
      Schema.Attribute.Private;
    mime: Schema.Attribute.String & Schema.Attribute.Required;
    name: Schema.Attribute.String & Schema.Attribute.Required;
    previewUrl: Schema.Attribute.String;
    provider: Schema.Attribute.String & Schema.Attribute.Required;
    provider_metadata: Schema.Attribute.JSON;
    publishedAt: Schema.Attribute.DateTime;
    related: Schema.Attribute.Relation<'morphToMany'>;
    size: Schema.Attribute.Decimal & Schema.Attribute.Required;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    url: Schema.Attribute.String & Schema.Attribute.Required;
    width: Schema.Attribute.Integer;
  };
}

export interface PluginUploadFolder extends Struct.CollectionTypeSchema {
  collectionName: 'upload_folders';
  info: {
    displayName: 'Folder';
    pluralName: 'folders';
    singularName: 'folder';
  };
  options: {
    draftAndPublish: false;
  };
  pluginOptions: {
    'content-manager': {
      visible: false;
    };
    'content-type-builder': {
      visible: false;
    };
  };
  attributes: {
    children: Schema.Attribute.Relation<'oneToMany', 'plugin::upload.folder'>;
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    files: Schema.Attribute.Relation<'oneToMany', 'plugin::upload.file'>;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'plugin::upload.folder'
    > &
      Schema.Attribute.Private;
    name: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.SetMinMaxLength<{
        minLength: 1;
      }>;
    parent: Schema.Attribute.Relation<'manyToOne', 'plugin::upload.folder'>;
    path: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.SetMinMaxLength<{
        minLength: 1;
      }>;
    pathId: Schema.Attribute.Integer &
      Schema.Attribute.Required &
      Schema.Attribute.Unique;
    publishedAt: Schema.Attribute.DateTime;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
  };
}

export interface PluginUsersPermissionsPermission
  extends Struct.CollectionTypeSchema {
  collectionName: 'up_permissions';
  info: {
    description: '';
    displayName: 'Permission';
    name: 'permission';
    pluralName: 'permissions';
    singularName: 'permission';
  };
  options: {
    draftAndPublish: false;
  };
  pluginOptions: {
    'content-manager': {
      visible: false;
    };
    'content-type-builder': {
      visible: false;
    };
  };
  attributes: {
    action: Schema.Attribute.String & Schema.Attribute.Required;
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'plugin::users-permissions.permission'
    > &
      Schema.Attribute.Private;
    publishedAt: Schema.Attribute.DateTime;
    role: Schema.Attribute.Relation<
      'manyToOne',
      'plugin::users-permissions.role'
    >;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
  };
}

export interface PluginUsersPermissionsRole
  extends Struct.CollectionTypeSchema {
  collectionName: 'up_roles';
  info: {
    description: '';
    displayName: 'Role';
    name: 'role';
    pluralName: 'roles';
    singularName: 'role';
  };
  options: {
    draftAndPublish: false;
  };
  pluginOptions: {
    'content-manager': {
      visible: false;
    };
    'content-type-builder': {
      visible: false;
    };
  };
  attributes: {
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    description: Schema.Attribute.String;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'plugin::users-permissions.role'
    > &
      Schema.Attribute.Private;
    name: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.SetMinMaxLength<{
        minLength: 3;
      }>;
    permissions: Schema.Attribute.Relation<
      'oneToMany',
      'plugin::users-permissions.permission'
    >;
    publishedAt: Schema.Attribute.DateTime;
    type: Schema.Attribute.String & Schema.Attribute.Unique;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    users: Schema.Attribute.Relation<
      'oneToMany',
      'plugin::users-permissions.user'
    >;
  };
}

export interface PluginUsersPermissionsUser
  extends Struct.CollectionTypeSchema {
  collectionName: 'up_users';
  info: {
    description: '';
    displayName: 'User';
    name: 'user';
    pluralName: 'users';
    singularName: 'user';
  };
  options: {
    draftAndPublish: false;
    timestamps: true;
  };
  attributes: {
    blocked: Schema.Attribute.Boolean & Schema.Attribute.DefaultTo<false>;
    confirmationToken: Schema.Attribute.String & Schema.Attribute.Private;
    confirmed: Schema.Attribute.Boolean & Schema.Attribute.DefaultTo<false>;
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    email: Schema.Attribute.Email &
      Schema.Attribute.Required &
      Schema.Attribute.SetMinMaxLength<{
        minLength: 6;
      }>;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'plugin::users-permissions.user'
    > &
      Schema.Attribute.Private;
    password: Schema.Attribute.Password &
      Schema.Attribute.Private &
      Schema.Attribute.SetMinMaxLength<{
        minLength: 6;
      }>;
    provider: Schema.Attribute.String;
    publishedAt: Schema.Attribute.DateTime;
    resetPasswordToken: Schema.Attribute.String & Schema.Attribute.Private;
    role: Schema.Attribute.Relation<
      'manyToOne',
      'plugin::users-permissions.role'
    >;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    username: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.Unique &
      Schema.Attribute.SetMinMaxLength<{
        minLength: 3;
      }>;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ContentTypeSchemas {
      'admin::api-token': AdminApiToken;
      'admin::api-token-permission': AdminApiTokenPermission;
      'admin::permission': AdminPermission;
      'admin::role': AdminRole;
      'admin::session': AdminSession;
      'admin::transfer-token': AdminTransferToken;
      'admin::transfer-token-permission': AdminTransferTokenPermission;
      'admin::user': AdminUser;
      'api::activity.activity': ApiActivityActivity;
      'api::auth-token.auth-token': ApiAuthTokenAuthToken;
      'api::coordination-team.coordination-team': ApiCoordinationTeamCoordinationTeam;
      'api::member.member': ApiMemberMember;
      'api::income-record.income-record': ApiIncomeRecordIncomeRecord;
      'api::expense.expense': ApiExpenseExpense;
      'api::supplier-alias.supplier-alias': ApiSupplierAliasSupplierAlias;
      'api::event-attendance.event-attendance': ApiEventAttendanceEventAttendance;
      'api::library-item.library-item': ApiLibraryItemLibraryItem;
      'api::library-rejection.library-rejection': ApiLibraryRejectionLibraryRejection;
      'api::list-snapshot.list-snapshot': ApiListSnapshotListSnapshot;
      'api::oc-contract.oc-contract': ApiOcContractOcContract;
      'api::oc-task-board.oc-task-board': ApiOcTaskBoardOcTaskBoard;
      'api::oc-task.oc-task': ApiOcTaskOcTask;
      'api::treasury-balance.treasury-balance': ApiTreasuryBalanceTreasuryBalance;
      'api::exit-survey.exit-survey': ApiExitSurveyExitSurvey;
      'api::membership-application.membership-application': ApiMembershipApplicationMembershipApplication;
      'api::newsletter.newsletter': ApiNewsletterNewsletter;
      'api::newsletter-subscriber.newsletter-subscriber': ApiNewsletterSubscriberNewsletterSubscriber;
      'api::open-call.open-call': ApiOpenCallOpenCall;
      'api::profile-change-log.profile-change-log': ApiProfileChangeLogProfileChangeLog;
      'api::working-group.working-group': ApiWorkingGroupWorkingGroup;
      'api::project.project': ApiProjectProject;
      'api::project-entry.project-entry': ApiProjectEntryProjectEntry;
      'api::payer-alias.payer-alias': ApiPayerAliasPayerAlias;
      'api::monthly-close.monthly-close': ApiMonthlyCloseMonthlyClose;
      'api::receipt.receipt': ApiReceiptReceipt;
      'plugin::content-releases.release': PluginContentReleasesRelease;
      'plugin::content-releases.release-action': PluginContentReleasesReleaseAction;
      'plugin::i18n.locale': PluginI18NLocale;
      'plugin::review-workflows.workflow': PluginReviewWorkflowsWorkflow;
      'plugin::review-workflows.workflow-stage': PluginReviewWorkflowsWorkflowStage;
      'plugin::upload.file': PluginUploadFile;
      'plugin::upload.folder': PluginUploadFolder;
      'plugin::users-permissions.permission': PluginUsersPermissionsPermission;
      'plugin::users-permissions.role': PluginUsersPermissionsRole;
      'plugin::users-permissions.user': PluginUsersPermissionsUser;
    }
  }
}
