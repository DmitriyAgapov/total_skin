// Code copied (with some modifications) from the Keystone 6 "with-auth" example
// See.. https://github.com/keystonejs/keystone/tree/master/examples/with-auth
import {permissions, rules} from './schema/access';
import {list} from '@keystone-6/core';
import {document} from '@keystone-6/fields-document';
import {
	checkbox,
	password,
	relationship,
	text,
	timestamp,
	select,
	image,
	file,
	virtual,
	integer
} from '@keystone-6/core/fields';
import {defaultSlug, defaultTimestamp} from "./schema/content";

const fieldModes = {
	editSelfOrRead: ({session, item}: any) =>
		permissions.canManageUsers({session}) || session.itemId === item.id
			? 'edit'
			: 'read',
	editSelfOrHidden: ({session, item}: any) =>
		permissions.canManageUsers({session}) || session.itemId === item.id
			? 'edit'
			: 'hidden',
};

export const lists = {
	Role: list({
		access: {
			filter: {
				delete: permissions.canManageUsers,
				query: permissions.canManageUsers,
				update: permissions.canManageUsers,
			}
		},
		ui: {
			isHidden: context => !permissions.canManageUsers(context),
		},
		fields: {
			name: text(),
			canManageContent: checkbox({defaultValue: false}),
			canManageUsers: checkbox({defaultValue: false}),
			users: relationship({ref: 'User.role', many: true}),
		},
	}),
	User: list({
		access: {
			operation: {
				create: () => true,
			},
			filter: {
				query: () => true,
				update: rules.canManageUserList,
				delete: rules.canManageUserList,
			}
		},
		ui: {
			hideCreate: context => !permissions.canManageUsers(context),
			hideDelete: context => !permissions.canManageUsers(context),
			itemView: {
				defaultFieldMode: context =>
					permissions.canManageUsers(context) ? 'edit' : 'hidden',
			},
			listView: {
				defaultFieldMode: context =>
					permissions.canManageUsers(context) ? 'read' : 'hidden',
			},
		},
		fields: {
			name: text({
				ui: {
					itemView: {fieldMode: fieldModes.editSelfOrRead},
				},
			}),
			email: text({
				isIndexed: 'unique',
				validation: {
					isRequired: true,
				},
				access: {
					read: rules.canManageUser,
				},
				ui: {
					itemView: {fieldMode: fieldModes.editSelfOrHidden},
				},
			}),
			password: password({
				validation: {
					isRequired: true,
				},
				ui: {
					itemView: {fieldMode: fieldModes.editSelfOrHidden},
				},
			}),
			role: relationship({
				ref: 'Role.users',
				access: permissions.canManageUsers,
			}),
			address: text(),
			phone: text(),
			instagram: text(),
			facebook: text(),
			linkedin: text(),
			emailContacts: text(),
		}
	}),
	Callback: list({
		access: {
			item: {
				create: ({ session, context, listKey, operation, inputData }) => true,
				update: ({ session, context, listKey, operation, inputData, item }) => true,
				delete: ({ session, context, listKey, operation, item }) => true,
			},
			operation: {
				query: ({ session, context, listKey, operation }) => true,
				create: ({ session, context, listKey, operation }) => true,
				update: ({ session, context, listKey, operation }) => true,
				delete: ({ session, context, listKey, operation }) => true,
			}
		},
		fields: {
			name: text({}),
			email: text({

				validation: {
					isRequired: true,
					match: {
						regex: /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/,
						explanation: 'Input valid email'
					},


				}
			}),
			phone: text({
				// validation: {
				// 	// isRequired: true,
				// 	match: {
				// 		regex: /^(?:(?:\+?1\s*(?:[.-]\s*)?)?(?:\(\s*([2-9]1[02-9]|[2-9][02-8]1|[2-9][02-8][02-9])\s*\)|([2-9]1[02-9]|[2-9][02-8]1|[2-9][02-8][02-9]))\s*(?:[.-]\s*)?)?([2-9]1[02-9]|[2-9][02-9]1|[2-9][02-9]{2})\s*(?:[.-]\s*)?([0-9]{4})(?:\s*(?:#|x\.?|ext\.?|extension)\s*(\d+))?$/,
				// 		explanation: 'Input valid phone'
				// 	},
				// }
			}),
			publishedDate: timestamp({
				isFilterable: true,
				ui: {
					createView: {
						fieldMode: "hidden"
					},
					listView: {
						fieldMode: "read"
					}
				},
				defaultValue: {
					kind: 'now'
				}
			}),
			message: text(),
		}
	}),
	Tag: list({
		fields: {
			title: text(),
		}
	}),
	Post: list({
		fields: {
			order: integer(),
			title: text(),
			slug: text({
				ui: { createView: { fieldMode: 'hidden' } },
				isIndexed: 'unique',
				hooks: {
					resolveInput: ({ operation, resolvedData, inputData, context }) => {
						if (operation === 'create' && !inputData.slug) {
							return defaultSlug({ context, inputData });
						}
						return resolvedData.slug;
					}
				}
			}),
			status: select({
				options: [
					{ label: 'Draft', value: 'draft' },
					{ label: 'Published', value: 'published' },
					{ label: 'Archived', value: 'archived' },
				],
				defaultValue: 'draft',
				ui: { displayMode: 'segmented-control' },
			}),
			date: timestamp({
				hooks: {
					resolveInput: ({ inputData, operation, resolvedData }) => {
						if (operation === 'create' && !inputData.slug) {
							return defaultTimestamp();
						}
						return resolvedData.slug;
					}
				}
			}),
			image: image({}),
			content: document({
				formatting: true,
				dividers: true,
				links: true,
				layouts: [
					[1, 1],
					[1, 1, 1],
				],
			}),
			tag: relationship({
				ref: 'Tag',
				many: true
			}),
			author: relationship({
				ref: 'User',
				many: false
			}),
		},
	}),
	Brand: list({
		fields: {
			title: text(),
			logo: image(),
			content: document({
				formatting: true,
				dividers: true,
				links: true,
				layouts: [
					[1, 1],
					[1, 1, 1],
				],
			}),
			slug: text({
				ui: { createView: { fieldMode: 'hidden' } },
				isIndexed: 'unique',
				hooks: {
					resolveInput: ({ operation, resolvedData, inputData, context }) => {
						if (operation === 'create' && !inputData.slug) {
							return defaultSlug({ context, inputData });
						}
						return resolvedData.slug;
					}
				}
			}),
		}
	}),
	ProductCategory: list({
		fields: {
			title: text({

			}),
			slug: text({
				ui: { createView: { fieldMode: 'hidden' } },
				isIndexed: 'unique',
				hooks: {
					resolveInput: ({ operation, resolvedData, inputData, context }) => {
						if (operation === 'create' && !inputData.slug) {
							return defaultSlug({ context, inputData });
						}
						return resolvedData.slug;
					}
				}
			}),
			status: select({
				options: [
					{ label: 'Draft', value: 'draft' },
					{ label: 'Published', value: 'published' },
					{ label: 'Archived', value: 'archived' },
				],
				defaultValue: 'draft',
				ui: { displayMode: 'segmented-control' },
			}),
			image: image({}),
			content: document({
				formatting: true,
				dividers: true,
				links: true,
				layouts: [
					[1, 1],
					[1, 1, 1],
				],
			}),
		}
	}),
	ProductSkinConcern: list({
		fields: {
			title: text({

			}),
			slug: text({
				ui: { createView: { fieldMode: 'hidden' } },
				isIndexed: 'unique',
				hooks: {
					resolveInput: ({ operation, resolvedData, inputData, context }) => {
						if (operation === 'create' && !inputData.slug) {
							return defaultSlug({ context, inputData });
						}
						return resolvedData.slug;
					}
				}
			}),
			status: select({
				options: [
					{ label: 'Draft', value: 'draft' },
					{ label: 'Published', value: 'published' },
					{ label: 'Archived', value: 'archived' },
				],
				defaultValue: 'draft',
				ui: { displayMode: 'segmented-control' },
			}),
			image: image({}),
			content: document({
				formatting: true,
				dividers: true,
				links: true,
				layouts: [
					[1, 1],
					[1, 1, 1],
				],
			}),
		}
	}),
	ProductSkinCareItemType: list({
		fields: {
			title: text({

			}),
			slug: text({
				ui: { createView: { fieldMode: 'hidden' } },
				isIndexed: 'unique',
				hooks: {
					resolveInput: ({ operation, resolvedData, inputData, context }) => {
						if (operation === 'create' && !inputData.slug) {
							return defaultSlug({ context, inputData });
						}
						return resolvedData.slug;
					}
				}
			}),
			status: select({
				options: [
					{ label: 'Draft', value: 'draft' },
					{ label: 'Published', value: 'published' },
					{ label: 'Archived', value: 'archived' },
				],
				defaultValue: 'draft',
				ui: { displayMode: 'segmented-control' },
			}),
			image: image({}),
			content: document({
				formatting: true,
				dividers: true,
				links: true,
				layouts: [
					[1, 1],
					[1, 1, 1],
				],
			}),
		}
	}),
	ProductVariant: list({
		fields: {
			title: text(),
			value: text(),
			price: integer(),
			product: relationship({
				ref: 'Product'
			}),
		}
	}),
	Product: list({
		fields: {
			sku: text(),
			series: text(),
			title: text({

			}),
			brand: relationship({
				ref: 'Brand'
			}),
			slug: text({
				ui: { createView: { fieldMode: 'hidden' } },
				isIndexed: 'unique',
				hooks: {
					resolveInput: ({ operation, resolvedData, inputData, context }) => {
						if (operation === 'create' && !inputData.slug) {
							return defaultSlug({ context, inputData });
						}
						return resolvedData.slug;
					}
				}
			}),
			status: select({
				options: [
					{ label: 'Draft', value: 'draft' },
					{ label: 'Published', value: 'published' },
					{ label: 'Archived', value: 'archived' },
				],
				defaultValue: 'draft',
				ui: { displayMode: 'segmented-control' },
			}),
			date: timestamp({
				hooks: {
					resolveInput: ({ inputData, operation, resolvedData }) => {
						if (operation === 'create' && !inputData.slug) {
							return defaultTimestamp();
						}
						return resolvedData.slug;
					}
				}
			}),
			image: image({}),
			shortDesc: document({
				formatting: true,
				dividers: true,
				links: true,
				layouts: [
					[1, 1],
					[1, 1, 1],
				],
			}),
			productVariant: relationship({
				ref: 'ProductVariant',
				many: true
			}),
			description: document({
				formatting: true,
				dividers: true,
				links: true,
				layouts: [
					[1, 1],
					[1, 1, 1],
				],
			}),
			benefit: document({
				formatting: true,
				dividers: true,
				links: true,
				layouts: [
					[1, 1],
					[1, 1, 1],
				],
			}),
			ingridient: document({
				formatting: true,
				dividers: true,
				links: true,
				layouts: [
					[1, 1],
					[1, 1, 1],
				],
			}),
			application: document({
				formatting: true,
				dividers: true,
				links: true,
				layouts: [
					[1, 1],
					[1, 1, 1],
				],
			}),
			category: relationship({
				ref: 'ProductCategory'
			}),
			SkinConcern: relationship({
				ref: 'ProductSkinConcern'
			}),
			SkinCareItemType: relationship({
				ref: 'ProductSkinCareItemType'
			}),
		}
	})
};
