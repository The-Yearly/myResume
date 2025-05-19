/**
 * Client
 **/

import * as runtime from "./runtime/library.js";
import $Types = runtime.Types; // general types
import $Public = runtime.Types.Public;
import $Utils = runtime.Types.Utils;
import $Extensions = runtime.Types.Extensions;
import $Result = runtime.Types.Result;

export type PrismaPromise<T> = $Public.PrismaPromise<T>;

/**
 * Model user
 *
 */
export type user = $Result.DefaultSelection<Prisma.$userPayload>;
/**
 * Model hero
 *
 */
export type hero = $Result.DefaultSelection<Prisma.$heroPayload>;
/**
 * Model project
 *
 */
export type project = $Result.DefaultSelection<Prisma.$projectPayload>;
/**
 * Model experience
 *
 */
export type experience = $Result.DefaultSelection<Prisma.$experiencePayload>;
/**
 * Model education
 *
 */
export type education = $Result.DefaultSelection<Prisma.$educationPayload>;
/**
 * Model skills
 *
 */
export type skills = $Result.DefaultSelection<Prisma.$skillsPayload>;
/**
 * Model contact
 *
 */
export type contact = $Result.DefaultSelection<Prisma.$contactPayload>;
/**
 * Model About
 *
 */
export type About = $Result.DefaultSelection<Prisma.$AboutPayload>;
/**
 * Model userstyle
 *
 */
export type userstyle = $Result.DefaultSelection<Prisma.$userstylePayload>;

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Users
 * const users = await prisma.user.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = "log" extends keyof ClientOptions
    ? ClientOptions["log"] extends Array<Prisma.LogLevel | Prisma.LogDefinition>
      ? Prisma.GetEvents<ClientOptions["log"]>
      : never
    : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>["other"] };

  /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Users
   * const users = await prisma.user.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(
    optionsArg?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>,
  );
  $on<V extends U>(
    eventType: V,
    callback: (
      event: V extends "query" ? Prisma.QueryEvent : Prisma.LogEvent,
    ) => void,
  ): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

  /**
   * Add a middleware
   * @deprecated since 4.16.0. For new code, prefer client extensions instead.
   * @see https://pris.ly/d/extensions
   */
  $use(cb: Prisma.Middleware): void;

  /**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(
    query: TemplateStringsArray | Prisma.Sql,
    ...values: any[]
  ): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(
    query: string,
    ...values: any[]
  ): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(
    query: TemplateStringsArray | Prisma.Sql,
    ...values: any[]
  ): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(
    query: string,
    ...values: any[]
  ): Prisma.PrismaPromise<T>;

  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(
    arg: [...P],
    options?: { isolationLevel?: Prisma.TransactionIsolationLevel },
  ): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>;

  $transaction<R>(
    fn: (
      prisma: Omit<PrismaClient, runtime.ITXClientDenyList>,
    ) => $Utils.JsPromise<R>,
    options?: {
      maxWait?: number;
      timeout?: number;
      isolationLevel?: Prisma.TransactionIsolationLevel;
    },
  ): $Utils.JsPromise<R>;

  $extends: $Extensions.ExtendsHook<
    "extends",
    Prisma.TypeMapCb<ClientOptions>,
    ExtArgs,
    $Utils.Call<
      Prisma.TypeMapCb<ClientOptions>,
      {
        extArgs: ExtArgs;
      }
    >
  >;

  /**
   * `prisma.user`: Exposes CRUD operations for the **user** model.
   * Example usage:
   * ```ts
   * // Fetch zero or more Users
   * const users = await prisma.user.findMany()
   * ```
   */
  get user(): Prisma.userDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.hero`: Exposes CRUD operations for the **hero** model.
   * Example usage:
   * ```ts
   * // Fetch zero or more Heroes
   * const heroes = await prisma.hero.findMany()
   * ```
   */
  get hero(): Prisma.heroDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.project`: Exposes CRUD operations for the **project** model.
   * Example usage:
   * ```ts
   * // Fetch zero or more Projects
   * const projects = await prisma.project.findMany()
   * ```
   */
  get project(): Prisma.projectDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.experience`: Exposes CRUD operations for the **experience** model.
   * Example usage:
   * ```ts
   * // Fetch zero or more Experiences
   * const experiences = await prisma.experience.findMany()
   * ```
   */
  get experience(): Prisma.experienceDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.education`: Exposes CRUD operations for the **education** model.
   * Example usage:
   * ```ts
   * // Fetch zero or more Educations
   * const educations = await prisma.education.findMany()
   * ```
   */
  get education(): Prisma.educationDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.skills`: Exposes CRUD operations for the **skills** model.
   * Example usage:
   * ```ts
   * // Fetch zero or more Skills
   * const skills = await prisma.skills.findMany()
   * ```
   */
  get skills(): Prisma.skillsDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.contact`: Exposes CRUD operations for the **contact** model.
   * Example usage:
   * ```ts
   * // Fetch zero or more Contacts
   * const contacts = await prisma.contact.findMany()
   * ```
   */
  get contact(): Prisma.contactDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.about`: Exposes CRUD operations for the **About** model.
   * Example usage:
   * ```ts
   * // Fetch zero or more Abouts
   * const abouts = await prisma.about.findMany()
   * ```
   */
  get about(): Prisma.AboutDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.userstyle`: Exposes CRUD operations for the **userstyle** model.
   * Example usage:
   * ```ts
   * // Fetch zero or more Userstyles
   * const userstyles = await prisma.userstyle.findMany()
   * ```
   */
  get userstyle(): Prisma.userstyleDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF;

  export type PrismaPromise<T> = $Public.PrismaPromise<T>;

  /**
   * Validator
   */
  export import validator = runtime.Public.validator;

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError;
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError;
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError;
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError;
  export import PrismaClientValidationError = runtime.PrismaClientValidationError;

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag;
  export import empty = runtime.empty;
  export import join = runtime.join;
  export import raw = runtime.raw;
  export import Sql = runtime.Sql;

  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal;

  export type DecimalJsLike = runtime.DecimalJsLike;

  /**
   * Metrics
   */
  export type Metrics = runtime.Metrics;
  export type Metric<T> = runtime.Metric<T>;
  export type MetricHistogram = runtime.MetricHistogram;
  export type MetricHistogramBucket = runtime.MetricHistogramBucket;

  /**
   * Extensions
   */
  export import Extension = $Extensions.UserArgs;
  export import getExtensionContext = runtime.Extensions.getExtensionContext;
  export import Args = $Public.Args;
  export import Payload = $Public.Payload;
  export import Result = $Public.Result;
  export import Exact = $Public.Exact;

  /**
   * Prisma Client JS version: 6.5.0
   * Query Engine version: 173f8d54f8d52e692c7e27e72a88314ec7aeff60
   */
  export type PrismaVersion = {
    client: string;
  };

  export const prismaVersion: PrismaVersion;

  /**
   * Utility Types
   */

  export import JsonObject = runtime.JsonObject;
  export import JsonArray = runtime.JsonArray;
  export import JsonValue = runtime.JsonValue;
  export import InputJsonObject = runtime.InputJsonObject;
  export import InputJsonArray = runtime.InputJsonArray;
  export import InputJsonValue = runtime.InputJsonValue;

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
     * Type of `Prisma.DbNull`.
     *
     * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
     *
     * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
     */
    class DbNull {
      private DbNull: never;
      private constructor();
    }

    /**
     * Type of `Prisma.JsonNull`.
     *
     * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
     *
     * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
     */
    class JsonNull {
      private JsonNull: never;
      private constructor();
    }

    /**
     * Type of `Prisma.AnyNull`.
     *
     * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
     *
     * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
     */
    class AnyNull {
      private AnyNull: never;
      private constructor();
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull;

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull;

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull;

  type SelectAndInclude = {
    select: any;
    include: any;
  };

  type SelectAndOmit = {
    select: any;
    omit: any;
  };

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> =
    T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<
    T extends (...args: any) => $Utils.JsPromise<any>,
  > = PromiseType<ReturnType<T>>;

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
    [P in K]: T[P];
  };

  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K;
  }[keyof T];

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K;
  };

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>;

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  } & (T extends SelectAndInclude
    ? "Please either choose `select` or `include`."
    : T extends SelectAndOmit
      ? "Please either choose `select` or `omit`."
      : {});

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  } & K;

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> = T extends object
    ? U extends object
      ? (Without<T, U> & U) | (Without<U, T> & T)
      : U
    : T;

  /**
   * Is T a Record?
   */
  type IsObject<T extends any> =
    T extends Array<any>
      ? False
      : T extends Date
        ? False
        : T extends Uint8Array
          ? False
          : T extends BigInt
            ? False
            : T extends object
              ? True
              : False;

  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T;

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O>; // With K possibilities
    }[K];

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>;

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<
    __Either<O, K>
  >;

  type _Either<O extends object, K extends Key, strict extends Boolean> = {
    1: EitherStrict<O, K>;
    0: EitherLoose<O, K>;
  }[strict];

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1,
  > = O extends unknown ? _Either<O, K, strict> : never;

  export type Union = any;

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K];
  } & {};

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never;

  export type Overwrite<O extends object, O1 extends object> = {
    [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<
    Overwrite<
      U,
      {
        [K in keyof U]-?: At<U, K>;
      }
    >
  >;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O
    ? O[K]
    : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown
    ? AtStrict<O, K>
    : never;
  export type At<
    O extends object,
    K extends Key,
    strict extends Boolean = 1,
  > = {
    1: AtStrict<O, K>;
    0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function
    ? A
    : {
        [K in keyof A]: A[K];
      } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
      ?
          | (K extends keyof O ? { [P in K]: O[P] } & O : O)
          | ({ [P in keyof O as P extends K ? P : never]-?: O[P] } & O)
      : never
  >;

  type _Strict<U, _U = U> = U extends unknown
    ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>>
    : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False;

  // /**
  // 1
  // */
  export type True = 1;

  /**
  0
  */
  export type False = 0;

  export type Not<B extends Boolean> = {
    0: 1;
    1: 0;
  }[B];

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
      ? 1
      : 0;

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >;

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0;
      1: 1;
    };
    1: {
      0: 1;
      1: 1;
    };
  }[B1][B2];

  export type Keys<U extends Union> = U extends unknown ? keyof U : never;

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;

  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object
    ? {
        [P in keyof T]: P extends keyof O ? O[P] : never;
      }
    : never;

  type FieldPaths<
    T,
    U = Omit<T, "_avg" | "_sum" | "_count" | "_min" | "_max">,
  > = IsObject<T> extends True ? U : T;

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<"OR", K>, Extends<"AND", K>>,
      Extends<"NOT", K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<
            UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never
          >
        : never
      : {} extends FieldPaths<T[K]>
        ? never
        : K;
  }[keyof T];

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never;
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>;
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T;

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<
    T,
    K extends Enumerable<keyof T> | keyof T,
  > = Prisma__Pick<T, MaybeTupleToUnion<K>>;

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}`
    ? never
    : T;

  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>;

  type FieldRefInputType<Model, FieldType> = Model extends never
    ? never
    : FieldRef<Model, FieldType>;

  export const ModelName: {
    user: "user";
    hero: "hero";
    project: "project";
    experience: "experience";
    education: "education";
    skills: "skills";
    contact: "contact";
    About: "About";
    userstyle: "userstyle";
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName];

  export type Datasources = {
    db?: Datasource;
  };

  interface TypeMapCb<ClientOptions = {}>
    extends $Utils.Fn<
      { extArgs: $Extensions.InternalArgs },
      $Utils.Record<string, any>
    > {
    returns: Prisma.TypeMap<
      this["params"]["extArgs"],
      ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}
    >;
  }

  export type TypeMap<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    GlobalOmitOptions = {},
  > = {
    globalOmitOptions: {
      omit: GlobalOmitOptions;
    };
    meta: {
      modelProps:
        | "user"
        | "hero"
        | "project"
        | "experience"
        | "education"
        | "skills"
        | "contact"
        | "about"
        | "userstyle";
      txIsolationLevel: Prisma.TransactionIsolationLevel;
    };
    model: {
      user: {
        payload: Prisma.$userPayload<ExtArgs>;
        fields: Prisma.userFieldRefs;
        operations: {
          findUnique: {
            args: Prisma.userFindUniqueArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$userPayload> | null;
          };
          findUniqueOrThrow: {
            args: Prisma.userFindUniqueOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$userPayload>;
          };
          findFirst: {
            args: Prisma.userFindFirstArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$userPayload> | null;
          };
          findFirstOrThrow: {
            args: Prisma.userFindFirstOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$userPayload>;
          };
          findMany: {
            args: Prisma.userFindManyArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$userPayload>[];
          };
          create: {
            args: Prisma.userCreateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$userPayload>;
          };
          createMany: {
            args: Prisma.userCreateManyArgs<ExtArgs>;
            result: BatchPayload;
          };
          createManyAndReturn: {
            args: Prisma.userCreateManyAndReturnArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$userPayload>[];
          };
          delete: {
            args: Prisma.userDeleteArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$userPayload>;
          };
          update: {
            args: Prisma.userUpdateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$userPayload>;
          };
          deleteMany: {
            args: Prisma.userDeleteManyArgs<ExtArgs>;
            result: BatchPayload;
          };
          updateMany: {
            args: Prisma.userUpdateManyArgs<ExtArgs>;
            result: BatchPayload;
          };
          updateManyAndReturn: {
            args: Prisma.userUpdateManyAndReturnArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$userPayload>[];
          };
          upsert: {
            args: Prisma.userUpsertArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$userPayload>;
          };
          aggregate: {
            args: Prisma.UserAggregateArgs<ExtArgs>;
            result: $Utils.Optional<AggregateUser>;
          };
          groupBy: {
            args: Prisma.userGroupByArgs<ExtArgs>;
            result: $Utils.Optional<UserGroupByOutputType>[];
          };
          count: {
            args: Prisma.userCountArgs<ExtArgs>;
            result: $Utils.Optional<UserCountAggregateOutputType> | number;
          };
        };
      };
      hero: {
        payload: Prisma.$heroPayload<ExtArgs>;
        fields: Prisma.heroFieldRefs;
        operations: {
          findUnique: {
            args: Prisma.heroFindUniqueArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$heroPayload> | null;
          };
          findUniqueOrThrow: {
            args: Prisma.heroFindUniqueOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$heroPayload>;
          };
          findFirst: {
            args: Prisma.heroFindFirstArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$heroPayload> | null;
          };
          findFirstOrThrow: {
            args: Prisma.heroFindFirstOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$heroPayload>;
          };
          findMany: {
            args: Prisma.heroFindManyArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$heroPayload>[];
          };
          create: {
            args: Prisma.heroCreateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$heroPayload>;
          };
          createMany: {
            args: Prisma.heroCreateManyArgs<ExtArgs>;
            result: BatchPayload;
          };
          createManyAndReturn: {
            args: Prisma.heroCreateManyAndReturnArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$heroPayload>[];
          };
          delete: {
            args: Prisma.heroDeleteArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$heroPayload>;
          };
          update: {
            args: Prisma.heroUpdateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$heroPayload>;
          };
          deleteMany: {
            args: Prisma.heroDeleteManyArgs<ExtArgs>;
            result: BatchPayload;
          };
          updateMany: {
            args: Prisma.heroUpdateManyArgs<ExtArgs>;
            result: BatchPayload;
          };
          updateManyAndReturn: {
            args: Prisma.heroUpdateManyAndReturnArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$heroPayload>[];
          };
          upsert: {
            args: Prisma.heroUpsertArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$heroPayload>;
          };
          aggregate: {
            args: Prisma.HeroAggregateArgs<ExtArgs>;
            result: $Utils.Optional<AggregateHero>;
          };
          groupBy: {
            args: Prisma.heroGroupByArgs<ExtArgs>;
            result: $Utils.Optional<HeroGroupByOutputType>[];
          };
          count: {
            args: Prisma.heroCountArgs<ExtArgs>;
            result: $Utils.Optional<HeroCountAggregateOutputType> | number;
          };
        };
      };
      project: {
        payload: Prisma.$projectPayload<ExtArgs>;
        fields: Prisma.projectFieldRefs;
        operations: {
          findUnique: {
            args: Prisma.projectFindUniqueArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$projectPayload> | null;
          };
          findUniqueOrThrow: {
            args: Prisma.projectFindUniqueOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$projectPayload>;
          };
          findFirst: {
            args: Prisma.projectFindFirstArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$projectPayload> | null;
          };
          findFirstOrThrow: {
            args: Prisma.projectFindFirstOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$projectPayload>;
          };
          findMany: {
            args: Prisma.projectFindManyArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$projectPayload>[];
          };
          create: {
            args: Prisma.projectCreateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$projectPayload>;
          };
          createMany: {
            args: Prisma.projectCreateManyArgs<ExtArgs>;
            result: BatchPayload;
          };
          createManyAndReturn: {
            args: Prisma.projectCreateManyAndReturnArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$projectPayload>[];
          };
          delete: {
            args: Prisma.projectDeleteArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$projectPayload>;
          };
          update: {
            args: Prisma.projectUpdateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$projectPayload>;
          };
          deleteMany: {
            args: Prisma.projectDeleteManyArgs<ExtArgs>;
            result: BatchPayload;
          };
          updateMany: {
            args: Prisma.projectUpdateManyArgs<ExtArgs>;
            result: BatchPayload;
          };
          updateManyAndReturn: {
            args: Prisma.projectUpdateManyAndReturnArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$projectPayload>[];
          };
          upsert: {
            args: Prisma.projectUpsertArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$projectPayload>;
          };
          aggregate: {
            args: Prisma.ProjectAggregateArgs<ExtArgs>;
            result: $Utils.Optional<AggregateProject>;
          };
          groupBy: {
            args: Prisma.projectGroupByArgs<ExtArgs>;
            result: $Utils.Optional<ProjectGroupByOutputType>[];
          };
          count: {
            args: Prisma.projectCountArgs<ExtArgs>;
            result: $Utils.Optional<ProjectCountAggregateOutputType> | number;
          };
        };
      };
      experience: {
        payload: Prisma.$experiencePayload<ExtArgs>;
        fields: Prisma.experienceFieldRefs;
        operations: {
          findUnique: {
            args: Prisma.experienceFindUniqueArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$experiencePayload> | null;
          };
          findUniqueOrThrow: {
            args: Prisma.experienceFindUniqueOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$experiencePayload>;
          };
          findFirst: {
            args: Prisma.experienceFindFirstArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$experiencePayload> | null;
          };
          findFirstOrThrow: {
            args: Prisma.experienceFindFirstOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$experiencePayload>;
          };
          findMany: {
            args: Prisma.experienceFindManyArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$experiencePayload>[];
          };
          create: {
            args: Prisma.experienceCreateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$experiencePayload>;
          };
          createMany: {
            args: Prisma.experienceCreateManyArgs<ExtArgs>;
            result: BatchPayload;
          };
          createManyAndReturn: {
            args: Prisma.experienceCreateManyAndReturnArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$experiencePayload>[];
          };
          delete: {
            args: Prisma.experienceDeleteArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$experiencePayload>;
          };
          update: {
            args: Prisma.experienceUpdateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$experiencePayload>;
          };
          deleteMany: {
            args: Prisma.experienceDeleteManyArgs<ExtArgs>;
            result: BatchPayload;
          };
          updateMany: {
            args: Prisma.experienceUpdateManyArgs<ExtArgs>;
            result: BatchPayload;
          };
          updateManyAndReturn: {
            args: Prisma.experienceUpdateManyAndReturnArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$experiencePayload>[];
          };
          upsert: {
            args: Prisma.experienceUpsertArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$experiencePayload>;
          };
          aggregate: {
            args: Prisma.ExperienceAggregateArgs<ExtArgs>;
            result: $Utils.Optional<AggregateExperience>;
          };
          groupBy: {
            args: Prisma.experienceGroupByArgs<ExtArgs>;
            result: $Utils.Optional<ExperienceGroupByOutputType>[];
          };
          count: {
            args: Prisma.experienceCountArgs<ExtArgs>;
            result:
              | $Utils.Optional<ExperienceCountAggregateOutputType>
              | number;
          };
        };
      };
      education: {
        payload: Prisma.$educationPayload<ExtArgs>;
        fields: Prisma.educationFieldRefs;
        operations: {
          findUnique: {
            args: Prisma.educationFindUniqueArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$educationPayload> | null;
          };
          findUniqueOrThrow: {
            args: Prisma.educationFindUniqueOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$educationPayload>;
          };
          findFirst: {
            args: Prisma.educationFindFirstArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$educationPayload> | null;
          };
          findFirstOrThrow: {
            args: Prisma.educationFindFirstOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$educationPayload>;
          };
          findMany: {
            args: Prisma.educationFindManyArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$educationPayload>[];
          };
          create: {
            args: Prisma.educationCreateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$educationPayload>;
          };
          createMany: {
            args: Prisma.educationCreateManyArgs<ExtArgs>;
            result: BatchPayload;
          };
          createManyAndReturn: {
            args: Prisma.educationCreateManyAndReturnArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$educationPayload>[];
          };
          delete: {
            args: Prisma.educationDeleteArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$educationPayload>;
          };
          update: {
            args: Prisma.educationUpdateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$educationPayload>;
          };
          deleteMany: {
            args: Prisma.educationDeleteManyArgs<ExtArgs>;
            result: BatchPayload;
          };
          updateMany: {
            args: Prisma.educationUpdateManyArgs<ExtArgs>;
            result: BatchPayload;
          };
          updateManyAndReturn: {
            args: Prisma.educationUpdateManyAndReturnArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$educationPayload>[];
          };
          upsert: {
            args: Prisma.educationUpsertArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$educationPayload>;
          };
          aggregate: {
            args: Prisma.EducationAggregateArgs<ExtArgs>;
            result: $Utils.Optional<AggregateEducation>;
          };
          groupBy: {
            args: Prisma.educationGroupByArgs<ExtArgs>;
            result: $Utils.Optional<EducationGroupByOutputType>[];
          };
          count: {
            args: Prisma.educationCountArgs<ExtArgs>;
            result: $Utils.Optional<EducationCountAggregateOutputType> | number;
          };
        };
      };
      skills: {
        payload: Prisma.$skillsPayload<ExtArgs>;
        fields: Prisma.skillsFieldRefs;
        operations: {
          findUnique: {
            args: Prisma.skillsFindUniqueArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$skillsPayload> | null;
          };
          findUniqueOrThrow: {
            args: Prisma.skillsFindUniqueOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$skillsPayload>;
          };
          findFirst: {
            args: Prisma.skillsFindFirstArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$skillsPayload> | null;
          };
          findFirstOrThrow: {
            args: Prisma.skillsFindFirstOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$skillsPayload>;
          };
          findMany: {
            args: Prisma.skillsFindManyArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$skillsPayload>[];
          };
          create: {
            args: Prisma.skillsCreateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$skillsPayload>;
          };
          createMany: {
            args: Prisma.skillsCreateManyArgs<ExtArgs>;
            result: BatchPayload;
          };
          createManyAndReturn: {
            args: Prisma.skillsCreateManyAndReturnArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$skillsPayload>[];
          };
          delete: {
            args: Prisma.skillsDeleteArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$skillsPayload>;
          };
          update: {
            args: Prisma.skillsUpdateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$skillsPayload>;
          };
          deleteMany: {
            args: Prisma.skillsDeleteManyArgs<ExtArgs>;
            result: BatchPayload;
          };
          updateMany: {
            args: Prisma.skillsUpdateManyArgs<ExtArgs>;
            result: BatchPayload;
          };
          updateManyAndReturn: {
            args: Prisma.skillsUpdateManyAndReturnArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$skillsPayload>[];
          };
          upsert: {
            args: Prisma.skillsUpsertArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$skillsPayload>;
          };
          aggregate: {
            args: Prisma.SkillsAggregateArgs<ExtArgs>;
            result: $Utils.Optional<AggregateSkills>;
          };
          groupBy: {
            args: Prisma.skillsGroupByArgs<ExtArgs>;
            result: $Utils.Optional<SkillsGroupByOutputType>[];
          };
          count: {
            args: Prisma.skillsCountArgs<ExtArgs>;
            result: $Utils.Optional<SkillsCountAggregateOutputType> | number;
          };
        };
      };
      contact: {
        payload: Prisma.$contactPayload<ExtArgs>;
        fields: Prisma.contactFieldRefs;
        operations: {
          findUnique: {
            args: Prisma.contactFindUniqueArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$contactPayload> | null;
          };
          findUniqueOrThrow: {
            args: Prisma.contactFindUniqueOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$contactPayload>;
          };
          findFirst: {
            args: Prisma.contactFindFirstArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$contactPayload> | null;
          };
          findFirstOrThrow: {
            args: Prisma.contactFindFirstOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$contactPayload>;
          };
          findMany: {
            args: Prisma.contactFindManyArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$contactPayload>[];
          };
          create: {
            args: Prisma.contactCreateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$contactPayload>;
          };
          createMany: {
            args: Prisma.contactCreateManyArgs<ExtArgs>;
            result: BatchPayload;
          };
          createManyAndReturn: {
            args: Prisma.contactCreateManyAndReturnArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$contactPayload>[];
          };
          delete: {
            args: Prisma.contactDeleteArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$contactPayload>;
          };
          update: {
            args: Prisma.contactUpdateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$contactPayload>;
          };
          deleteMany: {
            args: Prisma.contactDeleteManyArgs<ExtArgs>;
            result: BatchPayload;
          };
          updateMany: {
            args: Prisma.contactUpdateManyArgs<ExtArgs>;
            result: BatchPayload;
          };
          updateManyAndReturn: {
            args: Prisma.contactUpdateManyAndReturnArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$contactPayload>[];
          };
          upsert: {
            args: Prisma.contactUpsertArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$contactPayload>;
          };
          aggregate: {
            args: Prisma.ContactAggregateArgs<ExtArgs>;
            result: $Utils.Optional<AggregateContact>;
          };
          groupBy: {
            args: Prisma.contactGroupByArgs<ExtArgs>;
            result: $Utils.Optional<ContactGroupByOutputType>[];
          };
          count: {
            args: Prisma.contactCountArgs<ExtArgs>;
            result: $Utils.Optional<ContactCountAggregateOutputType> | number;
          };
        };
      };
      About: {
        payload: Prisma.$AboutPayload<ExtArgs>;
        fields: Prisma.AboutFieldRefs;
        operations: {
          findUnique: {
            args: Prisma.AboutFindUniqueArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$AboutPayload> | null;
          };
          findUniqueOrThrow: {
            args: Prisma.AboutFindUniqueOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$AboutPayload>;
          };
          findFirst: {
            args: Prisma.AboutFindFirstArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$AboutPayload> | null;
          };
          findFirstOrThrow: {
            args: Prisma.AboutFindFirstOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$AboutPayload>;
          };
          findMany: {
            args: Prisma.AboutFindManyArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$AboutPayload>[];
          };
          create: {
            args: Prisma.AboutCreateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$AboutPayload>;
          };
          createMany: {
            args: Prisma.AboutCreateManyArgs<ExtArgs>;
            result: BatchPayload;
          };
          createManyAndReturn: {
            args: Prisma.AboutCreateManyAndReturnArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$AboutPayload>[];
          };
          delete: {
            args: Prisma.AboutDeleteArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$AboutPayload>;
          };
          update: {
            args: Prisma.AboutUpdateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$AboutPayload>;
          };
          deleteMany: {
            args: Prisma.AboutDeleteManyArgs<ExtArgs>;
            result: BatchPayload;
          };
          updateMany: {
            args: Prisma.AboutUpdateManyArgs<ExtArgs>;
            result: BatchPayload;
          };
          updateManyAndReturn: {
            args: Prisma.AboutUpdateManyAndReturnArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$AboutPayload>[];
          };
          upsert: {
            args: Prisma.AboutUpsertArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$AboutPayload>;
          };
          aggregate: {
            args: Prisma.AboutAggregateArgs<ExtArgs>;
            result: $Utils.Optional<AggregateAbout>;
          };
          groupBy: {
            args: Prisma.AboutGroupByArgs<ExtArgs>;
            result: $Utils.Optional<AboutGroupByOutputType>[];
          };
          count: {
            args: Prisma.AboutCountArgs<ExtArgs>;
            result: $Utils.Optional<AboutCountAggregateOutputType> | number;
          };
        };
      };
      userstyle: {
        payload: Prisma.$userstylePayload<ExtArgs>;
        fields: Prisma.userstyleFieldRefs;
        operations: {
          findUnique: {
            args: Prisma.userstyleFindUniqueArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$userstylePayload> | null;
          };
          findUniqueOrThrow: {
            args: Prisma.userstyleFindUniqueOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$userstylePayload>;
          };
          findFirst: {
            args: Prisma.userstyleFindFirstArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$userstylePayload> | null;
          };
          findFirstOrThrow: {
            args: Prisma.userstyleFindFirstOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$userstylePayload>;
          };
          findMany: {
            args: Prisma.userstyleFindManyArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$userstylePayload>[];
          };
          create: {
            args: Prisma.userstyleCreateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$userstylePayload>;
          };
          createMany: {
            args: Prisma.userstyleCreateManyArgs<ExtArgs>;
            result: BatchPayload;
          };
          createManyAndReturn: {
            args: Prisma.userstyleCreateManyAndReturnArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$userstylePayload>[];
          };
          delete: {
            args: Prisma.userstyleDeleteArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$userstylePayload>;
          };
          update: {
            args: Prisma.userstyleUpdateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$userstylePayload>;
          };
          deleteMany: {
            args: Prisma.userstyleDeleteManyArgs<ExtArgs>;
            result: BatchPayload;
          };
          updateMany: {
            args: Prisma.userstyleUpdateManyArgs<ExtArgs>;
            result: BatchPayload;
          };
          updateManyAndReturn: {
            args: Prisma.userstyleUpdateManyAndReturnArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$userstylePayload>[];
          };
          upsert: {
            args: Prisma.userstyleUpsertArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$userstylePayload>;
          };
          aggregate: {
            args: Prisma.UserstyleAggregateArgs<ExtArgs>;
            result: $Utils.Optional<AggregateUserstyle>;
          };
          groupBy: {
            args: Prisma.userstyleGroupByArgs<ExtArgs>;
            result: $Utils.Optional<UserstyleGroupByOutputType>[];
          };
          count: {
            args: Prisma.userstyleCountArgs<ExtArgs>;
            result: $Utils.Optional<UserstyleCountAggregateOutputType> | number;
          };
        };
      };
    };
  } & {
    other: {
      payload: any;
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]];
          result: any;
        };
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]];
          result: any;
        };
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]];
          result: any;
        };
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]];
          result: any;
        };
      };
    };
  };
  export const defineExtension: $Extensions.ExtendsHook<
    "define",
    Prisma.TypeMapCb,
    $Extensions.DefaultArgs
  >;
  export type DefaultPrismaClient = PrismaClient;
  export type ErrorFormat = "pretty" | "colorless" | "minimal";
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources;
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string;
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat;
    /**
     * @example
     * ```
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     *
     * // Emit as events
     * log: [
     *   { emit: 'stdout', level: 'query' },
     *   { emit: 'stdout', level: 'info' },
     *   { emit: 'stdout', level: 'warn' }
     *   { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[];
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number;
      timeout?: number;
      isolationLevel?: Prisma.TransactionIsolationLevel;
    };
    /**
     * Global configuration for omitting model fields by default.
     *
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig;
  }
  export type GlobalOmitConfig = {
    user?: userOmit;
    hero?: heroOmit;
    project?: projectOmit;
    experience?: experienceOmit;
    education?: educationOmit;
    skills?: skillsOmit;
    contact?: contactOmit;
    about?: AboutOmit;
    userstyle?: userstyleOmit;
  };

  /* Types for Logging */
  export type LogLevel = "info" | "query" | "warn" | "error";
  export type LogDefinition = {
    level: LogLevel;
    emit: "stdout" | "event";
  };

  export type GetLogType<T extends LogLevel | LogDefinition> =
    T extends LogDefinition
      ? T["emit"] extends "event"
        ? T["level"]
        : never
      : never;
  export type GetEvents<T extends any> =
    T extends Array<LogLevel | LogDefinition>
      ?
          | GetLogType<T[0]>
          | GetLogType<T[1]>
          | GetLogType<T[2]>
          | GetLogType<T[3]>
      : never;

  export type QueryEvent = {
    timestamp: Date;
    query: string;
    params: string;
    duration: number;
    target: string;
  };

  export type LogEvent = {
    timestamp: Date;
    message: string;
    target: string;
  };
  /* End Types for Logging */

  export type PrismaAction =
    | "findUnique"
    | "findUniqueOrThrow"
    | "findMany"
    | "findFirst"
    | "findFirstOrThrow"
    | "create"
    | "createMany"
    | "createManyAndReturn"
    | "update"
    | "updateMany"
    | "updateManyAndReturn"
    | "upsert"
    | "delete"
    | "deleteMany"
    | "executeRaw"
    | "queryRaw"
    | "aggregate"
    | "count"
    | "runCommandRaw"
    | "findRaw"
    | "groupBy";

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName;
    action: PrismaAction;
    args: any;
    dataPath: string[];
    runInTransaction: boolean;
  };

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>;

  // tested in getLogLevel.test.ts
  export function getLogLevel(
    log: Array<LogLevel | LogDefinition>,
  ): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<
    Prisma.DefaultPrismaClient,
    runtime.ITXClientDenyList
  >;

  export type Datasource = {
    url?: string;
  };

  /**
   * Count Types
   */

  /**
   * Count Type UserCountOutputType
   */

  export type UserCountOutputType = {
    skills: number;
    contact: number;
    About: number;
    project: number;
    experience: number;
    education: number;
    hero: number;
    userstyle: number;
  };

  export type UserCountOutputTypeSelect<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    skills?: boolean | UserCountOutputTypeCountSkillsArgs;
    contact?: boolean | UserCountOutputTypeCountContactArgs;
    About?: boolean | UserCountOutputTypeCountAboutArgs;
    project?: boolean | UserCountOutputTypeCountProjectArgs;
    experience?: boolean | UserCountOutputTypeCountExperienceArgs;
    education?: boolean | UserCountOutputTypeCountEducationArgs;
    hero?: boolean | UserCountOutputTypeCountHeroArgs;
    userstyle?: boolean | UserCountOutputTypeCountUserstyleArgs;
  };

  // Custom InputTypes
  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeDefaultArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the UserCountOutputType
     */
    select?: UserCountOutputTypeSelect<ExtArgs> | null;
  };

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountSkillsArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    where?: skillsWhereInput;
  };

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountContactArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    where?: contactWhereInput;
  };

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountAboutArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    where?: AboutWhereInput;
  };

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountProjectArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    where?: projectWhereInput;
  };

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountExperienceArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    where?: experienceWhereInput;
  };

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountEducationArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    where?: educationWhereInput;
  };

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountHeroArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    where?: heroWhereInput;
  };

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountUserstyleArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    where?: userstyleWhereInput;
  };

  /**
   * Models
   */

  /**
   * Model user
   */

  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null;
    _avg: UserAvgAggregateOutputType | null;
    _sum: UserSumAggregateOutputType | null;
    _min: UserMinAggregateOutputType | null;
    _max: UserMaxAggregateOutputType | null;
  };

  export type UserAvgAggregateOutputType = {
    uid: number | null;
  };

  export type UserSumAggregateOutputType = {
    uid: number | null;
  };

  export type UserMinAggregateOutputType = {
    uid: number | null;
    username: string | null;
    password: string | null;
    email: string | null;
  };

  export type UserMaxAggregateOutputType = {
    uid: number | null;
    username: string | null;
    password: string | null;
    email: string | null;
  };

  export type UserCountAggregateOutputType = {
    uid: number;
    username: number;
    password: number;
    email: number;
    sessions: number;
    _all: number;
  };

  export type UserAvgAggregateInputType = {
    uid?: true;
  };

  export type UserSumAggregateInputType = {
    uid?: true;
  };

  export type UserMinAggregateInputType = {
    uid?: true;
    username?: true;
    password?: true;
    email?: true;
  };

  export type UserMaxAggregateInputType = {
    uid?: true;
    username?: true;
    password?: true;
    email?: true;
  };

  export type UserCountAggregateInputType = {
    uid?: true;
    username?: true;
    password?: true;
    email?: true;
    sessions?: true;
    _all?: true;
  };

  export type UserAggregateArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Filter which user to aggregate.
     */
    where?: userWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of users to fetch.
     */
    orderBy?: userOrderByWithRelationInput | userOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: userWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` users from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` users.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned users
     **/
    _count?: true | UserCountAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to average
     **/
    _avg?: UserAvgAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to sum
     **/
    _sum?: UserSumAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
     **/
    _min?: UserMinAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
     **/
    _max?: UserMaxAggregateInputType;
  };

  export type GetUserAggregateType<T extends UserAggregateArgs> = {
    [P in keyof T & keyof AggregateUser]: P extends "_count" | "count"
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUser[P]>
      : GetScalarType<T[P], AggregateUser[P]>;
  };

  export type userGroupByArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    where?: userWhereInput;
    orderBy?:
      | userOrderByWithAggregationInput
      | userOrderByWithAggregationInput[];
    by: UserScalarFieldEnum[] | UserScalarFieldEnum;
    having?: userScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: UserCountAggregateInputType | true;
    _avg?: UserAvgAggregateInputType;
    _sum?: UserSumAggregateInputType;
    _min?: UserMinAggregateInputType;
    _max?: UserMaxAggregateInputType;
  };

  export type UserGroupByOutputType = {
    uid: number;
    username: string;
    password: string;
    email: string;
    sessions: string[];
    _count: UserCountAggregateOutputType | null;
    _avg: UserAvgAggregateOutputType | null;
    _sum: UserSumAggregateOutputType | null;
    _min: UserMinAggregateOutputType | null;
    _max: UserMaxAggregateOutputType | null;
  };

  type GetUserGroupByPayload<T extends userGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserGroupByOutputType, T["by"]> & {
        [P in keyof T & keyof UserGroupByOutputType]: P extends "_count"
          ? T[P] extends boolean
            ? number
            : GetScalarType<T[P], UserGroupByOutputType[P]>
          : GetScalarType<T[P], UserGroupByOutputType[P]>;
      }
    >
  >;

  export type userSelect<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = $Extensions.GetSelect<
    {
      uid?: boolean;
      username?: boolean;
      password?: boolean;
      email?: boolean;
      sessions?: boolean;
      skills?: boolean | user$skillsArgs<ExtArgs>;
      contact?: boolean | user$contactArgs<ExtArgs>;
      About?: boolean | user$AboutArgs<ExtArgs>;
      project?: boolean | user$projectArgs<ExtArgs>;
      experience?: boolean | user$experienceArgs<ExtArgs>;
      education?: boolean | user$educationArgs<ExtArgs>;
      hero?: boolean | user$heroArgs<ExtArgs>;
      userstyle?: boolean | user$userstyleArgs<ExtArgs>;
      _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>;
    },
    ExtArgs["result"]["user"]
  >;

  export type userSelectCreateManyAndReturn<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = $Extensions.GetSelect<
    {
      uid?: boolean;
      username?: boolean;
      password?: boolean;
      email?: boolean;
      sessions?: boolean;
    },
    ExtArgs["result"]["user"]
  >;

  export type userSelectUpdateManyAndReturn<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = $Extensions.GetSelect<
    {
      uid?: boolean;
      username?: boolean;
      password?: boolean;
      email?: boolean;
      sessions?: boolean;
    },
    ExtArgs["result"]["user"]
  >;

  export type userSelectScalar = {
    uid?: boolean;
    username?: boolean;
    password?: boolean;
    email?: boolean;
    sessions?: boolean;
  };

  export type userOmit<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = $Extensions.GetOmit<
    "uid" | "username" | "password" | "email" | "sessions",
    ExtArgs["result"]["user"]
  >;
  export type userInclude<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    skills?: boolean | user$skillsArgs<ExtArgs>;
    contact?: boolean | user$contactArgs<ExtArgs>;
    About?: boolean | user$AboutArgs<ExtArgs>;
    project?: boolean | user$projectArgs<ExtArgs>;
    experience?: boolean | user$experienceArgs<ExtArgs>;
    education?: boolean | user$educationArgs<ExtArgs>;
    hero?: boolean | user$heroArgs<ExtArgs>;
    userstyle?: boolean | user$userstyleArgs<ExtArgs>;
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>;
  };
  export type userIncludeCreateManyAndReturn<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {};
  export type userIncludeUpdateManyAndReturn<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {};

  export type $userPayload<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    name: "user";
    objects: {
      skills: Prisma.$skillsPayload<ExtArgs>[];
      contact: Prisma.$contactPayload<ExtArgs>[];
      About: Prisma.$AboutPayload<ExtArgs>[];
      project: Prisma.$projectPayload<ExtArgs>[];
      experience: Prisma.$experiencePayload<ExtArgs>[];
      education: Prisma.$educationPayload<ExtArgs>[];
      hero: Prisma.$heroPayload<ExtArgs>[];
      userstyle: Prisma.$userstylePayload<ExtArgs>[];
    };
    scalars: $Extensions.GetPayloadResult<
      {
        uid: number;
        username: string;
        password: string;
        email: string;
        sessions: string[];
      },
      ExtArgs["result"]["user"]
    >;
    composites: {};
  };

  type userGetPayload<S extends boolean | null | undefined | userDefaultArgs> =
    $Result.GetResult<Prisma.$userPayload, S>;

  type userCountArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = Omit<userFindManyArgs, "select" | "include" | "distinct" | "omit"> & {
    select?: UserCountAggregateInputType | true;
  };

  export interface userDelegate<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    GlobalOmitOptions = {},
  > {
    [K: symbol]: {
      types: Prisma.TypeMap<ExtArgs>["model"]["user"];
      meta: { name: "user" };
    };
    /**
     * Find zero or one User that matches the filter.
     * @param {userFindUniqueArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends userFindUniqueArgs>(
      args: SelectSubset<T, userFindUniqueArgs<ExtArgs>>,
    ): Prisma__userClient<
      $Result.GetResult<
        Prisma.$userPayload<ExtArgs>,
        T,
        "findUnique",
        GlobalOmitOptions
      > | null,
      null,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Find one User that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {userFindUniqueOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends userFindUniqueOrThrowArgs>(
      args: SelectSubset<T, userFindUniqueOrThrowArgs<ExtArgs>>,
    ): Prisma__userClient<
      $Result.GetResult<
        Prisma.$userPayload<ExtArgs>,
        T,
        "findUniqueOrThrow",
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Find the first User that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {userFindFirstArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends userFindFirstArgs>(
      args?: SelectSubset<T, userFindFirstArgs<ExtArgs>>,
    ): Prisma__userClient<
      $Result.GetResult<
        Prisma.$userPayload<ExtArgs>,
        T,
        "findFirst",
        GlobalOmitOptions
      > | null,
      null,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Find the first User that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {userFindFirstOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends userFindFirstOrThrowArgs>(
      args?: SelectSubset<T, userFindFirstOrThrowArgs<ExtArgs>>,
    ): Prisma__userClient<
      $Result.GetResult<
        Prisma.$userPayload<ExtArgs>,
        T,
        "findFirstOrThrow",
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {userFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.user.findMany()
     *
     * // Get first 10 Users
     * const users = await prisma.user.findMany({ take: 10 })
     *
     * // Only select the `uid`
     * const userWithUidOnly = await prisma.user.findMany({ select: { uid: true } })
     *
     */
    findMany<T extends userFindManyArgs>(
      args?: SelectSubset<T, userFindManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<
      $Result.GetResult<
        Prisma.$userPayload<ExtArgs>,
        T,
        "findMany",
        GlobalOmitOptions
      >
    >;

    /**
     * Create a User.
     * @param {userCreateArgs} args - Arguments to create a User.
     * @example
     * // Create one User
     * const User = await prisma.user.create({
     *   data: {
     *     // ... data to create a User
     *   }
     * })
     *
     */
    create<T extends userCreateArgs>(
      args: SelectSubset<T, userCreateArgs<ExtArgs>>,
    ): Prisma__userClient<
      $Result.GetResult<
        Prisma.$userPayload<ExtArgs>,
        T,
        "create",
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Create many Users.
     * @param {userCreateManyArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     */
    createMany<T extends userCreateManyArgs>(
      args?: SelectSubset<T, userCreateManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Create many Users and returns the data saved in the database.
     * @param {userCreateManyAndReturnArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Create many Users and only return the `uid`
     * const userWithUidOnly = await prisma.user.createManyAndReturn({
     *   select: { uid: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     *
     */
    createManyAndReturn<T extends userCreateManyAndReturnArgs>(
      args?: SelectSubset<T, userCreateManyAndReturnArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<
      $Result.GetResult<
        Prisma.$userPayload<ExtArgs>,
        T,
        "createManyAndReturn",
        GlobalOmitOptions
      >
    >;

    /**
     * Delete a User.
     * @param {userDeleteArgs} args - Arguments to delete one User.
     * @example
     * // Delete one User
     * const User = await prisma.user.delete({
     *   where: {
     *     // ... filter to delete one User
     *   }
     * })
     *
     */
    delete<T extends userDeleteArgs>(
      args: SelectSubset<T, userDeleteArgs<ExtArgs>>,
    ): Prisma__userClient<
      $Result.GetResult<
        Prisma.$userPayload<ExtArgs>,
        T,
        "delete",
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Update one User.
     * @param {userUpdateArgs} args - Arguments to update one User.
     * @example
     * // Update one User
     * const user = await prisma.user.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    update<T extends userUpdateArgs>(
      args: SelectSubset<T, userUpdateArgs<ExtArgs>>,
    ): Prisma__userClient<
      $Result.GetResult<
        Prisma.$userPayload<ExtArgs>,
        T,
        "update",
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Delete zero or more Users.
     * @param {userDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.user.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     *
     */
    deleteMany<T extends userDeleteManyArgs>(
      args?: SelectSubset<T, userDeleteManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {userUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    updateMany<T extends userUpdateManyArgs>(
      args: SelectSubset<T, userUpdateManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Update zero or more Users and returns the data updated in the database.
     * @param {userUpdateManyAndReturnArgs} args - Arguments to update many Users.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Update zero or more Users and only return the `uid`
     * const userWithUidOnly = await prisma.user.updateManyAndReturn({
     *   select: { uid: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     *
     */
    updateManyAndReturn<T extends userUpdateManyAndReturnArgs>(
      args: SelectSubset<T, userUpdateManyAndReturnArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<
      $Result.GetResult<
        Prisma.$userPayload<ExtArgs>,
        T,
        "updateManyAndReturn",
        GlobalOmitOptions
      >
    >;

    /**
     * Create or update one User.
     * @param {userUpsertArgs} args - Arguments to update or create a User.
     * @example
     * // Update or create a User
     * const user = await prisma.user.upsert({
     *   create: {
     *     // ... data to create a User
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the User we want to update
     *   }
     * })
     */
    upsert<T extends userUpsertArgs>(
      args: SelectSubset<T, userUpsertArgs<ExtArgs>>,
    ): Prisma__userClient<
      $Result.GetResult<
        Prisma.$userPayload<ExtArgs>,
        T,
        "upsert",
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {userCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.user.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
     **/
    count<T extends userCountArgs>(
      args?: Subset<T, userCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<"select", any>
        ? T["select"] extends true
          ? number
          : GetScalarType<T["select"], UserCountAggregateOutputType>
        : number
    >;

    /**
     * Allows you to perform aggregations operations on a User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
     **/
    aggregate<T extends UserAggregateArgs>(
      args: Subset<T, UserAggregateArgs>,
    ): Prisma.PrismaPromise<GetUserAggregateType<T>>;

    /**
     * Group by User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {userGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     *
     **/
    groupBy<
      T extends userGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<"skip", Keys<T>>,
        Extends<"take", Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: userGroupByArgs["orderBy"] }
        : { orderBy?: userGroupByArgs["orderBy"] },
      OrderFields extends ExcludeUnderscoreKeys<
        Keys<MaybeTupleToUnion<T["orderBy"]>>
      >,
      ByFields extends MaybeTupleToUnion<T["by"]>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T["having"]>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T["by"] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
        ? `Error: "by" must not be empty.`
        : HavingValid extends False
          ? {
              [P in HavingFields]: P extends ByFields
                ? never
                : P extends string
                  ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
                  : [
                      Error,
                      "Field ",
                      P,
                      ` in "having" needs to be provided in "by"`,
                    ];
            }[HavingFields]
          : "take" extends Keys<T>
            ? "orderBy" extends Keys<T>
              ? ByValid extends True
                ? {}
                : {
                    [P in OrderFields]: P extends ByFields
                      ? never
                      : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
                  }[OrderFields]
              : 'Error: If you provide "take", you also need to provide "orderBy"'
            : "skip" extends Keys<T>
              ? "orderBy" extends Keys<T>
                ? ByValid extends True
                  ? {}
                  : {
                      [P in OrderFields]: P extends ByFields
                        ? never
                        : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
                    }[OrderFields]
                : 'Error: If you provide "skip", you also need to provide "orderBy"'
              : ByValid extends True
                ? {}
                : {
                    [P in OrderFields]: P extends ByFields
                      ? never
                      : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
                  }[OrderFields],
    >(
      args: SubsetIntersection<T, userGroupByArgs, OrderByArg> & InputErrors,
    ): {} extends InputErrors
      ? GetUserGroupByPayload<T>
      : Prisma.PrismaPromise<InputErrors>;
    /**
     * Fields of the user model
     */
    readonly fields: userFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for user.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__userClient<
    T,
    Null = never,
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    GlobalOmitOptions = {},
  > extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    skills<T extends user$skillsArgs<ExtArgs> = {}>(
      args?: Subset<T, user$skillsArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<
      | $Result.GetResult<
          Prisma.$skillsPayload<ExtArgs>,
          T,
          "findMany",
          GlobalOmitOptions
        >
      | Null
    >;
    contact<T extends user$contactArgs<ExtArgs> = {}>(
      args?: Subset<T, user$contactArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<
      | $Result.GetResult<
          Prisma.$contactPayload<ExtArgs>,
          T,
          "findMany",
          GlobalOmitOptions
        >
      | Null
    >;
    About<T extends user$AboutArgs<ExtArgs> = {}>(
      args?: Subset<T, user$AboutArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<
      | $Result.GetResult<
          Prisma.$AboutPayload<ExtArgs>,
          T,
          "findMany",
          GlobalOmitOptions
        >
      | Null
    >;
    project<T extends user$projectArgs<ExtArgs> = {}>(
      args?: Subset<T, user$projectArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<
      | $Result.GetResult<
          Prisma.$projectPayload<ExtArgs>,
          T,
          "findMany",
          GlobalOmitOptions
        >
      | Null
    >;
    experience<T extends user$experienceArgs<ExtArgs> = {}>(
      args?: Subset<T, user$experienceArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<
      | $Result.GetResult<
          Prisma.$experiencePayload<ExtArgs>,
          T,
          "findMany",
          GlobalOmitOptions
        >
      | Null
    >;
    education<T extends user$educationArgs<ExtArgs> = {}>(
      args?: Subset<T, user$educationArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<
      | $Result.GetResult<
          Prisma.$educationPayload<ExtArgs>,
          T,
          "findMany",
          GlobalOmitOptions
        >
      | Null
    >;
    hero<T extends user$heroArgs<ExtArgs> = {}>(
      args?: Subset<T, user$heroArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<
      | $Result.GetResult<
          Prisma.$heroPayload<ExtArgs>,
          T,
          "findMany",
          GlobalOmitOptions
        >
      | Null
    >;
    userstyle<T extends user$userstyleArgs<ExtArgs> = {}>(
      args?: Subset<T, user$userstyleArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<
      | $Result.GetResult<
          Prisma.$userstylePayload<ExtArgs>,
          T,
          "findMany",
          GlobalOmitOptions
        >
      | Null
    >;
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(
      onfulfilled?:
        | ((value: T) => TResult1 | PromiseLike<TResult1>)
        | undefined
        | null,
      onrejected?:
        | ((reason: any) => TResult2 | PromiseLike<TResult2>)
        | undefined
        | null,
    ): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(
      onrejected?:
        | ((reason: any) => TResult | PromiseLike<TResult>)
        | undefined
        | null,
    ): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }

  /**
   * Fields of the user model
   */
  interface userFieldRefs {
    readonly uid: FieldRef<"user", "Int">;
    readonly username: FieldRef<"user", "String">;
    readonly password: FieldRef<"user", "String">;
    readonly email: FieldRef<"user", "String">;
    readonly sessions: FieldRef<"user", "String[]">;
  }

  // Custom InputTypes
  /**
   * user findUnique
   */
  export type userFindUniqueArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the user
     */
    omit?: userOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: userInclude<ExtArgs> | null;
    /**
     * Filter, which user to fetch.
     */
    where: userWhereUniqueInput;
  };

  /**
   * user findUniqueOrThrow
   */
  export type userFindUniqueOrThrowArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the user
     */
    omit?: userOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: userInclude<ExtArgs> | null;
    /**
     * Filter, which user to fetch.
     */
    where: userWhereUniqueInput;
  };

  /**
   * user findFirst
   */
  export type userFindFirstArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the user
     */
    omit?: userOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: userInclude<ExtArgs> | null;
    /**
     * Filter, which user to fetch.
     */
    where?: userWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of users to fetch.
     */
    orderBy?: userOrderByWithRelationInput | userOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for users.
     */
    cursor?: userWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` users from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` users.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[];
  };

  /**
   * user findFirstOrThrow
   */
  export type userFindFirstOrThrowArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the user
     */
    omit?: userOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: userInclude<ExtArgs> | null;
    /**
     * Filter, which user to fetch.
     */
    where?: userWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of users to fetch.
     */
    orderBy?: userOrderByWithRelationInput | userOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for users.
     */
    cursor?: userWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` users from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` users.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[];
  };

  /**
   * user findMany
   */
  export type userFindManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the user
     */
    omit?: userOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: userInclude<ExtArgs> | null;
    /**
     * Filter, which users to fetch.
     */
    where?: userWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of users to fetch.
     */
    orderBy?: userOrderByWithRelationInput | userOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing users.
     */
    cursor?: userWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` users from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` users.
     */
    skip?: number;
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[];
  };

  /**
   * user create
   */
  export type userCreateArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the user
     */
    omit?: userOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: userInclude<ExtArgs> | null;
    /**
     * The data needed to create a user.
     */
    data: XOR<userCreateInput, userUncheckedCreateInput>;
  };

  /**
   * user createMany
   */
  export type userCreateManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * The data used to create many users.
     */
    data: userCreateManyInput | userCreateManyInput[];
    skipDuplicates?: boolean;
  };

  /**
   * user createManyAndReturn
   */
  export type userCreateManyAndReturnArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelectCreateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the user
     */
    omit?: userOmit<ExtArgs> | null;
    /**
     * The data used to create many users.
     */
    data: userCreateManyInput | userCreateManyInput[];
    skipDuplicates?: boolean;
  };

  /**
   * user update
   */
  export type userUpdateArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the user
     */
    omit?: userOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: userInclude<ExtArgs> | null;
    /**
     * The data needed to update a user.
     */
    data: XOR<userUpdateInput, userUncheckedUpdateInput>;
    /**
     * Choose, which user to update.
     */
    where: userWhereUniqueInput;
  };

  /**
   * user updateMany
   */
  export type userUpdateManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * The data used to update users.
     */
    data: XOR<userUpdateManyMutationInput, userUncheckedUpdateManyInput>;
    /**
     * Filter which users to update
     */
    where?: userWhereInput;
    /**
     * Limit how many users to update.
     */
    limit?: number;
  };

  /**
   * user updateManyAndReturn
   */
  export type userUpdateManyAndReturnArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelectUpdateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the user
     */
    omit?: userOmit<ExtArgs> | null;
    /**
     * The data used to update users.
     */
    data: XOR<userUpdateManyMutationInput, userUncheckedUpdateManyInput>;
    /**
     * Filter which users to update
     */
    where?: userWhereInput;
    /**
     * Limit how many users to update.
     */
    limit?: number;
  };

  /**
   * user upsert
   */
  export type userUpsertArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the user
     */
    omit?: userOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: userInclude<ExtArgs> | null;
    /**
     * The filter to search for the user to update in case it exists.
     */
    where: userWhereUniqueInput;
    /**
     * In case the user found by the `where` argument doesn't exist, create a new user with this data.
     */
    create: XOR<userCreateInput, userUncheckedCreateInput>;
    /**
     * In case the user was found with the provided `where` argument, update it with this data.
     */
    update: XOR<userUpdateInput, userUncheckedUpdateInput>;
  };

  /**
   * user delete
   */
  export type userDeleteArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the user
     */
    omit?: userOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: userInclude<ExtArgs> | null;
    /**
     * Filter which user to delete.
     */
    where: userWhereUniqueInput;
  };

  /**
   * user deleteMany
   */
  export type userDeleteManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Filter which users to delete
     */
    where?: userWhereInput;
    /**
     * Limit how many users to delete.
     */
    limit?: number;
  };

  /**
   * user.skills
   */
  export type user$skillsArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the skills
     */
    select?: skillsSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the skills
     */
    omit?: skillsOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: skillsInclude<ExtArgs> | null;
    where?: skillsWhereInput;
    orderBy?: skillsOrderByWithRelationInput | skillsOrderByWithRelationInput[];
    cursor?: skillsWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: SkillsScalarFieldEnum | SkillsScalarFieldEnum[];
  };

  /**
   * user.contact
   */
  export type user$contactArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the contact
     */
    select?: contactSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the contact
     */
    omit?: contactOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: contactInclude<ExtArgs> | null;
    where?: contactWhereInput;
    orderBy?:
      | contactOrderByWithRelationInput
      | contactOrderByWithRelationInput[];
    cursor?: contactWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: ContactScalarFieldEnum | ContactScalarFieldEnum[];
  };

  /**
   * user.About
   */
  export type user$AboutArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the About
     */
    select?: AboutSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the About
     */
    omit?: AboutOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AboutInclude<ExtArgs> | null;
    where?: AboutWhereInput;
    orderBy?: AboutOrderByWithRelationInput | AboutOrderByWithRelationInput[];
    cursor?: AboutWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: AboutScalarFieldEnum | AboutScalarFieldEnum[];
  };

  /**
   * user.project
   */
  export type user$projectArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the project
     */
    select?: projectSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the project
     */
    omit?: projectOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: projectInclude<ExtArgs> | null;
    where?: projectWhereInput;
    orderBy?:
      | projectOrderByWithRelationInput
      | projectOrderByWithRelationInput[];
    cursor?: projectWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: ProjectScalarFieldEnum | ProjectScalarFieldEnum[];
  };

  /**
   * user.experience
   */
  export type user$experienceArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the experience
     */
    select?: experienceSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the experience
     */
    omit?: experienceOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: experienceInclude<ExtArgs> | null;
    where?: experienceWhereInput;
    orderBy?:
      | experienceOrderByWithRelationInput
      | experienceOrderByWithRelationInput[];
    cursor?: experienceWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: ExperienceScalarFieldEnum | ExperienceScalarFieldEnum[];
  };

  /**
   * user.education
   */
  export type user$educationArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the education
     */
    select?: educationSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the education
     */
    omit?: educationOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: educationInclude<ExtArgs> | null;
    where?: educationWhereInput;
    orderBy?:
      | educationOrderByWithRelationInput
      | educationOrderByWithRelationInput[];
    cursor?: educationWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: EducationScalarFieldEnum | EducationScalarFieldEnum[];
  };

  /**
   * user.hero
   */
  export type user$heroArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the hero
     */
    select?: heroSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the hero
     */
    omit?: heroOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: heroInclude<ExtArgs> | null;
    where?: heroWhereInput;
    orderBy?: heroOrderByWithRelationInput | heroOrderByWithRelationInput[];
    cursor?: heroWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: HeroScalarFieldEnum | HeroScalarFieldEnum[];
  };

  /**
   * user.userstyle
   */
  export type user$userstyleArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the userstyle
     */
    select?: userstyleSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the userstyle
     */
    omit?: userstyleOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: userstyleInclude<ExtArgs> | null;
    where?: userstyleWhereInput;
    orderBy?:
      | userstyleOrderByWithRelationInput
      | userstyleOrderByWithRelationInput[];
    cursor?: userstyleWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: UserstyleScalarFieldEnum | UserstyleScalarFieldEnum[];
  };

  /**
   * user without action
   */
  export type userDefaultArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the user
     */
    omit?: userOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: userInclude<ExtArgs> | null;
  };

  /**
   * Model hero
   */

  export type AggregateHero = {
    _count: HeroCountAggregateOutputType | null;
    _avg: HeroAvgAggregateOutputType | null;
    _sum: HeroSumAggregateOutputType | null;
    _min: HeroMinAggregateOutputType | null;
    _max: HeroMaxAggregateOutputType | null;
  };

  export type HeroAvgAggregateOutputType = {
    hid: number | null;
    uid: number | null;
  };

  export type HeroSumAggregateOutputType = {
    hid: number | null;
    uid: number | null;
  };

  export type HeroMinAggregateOutputType = {
    hid: number | null;
    uid: number | null;
    style: string | null;
    hero: string | null;
    subhero: string | null;
  };

  export type HeroMaxAggregateOutputType = {
    hid: number | null;
    uid: number | null;
    style: string | null;
    hero: string | null;
    subhero: string | null;
  };

  export type HeroCountAggregateOutputType = {
    hid: number;
    uid: number;
    style: number;
    hero: number;
    subhero: number;
    _all: number;
  };

  export type HeroAvgAggregateInputType = {
    hid?: true;
    uid?: true;
  };

  export type HeroSumAggregateInputType = {
    hid?: true;
    uid?: true;
  };

  export type HeroMinAggregateInputType = {
    hid?: true;
    uid?: true;
    style?: true;
    hero?: true;
    subhero?: true;
  };

  export type HeroMaxAggregateInputType = {
    hid?: true;
    uid?: true;
    style?: true;
    hero?: true;
    subhero?: true;
  };

  export type HeroCountAggregateInputType = {
    hid?: true;
    uid?: true;
    style?: true;
    hero?: true;
    subhero?: true;
    _all?: true;
  };

  export type HeroAggregateArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Filter which hero to aggregate.
     */
    where?: heroWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of heroes to fetch.
     */
    orderBy?: heroOrderByWithRelationInput | heroOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: heroWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` heroes from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` heroes.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned heroes
     **/
    _count?: true | HeroCountAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to average
     **/
    _avg?: HeroAvgAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to sum
     **/
    _sum?: HeroSumAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
     **/
    _min?: HeroMinAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
     **/
    _max?: HeroMaxAggregateInputType;
  };

  export type GetHeroAggregateType<T extends HeroAggregateArgs> = {
    [P in keyof T & keyof AggregateHero]: P extends "_count" | "count"
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateHero[P]>
      : GetScalarType<T[P], AggregateHero[P]>;
  };

  export type heroGroupByArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    where?: heroWhereInput;
    orderBy?:
      | heroOrderByWithAggregationInput
      | heroOrderByWithAggregationInput[];
    by: HeroScalarFieldEnum[] | HeroScalarFieldEnum;
    having?: heroScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: HeroCountAggregateInputType | true;
    _avg?: HeroAvgAggregateInputType;
    _sum?: HeroSumAggregateInputType;
    _min?: HeroMinAggregateInputType;
    _max?: HeroMaxAggregateInputType;
  };

  export type HeroGroupByOutputType = {
    hid: number;
    uid: number;
    style: string;
    hero: string;
    subhero: string;
    _count: HeroCountAggregateOutputType | null;
    _avg: HeroAvgAggregateOutputType | null;
    _sum: HeroSumAggregateOutputType | null;
    _min: HeroMinAggregateOutputType | null;
    _max: HeroMaxAggregateOutputType | null;
  };

  type GetHeroGroupByPayload<T extends heroGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<HeroGroupByOutputType, T["by"]> & {
        [P in keyof T & keyof HeroGroupByOutputType]: P extends "_count"
          ? T[P] extends boolean
            ? number
            : GetScalarType<T[P], HeroGroupByOutputType[P]>
          : GetScalarType<T[P], HeroGroupByOutputType[P]>;
      }
    >
  >;

  export type heroSelect<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = $Extensions.GetSelect<
    {
      hid?: boolean;
      uid?: boolean;
      style?: boolean;
      hero?: boolean;
      subhero?: boolean;
      user?: boolean | userDefaultArgs<ExtArgs>;
    },
    ExtArgs["result"]["hero"]
  >;

  export type heroSelectCreateManyAndReturn<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = $Extensions.GetSelect<
    {
      hid?: boolean;
      uid?: boolean;
      style?: boolean;
      hero?: boolean;
      subhero?: boolean;
      user?: boolean | userDefaultArgs<ExtArgs>;
    },
    ExtArgs["result"]["hero"]
  >;

  export type heroSelectUpdateManyAndReturn<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = $Extensions.GetSelect<
    {
      hid?: boolean;
      uid?: boolean;
      style?: boolean;
      hero?: boolean;
      subhero?: boolean;
      user?: boolean | userDefaultArgs<ExtArgs>;
    },
    ExtArgs["result"]["hero"]
  >;

  export type heroSelectScalar = {
    hid?: boolean;
    uid?: boolean;
    style?: boolean;
    hero?: boolean;
    subhero?: boolean;
  };

  export type heroOmit<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = $Extensions.GetOmit<
    "hid" | "uid" | "style" | "hero" | "subhero",
    ExtArgs["result"]["hero"]
  >;
  export type heroInclude<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    user?: boolean | userDefaultArgs<ExtArgs>;
  };
  export type heroIncludeCreateManyAndReturn<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    user?: boolean | userDefaultArgs<ExtArgs>;
  };
  export type heroIncludeUpdateManyAndReturn<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    user?: boolean | userDefaultArgs<ExtArgs>;
  };

  export type $heroPayload<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    name: "hero";
    objects: {
      user: Prisma.$userPayload<ExtArgs>;
    };
    scalars: $Extensions.GetPayloadResult<
      {
        hid: number;
        uid: number;
        style: string;
        hero: string;
        subhero: string;
      },
      ExtArgs["result"]["hero"]
    >;
    composites: {};
  };

  type heroGetPayload<S extends boolean | null | undefined | heroDefaultArgs> =
    $Result.GetResult<Prisma.$heroPayload, S>;

  type heroCountArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = Omit<heroFindManyArgs, "select" | "include" | "distinct" | "omit"> & {
    select?: HeroCountAggregateInputType | true;
  };

  export interface heroDelegate<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    GlobalOmitOptions = {},
  > {
    [K: symbol]: {
      types: Prisma.TypeMap<ExtArgs>["model"]["hero"];
      meta: { name: "hero" };
    };
    /**
     * Find zero or one Hero that matches the filter.
     * @param {heroFindUniqueArgs} args - Arguments to find a Hero
     * @example
     * // Get one Hero
     * const hero = await prisma.hero.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends heroFindUniqueArgs>(
      args: SelectSubset<T, heroFindUniqueArgs<ExtArgs>>,
    ): Prisma__heroClient<
      $Result.GetResult<
        Prisma.$heroPayload<ExtArgs>,
        T,
        "findUnique",
        GlobalOmitOptions
      > | null,
      null,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Find one Hero that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {heroFindUniqueOrThrowArgs} args - Arguments to find a Hero
     * @example
     * // Get one Hero
     * const hero = await prisma.hero.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends heroFindUniqueOrThrowArgs>(
      args: SelectSubset<T, heroFindUniqueOrThrowArgs<ExtArgs>>,
    ): Prisma__heroClient<
      $Result.GetResult<
        Prisma.$heroPayload<ExtArgs>,
        T,
        "findUniqueOrThrow",
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Find the first Hero that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {heroFindFirstArgs} args - Arguments to find a Hero
     * @example
     * // Get one Hero
     * const hero = await prisma.hero.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends heroFindFirstArgs>(
      args?: SelectSubset<T, heroFindFirstArgs<ExtArgs>>,
    ): Prisma__heroClient<
      $Result.GetResult<
        Prisma.$heroPayload<ExtArgs>,
        T,
        "findFirst",
        GlobalOmitOptions
      > | null,
      null,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Find the first Hero that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {heroFindFirstOrThrowArgs} args - Arguments to find a Hero
     * @example
     * // Get one Hero
     * const hero = await prisma.hero.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends heroFindFirstOrThrowArgs>(
      args?: SelectSubset<T, heroFindFirstOrThrowArgs<ExtArgs>>,
    ): Prisma__heroClient<
      $Result.GetResult<
        Prisma.$heroPayload<ExtArgs>,
        T,
        "findFirstOrThrow",
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Find zero or more Heroes that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {heroFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Heroes
     * const heroes = await prisma.hero.findMany()
     *
     * // Get first 10 Heroes
     * const heroes = await prisma.hero.findMany({ take: 10 })
     *
     * // Only select the `hid`
     * const heroWithHidOnly = await prisma.hero.findMany({ select: { hid: true } })
     *
     */
    findMany<T extends heroFindManyArgs>(
      args?: SelectSubset<T, heroFindManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<
      $Result.GetResult<
        Prisma.$heroPayload<ExtArgs>,
        T,
        "findMany",
        GlobalOmitOptions
      >
    >;

    /**
     * Create a Hero.
     * @param {heroCreateArgs} args - Arguments to create a Hero.
     * @example
     * // Create one Hero
     * const Hero = await prisma.hero.create({
     *   data: {
     *     // ... data to create a Hero
     *   }
     * })
     *
     */
    create<T extends heroCreateArgs>(
      args: SelectSubset<T, heroCreateArgs<ExtArgs>>,
    ): Prisma__heroClient<
      $Result.GetResult<
        Prisma.$heroPayload<ExtArgs>,
        T,
        "create",
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Create many Heroes.
     * @param {heroCreateManyArgs} args - Arguments to create many Heroes.
     * @example
     * // Create many Heroes
     * const hero = await prisma.hero.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     */
    createMany<T extends heroCreateManyArgs>(
      args?: SelectSubset<T, heroCreateManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Create many Heroes and returns the data saved in the database.
     * @param {heroCreateManyAndReturnArgs} args - Arguments to create many Heroes.
     * @example
     * // Create many Heroes
     * const hero = await prisma.hero.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Create many Heroes and only return the `hid`
     * const heroWithHidOnly = await prisma.hero.createManyAndReturn({
     *   select: { hid: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     *
     */
    createManyAndReturn<T extends heroCreateManyAndReturnArgs>(
      args?: SelectSubset<T, heroCreateManyAndReturnArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<
      $Result.GetResult<
        Prisma.$heroPayload<ExtArgs>,
        T,
        "createManyAndReturn",
        GlobalOmitOptions
      >
    >;

    /**
     * Delete a Hero.
     * @param {heroDeleteArgs} args - Arguments to delete one Hero.
     * @example
     * // Delete one Hero
     * const Hero = await prisma.hero.delete({
     *   where: {
     *     // ... filter to delete one Hero
     *   }
     * })
     *
     */
    delete<T extends heroDeleteArgs>(
      args: SelectSubset<T, heroDeleteArgs<ExtArgs>>,
    ): Prisma__heroClient<
      $Result.GetResult<
        Prisma.$heroPayload<ExtArgs>,
        T,
        "delete",
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Update one Hero.
     * @param {heroUpdateArgs} args - Arguments to update one Hero.
     * @example
     * // Update one Hero
     * const hero = await prisma.hero.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    update<T extends heroUpdateArgs>(
      args: SelectSubset<T, heroUpdateArgs<ExtArgs>>,
    ): Prisma__heroClient<
      $Result.GetResult<
        Prisma.$heroPayload<ExtArgs>,
        T,
        "update",
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Delete zero or more Heroes.
     * @param {heroDeleteManyArgs} args - Arguments to filter Heroes to delete.
     * @example
     * // Delete a few Heroes
     * const { count } = await prisma.hero.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     *
     */
    deleteMany<T extends heroDeleteManyArgs>(
      args?: SelectSubset<T, heroDeleteManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Update zero or more Heroes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {heroUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Heroes
     * const hero = await prisma.hero.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    updateMany<T extends heroUpdateManyArgs>(
      args: SelectSubset<T, heroUpdateManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Update zero or more Heroes and returns the data updated in the database.
     * @param {heroUpdateManyAndReturnArgs} args - Arguments to update many Heroes.
     * @example
     * // Update many Heroes
     * const hero = await prisma.hero.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Update zero or more Heroes and only return the `hid`
     * const heroWithHidOnly = await prisma.hero.updateManyAndReturn({
     *   select: { hid: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     *
     */
    updateManyAndReturn<T extends heroUpdateManyAndReturnArgs>(
      args: SelectSubset<T, heroUpdateManyAndReturnArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<
      $Result.GetResult<
        Prisma.$heroPayload<ExtArgs>,
        T,
        "updateManyAndReturn",
        GlobalOmitOptions
      >
    >;

    /**
     * Create or update one Hero.
     * @param {heroUpsertArgs} args - Arguments to update or create a Hero.
     * @example
     * // Update or create a Hero
     * const hero = await prisma.hero.upsert({
     *   create: {
     *     // ... data to create a Hero
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Hero we want to update
     *   }
     * })
     */
    upsert<T extends heroUpsertArgs>(
      args: SelectSubset<T, heroUpsertArgs<ExtArgs>>,
    ): Prisma__heroClient<
      $Result.GetResult<
        Prisma.$heroPayload<ExtArgs>,
        T,
        "upsert",
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Count the number of Heroes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {heroCountArgs} args - Arguments to filter Heroes to count.
     * @example
     * // Count the number of Heroes
     * const count = await prisma.hero.count({
     *   where: {
     *     // ... the filter for the Heroes we want to count
     *   }
     * })
     **/
    count<T extends heroCountArgs>(
      args?: Subset<T, heroCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<"select", any>
        ? T["select"] extends true
          ? number
          : GetScalarType<T["select"], HeroCountAggregateOutputType>
        : number
    >;

    /**
     * Allows you to perform aggregations operations on a Hero.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HeroAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
     **/
    aggregate<T extends HeroAggregateArgs>(
      args: Subset<T, HeroAggregateArgs>,
    ): Prisma.PrismaPromise<GetHeroAggregateType<T>>;

    /**
     * Group by Hero.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {heroGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     *
     **/
    groupBy<
      T extends heroGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<"skip", Keys<T>>,
        Extends<"take", Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: heroGroupByArgs["orderBy"] }
        : { orderBy?: heroGroupByArgs["orderBy"] },
      OrderFields extends ExcludeUnderscoreKeys<
        Keys<MaybeTupleToUnion<T["orderBy"]>>
      >,
      ByFields extends MaybeTupleToUnion<T["by"]>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T["having"]>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T["by"] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
        ? `Error: "by" must not be empty.`
        : HavingValid extends False
          ? {
              [P in HavingFields]: P extends ByFields
                ? never
                : P extends string
                  ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
                  : [
                      Error,
                      "Field ",
                      P,
                      ` in "having" needs to be provided in "by"`,
                    ];
            }[HavingFields]
          : "take" extends Keys<T>
            ? "orderBy" extends Keys<T>
              ? ByValid extends True
                ? {}
                : {
                    [P in OrderFields]: P extends ByFields
                      ? never
                      : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
                  }[OrderFields]
              : 'Error: If you provide "take", you also need to provide "orderBy"'
            : "skip" extends Keys<T>
              ? "orderBy" extends Keys<T>
                ? ByValid extends True
                  ? {}
                  : {
                      [P in OrderFields]: P extends ByFields
                        ? never
                        : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
                    }[OrderFields]
                : 'Error: If you provide "skip", you also need to provide "orderBy"'
              : ByValid extends True
                ? {}
                : {
                    [P in OrderFields]: P extends ByFields
                      ? never
                      : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
                  }[OrderFields],
    >(
      args: SubsetIntersection<T, heroGroupByArgs, OrderByArg> & InputErrors,
    ): {} extends InputErrors
      ? GetHeroGroupByPayload<T>
      : Prisma.PrismaPromise<InputErrors>;
    /**
     * Fields of the hero model
     */
    readonly fields: heroFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for hero.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__heroClient<
    T,
    Null = never,
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    GlobalOmitOptions = {},
  > extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    user<T extends userDefaultArgs<ExtArgs> = {}>(
      args?: Subset<T, userDefaultArgs<ExtArgs>>,
    ): Prisma__userClient<
      | $Result.GetResult<
          Prisma.$userPayload<ExtArgs>,
          T,
          "findUniqueOrThrow",
          GlobalOmitOptions
        >
      | Null,
      Null,
      ExtArgs,
      GlobalOmitOptions
    >;
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(
      onfulfilled?:
        | ((value: T) => TResult1 | PromiseLike<TResult1>)
        | undefined
        | null,
      onrejected?:
        | ((reason: any) => TResult2 | PromiseLike<TResult2>)
        | undefined
        | null,
    ): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(
      onrejected?:
        | ((reason: any) => TResult | PromiseLike<TResult>)
        | undefined
        | null,
    ): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }

  /**
   * Fields of the hero model
   */
  interface heroFieldRefs {
    readonly hid: FieldRef<"hero", "Int">;
    readonly uid: FieldRef<"hero", "Int">;
    readonly style: FieldRef<"hero", "String">;
    readonly hero: FieldRef<"hero", "String">;
    readonly subhero: FieldRef<"hero", "String">;
  }

  // Custom InputTypes
  /**
   * hero findUnique
   */
  export type heroFindUniqueArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the hero
     */
    select?: heroSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the hero
     */
    omit?: heroOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: heroInclude<ExtArgs> | null;
    /**
     * Filter, which hero to fetch.
     */
    where: heroWhereUniqueInput;
  };

  /**
   * hero findUniqueOrThrow
   */
  export type heroFindUniqueOrThrowArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the hero
     */
    select?: heroSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the hero
     */
    omit?: heroOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: heroInclude<ExtArgs> | null;
    /**
     * Filter, which hero to fetch.
     */
    where: heroWhereUniqueInput;
  };

  /**
   * hero findFirst
   */
  export type heroFindFirstArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the hero
     */
    select?: heroSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the hero
     */
    omit?: heroOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: heroInclude<ExtArgs> | null;
    /**
     * Filter, which hero to fetch.
     */
    where?: heroWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of heroes to fetch.
     */
    orderBy?: heroOrderByWithRelationInput | heroOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for heroes.
     */
    cursor?: heroWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` heroes from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` heroes.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of heroes.
     */
    distinct?: HeroScalarFieldEnum | HeroScalarFieldEnum[];
  };

  /**
   * hero findFirstOrThrow
   */
  export type heroFindFirstOrThrowArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the hero
     */
    select?: heroSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the hero
     */
    omit?: heroOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: heroInclude<ExtArgs> | null;
    /**
     * Filter, which hero to fetch.
     */
    where?: heroWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of heroes to fetch.
     */
    orderBy?: heroOrderByWithRelationInput | heroOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for heroes.
     */
    cursor?: heroWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` heroes from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` heroes.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of heroes.
     */
    distinct?: HeroScalarFieldEnum | HeroScalarFieldEnum[];
  };

  /**
   * hero findMany
   */
  export type heroFindManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the hero
     */
    select?: heroSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the hero
     */
    omit?: heroOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: heroInclude<ExtArgs> | null;
    /**
     * Filter, which heroes to fetch.
     */
    where?: heroWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of heroes to fetch.
     */
    orderBy?: heroOrderByWithRelationInput | heroOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing heroes.
     */
    cursor?: heroWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` heroes from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` heroes.
     */
    skip?: number;
    distinct?: HeroScalarFieldEnum | HeroScalarFieldEnum[];
  };

  /**
   * hero create
   */
  export type heroCreateArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the hero
     */
    select?: heroSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the hero
     */
    omit?: heroOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: heroInclude<ExtArgs> | null;
    /**
     * The data needed to create a hero.
     */
    data: XOR<heroCreateInput, heroUncheckedCreateInput>;
  };

  /**
   * hero createMany
   */
  export type heroCreateManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * The data used to create many heroes.
     */
    data: heroCreateManyInput | heroCreateManyInput[];
    skipDuplicates?: boolean;
  };

  /**
   * hero createManyAndReturn
   */
  export type heroCreateManyAndReturnArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the hero
     */
    select?: heroSelectCreateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the hero
     */
    omit?: heroOmit<ExtArgs> | null;
    /**
     * The data used to create many heroes.
     */
    data: heroCreateManyInput | heroCreateManyInput[];
    skipDuplicates?: boolean;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: heroIncludeCreateManyAndReturn<ExtArgs> | null;
  };

  /**
   * hero update
   */
  export type heroUpdateArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the hero
     */
    select?: heroSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the hero
     */
    omit?: heroOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: heroInclude<ExtArgs> | null;
    /**
     * The data needed to update a hero.
     */
    data: XOR<heroUpdateInput, heroUncheckedUpdateInput>;
    /**
     * Choose, which hero to update.
     */
    where: heroWhereUniqueInput;
  };

  /**
   * hero updateMany
   */
  export type heroUpdateManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * The data used to update heroes.
     */
    data: XOR<heroUpdateManyMutationInput, heroUncheckedUpdateManyInput>;
    /**
     * Filter which heroes to update
     */
    where?: heroWhereInput;
    /**
     * Limit how many heroes to update.
     */
    limit?: number;
  };

  /**
   * hero updateManyAndReturn
   */
  export type heroUpdateManyAndReturnArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the hero
     */
    select?: heroSelectUpdateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the hero
     */
    omit?: heroOmit<ExtArgs> | null;
    /**
     * The data used to update heroes.
     */
    data: XOR<heroUpdateManyMutationInput, heroUncheckedUpdateManyInput>;
    /**
     * Filter which heroes to update
     */
    where?: heroWhereInput;
    /**
     * Limit how many heroes to update.
     */
    limit?: number;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: heroIncludeUpdateManyAndReturn<ExtArgs> | null;
  };

  /**
   * hero upsert
   */
  export type heroUpsertArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the hero
     */
    select?: heroSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the hero
     */
    omit?: heroOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: heroInclude<ExtArgs> | null;
    /**
     * The filter to search for the hero to update in case it exists.
     */
    where: heroWhereUniqueInput;
    /**
     * In case the hero found by the `where` argument doesn't exist, create a new hero with this data.
     */
    create: XOR<heroCreateInput, heroUncheckedCreateInput>;
    /**
     * In case the hero was found with the provided `where` argument, update it with this data.
     */
    update: XOR<heroUpdateInput, heroUncheckedUpdateInput>;
  };

  /**
   * hero delete
   */
  export type heroDeleteArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the hero
     */
    select?: heroSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the hero
     */
    omit?: heroOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: heroInclude<ExtArgs> | null;
    /**
     * Filter which hero to delete.
     */
    where: heroWhereUniqueInput;
  };

  /**
   * hero deleteMany
   */
  export type heroDeleteManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Filter which heroes to delete
     */
    where?: heroWhereInput;
    /**
     * Limit how many heroes to delete.
     */
    limit?: number;
  };

  /**
   * hero without action
   */
  export type heroDefaultArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the hero
     */
    select?: heroSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the hero
     */
    omit?: heroOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: heroInclude<ExtArgs> | null;
  };

  /**
   * Model project
   */

  export type AggregateProject = {
    _count: ProjectCountAggregateOutputType | null;
    _avg: ProjectAvgAggregateOutputType | null;
    _sum: ProjectSumAggregateOutputType | null;
    _min: ProjectMinAggregateOutputType | null;
    _max: ProjectMaxAggregateOutputType | null;
  };

  export type ProjectAvgAggregateOutputType = {
    pid: number | null;
    uid: number | null;
  };

  export type ProjectSumAggregateOutputType = {
    pid: number | null;
    uid: number | null;
  };

  export type ProjectMinAggregateOutputType = {
    pid: number | null;
    uid: number | null;
    title: string | null;
    image: string | null;
    desc: string | null;
    github: string | null;
    Link: string | null;
  };

  export type ProjectMaxAggregateOutputType = {
    pid: number | null;
    uid: number | null;
    title: string | null;
    image: string | null;
    desc: string | null;
    github: string | null;
    Link: string | null;
  };

  export type ProjectCountAggregateOutputType = {
    pid: number;
    uid: number;
    title: number;
    image: number;
    desc: number;
    tags: number;
    github: number;
    Link: number;
    _all: number;
  };

  export type ProjectAvgAggregateInputType = {
    pid?: true;
    uid?: true;
  };

  export type ProjectSumAggregateInputType = {
    pid?: true;
    uid?: true;
  };

  export type ProjectMinAggregateInputType = {
    pid?: true;
    uid?: true;
    title?: true;
    image?: true;
    desc?: true;
    github?: true;
    Link?: true;
  };

  export type ProjectMaxAggregateInputType = {
    pid?: true;
    uid?: true;
    title?: true;
    image?: true;
    desc?: true;
    github?: true;
    Link?: true;
  };

  export type ProjectCountAggregateInputType = {
    pid?: true;
    uid?: true;
    title?: true;
    image?: true;
    desc?: true;
    tags?: true;
    github?: true;
    Link?: true;
    _all?: true;
  };

  export type ProjectAggregateArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Filter which project to aggregate.
     */
    where?: projectWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of projects to fetch.
     */
    orderBy?:
      | projectOrderByWithRelationInput
      | projectOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: projectWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` projects from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` projects.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned projects
     **/
    _count?: true | ProjectCountAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to average
     **/
    _avg?: ProjectAvgAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to sum
     **/
    _sum?: ProjectSumAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
     **/
    _min?: ProjectMinAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
     **/
    _max?: ProjectMaxAggregateInputType;
  };

  export type GetProjectAggregateType<T extends ProjectAggregateArgs> = {
    [P in keyof T & keyof AggregateProject]: P extends "_count" | "count"
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateProject[P]>
      : GetScalarType<T[P], AggregateProject[P]>;
  };

  export type projectGroupByArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    where?: projectWhereInput;
    orderBy?:
      | projectOrderByWithAggregationInput
      | projectOrderByWithAggregationInput[];
    by: ProjectScalarFieldEnum[] | ProjectScalarFieldEnum;
    having?: projectScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: ProjectCountAggregateInputType | true;
    _avg?: ProjectAvgAggregateInputType;
    _sum?: ProjectSumAggregateInputType;
    _min?: ProjectMinAggregateInputType;
    _max?: ProjectMaxAggregateInputType;
  };

  export type ProjectGroupByOutputType = {
    pid: number;
    uid: number;
    title: string;
    image: string;
    desc: string;
    tags: string[];
    github: string;
    Link: string;
    _count: ProjectCountAggregateOutputType | null;
    _avg: ProjectAvgAggregateOutputType | null;
    _sum: ProjectSumAggregateOutputType | null;
    _min: ProjectMinAggregateOutputType | null;
    _max: ProjectMaxAggregateOutputType | null;
  };

  type GetProjectGroupByPayload<T extends projectGroupByArgs> =
    Prisma.PrismaPromise<
      Array<
        PickEnumerable<ProjectGroupByOutputType, T["by"]> & {
          [P in keyof T & keyof ProjectGroupByOutputType]: P extends "_count"
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ProjectGroupByOutputType[P]>
            : GetScalarType<T[P], ProjectGroupByOutputType[P]>;
        }
      >
    >;

  export type projectSelect<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = $Extensions.GetSelect<
    {
      pid?: boolean;
      uid?: boolean;
      title?: boolean;
      image?: boolean;
      desc?: boolean;
      tags?: boolean;
      github?: boolean;
      Link?: boolean;
      user?: boolean | userDefaultArgs<ExtArgs>;
    },
    ExtArgs["result"]["project"]
  >;

  export type projectSelectCreateManyAndReturn<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = $Extensions.GetSelect<
    {
      pid?: boolean;
      uid?: boolean;
      title?: boolean;
      image?: boolean;
      desc?: boolean;
      tags?: boolean;
      github?: boolean;
      Link?: boolean;
      user?: boolean | userDefaultArgs<ExtArgs>;
    },
    ExtArgs["result"]["project"]
  >;

  export type projectSelectUpdateManyAndReturn<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = $Extensions.GetSelect<
    {
      pid?: boolean;
      uid?: boolean;
      title?: boolean;
      image?: boolean;
      desc?: boolean;
      tags?: boolean;
      github?: boolean;
      Link?: boolean;
      user?: boolean | userDefaultArgs<ExtArgs>;
    },
    ExtArgs["result"]["project"]
  >;

  export type projectSelectScalar = {
    pid?: boolean;
    uid?: boolean;
    title?: boolean;
    image?: boolean;
    desc?: boolean;
    tags?: boolean;
    github?: boolean;
    Link?: boolean;
  };

  export type projectOmit<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = $Extensions.GetOmit<
    "pid" | "uid" | "title" | "image" | "desc" | "tags" | "github" | "Link",
    ExtArgs["result"]["project"]
  >;
  export type projectInclude<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    user?: boolean | userDefaultArgs<ExtArgs>;
  };
  export type projectIncludeCreateManyAndReturn<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    user?: boolean | userDefaultArgs<ExtArgs>;
  };
  export type projectIncludeUpdateManyAndReturn<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    user?: boolean | userDefaultArgs<ExtArgs>;
  };

  export type $projectPayload<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    name: "project";
    objects: {
      user: Prisma.$userPayload<ExtArgs>;
    };
    scalars: $Extensions.GetPayloadResult<
      {
        pid: number;
        uid: number;
        title: string;
        image: string;
        desc: string;
        tags: string[];
        github: string;
        Link: string;
      },
      ExtArgs["result"]["project"]
    >;
    composites: {};
  };

  type projectGetPayload<
    S extends boolean | null | undefined | projectDefaultArgs,
  > = $Result.GetResult<Prisma.$projectPayload, S>;

  type projectCountArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = Omit<projectFindManyArgs, "select" | "include" | "distinct" | "omit"> & {
    select?: ProjectCountAggregateInputType | true;
  };

  export interface projectDelegate<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    GlobalOmitOptions = {},
  > {
    [K: symbol]: {
      types: Prisma.TypeMap<ExtArgs>["model"]["project"];
      meta: { name: "project" };
    };
    /**
     * Find zero or one Project that matches the filter.
     * @param {projectFindUniqueArgs} args - Arguments to find a Project
     * @example
     * // Get one Project
     * const project = await prisma.project.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends projectFindUniqueArgs>(
      args: SelectSubset<T, projectFindUniqueArgs<ExtArgs>>,
    ): Prisma__projectClient<
      $Result.GetResult<
        Prisma.$projectPayload<ExtArgs>,
        T,
        "findUnique",
        GlobalOmitOptions
      > | null,
      null,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Find one Project that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {projectFindUniqueOrThrowArgs} args - Arguments to find a Project
     * @example
     * // Get one Project
     * const project = await prisma.project.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends projectFindUniqueOrThrowArgs>(
      args: SelectSubset<T, projectFindUniqueOrThrowArgs<ExtArgs>>,
    ): Prisma__projectClient<
      $Result.GetResult<
        Prisma.$projectPayload<ExtArgs>,
        T,
        "findUniqueOrThrow",
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Find the first Project that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {projectFindFirstArgs} args - Arguments to find a Project
     * @example
     * // Get one Project
     * const project = await prisma.project.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends projectFindFirstArgs>(
      args?: SelectSubset<T, projectFindFirstArgs<ExtArgs>>,
    ): Prisma__projectClient<
      $Result.GetResult<
        Prisma.$projectPayload<ExtArgs>,
        T,
        "findFirst",
        GlobalOmitOptions
      > | null,
      null,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Find the first Project that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {projectFindFirstOrThrowArgs} args - Arguments to find a Project
     * @example
     * // Get one Project
     * const project = await prisma.project.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends projectFindFirstOrThrowArgs>(
      args?: SelectSubset<T, projectFindFirstOrThrowArgs<ExtArgs>>,
    ): Prisma__projectClient<
      $Result.GetResult<
        Prisma.$projectPayload<ExtArgs>,
        T,
        "findFirstOrThrow",
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Find zero or more Projects that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {projectFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Projects
     * const projects = await prisma.project.findMany()
     *
     * // Get first 10 Projects
     * const projects = await prisma.project.findMany({ take: 10 })
     *
     * // Only select the `pid`
     * const projectWithPidOnly = await prisma.project.findMany({ select: { pid: true } })
     *
     */
    findMany<T extends projectFindManyArgs>(
      args?: SelectSubset<T, projectFindManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<
      $Result.GetResult<
        Prisma.$projectPayload<ExtArgs>,
        T,
        "findMany",
        GlobalOmitOptions
      >
    >;

    /**
     * Create a Project.
     * @param {projectCreateArgs} args - Arguments to create a Project.
     * @example
     * // Create one Project
     * const Project = await prisma.project.create({
     *   data: {
     *     // ... data to create a Project
     *   }
     * })
     *
     */
    create<T extends projectCreateArgs>(
      args: SelectSubset<T, projectCreateArgs<ExtArgs>>,
    ): Prisma__projectClient<
      $Result.GetResult<
        Prisma.$projectPayload<ExtArgs>,
        T,
        "create",
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Create many Projects.
     * @param {projectCreateManyArgs} args - Arguments to create many Projects.
     * @example
     * // Create many Projects
     * const project = await prisma.project.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     */
    createMany<T extends projectCreateManyArgs>(
      args?: SelectSubset<T, projectCreateManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Create many Projects and returns the data saved in the database.
     * @param {projectCreateManyAndReturnArgs} args - Arguments to create many Projects.
     * @example
     * // Create many Projects
     * const project = await prisma.project.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Create many Projects and only return the `pid`
     * const projectWithPidOnly = await prisma.project.createManyAndReturn({
     *   select: { pid: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     *
     */
    createManyAndReturn<T extends projectCreateManyAndReturnArgs>(
      args?: SelectSubset<T, projectCreateManyAndReturnArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<
      $Result.GetResult<
        Prisma.$projectPayload<ExtArgs>,
        T,
        "createManyAndReturn",
        GlobalOmitOptions
      >
    >;

    /**
     * Delete a Project.
     * @param {projectDeleteArgs} args - Arguments to delete one Project.
     * @example
     * // Delete one Project
     * const Project = await prisma.project.delete({
     *   where: {
     *     // ... filter to delete one Project
     *   }
     * })
     *
     */
    delete<T extends projectDeleteArgs>(
      args: SelectSubset<T, projectDeleteArgs<ExtArgs>>,
    ): Prisma__projectClient<
      $Result.GetResult<
        Prisma.$projectPayload<ExtArgs>,
        T,
        "delete",
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Update one Project.
     * @param {projectUpdateArgs} args - Arguments to update one Project.
     * @example
     * // Update one Project
     * const project = await prisma.project.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    update<T extends projectUpdateArgs>(
      args: SelectSubset<T, projectUpdateArgs<ExtArgs>>,
    ): Prisma__projectClient<
      $Result.GetResult<
        Prisma.$projectPayload<ExtArgs>,
        T,
        "update",
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Delete zero or more Projects.
     * @param {projectDeleteManyArgs} args - Arguments to filter Projects to delete.
     * @example
     * // Delete a few Projects
     * const { count } = await prisma.project.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     *
     */
    deleteMany<T extends projectDeleteManyArgs>(
      args?: SelectSubset<T, projectDeleteManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Update zero or more Projects.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {projectUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Projects
     * const project = await prisma.project.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    updateMany<T extends projectUpdateManyArgs>(
      args: SelectSubset<T, projectUpdateManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Update zero or more Projects and returns the data updated in the database.
     * @param {projectUpdateManyAndReturnArgs} args - Arguments to update many Projects.
     * @example
     * // Update many Projects
     * const project = await prisma.project.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Update zero or more Projects and only return the `pid`
     * const projectWithPidOnly = await prisma.project.updateManyAndReturn({
     *   select: { pid: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     *
     */
    updateManyAndReturn<T extends projectUpdateManyAndReturnArgs>(
      args: SelectSubset<T, projectUpdateManyAndReturnArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<
      $Result.GetResult<
        Prisma.$projectPayload<ExtArgs>,
        T,
        "updateManyAndReturn",
        GlobalOmitOptions
      >
    >;

    /**
     * Create or update one Project.
     * @param {projectUpsertArgs} args - Arguments to update or create a Project.
     * @example
     * // Update or create a Project
     * const project = await prisma.project.upsert({
     *   create: {
     *     // ... data to create a Project
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Project we want to update
     *   }
     * })
     */
    upsert<T extends projectUpsertArgs>(
      args: SelectSubset<T, projectUpsertArgs<ExtArgs>>,
    ): Prisma__projectClient<
      $Result.GetResult<
        Prisma.$projectPayload<ExtArgs>,
        T,
        "upsert",
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Count the number of Projects.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {projectCountArgs} args - Arguments to filter Projects to count.
     * @example
     * // Count the number of Projects
     * const count = await prisma.project.count({
     *   where: {
     *     // ... the filter for the Projects we want to count
     *   }
     * })
     **/
    count<T extends projectCountArgs>(
      args?: Subset<T, projectCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<"select", any>
        ? T["select"] extends true
          ? number
          : GetScalarType<T["select"], ProjectCountAggregateOutputType>
        : number
    >;

    /**
     * Allows you to perform aggregations operations on a Project.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProjectAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
     **/
    aggregate<T extends ProjectAggregateArgs>(
      args: Subset<T, ProjectAggregateArgs>,
    ): Prisma.PrismaPromise<GetProjectAggregateType<T>>;

    /**
     * Group by Project.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {projectGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     *
     **/
    groupBy<
      T extends projectGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<"skip", Keys<T>>,
        Extends<"take", Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: projectGroupByArgs["orderBy"] }
        : { orderBy?: projectGroupByArgs["orderBy"] },
      OrderFields extends ExcludeUnderscoreKeys<
        Keys<MaybeTupleToUnion<T["orderBy"]>>
      >,
      ByFields extends MaybeTupleToUnion<T["by"]>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T["having"]>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T["by"] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
        ? `Error: "by" must not be empty.`
        : HavingValid extends False
          ? {
              [P in HavingFields]: P extends ByFields
                ? never
                : P extends string
                  ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
                  : [
                      Error,
                      "Field ",
                      P,
                      ` in "having" needs to be provided in "by"`,
                    ];
            }[HavingFields]
          : "take" extends Keys<T>
            ? "orderBy" extends Keys<T>
              ? ByValid extends True
                ? {}
                : {
                    [P in OrderFields]: P extends ByFields
                      ? never
                      : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
                  }[OrderFields]
              : 'Error: If you provide "take", you also need to provide "orderBy"'
            : "skip" extends Keys<T>
              ? "orderBy" extends Keys<T>
                ? ByValid extends True
                  ? {}
                  : {
                      [P in OrderFields]: P extends ByFields
                        ? never
                        : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
                    }[OrderFields]
                : 'Error: If you provide "skip", you also need to provide "orderBy"'
              : ByValid extends True
                ? {}
                : {
                    [P in OrderFields]: P extends ByFields
                      ? never
                      : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
                  }[OrderFields],
    >(
      args: SubsetIntersection<T, projectGroupByArgs, OrderByArg> & InputErrors,
    ): {} extends InputErrors
      ? GetProjectGroupByPayload<T>
      : Prisma.PrismaPromise<InputErrors>;
    /**
     * Fields of the project model
     */
    readonly fields: projectFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for project.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__projectClient<
    T,
    Null = never,
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    GlobalOmitOptions = {},
  > extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    user<T extends userDefaultArgs<ExtArgs> = {}>(
      args?: Subset<T, userDefaultArgs<ExtArgs>>,
    ): Prisma__userClient<
      | $Result.GetResult<
          Prisma.$userPayload<ExtArgs>,
          T,
          "findUniqueOrThrow",
          GlobalOmitOptions
        >
      | Null,
      Null,
      ExtArgs,
      GlobalOmitOptions
    >;
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(
      onfulfilled?:
        | ((value: T) => TResult1 | PromiseLike<TResult1>)
        | undefined
        | null,
      onrejected?:
        | ((reason: any) => TResult2 | PromiseLike<TResult2>)
        | undefined
        | null,
    ): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(
      onrejected?:
        | ((reason: any) => TResult | PromiseLike<TResult>)
        | undefined
        | null,
    ): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }

  /**
   * Fields of the project model
   */
  interface projectFieldRefs {
    readonly pid: FieldRef<"project", "Int">;
    readonly uid: FieldRef<"project", "Int">;
    readonly title: FieldRef<"project", "String">;
    readonly image: FieldRef<"project", "String">;
    readonly desc: FieldRef<"project", "String">;
    readonly tags: FieldRef<"project", "String[]">;
    readonly github: FieldRef<"project", "String">;
    readonly Link: FieldRef<"project", "String">;
  }

  // Custom InputTypes
  /**
   * project findUnique
   */
  export type projectFindUniqueArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the project
     */
    select?: projectSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the project
     */
    omit?: projectOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: projectInclude<ExtArgs> | null;
    /**
     * Filter, which project to fetch.
     */
    where: projectWhereUniqueInput;
  };

  /**
   * project findUniqueOrThrow
   */
  export type projectFindUniqueOrThrowArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the project
     */
    select?: projectSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the project
     */
    omit?: projectOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: projectInclude<ExtArgs> | null;
    /**
     * Filter, which project to fetch.
     */
    where: projectWhereUniqueInput;
  };

  /**
   * project findFirst
   */
  export type projectFindFirstArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the project
     */
    select?: projectSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the project
     */
    omit?: projectOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: projectInclude<ExtArgs> | null;
    /**
     * Filter, which project to fetch.
     */
    where?: projectWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of projects to fetch.
     */
    orderBy?:
      | projectOrderByWithRelationInput
      | projectOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for projects.
     */
    cursor?: projectWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` projects from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` projects.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of projects.
     */
    distinct?: ProjectScalarFieldEnum | ProjectScalarFieldEnum[];
  };

  /**
   * project findFirstOrThrow
   */
  export type projectFindFirstOrThrowArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the project
     */
    select?: projectSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the project
     */
    omit?: projectOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: projectInclude<ExtArgs> | null;
    /**
     * Filter, which project to fetch.
     */
    where?: projectWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of projects to fetch.
     */
    orderBy?:
      | projectOrderByWithRelationInput
      | projectOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for projects.
     */
    cursor?: projectWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` projects from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` projects.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of projects.
     */
    distinct?: ProjectScalarFieldEnum | ProjectScalarFieldEnum[];
  };

  /**
   * project findMany
   */
  export type projectFindManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the project
     */
    select?: projectSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the project
     */
    omit?: projectOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: projectInclude<ExtArgs> | null;
    /**
     * Filter, which projects to fetch.
     */
    where?: projectWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of projects to fetch.
     */
    orderBy?:
      | projectOrderByWithRelationInput
      | projectOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing projects.
     */
    cursor?: projectWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` projects from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` projects.
     */
    skip?: number;
    distinct?: ProjectScalarFieldEnum | ProjectScalarFieldEnum[];
  };

  /**
   * project create
   */
  export type projectCreateArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the project
     */
    select?: projectSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the project
     */
    omit?: projectOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: projectInclude<ExtArgs> | null;
    /**
     * The data needed to create a project.
     */
    data: XOR<projectCreateInput, projectUncheckedCreateInput>;
  };

  /**
   * project createMany
   */
  export type projectCreateManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * The data used to create many projects.
     */
    data: projectCreateManyInput | projectCreateManyInput[];
    skipDuplicates?: boolean;
  };

  /**
   * project createManyAndReturn
   */
  export type projectCreateManyAndReturnArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the project
     */
    select?: projectSelectCreateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the project
     */
    omit?: projectOmit<ExtArgs> | null;
    /**
     * The data used to create many projects.
     */
    data: projectCreateManyInput | projectCreateManyInput[];
    skipDuplicates?: boolean;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: projectIncludeCreateManyAndReturn<ExtArgs> | null;
  };

  /**
   * project update
   */
  export type projectUpdateArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the project
     */
    select?: projectSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the project
     */
    omit?: projectOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: projectInclude<ExtArgs> | null;
    /**
     * The data needed to update a project.
     */
    data: XOR<projectUpdateInput, projectUncheckedUpdateInput>;
    /**
     * Choose, which project to update.
     */
    where: projectWhereUniqueInput;
  };

  /**
   * project updateMany
   */
  export type projectUpdateManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * The data used to update projects.
     */
    data: XOR<projectUpdateManyMutationInput, projectUncheckedUpdateManyInput>;
    /**
     * Filter which projects to update
     */
    where?: projectWhereInput;
    /**
     * Limit how many projects to update.
     */
    limit?: number;
  };

  /**
   * project updateManyAndReturn
   */
  export type projectUpdateManyAndReturnArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the project
     */
    select?: projectSelectUpdateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the project
     */
    omit?: projectOmit<ExtArgs> | null;
    /**
     * The data used to update projects.
     */
    data: XOR<projectUpdateManyMutationInput, projectUncheckedUpdateManyInput>;
    /**
     * Filter which projects to update
     */
    where?: projectWhereInput;
    /**
     * Limit how many projects to update.
     */
    limit?: number;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: projectIncludeUpdateManyAndReturn<ExtArgs> | null;
  };

  /**
   * project upsert
   */
  export type projectUpsertArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the project
     */
    select?: projectSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the project
     */
    omit?: projectOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: projectInclude<ExtArgs> | null;
    /**
     * The filter to search for the project to update in case it exists.
     */
    where: projectWhereUniqueInput;
    /**
     * In case the project found by the `where` argument doesn't exist, create a new project with this data.
     */
    create: XOR<projectCreateInput, projectUncheckedCreateInput>;
    /**
     * In case the project was found with the provided `where` argument, update it with this data.
     */
    update: XOR<projectUpdateInput, projectUncheckedUpdateInput>;
  };

  /**
   * project delete
   */
  export type projectDeleteArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the project
     */
    select?: projectSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the project
     */
    omit?: projectOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: projectInclude<ExtArgs> | null;
    /**
     * Filter which project to delete.
     */
    where: projectWhereUniqueInput;
  };

  /**
   * project deleteMany
   */
  export type projectDeleteManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Filter which projects to delete
     */
    where?: projectWhereInput;
    /**
     * Limit how many projects to delete.
     */
    limit?: number;
  };

  /**
   * project without action
   */
  export type projectDefaultArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the project
     */
    select?: projectSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the project
     */
    omit?: projectOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: projectInclude<ExtArgs> | null;
  };

  /**
   * Model experience
   */

  export type AggregateExperience = {
    _count: ExperienceCountAggregateOutputType | null;
    _avg: ExperienceAvgAggregateOutputType | null;
    _sum: ExperienceSumAggregateOutputType | null;
    _min: ExperienceMinAggregateOutputType | null;
    _max: ExperienceMaxAggregateOutputType | null;
  };

  export type ExperienceAvgAggregateOutputType = {
    exid: number | null;
    uid: number | null;
  };

  export type ExperienceSumAggregateOutputType = {
    exid: number | null;
    uid: number | null;
  };

  export type ExperienceMinAggregateOutputType = {
    exid: number | null;
    title: string | null;
    corp: string | null;
    startdate: string | null;
    enddate: string | null;
    desc: string | null;
    uid: number | null;
  };

  export type ExperienceMaxAggregateOutputType = {
    exid: number | null;
    title: string | null;
    corp: string | null;
    startdate: string | null;
    enddate: string | null;
    desc: string | null;
    uid: number | null;
  };

  export type ExperienceCountAggregateOutputType = {
    exid: number;
    title: number;
    corp: number;
    startdate: number;
    enddate: number;
    desc: number;
    uid: number;
    _all: number;
  };

  export type ExperienceAvgAggregateInputType = {
    exid?: true;
    uid?: true;
  };

  export type ExperienceSumAggregateInputType = {
    exid?: true;
    uid?: true;
  };

  export type ExperienceMinAggregateInputType = {
    exid?: true;
    title?: true;
    corp?: true;
    startdate?: true;
    enddate?: true;
    desc?: true;
    uid?: true;
  };

  export type ExperienceMaxAggregateInputType = {
    exid?: true;
    title?: true;
    corp?: true;
    startdate?: true;
    enddate?: true;
    desc?: true;
    uid?: true;
  };

  export type ExperienceCountAggregateInputType = {
    exid?: true;
    title?: true;
    corp?: true;
    startdate?: true;
    enddate?: true;
    desc?: true;
    uid?: true;
    _all?: true;
  };

  export type ExperienceAggregateArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Filter which experience to aggregate.
     */
    where?: experienceWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of experiences to fetch.
     */
    orderBy?:
      | experienceOrderByWithRelationInput
      | experienceOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: experienceWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` experiences from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` experiences.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned experiences
     **/
    _count?: true | ExperienceCountAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to average
     **/
    _avg?: ExperienceAvgAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to sum
     **/
    _sum?: ExperienceSumAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
     **/
    _min?: ExperienceMinAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
     **/
    _max?: ExperienceMaxAggregateInputType;
  };

  export type GetExperienceAggregateType<T extends ExperienceAggregateArgs> = {
    [P in keyof T & keyof AggregateExperience]: P extends "_count" | "count"
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateExperience[P]>
      : GetScalarType<T[P], AggregateExperience[P]>;
  };

  export type experienceGroupByArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    where?: experienceWhereInput;
    orderBy?:
      | experienceOrderByWithAggregationInput
      | experienceOrderByWithAggregationInput[];
    by: ExperienceScalarFieldEnum[] | ExperienceScalarFieldEnum;
    having?: experienceScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: ExperienceCountAggregateInputType | true;
    _avg?: ExperienceAvgAggregateInputType;
    _sum?: ExperienceSumAggregateInputType;
    _min?: ExperienceMinAggregateInputType;
    _max?: ExperienceMaxAggregateInputType;
  };

  export type ExperienceGroupByOutputType = {
    exid: number;
    title: string;
    corp: string;
    startdate: string;
    enddate: string | null;
    desc: string;
    uid: number;
    _count: ExperienceCountAggregateOutputType | null;
    _avg: ExperienceAvgAggregateOutputType | null;
    _sum: ExperienceSumAggregateOutputType | null;
    _min: ExperienceMinAggregateOutputType | null;
    _max: ExperienceMaxAggregateOutputType | null;
  };

  type GetExperienceGroupByPayload<T extends experienceGroupByArgs> =
    Prisma.PrismaPromise<
      Array<
        PickEnumerable<ExperienceGroupByOutputType, T["by"]> & {
          [P in keyof T & keyof ExperienceGroupByOutputType]: P extends "_count"
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ExperienceGroupByOutputType[P]>
            : GetScalarType<T[P], ExperienceGroupByOutputType[P]>;
        }
      >
    >;

  export type experienceSelect<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = $Extensions.GetSelect<
    {
      exid?: boolean;
      title?: boolean;
      corp?: boolean;
      startdate?: boolean;
      enddate?: boolean;
      desc?: boolean;
      uid?: boolean;
      user?: boolean | userDefaultArgs<ExtArgs>;
    },
    ExtArgs["result"]["experience"]
  >;

  export type experienceSelectCreateManyAndReturn<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = $Extensions.GetSelect<
    {
      exid?: boolean;
      title?: boolean;
      corp?: boolean;
      startdate?: boolean;
      enddate?: boolean;
      desc?: boolean;
      uid?: boolean;
      user?: boolean | userDefaultArgs<ExtArgs>;
    },
    ExtArgs["result"]["experience"]
  >;

  export type experienceSelectUpdateManyAndReturn<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = $Extensions.GetSelect<
    {
      exid?: boolean;
      title?: boolean;
      corp?: boolean;
      startdate?: boolean;
      enddate?: boolean;
      desc?: boolean;
      uid?: boolean;
      user?: boolean | userDefaultArgs<ExtArgs>;
    },
    ExtArgs["result"]["experience"]
  >;

  export type experienceSelectScalar = {
    exid?: boolean;
    title?: boolean;
    corp?: boolean;
    startdate?: boolean;
    enddate?: boolean;
    desc?: boolean;
    uid?: boolean;
  };

  export type experienceOmit<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = $Extensions.GetOmit<
    "exid" | "title" | "corp" | "startdate" | "enddate" | "desc" | "uid",
    ExtArgs["result"]["experience"]
  >;
  export type experienceInclude<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    user?: boolean | userDefaultArgs<ExtArgs>;
  };
  export type experienceIncludeCreateManyAndReturn<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    user?: boolean | userDefaultArgs<ExtArgs>;
  };
  export type experienceIncludeUpdateManyAndReturn<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    user?: boolean | userDefaultArgs<ExtArgs>;
  };

  export type $experiencePayload<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    name: "experience";
    objects: {
      user: Prisma.$userPayload<ExtArgs>;
    };
    scalars: $Extensions.GetPayloadResult<
      {
        exid: number;
        title: string;
        corp: string;
        startdate: string;
        enddate: string | null;
        desc: string;
        uid: number;
      },
      ExtArgs["result"]["experience"]
    >;
    composites: {};
  };

  type experienceGetPayload<
    S extends boolean | null | undefined | experienceDefaultArgs,
  > = $Result.GetResult<Prisma.$experiencePayload, S>;

  type experienceCountArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = Omit<
    experienceFindManyArgs,
    "select" | "include" | "distinct" | "omit"
  > & {
    select?: ExperienceCountAggregateInputType | true;
  };

  export interface experienceDelegate<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    GlobalOmitOptions = {},
  > {
    [K: symbol]: {
      types: Prisma.TypeMap<ExtArgs>["model"]["experience"];
      meta: { name: "experience" };
    };
    /**
     * Find zero or one Experience that matches the filter.
     * @param {experienceFindUniqueArgs} args - Arguments to find a Experience
     * @example
     * // Get one Experience
     * const experience = await prisma.experience.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends experienceFindUniqueArgs>(
      args: SelectSubset<T, experienceFindUniqueArgs<ExtArgs>>,
    ): Prisma__experienceClient<
      $Result.GetResult<
        Prisma.$experiencePayload<ExtArgs>,
        T,
        "findUnique",
        GlobalOmitOptions
      > | null,
      null,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Find one Experience that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {experienceFindUniqueOrThrowArgs} args - Arguments to find a Experience
     * @example
     * // Get one Experience
     * const experience = await prisma.experience.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends experienceFindUniqueOrThrowArgs>(
      args: SelectSubset<T, experienceFindUniqueOrThrowArgs<ExtArgs>>,
    ): Prisma__experienceClient<
      $Result.GetResult<
        Prisma.$experiencePayload<ExtArgs>,
        T,
        "findUniqueOrThrow",
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Find the first Experience that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {experienceFindFirstArgs} args - Arguments to find a Experience
     * @example
     * // Get one Experience
     * const experience = await prisma.experience.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends experienceFindFirstArgs>(
      args?: SelectSubset<T, experienceFindFirstArgs<ExtArgs>>,
    ): Prisma__experienceClient<
      $Result.GetResult<
        Prisma.$experiencePayload<ExtArgs>,
        T,
        "findFirst",
        GlobalOmitOptions
      > | null,
      null,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Find the first Experience that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {experienceFindFirstOrThrowArgs} args - Arguments to find a Experience
     * @example
     * // Get one Experience
     * const experience = await prisma.experience.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends experienceFindFirstOrThrowArgs>(
      args?: SelectSubset<T, experienceFindFirstOrThrowArgs<ExtArgs>>,
    ): Prisma__experienceClient<
      $Result.GetResult<
        Prisma.$experiencePayload<ExtArgs>,
        T,
        "findFirstOrThrow",
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Find zero or more Experiences that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {experienceFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Experiences
     * const experiences = await prisma.experience.findMany()
     *
     * // Get first 10 Experiences
     * const experiences = await prisma.experience.findMany({ take: 10 })
     *
     * // Only select the `exid`
     * const experienceWithExidOnly = await prisma.experience.findMany({ select: { exid: true } })
     *
     */
    findMany<T extends experienceFindManyArgs>(
      args?: SelectSubset<T, experienceFindManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<
      $Result.GetResult<
        Prisma.$experiencePayload<ExtArgs>,
        T,
        "findMany",
        GlobalOmitOptions
      >
    >;

    /**
     * Create a Experience.
     * @param {experienceCreateArgs} args - Arguments to create a Experience.
     * @example
     * // Create one Experience
     * const Experience = await prisma.experience.create({
     *   data: {
     *     // ... data to create a Experience
     *   }
     * })
     *
     */
    create<T extends experienceCreateArgs>(
      args: SelectSubset<T, experienceCreateArgs<ExtArgs>>,
    ): Prisma__experienceClient<
      $Result.GetResult<
        Prisma.$experiencePayload<ExtArgs>,
        T,
        "create",
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Create many Experiences.
     * @param {experienceCreateManyArgs} args - Arguments to create many Experiences.
     * @example
     * // Create many Experiences
     * const experience = await prisma.experience.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     */
    createMany<T extends experienceCreateManyArgs>(
      args?: SelectSubset<T, experienceCreateManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Create many Experiences and returns the data saved in the database.
     * @param {experienceCreateManyAndReturnArgs} args - Arguments to create many Experiences.
     * @example
     * // Create many Experiences
     * const experience = await prisma.experience.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Create many Experiences and only return the `exid`
     * const experienceWithExidOnly = await prisma.experience.createManyAndReturn({
     *   select: { exid: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     *
     */
    createManyAndReturn<T extends experienceCreateManyAndReturnArgs>(
      args?: SelectSubset<T, experienceCreateManyAndReturnArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<
      $Result.GetResult<
        Prisma.$experiencePayload<ExtArgs>,
        T,
        "createManyAndReturn",
        GlobalOmitOptions
      >
    >;

    /**
     * Delete a Experience.
     * @param {experienceDeleteArgs} args - Arguments to delete one Experience.
     * @example
     * // Delete one Experience
     * const Experience = await prisma.experience.delete({
     *   where: {
     *     // ... filter to delete one Experience
     *   }
     * })
     *
     */
    delete<T extends experienceDeleteArgs>(
      args: SelectSubset<T, experienceDeleteArgs<ExtArgs>>,
    ): Prisma__experienceClient<
      $Result.GetResult<
        Prisma.$experiencePayload<ExtArgs>,
        T,
        "delete",
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Update one Experience.
     * @param {experienceUpdateArgs} args - Arguments to update one Experience.
     * @example
     * // Update one Experience
     * const experience = await prisma.experience.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    update<T extends experienceUpdateArgs>(
      args: SelectSubset<T, experienceUpdateArgs<ExtArgs>>,
    ): Prisma__experienceClient<
      $Result.GetResult<
        Prisma.$experiencePayload<ExtArgs>,
        T,
        "update",
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Delete zero or more Experiences.
     * @param {experienceDeleteManyArgs} args - Arguments to filter Experiences to delete.
     * @example
     * // Delete a few Experiences
     * const { count } = await prisma.experience.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     *
     */
    deleteMany<T extends experienceDeleteManyArgs>(
      args?: SelectSubset<T, experienceDeleteManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Update zero or more Experiences.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {experienceUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Experiences
     * const experience = await prisma.experience.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    updateMany<T extends experienceUpdateManyArgs>(
      args: SelectSubset<T, experienceUpdateManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Update zero or more Experiences and returns the data updated in the database.
     * @param {experienceUpdateManyAndReturnArgs} args - Arguments to update many Experiences.
     * @example
     * // Update many Experiences
     * const experience = await prisma.experience.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Update zero or more Experiences and only return the `exid`
     * const experienceWithExidOnly = await prisma.experience.updateManyAndReturn({
     *   select: { exid: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     *
     */
    updateManyAndReturn<T extends experienceUpdateManyAndReturnArgs>(
      args: SelectSubset<T, experienceUpdateManyAndReturnArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<
      $Result.GetResult<
        Prisma.$experiencePayload<ExtArgs>,
        T,
        "updateManyAndReturn",
        GlobalOmitOptions
      >
    >;

    /**
     * Create or update one Experience.
     * @param {experienceUpsertArgs} args - Arguments to update or create a Experience.
     * @example
     * // Update or create a Experience
     * const experience = await prisma.experience.upsert({
     *   create: {
     *     // ... data to create a Experience
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Experience we want to update
     *   }
     * })
     */
    upsert<T extends experienceUpsertArgs>(
      args: SelectSubset<T, experienceUpsertArgs<ExtArgs>>,
    ): Prisma__experienceClient<
      $Result.GetResult<
        Prisma.$experiencePayload<ExtArgs>,
        T,
        "upsert",
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Count the number of Experiences.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {experienceCountArgs} args - Arguments to filter Experiences to count.
     * @example
     * // Count the number of Experiences
     * const count = await prisma.experience.count({
     *   where: {
     *     // ... the filter for the Experiences we want to count
     *   }
     * })
     **/
    count<T extends experienceCountArgs>(
      args?: Subset<T, experienceCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<"select", any>
        ? T["select"] extends true
          ? number
          : GetScalarType<T["select"], ExperienceCountAggregateOutputType>
        : number
    >;

    /**
     * Allows you to perform aggregations operations on a Experience.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ExperienceAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
     **/
    aggregate<T extends ExperienceAggregateArgs>(
      args: Subset<T, ExperienceAggregateArgs>,
    ): Prisma.PrismaPromise<GetExperienceAggregateType<T>>;

    /**
     * Group by Experience.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {experienceGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     *
     **/
    groupBy<
      T extends experienceGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<"skip", Keys<T>>,
        Extends<"take", Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: experienceGroupByArgs["orderBy"] }
        : { orderBy?: experienceGroupByArgs["orderBy"] },
      OrderFields extends ExcludeUnderscoreKeys<
        Keys<MaybeTupleToUnion<T["orderBy"]>>
      >,
      ByFields extends MaybeTupleToUnion<T["by"]>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T["having"]>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T["by"] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
        ? `Error: "by" must not be empty.`
        : HavingValid extends False
          ? {
              [P in HavingFields]: P extends ByFields
                ? never
                : P extends string
                  ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
                  : [
                      Error,
                      "Field ",
                      P,
                      ` in "having" needs to be provided in "by"`,
                    ];
            }[HavingFields]
          : "take" extends Keys<T>
            ? "orderBy" extends Keys<T>
              ? ByValid extends True
                ? {}
                : {
                    [P in OrderFields]: P extends ByFields
                      ? never
                      : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
                  }[OrderFields]
              : 'Error: If you provide "take", you also need to provide "orderBy"'
            : "skip" extends Keys<T>
              ? "orderBy" extends Keys<T>
                ? ByValid extends True
                  ? {}
                  : {
                      [P in OrderFields]: P extends ByFields
                        ? never
                        : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
                    }[OrderFields]
                : 'Error: If you provide "skip", you also need to provide "orderBy"'
              : ByValid extends True
                ? {}
                : {
                    [P in OrderFields]: P extends ByFields
                      ? never
                      : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
                  }[OrderFields],
    >(
      args: SubsetIntersection<T, experienceGroupByArgs, OrderByArg> &
        InputErrors,
    ): {} extends InputErrors
      ? GetExperienceGroupByPayload<T>
      : Prisma.PrismaPromise<InputErrors>;
    /**
     * Fields of the experience model
     */
    readonly fields: experienceFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for experience.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__experienceClient<
    T,
    Null = never,
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    GlobalOmitOptions = {},
  > extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    user<T extends userDefaultArgs<ExtArgs> = {}>(
      args?: Subset<T, userDefaultArgs<ExtArgs>>,
    ): Prisma__userClient<
      | $Result.GetResult<
          Prisma.$userPayload<ExtArgs>,
          T,
          "findUniqueOrThrow",
          GlobalOmitOptions
        >
      | Null,
      Null,
      ExtArgs,
      GlobalOmitOptions
    >;
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(
      onfulfilled?:
        | ((value: T) => TResult1 | PromiseLike<TResult1>)
        | undefined
        | null,
      onrejected?:
        | ((reason: any) => TResult2 | PromiseLike<TResult2>)
        | undefined
        | null,
    ): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(
      onrejected?:
        | ((reason: any) => TResult | PromiseLike<TResult>)
        | undefined
        | null,
    ): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }

  /**
   * Fields of the experience model
   */
  interface experienceFieldRefs {
    readonly exid: FieldRef<"experience", "Int">;
    readonly title: FieldRef<"experience", "String">;
    readonly corp: FieldRef<"experience", "String">;
    readonly startdate: FieldRef<"experience", "String">;
    readonly enddate: FieldRef<"experience", "String">;
    readonly desc: FieldRef<"experience", "String">;
    readonly uid: FieldRef<"experience", "Int">;
  }

  // Custom InputTypes
  /**
   * experience findUnique
   */
  export type experienceFindUniqueArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the experience
     */
    select?: experienceSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the experience
     */
    omit?: experienceOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: experienceInclude<ExtArgs> | null;
    /**
     * Filter, which experience to fetch.
     */
    where: experienceWhereUniqueInput;
  };

  /**
   * experience findUniqueOrThrow
   */
  export type experienceFindUniqueOrThrowArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the experience
     */
    select?: experienceSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the experience
     */
    omit?: experienceOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: experienceInclude<ExtArgs> | null;
    /**
     * Filter, which experience to fetch.
     */
    where: experienceWhereUniqueInput;
  };

  /**
   * experience findFirst
   */
  export type experienceFindFirstArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the experience
     */
    select?: experienceSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the experience
     */
    omit?: experienceOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: experienceInclude<ExtArgs> | null;
    /**
     * Filter, which experience to fetch.
     */
    where?: experienceWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of experiences to fetch.
     */
    orderBy?:
      | experienceOrderByWithRelationInput
      | experienceOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for experiences.
     */
    cursor?: experienceWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` experiences from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` experiences.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of experiences.
     */
    distinct?: ExperienceScalarFieldEnum | ExperienceScalarFieldEnum[];
  };

  /**
   * experience findFirstOrThrow
   */
  export type experienceFindFirstOrThrowArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the experience
     */
    select?: experienceSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the experience
     */
    omit?: experienceOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: experienceInclude<ExtArgs> | null;
    /**
     * Filter, which experience to fetch.
     */
    where?: experienceWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of experiences to fetch.
     */
    orderBy?:
      | experienceOrderByWithRelationInput
      | experienceOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for experiences.
     */
    cursor?: experienceWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` experiences from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` experiences.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of experiences.
     */
    distinct?: ExperienceScalarFieldEnum | ExperienceScalarFieldEnum[];
  };

  /**
   * experience findMany
   */
  export type experienceFindManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the experience
     */
    select?: experienceSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the experience
     */
    omit?: experienceOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: experienceInclude<ExtArgs> | null;
    /**
     * Filter, which experiences to fetch.
     */
    where?: experienceWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of experiences to fetch.
     */
    orderBy?:
      | experienceOrderByWithRelationInput
      | experienceOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing experiences.
     */
    cursor?: experienceWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` experiences from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` experiences.
     */
    skip?: number;
    distinct?: ExperienceScalarFieldEnum | ExperienceScalarFieldEnum[];
  };

  /**
   * experience create
   */
  export type experienceCreateArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the experience
     */
    select?: experienceSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the experience
     */
    omit?: experienceOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: experienceInclude<ExtArgs> | null;
    /**
     * The data needed to create a experience.
     */
    data: XOR<experienceCreateInput, experienceUncheckedCreateInput>;
  };

  /**
   * experience createMany
   */
  export type experienceCreateManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * The data used to create many experiences.
     */
    data: experienceCreateManyInput | experienceCreateManyInput[];
    skipDuplicates?: boolean;
  };

  /**
   * experience createManyAndReturn
   */
  export type experienceCreateManyAndReturnArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the experience
     */
    select?: experienceSelectCreateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the experience
     */
    omit?: experienceOmit<ExtArgs> | null;
    /**
     * The data used to create many experiences.
     */
    data: experienceCreateManyInput | experienceCreateManyInput[];
    skipDuplicates?: boolean;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: experienceIncludeCreateManyAndReturn<ExtArgs> | null;
  };

  /**
   * experience update
   */
  export type experienceUpdateArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the experience
     */
    select?: experienceSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the experience
     */
    omit?: experienceOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: experienceInclude<ExtArgs> | null;
    /**
     * The data needed to update a experience.
     */
    data: XOR<experienceUpdateInput, experienceUncheckedUpdateInput>;
    /**
     * Choose, which experience to update.
     */
    where: experienceWhereUniqueInput;
  };

  /**
   * experience updateMany
   */
  export type experienceUpdateManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * The data used to update experiences.
     */
    data: XOR<
      experienceUpdateManyMutationInput,
      experienceUncheckedUpdateManyInput
    >;
    /**
     * Filter which experiences to update
     */
    where?: experienceWhereInput;
    /**
     * Limit how many experiences to update.
     */
    limit?: number;
  };

  /**
   * experience updateManyAndReturn
   */
  export type experienceUpdateManyAndReturnArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the experience
     */
    select?: experienceSelectUpdateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the experience
     */
    omit?: experienceOmit<ExtArgs> | null;
    /**
     * The data used to update experiences.
     */
    data: XOR<
      experienceUpdateManyMutationInput,
      experienceUncheckedUpdateManyInput
    >;
    /**
     * Filter which experiences to update
     */
    where?: experienceWhereInput;
    /**
     * Limit how many experiences to update.
     */
    limit?: number;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: experienceIncludeUpdateManyAndReturn<ExtArgs> | null;
  };

  /**
   * experience upsert
   */
  export type experienceUpsertArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the experience
     */
    select?: experienceSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the experience
     */
    omit?: experienceOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: experienceInclude<ExtArgs> | null;
    /**
     * The filter to search for the experience to update in case it exists.
     */
    where: experienceWhereUniqueInput;
    /**
     * In case the experience found by the `where` argument doesn't exist, create a new experience with this data.
     */
    create: XOR<experienceCreateInput, experienceUncheckedCreateInput>;
    /**
     * In case the experience was found with the provided `where` argument, update it with this data.
     */
    update: XOR<experienceUpdateInput, experienceUncheckedUpdateInput>;
  };

  /**
   * experience delete
   */
  export type experienceDeleteArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the experience
     */
    select?: experienceSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the experience
     */
    omit?: experienceOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: experienceInclude<ExtArgs> | null;
    /**
     * Filter which experience to delete.
     */
    where: experienceWhereUniqueInput;
  };

  /**
   * experience deleteMany
   */
  export type experienceDeleteManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Filter which experiences to delete
     */
    where?: experienceWhereInput;
    /**
     * Limit how many experiences to delete.
     */
    limit?: number;
  };

  /**
   * experience without action
   */
  export type experienceDefaultArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the experience
     */
    select?: experienceSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the experience
     */
    omit?: experienceOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: experienceInclude<ExtArgs> | null;
  };

  /**
   * Model education
   */

  export type AggregateEducation = {
    _count: EducationCountAggregateOutputType | null;
    _avg: EducationAvgAggregateOutputType | null;
    _sum: EducationSumAggregateOutputType | null;
    _min: EducationMinAggregateOutputType | null;
    _max: EducationMaxAggregateOutputType | null;
  };

  export type EducationAvgAggregateOutputType = {
    edid: number | null;
    uid: number | null;
  };

  export type EducationSumAggregateOutputType = {
    edid: number | null;
    uid: number | null;
  };

  export type EducationMinAggregateOutputType = {
    edid: number | null;
    inst: string | null;
    degree: string | null;
    startdate: string | null;
    enddate: string | null;
    uid: number | null;
  };

  export type EducationMaxAggregateOutputType = {
    edid: number | null;
    inst: string | null;
    degree: string | null;
    startdate: string | null;
    enddate: string | null;
    uid: number | null;
  };

  export type EducationCountAggregateOutputType = {
    edid: number;
    inst: number;
    degree: number;
    startdate: number;
    enddate: number;
    uid: number;
    _all: number;
  };

  export type EducationAvgAggregateInputType = {
    edid?: true;
    uid?: true;
  };

  export type EducationSumAggregateInputType = {
    edid?: true;
    uid?: true;
  };

  export type EducationMinAggregateInputType = {
    edid?: true;
    inst?: true;
    degree?: true;
    startdate?: true;
    enddate?: true;
    uid?: true;
  };

  export type EducationMaxAggregateInputType = {
    edid?: true;
    inst?: true;
    degree?: true;
    startdate?: true;
    enddate?: true;
    uid?: true;
  };

  export type EducationCountAggregateInputType = {
    edid?: true;
    inst?: true;
    degree?: true;
    startdate?: true;
    enddate?: true;
    uid?: true;
    _all?: true;
  };

  export type EducationAggregateArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Filter which education to aggregate.
     */
    where?: educationWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of educations to fetch.
     */
    orderBy?:
      | educationOrderByWithRelationInput
      | educationOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: educationWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` educations from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` educations.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned educations
     **/
    _count?: true | EducationCountAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to average
     **/
    _avg?: EducationAvgAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to sum
     **/
    _sum?: EducationSumAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
     **/
    _min?: EducationMinAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
     **/
    _max?: EducationMaxAggregateInputType;
  };

  export type GetEducationAggregateType<T extends EducationAggregateArgs> = {
    [P in keyof T & keyof AggregateEducation]: P extends "_count" | "count"
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateEducation[P]>
      : GetScalarType<T[P], AggregateEducation[P]>;
  };

  export type educationGroupByArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    where?: educationWhereInput;
    orderBy?:
      | educationOrderByWithAggregationInput
      | educationOrderByWithAggregationInput[];
    by: EducationScalarFieldEnum[] | EducationScalarFieldEnum;
    having?: educationScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: EducationCountAggregateInputType | true;
    _avg?: EducationAvgAggregateInputType;
    _sum?: EducationSumAggregateInputType;
    _min?: EducationMinAggregateInputType;
    _max?: EducationMaxAggregateInputType;
  };

  export type EducationGroupByOutputType = {
    edid: number;
    inst: string;
    degree: string;
    startdate: string;
    enddate: string | null;
    uid: number;
    _count: EducationCountAggregateOutputType | null;
    _avg: EducationAvgAggregateOutputType | null;
    _sum: EducationSumAggregateOutputType | null;
    _min: EducationMinAggregateOutputType | null;
    _max: EducationMaxAggregateOutputType | null;
  };

  type GetEducationGroupByPayload<T extends educationGroupByArgs> =
    Prisma.PrismaPromise<
      Array<
        PickEnumerable<EducationGroupByOutputType, T["by"]> & {
          [P in keyof T & keyof EducationGroupByOutputType]: P extends "_count"
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], EducationGroupByOutputType[P]>
            : GetScalarType<T[P], EducationGroupByOutputType[P]>;
        }
      >
    >;

  export type educationSelect<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = $Extensions.GetSelect<
    {
      edid?: boolean;
      inst?: boolean;
      degree?: boolean;
      startdate?: boolean;
      enddate?: boolean;
      uid?: boolean;
      user?: boolean | userDefaultArgs<ExtArgs>;
    },
    ExtArgs["result"]["education"]
  >;

  export type educationSelectCreateManyAndReturn<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = $Extensions.GetSelect<
    {
      edid?: boolean;
      inst?: boolean;
      degree?: boolean;
      startdate?: boolean;
      enddate?: boolean;
      uid?: boolean;
      user?: boolean | userDefaultArgs<ExtArgs>;
    },
    ExtArgs["result"]["education"]
  >;

  export type educationSelectUpdateManyAndReturn<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = $Extensions.GetSelect<
    {
      edid?: boolean;
      inst?: boolean;
      degree?: boolean;
      startdate?: boolean;
      enddate?: boolean;
      uid?: boolean;
      user?: boolean | userDefaultArgs<ExtArgs>;
    },
    ExtArgs["result"]["education"]
  >;

  export type educationSelectScalar = {
    edid?: boolean;
    inst?: boolean;
    degree?: boolean;
    startdate?: boolean;
    enddate?: boolean;
    uid?: boolean;
  };

  export type educationOmit<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = $Extensions.GetOmit<
    "edid" | "inst" | "degree" | "startdate" | "enddate" | "uid",
    ExtArgs["result"]["education"]
  >;
  export type educationInclude<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    user?: boolean | userDefaultArgs<ExtArgs>;
  };
  export type educationIncludeCreateManyAndReturn<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    user?: boolean | userDefaultArgs<ExtArgs>;
  };
  export type educationIncludeUpdateManyAndReturn<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    user?: boolean | userDefaultArgs<ExtArgs>;
  };

  export type $educationPayload<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    name: "education";
    objects: {
      user: Prisma.$userPayload<ExtArgs>;
    };
    scalars: $Extensions.GetPayloadResult<
      {
        edid: number;
        inst: string;
        degree: string;
        startdate: string;
        enddate: string | null;
        uid: number;
      },
      ExtArgs["result"]["education"]
    >;
    composites: {};
  };

  type educationGetPayload<
    S extends boolean | null | undefined | educationDefaultArgs,
  > = $Result.GetResult<Prisma.$educationPayload, S>;

  type educationCountArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = Omit<
    educationFindManyArgs,
    "select" | "include" | "distinct" | "omit"
  > & {
    select?: EducationCountAggregateInputType | true;
  };

  export interface educationDelegate<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    GlobalOmitOptions = {},
  > {
    [K: symbol]: {
      types: Prisma.TypeMap<ExtArgs>["model"]["education"];
      meta: { name: "education" };
    };
    /**
     * Find zero or one Education that matches the filter.
     * @param {educationFindUniqueArgs} args - Arguments to find a Education
     * @example
     * // Get one Education
     * const education = await prisma.education.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends educationFindUniqueArgs>(
      args: SelectSubset<T, educationFindUniqueArgs<ExtArgs>>,
    ): Prisma__educationClient<
      $Result.GetResult<
        Prisma.$educationPayload<ExtArgs>,
        T,
        "findUnique",
        GlobalOmitOptions
      > | null,
      null,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Find one Education that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {educationFindUniqueOrThrowArgs} args - Arguments to find a Education
     * @example
     * // Get one Education
     * const education = await prisma.education.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends educationFindUniqueOrThrowArgs>(
      args: SelectSubset<T, educationFindUniqueOrThrowArgs<ExtArgs>>,
    ): Prisma__educationClient<
      $Result.GetResult<
        Prisma.$educationPayload<ExtArgs>,
        T,
        "findUniqueOrThrow",
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Find the first Education that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {educationFindFirstArgs} args - Arguments to find a Education
     * @example
     * // Get one Education
     * const education = await prisma.education.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends educationFindFirstArgs>(
      args?: SelectSubset<T, educationFindFirstArgs<ExtArgs>>,
    ): Prisma__educationClient<
      $Result.GetResult<
        Prisma.$educationPayload<ExtArgs>,
        T,
        "findFirst",
        GlobalOmitOptions
      > | null,
      null,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Find the first Education that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {educationFindFirstOrThrowArgs} args - Arguments to find a Education
     * @example
     * // Get one Education
     * const education = await prisma.education.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends educationFindFirstOrThrowArgs>(
      args?: SelectSubset<T, educationFindFirstOrThrowArgs<ExtArgs>>,
    ): Prisma__educationClient<
      $Result.GetResult<
        Prisma.$educationPayload<ExtArgs>,
        T,
        "findFirstOrThrow",
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Find zero or more Educations that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {educationFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Educations
     * const educations = await prisma.education.findMany()
     *
     * // Get first 10 Educations
     * const educations = await prisma.education.findMany({ take: 10 })
     *
     * // Only select the `edid`
     * const educationWithEdidOnly = await prisma.education.findMany({ select: { edid: true } })
     *
     */
    findMany<T extends educationFindManyArgs>(
      args?: SelectSubset<T, educationFindManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<
      $Result.GetResult<
        Prisma.$educationPayload<ExtArgs>,
        T,
        "findMany",
        GlobalOmitOptions
      >
    >;

    /**
     * Create a Education.
     * @param {educationCreateArgs} args - Arguments to create a Education.
     * @example
     * // Create one Education
     * const Education = await prisma.education.create({
     *   data: {
     *     // ... data to create a Education
     *   }
     * })
     *
     */
    create<T extends educationCreateArgs>(
      args: SelectSubset<T, educationCreateArgs<ExtArgs>>,
    ): Prisma__educationClient<
      $Result.GetResult<
        Prisma.$educationPayload<ExtArgs>,
        T,
        "create",
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Create many Educations.
     * @param {educationCreateManyArgs} args - Arguments to create many Educations.
     * @example
     * // Create many Educations
     * const education = await prisma.education.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     */
    createMany<T extends educationCreateManyArgs>(
      args?: SelectSubset<T, educationCreateManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Create many Educations and returns the data saved in the database.
     * @param {educationCreateManyAndReturnArgs} args - Arguments to create many Educations.
     * @example
     * // Create many Educations
     * const education = await prisma.education.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Create many Educations and only return the `edid`
     * const educationWithEdidOnly = await prisma.education.createManyAndReturn({
     *   select: { edid: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     *
     */
    createManyAndReturn<T extends educationCreateManyAndReturnArgs>(
      args?: SelectSubset<T, educationCreateManyAndReturnArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<
      $Result.GetResult<
        Prisma.$educationPayload<ExtArgs>,
        T,
        "createManyAndReturn",
        GlobalOmitOptions
      >
    >;

    /**
     * Delete a Education.
     * @param {educationDeleteArgs} args - Arguments to delete one Education.
     * @example
     * // Delete one Education
     * const Education = await prisma.education.delete({
     *   where: {
     *     // ... filter to delete one Education
     *   }
     * })
     *
     */
    delete<T extends educationDeleteArgs>(
      args: SelectSubset<T, educationDeleteArgs<ExtArgs>>,
    ): Prisma__educationClient<
      $Result.GetResult<
        Prisma.$educationPayload<ExtArgs>,
        T,
        "delete",
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Update one Education.
     * @param {educationUpdateArgs} args - Arguments to update one Education.
     * @example
     * // Update one Education
     * const education = await prisma.education.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    update<T extends educationUpdateArgs>(
      args: SelectSubset<T, educationUpdateArgs<ExtArgs>>,
    ): Prisma__educationClient<
      $Result.GetResult<
        Prisma.$educationPayload<ExtArgs>,
        T,
        "update",
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Delete zero or more Educations.
     * @param {educationDeleteManyArgs} args - Arguments to filter Educations to delete.
     * @example
     * // Delete a few Educations
     * const { count } = await prisma.education.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     *
     */
    deleteMany<T extends educationDeleteManyArgs>(
      args?: SelectSubset<T, educationDeleteManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Update zero or more Educations.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {educationUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Educations
     * const education = await prisma.education.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    updateMany<T extends educationUpdateManyArgs>(
      args: SelectSubset<T, educationUpdateManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Update zero or more Educations and returns the data updated in the database.
     * @param {educationUpdateManyAndReturnArgs} args - Arguments to update many Educations.
     * @example
     * // Update many Educations
     * const education = await prisma.education.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Update zero or more Educations and only return the `edid`
     * const educationWithEdidOnly = await prisma.education.updateManyAndReturn({
     *   select: { edid: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     *
     */
    updateManyAndReturn<T extends educationUpdateManyAndReturnArgs>(
      args: SelectSubset<T, educationUpdateManyAndReturnArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<
      $Result.GetResult<
        Prisma.$educationPayload<ExtArgs>,
        T,
        "updateManyAndReturn",
        GlobalOmitOptions
      >
    >;

    /**
     * Create or update one Education.
     * @param {educationUpsertArgs} args - Arguments to update or create a Education.
     * @example
     * // Update or create a Education
     * const education = await prisma.education.upsert({
     *   create: {
     *     // ... data to create a Education
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Education we want to update
     *   }
     * })
     */
    upsert<T extends educationUpsertArgs>(
      args: SelectSubset<T, educationUpsertArgs<ExtArgs>>,
    ): Prisma__educationClient<
      $Result.GetResult<
        Prisma.$educationPayload<ExtArgs>,
        T,
        "upsert",
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Count the number of Educations.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {educationCountArgs} args - Arguments to filter Educations to count.
     * @example
     * // Count the number of Educations
     * const count = await prisma.education.count({
     *   where: {
     *     // ... the filter for the Educations we want to count
     *   }
     * })
     **/
    count<T extends educationCountArgs>(
      args?: Subset<T, educationCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<"select", any>
        ? T["select"] extends true
          ? number
          : GetScalarType<T["select"], EducationCountAggregateOutputType>
        : number
    >;

    /**
     * Allows you to perform aggregations operations on a Education.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EducationAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
     **/
    aggregate<T extends EducationAggregateArgs>(
      args: Subset<T, EducationAggregateArgs>,
    ): Prisma.PrismaPromise<GetEducationAggregateType<T>>;

    /**
     * Group by Education.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {educationGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     *
     **/
    groupBy<
      T extends educationGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<"skip", Keys<T>>,
        Extends<"take", Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: educationGroupByArgs["orderBy"] }
        : { orderBy?: educationGroupByArgs["orderBy"] },
      OrderFields extends ExcludeUnderscoreKeys<
        Keys<MaybeTupleToUnion<T["orderBy"]>>
      >,
      ByFields extends MaybeTupleToUnion<T["by"]>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T["having"]>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T["by"] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
        ? `Error: "by" must not be empty.`
        : HavingValid extends False
          ? {
              [P in HavingFields]: P extends ByFields
                ? never
                : P extends string
                  ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
                  : [
                      Error,
                      "Field ",
                      P,
                      ` in "having" needs to be provided in "by"`,
                    ];
            }[HavingFields]
          : "take" extends Keys<T>
            ? "orderBy" extends Keys<T>
              ? ByValid extends True
                ? {}
                : {
                    [P in OrderFields]: P extends ByFields
                      ? never
                      : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
                  }[OrderFields]
              : 'Error: If you provide "take", you also need to provide "orderBy"'
            : "skip" extends Keys<T>
              ? "orderBy" extends Keys<T>
                ? ByValid extends True
                  ? {}
                  : {
                      [P in OrderFields]: P extends ByFields
                        ? never
                        : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
                    }[OrderFields]
                : 'Error: If you provide "skip", you also need to provide "orderBy"'
              : ByValid extends True
                ? {}
                : {
                    [P in OrderFields]: P extends ByFields
                      ? never
                      : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
                  }[OrderFields],
    >(
      args: SubsetIntersection<T, educationGroupByArgs, OrderByArg> &
        InputErrors,
    ): {} extends InputErrors
      ? GetEducationGroupByPayload<T>
      : Prisma.PrismaPromise<InputErrors>;
    /**
     * Fields of the education model
     */
    readonly fields: educationFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for education.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__educationClient<
    T,
    Null = never,
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    GlobalOmitOptions = {},
  > extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    user<T extends userDefaultArgs<ExtArgs> = {}>(
      args?: Subset<T, userDefaultArgs<ExtArgs>>,
    ): Prisma__userClient<
      | $Result.GetResult<
          Prisma.$userPayload<ExtArgs>,
          T,
          "findUniqueOrThrow",
          GlobalOmitOptions
        >
      | Null,
      Null,
      ExtArgs,
      GlobalOmitOptions
    >;
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(
      onfulfilled?:
        | ((value: T) => TResult1 | PromiseLike<TResult1>)
        | undefined
        | null,
      onrejected?:
        | ((reason: any) => TResult2 | PromiseLike<TResult2>)
        | undefined
        | null,
    ): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(
      onrejected?:
        | ((reason: any) => TResult | PromiseLike<TResult>)
        | undefined
        | null,
    ): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }

  /**
   * Fields of the education model
   */
  interface educationFieldRefs {
    readonly edid: FieldRef<"education", "Int">;
    readonly inst: FieldRef<"education", "String">;
    readonly degree: FieldRef<"education", "String">;
    readonly startdate: FieldRef<"education", "String">;
    readonly enddate: FieldRef<"education", "String">;
    readonly uid: FieldRef<"education", "Int">;
  }

  // Custom InputTypes
  /**
   * education findUnique
   */
  export type educationFindUniqueArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the education
     */
    select?: educationSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the education
     */
    omit?: educationOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: educationInclude<ExtArgs> | null;
    /**
     * Filter, which education to fetch.
     */
    where: educationWhereUniqueInput;
  };

  /**
   * education findUniqueOrThrow
   */
  export type educationFindUniqueOrThrowArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the education
     */
    select?: educationSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the education
     */
    omit?: educationOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: educationInclude<ExtArgs> | null;
    /**
     * Filter, which education to fetch.
     */
    where: educationWhereUniqueInput;
  };

  /**
   * education findFirst
   */
  export type educationFindFirstArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the education
     */
    select?: educationSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the education
     */
    omit?: educationOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: educationInclude<ExtArgs> | null;
    /**
     * Filter, which education to fetch.
     */
    where?: educationWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of educations to fetch.
     */
    orderBy?:
      | educationOrderByWithRelationInput
      | educationOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for educations.
     */
    cursor?: educationWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` educations from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` educations.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of educations.
     */
    distinct?: EducationScalarFieldEnum | EducationScalarFieldEnum[];
  };

  /**
   * education findFirstOrThrow
   */
  export type educationFindFirstOrThrowArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the education
     */
    select?: educationSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the education
     */
    omit?: educationOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: educationInclude<ExtArgs> | null;
    /**
     * Filter, which education to fetch.
     */
    where?: educationWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of educations to fetch.
     */
    orderBy?:
      | educationOrderByWithRelationInput
      | educationOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for educations.
     */
    cursor?: educationWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` educations from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` educations.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of educations.
     */
    distinct?: EducationScalarFieldEnum | EducationScalarFieldEnum[];
  };

  /**
   * education findMany
   */
  export type educationFindManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the education
     */
    select?: educationSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the education
     */
    omit?: educationOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: educationInclude<ExtArgs> | null;
    /**
     * Filter, which educations to fetch.
     */
    where?: educationWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of educations to fetch.
     */
    orderBy?:
      | educationOrderByWithRelationInput
      | educationOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing educations.
     */
    cursor?: educationWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` educations from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` educations.
     */
    skip?: number;
    distinct?: EducationScalarFieldEnum | EducationScalarFieldEnum[];
  };

  /**
   * education create
   */
  export type educationCreateArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the education
     */
    select?: educationSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the education
     */
    omit?: educationOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: educationInclude<ExtArgs> | null;
    /**
     * The data needed to create a education.
     */
    data: XOR<educationCreateInput, educationUncheckedCreateInput>;
  };

  /**
   * education createMany
   */
  export type educationCreateManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * The data used to create many educations.
     */
    data: educationCreateManyInput | educationCreateManyInput[];
    skipDuplicates?: boolean;
  };

  /**
   * education createManyAndReturn
   */
  export type educationCreateManyAndReturnArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the education
     */
    select?: educationSelectCreateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the education
     */
    omit?: educationOmit<ExtArgs> | null;
    /**
     * The data used to create many educations.
     */
    data: educationCreateManyInput | educationCreateManyInput[];
    skipDuplicates?: boolean;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: educationIncludeCreateManyAndReturn<ExtArgs> | null;
  };

  /**
   * education update
   */
  export type educationUpdateArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the education
     */
    select?: educationSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the education
     */
    omit?: educationOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: educationInclude<ExtArgs> | null;
    /**
     * The data needed to update a education.
     */
    data: XOR<educationUpdateInput, educationUncheckedUpdateInput>;
    /**
     * Choose, which education to update.
     */
    where: educationWhereUniqueInput;
  };

  /**
   * education updateMany
   */
  export type educationUpdateManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * The data used to update educations.
     */
    data: XOR<
      educationUpdateManyMutationInput,
      educationUncheckedUpdateManyInput
    >;
    /**
     * Filter which educations to update
     */
    where?: educationWhereInput;
    /**
     * Limit how many educations to update.
     */
    limit?: number;
  };

  /**
   * education updateManyAndReturn
   */
  export type educationUpdateManyAndReturnArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the education
     */
    select?: educationSelectUpdateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the education
     */
    omit?: educationOmit<ExtArgs> | null;
    /**
     * The data used to update educations.
     */
    data: XOR<
      educationUpdateManyMutationInput,
      educationUncheckedUpdateManyInput
    >;
    /**
     * Filter which educations to update
     */
    where?: educationWhereInput;
    /**
     * Limit how many educations to update.
     */
    limit?: number;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: educationIncludeUpdateManyAndReturn<ExtArgs> | null;
  };

  /**
   * education upsert
   */
  export type educationUpsertArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the education
     */
    select?: educationSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the education
     */
    omit?: educationOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: educationInclude<ExtArgs> | null;
    /**
     * The filter to search for the education to update in case it exists.
     */
    where: educationWhereUniqueInput;
    /**
     * In case the education found by the `where` argument doesn't exist, create a new education with this data.
     */
    create: XOR<educationCreateInput, educationUncheckedCreateInput>;
    /**
     * In case the education was found with the provided `where` argument, update it with this data.
     */
    update: XOR<educationUpdateInput, educationUncheckedUpdateInput>;
  };

  /**
   * education delete
   */
  export type educationDeleteArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the education
     */
    select?: educationSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the education
     */
    omit?: educationOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: educationInclude<ExtArgs> | null;
    /**
     * Filter which education to delete.
     */
    where: educationWhereUniqueInput;
  };

  /**
   * education deleteMany
   */
  export type educationDeleteManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Filter which educations to delete
     */
    where?: educationWhereInput;
    /**
     * Limit how many educations to delete.
     */
    limit?: number;
  };

  /**
   * education without action
   */
  export type educationDefaultArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the education
     */
    select?: educationSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the education
     */
    omit?: educationOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: educationInclude<ExtArgs> | null;
  };

  /**
   * Model skills
   */

  export type AggregateSkills = {
    _count: SkillsCountAggregateOutputType | null;
    _avg: SkillsAvgAggregateOutputType | null;
    _sum: SkillsSumAggregateOutputType | null;
    _min: SkillsMinAggregateOutputType | null;
    _max: SkillsMaxAggregateOutputType | null;
  };

  export type SkillsAvgAggregateOutputType = {
    sid: number | null;
    uid: number | null;
  };

  export type SkillsSumAggregateOutputType = {
    sid: number | null;
    uid: number | null;
  };

  export type SkillsMinAggregateOutputType = {
    sid: number | null;
    uid: number | null;
    skillname: string | null;
    icon: string | null;
  };

  export type SkillsMaxAggregateOutputType = {
    sid: number | null;
    uid: number | null;
    skillname: string | null;
    icon: string | null;
  };

  export type SkillsCountAggregateOutputType = {
    sid: number;
    uid: number;
    skillname: number;
    skills: number;
    icon: number;
    _all: number;
  };

  export type SkillsAvgAggregateInputType = {
    sid?: true;
    uid?: true;
  };

  export type SkillsSumAggregateInputType = {
    sid?: true;
    uid?: true;
  };

  export type SkillsMinAggregateInputType = {
    sid?: true;
    uid?: true;
    skillname?: true;
    icon?: true;
  };

  export type SkillsMaxAggregateInputType = {
    sid?: true;
    uid?: true;
    skillname?: true;
    icon?: true;
  };

  export type SkillsCountAggregateInputType = {
    sid?: true;
    uid?: true;
    skillname?: true;
    skills?: true;
    icon?: true;
    _all?: true;
  };

  export type SkillsAggregateArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Filter which skills to aggregate.
     */
    where?: skillsWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of skills to fetch.
     */
    orderBy?: skillsOrderByWithRelationInput | skillsOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: skillsWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` skills from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` skills.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned skills
     **/
    _count?: true | SkillsCountAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to average
     **/
    _avg?: SkillsAvgAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to sum
     **/
    _sum?: SkillsSumAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
     **/
    _min?: SkillsMinAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
     **/
    _max?: SkillsMaxAggregateInputType;
  };

  export type GetSkillsAggregateType<T extends SkillsAggregateArgs> = {
    [P in keyof T & keyof AggregateSkills]: P extends "_count" | "count"
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSkills[P]>
      : GetScalarType<T[P], AggregateSkills[P]>;
  };

  export type skillsGroupByArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    where?: skillsWhereInput;
    orderBy?:
      | skillsOrderByWithAggregationInput
      | skillsOrderByWithAggregationInput[];
    by: SkillsScalarFieldEnum[] | SkillsScalarFieldEnum;
    having?: skillsScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: SkillsCountAggregateInputType | true;
    _avg?: SkillsAvgAggregateInputType;
    _sum?: SkillsSumAggregateInputType;
    _min?: SkillsMinAggregateInputType;
    _max?: SkillsMaxAggregateInputType;
  };

  export type SkillsGroupByOutputType = {
    sid: number;
    uid: number;
    skillname: string;
    skills: string[];
    icon: string;
    _count: SkillsCountAggregateOutputType | null;
    _avg: SkillsAvgAggregateOutputType | null;
    _sum: SkillsSumAggregateOutputType | null;
    _min: SkillsMinAggregateOutputType | null;
    _max: SkillsMaxAggregateOutputType | null;
  };

  type GetSkillsGroupByPayload<T extends skillsGroupByArgs> =
    Prisma.PrismaPromise<
      Array<
        PickEnumerable<SkillsGroupByOutputType, T["by"]> & {
          [P in keyof T & keyof SkillsGroupByOutputType]: P extends "_count"
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], SkillsGroupByOutputType[P]>
            : GetScalarType<T[P], SkillsGroupByOutputType[P]>;
        }
      >
    >;

  export type skillsSelect<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = $Extensions.GetSelect<
    {
      sid?: boolean;
      uid?: boolean;
      skillname?: boolean;
      skills?: boolean;
      icon?: boolean;
      user?: boolean | userDefaultArgs<ExtArgs>;
    },
    ExtArgs["result"]["skills"]
  >;

  export type skillsSelectCreateManyAndReturn<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = $Extensions.GetSelect<
    {
      sid?: boolean;
      uid?: boolean;
      skillname?: boolean;
      skills?: boolean;
      icon?: boolean;
      user?: boolean | userDefaultArgs<ExtArgs>;
    },
    ExtArgs["result"]["skills"]
  >;

  export type skillsSelectUpdateManyAndReturn<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = $Extensions.GetSelect<
    {
      sid?: boolean;
      uid?: boolean;
      skillname?: boolean;
      skills?: boolean;
      icon?: boolean;
      user?: boolean | userDefaultArgs<ExtArgs>;
    },
    ExtArgs["result"]["skills"]
  >;

  export type skillsSelectScalar = {
    sid?: boolean;
    uid?: boolean;
    skillname?: boolean;
    skills?: boolean;
    icon?: boolean;
  };

  export type skillsOmit<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = $Extensions.GetOmit<
    "sid" | "uid" | "skillname" | "skills" | "icon",
    ExtArgs["result"]["skills"]
  >;
  export type skillsInclude<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    user?: boolean | userDefaultArgs<ExtArgs>;
  };
  export type skillsIncludeCreateManyAndReturn<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    user?: boolean | userDefaultArgs<ExtArgs>;
  };
  export type skillsIncludeUpdateManyAndReturn<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    user?: boolean | userDefaultArgs<ExtArgs>;
  };

  export type $skillsPayload<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    name: "skills";
    objects: {
      user: Prisma.$userPayload<ExtArgs>;
    };
    scalars: $Extensions.GetPayloadResult<
      {
        sid: number;
        uid: number;
        skillname: string;
        skills: string[];
        icon: string;
      },
      ExtArgs["result"]["skills"]
    >;
    composites: {};
  };

  type skillsGetPayload<
    S extends boolean | null | undefined | skillsDefaultArgs,
  > = $Result.GetResult<Prisma.$skillsPayload, S>;

  type skillsCountArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = Omit<skillsFindManyArgs, "select" | "include" | "distinct" | "omit"> & {
    select?: SkillsCountAggregateInputType | true;
  };

  export interface skillsDelegate<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    GlobalOmitOptions = {},
  > {
    [K: symbol]: {
      types: Prisma.TypeMap<ExtArgs>["model"]["skills"];
      meta: { name: "skills" };
    };
    /**
     * Find zero or one Skills that matches the filter.
     * @param {skillsFindUniqueArgs} args - Arguments to find a Skills
     * @example
     * // Get one Skills
     * const skills = await prisma.skills.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends skillsFindUniqueArgs>(
      args: SelectSubset<T, skillsFindUniqueArgs<ExtArgs>>,
    ): Prisma__skillsClient<
      $Result.GetResult<
        Prisma.$skillsPayload<ExtArgs>,
        T,
        "findUnique",
        GlobalOmitOptions
      > | null,
      null,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Find one Skills that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {skillsFindUniqueOrThrowArgs} args - Arguments to find a Skills
     * @example
     * // Get one Skills
     * const skills = await prisma.skills.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends skillsFindUniqueOrThrowArgs>(
      args: SelectSubset<T, skillsFindUniqueOrThrowArgs<ExtArgs>>,
    ): Prisma__skillsClient<
      $Result.GetResult<
        Prisma.$skillsPayload<ExtArgs>,
        T,
        "findUniqueOrThrow",
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Find the first Skills that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {skillsFindFirstArgs} args - Arguments to find a Skills
     * @example
     * // Get one Skills
     * const skills = await prisma.skills.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends skillsFindFirstArgs>(
      args?: SelectSubset<T, skillsFindFirstArgs<ExtArgs>>,
    ): Prisma__skillsClient<
      $Result.GetResult<
        Prisma.$skillsPayload<ExtArgs>,
        T,
        "findFirst",
        GlobalOmitOptions
      > | null,
      null,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Find the first Skills that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {skillsFindFirstOrThrowArgs} args - Arguments to find a Skills
     * @example
     * // Get one Skills
     * const skills = await prisma.skills.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends skillsFindFirstOrThrowArgs>(
      args?: SelectSubset<T, skillsFindFirstOrThrowArgs<ExtArgs>>,
    ): Prisma__skillsClient<
      $Result.GetResult<
        Prisma.$skillsPayload<ExtArgs>,
        T,
        "findFirstOrThrow",
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Find zero or more Skills that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {skillsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Skills
     * const skills = await prisma.skills.findMany()
     *
     * // Get first 10 Skills
     * const skills = await prisma.skills.findMany({ take: 10 })
     *
     * // Only select the `sid`
     * const skillsWithSidOnly = await prisma.skills.findMany({ select: { sid: true } })
     *
     */
    findMany<T extends skillsFindManyArgs>(
      args?: SelectSubset<T, skillsFindManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<
      $Result.GetResult<
        Prisma.$skillsPayload<ExtArgs>,
        T,
        "findMany",
        GlobalOmitOptions
      >
    >;

    /**
     * Create a Skills.
     * @param {skillsCreateArgs} args - Arguments to create a Skills.
     * @example
     * // Create one Skills
     * const Skills = await prisma.skills.create({
     *   data: {
     *     // ... data to create a Skills
     *   }
     * })
     *
     */
    create<T extends skillsCreateArgs>(
      args: SelectSubset<T, skillsCreateArgs<ExtArgs>>,
    ): Prisma__skillsClient<
      $Result.GetResult<
        Prisma.$skillsPayload<ExtArgs>,
        T,
        "create",
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Create many Skills.
     * @param {skillsCreateManyArgs} args - Arguments to create many Skills.
     * @example
     * // Create many Skills
     * const skills = await prisma.skills.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     */
    createMany<T extends skillsCreateManyArgs>(
      args?: SelectSubset<T, skillsCreateManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Create many Skills and returns the data saved in the database.
     * @param {skillsCreateManyAndReturnArgs} args - Arguments to create many Skills.
     * @example
     * // Create many Skills
     * const skills = await prisma.skills.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Create many Skills and only return the `sid`
     * const skillsWithSidOnly = await prisma.skills.createManyAndReturn({
     *   select: { sid: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     *
     */
    createManyAndReturn<T extends skillsCreateManyAndReturnArgs>(
      args?: SelectSubset<T, skillsCreateManyAndReturnArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<
      $Result.GetResult<
        Prisma.$skillsPayload<ExtArgs>,
        T,
        "createManyAndReturn",
        GlobalOmitOptions
      >
    >;

    /**
     * Delete a Skills.
     * @param {skillsDeleteArgs} args - Arguments to delete one Skills.
     * @example
     * // Delete one Skills
     * const Skills = await prisma.skills.delete({
     *   where: {
     *     // ... filter to delete one Skills
     *   }
     * })
     *
     */
    delete<T extends skillsDeleteArgs>(
      args: SelectSubset<T, skillsDeleteArgs<ExtArgs>>,
    ): Prisma__skillsClient<
      $Result.GetResult<
        Prisma.$skillsPayload<ExtArgs>,
        T,
        "delete",
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Update one Skills.
     * @param {skillsUpdateArgs} args - Arguments to update one Skills.
     * @example
     * // Update one Skills
     * const skills = await prisma.skills.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    update<T extends skillsUpdateArgs>(
      args: SelectSubset<T, skillsUpdateArgs<ExtArgs>>,
    ): Prisma__skillsClient<
      $Result.GetResult<
        Prisma.$skillsPayload<ExtArgs>,
        T,
        "update",
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Delete zero or more Skills.
     * @param {skillsDeleteManyArgs} args - Arguments to filter Skills to delete.
     * @example
     * // Delete a few Skills
     * const { count } = await prisma.skills.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     *
     */
    deleteMany<T extends skillsDeleteManyArgs>(
      args?: SelectSubset<T, skillsDeleteManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Update zero or more Skills.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {skillsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Skills
     * const skills = await prisma.skills.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    updateMany<T extends skillsUpdateManyArgs>(
      args: SelectSubset<T, skillsUpdateManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Update zero or more Skills and returns the data updated in the database.
     * @param {skillsUpdateManyAndReturnArgs} args - Arguments to update many Skills.
     * @example
     * // Update many Skills
     * const skills = await prisma.skills.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Update zero or more Skills and only return the `sid`
     * const skillsWithSidOnly = await prisma.skills.updateManyAndReturn({
     *   select: { sid: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     *
     */
    updateManyAndReturn<T extends skillsUpdateManyAndReturnArgs>(
      args: SelectSubset<T, skillsUpdateManyAndReturnArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<
      $Result.GetResult<
        Prisma.$skillsPayload<ExtArgs>,
        T,
        "updateManyAndReturn",
        GlobalOmitOptions
      >
    >;

    /**
     * Create or update one Skills.
     * @param {skillsUpsertArgs} args - Arguments to update or create a Skills.
     * @example
     * // Update or create a Skills
     * const skills = await prisma.skills.upsert({
     *   create: {
     *     // ... data to create a Skills
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Skills we want to update
     *   }
     * })
     */
    upsert<T extends skillsUpsertArgs>(
      args: SelectSubset<T, skillsUpsertArgs<ExtArgs>>,
    ): Prisma__skillsClient<
      $Result.GetResult<
        Prisma.$skillsPayload<ExtArgs>,
        T,
        "upsert",
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Count the number of Skills.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {skillsCountArgs} args - Arguments to filter Skills to count.
     * @example
     * // Count the number of Skills
     * const count = await prisma.skills.count({
     *   where: {
     *     // ... the filter for the Skills we want to count
     *   }
     * })
     **/
    count<T extends skillsCountArgs>(
      args?: Subset<T, skillsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<"select", any>
        ? T["select"] extends true
          ? number
          : GetScalarType<T["select"], SkillsCountAggregateOutputType>
        : number
    >;

    /**
     * Allows you to perform aggregations operations on a Skills.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SkillsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
     **/
    aggregate<T extends SkillsAggregateArgs>(
      args: Subset<T, SkillsAggregateArgs>,
    ): Prisma.PrismaPromise<GetSkillsAggregateType<T>>;

    /**
     * Group by Skills.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {skillsGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     *
     **/
    groupBy<
      T extends skillsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<"skip", Keys<T>>,
        Extends<"take", Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: skillsGroupByArgs["orderBy"] }
        : { orderBy?: skillsGroupByArgs["orderBy"] },
      OrderFields extends ExcludeUnderscoreKeys<
        Keys<MaybeTupleToUnion<T["orderBy"]>>
      >,
      ByFields extends MaybeTupleToUnion<T["by"]>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T["having"]>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T["by"] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
        ? `Error: "by" must not be empty.`
        : HavingValid extends False
          ? {
              [P in HavingFields]: P extends ByFields
                ? never
                : P extends string
                  ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
                  : [
                      Error,
                      "Field ",
                      P,
                      ` in "having" needs to be provided in "by"`,
                    ];
            }[HavingFields]
          : "take" extends Keys<T>
            ? "orderBy" extends Keys<T>
              ? ByValid extends True
                ? {}
                : {
                    [P in OrderFields]: P extends ByFields
                      ? never
                      : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
                  }[OrderFields]
              : 'Error: If you provide "take", you also need to provide "orderBy"'
            : "skip" extends Keys<T>
              ? "orderBy" extends Keys<T>
                ? ByValid extends True
                  ? {}
                  : {
                      [P in OrderFields]: P extends ByFields
                        ? never
                        : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
                    }[OrderFields]
                : 'Error: If you provide "skip", you also need to provide "orderBy"'
              : ByValid extends True
                ? {}
                : {
                    [P in OrderFields]: P extends ByFields
                      ? never
                      : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
                  }[OrderFields],
    >(
      args: SubsetIntersection<T, skillsGroupByArgs, OrderByArg> & InputErrors,
    ): {} extends InputErrors
      ? GetSkillsGroupByPayload<T>
      : Prisma.PrismaPromise<InputErrors>;
    /**
     * Fields of the skills model
     */
    readonly fields: skillsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for skills.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__skillsClient<
    T,
    Null = never,
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    GlobalOmitOptions = {},
  > extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    user<T extends userDefaultArgs<ExtArgs> = {}>(
      args?: Subset<T, userDefaultArgs<ExtArgs>>,
    ): Prisma__userClient<
      | $Result.GetResult<
          Prisma.$userPayload<ExtArgs>,
          T,
          "findUniqueOrThrow",
          GlobalOmitOptions
        >
      | Null,
      Null,
      ExtArgs,
      GlobalOmitOptions
    >;
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(
      onfulfilled?:
        | ((value: T) => TResult1 | PromiseLike<TResult1>)
        | undefined
        | null,
      onrejected?:
        | ((reason: any) => TResult2 | PromiseLike<TResult2>)
        | undefined
        | null,
    ): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(
      onrejected?:
        | ((reason: any) => TResult | PromiseLike<TResult>)
        | undefined
        | null,
    ): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }

  /**
   * Fields of the skills model
   */
  interface skillsFieldRefs {
    readonly sid: FieldRef<"skills", "Int">;
    readonly uid: FieldRef<"skills", "Int">;
    readonly skillname: FieldRef<"skills", "String">;
    readonly skills: FieldRef<"skills", "String[]">;
    readonly icon: FieldRef<"skills", "String">;
  }

  // Custom InputTypes
  /**
   * skills findUnique
   */
  export type skillsFindUniqueArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the skills
     */
    select?: skillsSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the skills
     */
    omit?: skillsOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: skillsInclude<ExtArgs> | null;
    /**
     * Filter, which skills to fetch.
     */
    where: skillsWhereUniqueInput;
  };

  /**
   * skills findUniqueOrThrow
   */
  export type skillsFindUniqueOrThrowArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the skills
     */
    select?: skillsSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the skills
     */
    omit?: skillsOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: skillsInclude<ExtArgs> | null;
    /**
     * Filter, which skills to fetch.
     */
    where: skillsWhereUniqueInput;
  };

  /**
   * skills findFirst
   */
  export type skillsFindFirstArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the skills
     */
    select?: skillsSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the skills
     */
    omit?: skillsOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: skillsInclude<ExtArgs> | null;
    /**
     * Filter, which skills to fetch.
     */
    where?: skillsWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of skills to fetch.
     */
    orderBy?: skillsOrderByWithRelationInput | skillsOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for skills.
     */
    cursor?: skillsWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` skills from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` skills.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of skills.
     */
    distinct?: SkillsScalarFieldEnum | SkillsScalarFieldEnum[];
  };

  /**
   * skills findFirstOrThrow
   */
  export type skillsFindFirstOrThrowArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the skills
     */
    select?: skillsSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the skills
     */
    omit?: skillsOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: skillsInclude<ExtArgs> | null;
    /**
     * Filter, which skills to fetch.
     */
    where?: skillsWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of skills to fetch.
     */
    orderBy?: skillsOrderByWithRelationInput | skillsOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for skills.
     */
    cursor?: skillsWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` skills from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` skills.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of skills.
     */
    distinct?: SkillsScalarFieldEnum | SkillsScalarFieldEnum[];
  };

  /**
   * skills findMany
   */
  export type skillsFindManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the skills
     */
    select?: skillsSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the skills
     */
    omit?: skillsOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: skillsInclude<ExtArgs> | null;
    /**
     * Filter, which skills to fetch.
     */
    where?: skillsWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of skills to fetch.
     */
    orderBy?: skillsOrderByWithRelationInput | skillsOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing skills.
     */
    cursor?: skillsWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` skills from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` skills.
     */
    skip?: number;
    distinct?: SkillsScalarFieldEnum | SkillsScalarFieldEnum[];
  };

  /**
   * skills create
   */
  export type skillsCreateArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the skills
     */
    select?: skillsSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the skills
     */
    omit?: skillsOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: skillsInclude<ExtArgs> | null;
    /**
     * The data needed to create a skills.
     */
    data: XOR<skillsCreateInput, skillsUncheckedCreateInput>;
  };

  /**
   * skills createMany
   */
  export type skillsCreateManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * The data used to create many skills.
     */
    data: skillsCreateManyInput | skillsCreateManyInput[];
    skipDuplicates?: boolean;
  };

  /**
   * skills createManyAndReturn
   */
  export type skillsCreateManyAndReturnArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the skills
     */
    select?: skillsSelectCreateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the skills
     */
    omit?: skillsOmit<ExtArgs> | null;
    /**
     * The data used to create many skills.
     */
    data: skillsCreateManyInput | skillsCreateManyInput[];
    skipDuplicates?: boolean;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: skillsIncludeCreateManyAndReturn<ExtArgs> | null;
  };

  /**
   * skills update
   */
  export type skillsUpdateArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the skills
     */
    select?: skillsSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the skills
     */
    omit?: skillsOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: skillsInclude<ExtArgs> | null;
    /**
     * The data needed to update a skills.
     */
    data: XOR<skillsUpdateInput, skillsUncheckedUpdateInput>;
    /**
     * Choose, which skills to update.
     */
    where: skillsWhereUniqueInput;
  };

  /**
   * skills updateMany
   */
  export type skillsUpdateManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * The data used to update skills.
     */
    data: XOR<skillsUpdateManyMutationInput, skillsUncheckedUpdateManyInput>;
    /**
     * Filter which skills to update
     */
    where?: skillsWhereInput;
    /**
     * Limit how many skills to update.
     */
    limit?: number;
  };

  /**
   * skills updateManyAndReturn
   */
  export type skillsUpdateManyAndReturnArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the skills
     */
    select?: skillsSelectUpdateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the skills
     */
    omit?: skillsOmit<ExtArgs> | null;
    /**
     * The data used to update skills.
     */
    data: XOR<skillsUpdateManyMutationInput, skillsUncheckedUpdateManyInput>;
    /**
     * Filter which skills to update
     */
    where?: skillsWhereInput;
    /**
     * Limit how many skills to update.
     */
    limit?: number;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: skillsIncludeUpdateManyAndReturn<ExtArgs> | null;
  };

  /**
   * skills upsert
   */
  export type skillsUpsertArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the skills
     */
    select?: skillsSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the skills
     */
    omit?: skillsOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: skillsInclude<ExtArgs> | null;
    /**
     * The filter to search for the skills to update in case it exists.
     */
    where: skillsWhereUniqueInput;
    /**
     * In case the skills found by the `where` argument doesn't exist, create a new skills with this data.
     */
    create: XOR<skillsCreateInput, skillsUncheckedCreateInput>;
    /**
     * In case the skills was found with the provided `where` argument, update it with this data.
     */
    update: XOR<skillsUpdateInput, skillsUncheckedUpdateInput>;
  };

  /**
   * skills delete
   */
  export type skillsDeleteArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the skills
     */
    select?: skillsSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the skills
     */
    omit?: skillsOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: skillsInclude<ExtArgs> | null;
    /**
     * Filter which skills to delete.
     */
    where: skillsWhereUniqueInput;
  };

  /**
   * skills deleteMany
   */
  export type skillsDeleteManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Filter which skills to delete
     */
    where?: skillsWhereInput;
    /**
     * Limit how many skills to delete.
     */
    limit?: number;
  };

  /**
   * skills without action
   */
  export type skillsDefaultArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the skills
     */
    select?: skillsSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the skills
     */
    omit?: skillsOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: skillsInclude<ExtArgs> | null;
  };

  /**
   * Model contact
   */

  export type AggregateContact = {
    _count: ContactCountAggregateOutputType | null;
    _avg: ContactAvgAggregateOutputType | null;
    _sum: ContactSumAggregateOutputType | null;
    _min: ContactMinAggregateOutputType | null;
    _max: ContactMaxAggregateOutputType | null;
  };

  export type ContactAvgAggregateOutputType = {
    cid: number | null;
    uid: number | null;
  };

  export type ContactSumAggregateOutputType = {
    cid: number | null;
    uid: number | null;
  };

  export type ContactMinAggregateOutputType = {
    cid: number | null;
    uid: number | null;
    email: string | null;
    phone: string | null;
    location: string | null;
    linkedin: string | null;
    github: string | null;
  };

  export type ContactMaxAggregateOutputType = {
    cid: number | null;
    uid: number | null;
    email: string | null;
    phone: string | null;
    location: string | null;
    linkedin: string | null;
    github: string | null;
  };

  export type ContactCountAggregateOutputType = {
    cid: number;
    uid: number;
    email: number;
    phone: number;
    location: number;
    linkedin: number;
    github: number;
    _all: number;
  };

  export type ContactAvgAggregateInputType = {
    cid?: true;
    uid?: true;
  };

  export type ContactSumAggregateInputType = {
    cid?: true;
    uid?: true;
  };

  export type ContactMinAggregateInputType = {
    cid?: true;
    uid?: true;
    email?: true;
    phone?: true;
    location?: true;
    linkedin?: true;
    github?: true;
  };

  export type ContactMaxAggregateInputType = {
    cid?: true;
    uid?: true;
    email?: true;
    phone?: true;
    location?: true;
    linkedin?: true;
    github?: true;
  };

  export type ContactCountAggregateInputType = {
    cid?: true;
    uid?: true;
    email?: true;
    phone?: true;
    location?: true;
    linkedin?: true;
    github?: true;
    _all?: true;
  };

  export type ContactAggregateArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Filter which contact to aggregate.
     */
    where?: contactWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of contacts to fetch.
     */
    orderBy?:
      | contactOrderByWithRelationInput
      | contactOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: contactWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` contacts from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` contacts.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned contacts
     **/
    _count?: true | ContactCountAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to average
     **/
    _avg?: ContactAvgAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to sum
     **/
    _sum?: ContactSumAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
     **/
    _min?: ContactMinAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
     **/
    _max?: ContactMaxAggregateInputType;
  };

  export type GetContactAggregateType<T extends ContactAggregateArgs> = {
    [P in keyof T & keyof AggregateContact]: P extends "_count" | "count"
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateContact[P]>
      : GetScalarType<T[P], AggregateContact[P]>;
  };

  export type contactGroupByArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    where?: contactWhereInput;
    orderBy?:
      | contactOrderByWithAggregationInput
      | contactOrderByWithAggregationInput[];
    by: ContactScalarFieldEnum[] | ContactScalarFieldEnum;
    having?: contactScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: ContactCountAggregateInputType | true;
    _avg?: ContactAvgAggregateInputType;
    _sum?: ContactSumAggregateInputType;
    _min?: ContactMinAggregateInputType;
    _max?: ContactMaxAggregateInputType;
  };

  export type ContactGroupByOutputType = {
    cid: number;
    uid: number;
    email: string;
    phone: string;
    location: string;
    linkedin: string;
    github: string;
    _count: ContactCountAggregateOutputType | null;
    _avg: ContactAvgAggregateOutputType | null;
    _sum: ContactSumAggregateOutputType | null;
    _min: ContactMinAggregateOutputType | null;
    _max: ContactMaxAggregateOutputType | null;
  };

  type GetContactGroupByPayload<T extends contactGroupByArgs> =
    Prisma.PrismaPromise<
      Array<
        PickEnumerable<ContactGroupByOutputType, T["by"]> & {
          [P in keyof T & keyof ContactGroupByOutputType]: P extends "_count"
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ContactGroupByOutputType[P]>
            : GetScalarType<T[P], ContactGroupByOutputType[P]>;
        }
      >
    >;

  export type contactSelect<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = $Extensions.GetSelect<
    {
      cid?: boolean;
      uid?: boolean;
      email?: boolean;
      phone?: boolean;
      location?: boolean;
      linkedin?: boolean;
      github?: boolean;
      user?: boolean | userDefaultArgs<ExtArgs>;
    },
    ExtArgs["result"]["contact"]
  >;

  export type contactSelectCreateManyAndReturn<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = $Extensions.GetSelect<
    {
      cid?: boolean;
      uid?: boolean;
      email?: boolean;
      phone?: boolean;
      location?: boolean;
      linkedin?: boolean;
      github?: boolean;
      user?: boolean | userDefaultArgs<ExtArgs>;
    },
    ExtArgs["result"]["contact"]
  >;

  export type contactSelectUpdateManyAndReturn<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = $Extensions.GetSelect<
    {
      cid?: boolean;
      uid?: boolean;
      email?: boolean;
      phone?: boolean;
      location?: boolean;
      linkedin?: boolean;
      github?: boolean;
      user?: boolean | userDefaultArgs<ExtArgs>;
    },
    ExtArgs["result"]["contact"]
  >;

  export type contactSelectScalar = {
    cid?: boolean;
    uid?: boolean;
    email?: boolean;
    phone?: boolean;
    location?: boolean;
    linkedin?: boolean;
    github?: boolean;
  };

  export type contactOmit<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = $Extensions.GetOmit<
    "cid" | "uid" | "email" | "phone" | "location" | "linkedin" | "github",
    ExtArgs["result"]["contact"]
  >;
  export type contactInclude<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    user?: boolean | userDefaultArgs<ExtArgs>;
  };
  export type contactIncludeCreateManyAndReturn<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    user?: boolean | userDefaultArgs<ExtArgs>;
  };
  export type contactIncludeUpdateManyAndReturn<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    user?: boolean | userDefaultArgs<ExtArgs>;
  };

  export type $contactPayload<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    name: "contact";
    objects: {
      user: Prisma.$userPayload<ExtArgs>;
    };
    scalars: $Extensions.GetPayloadResult<
      {
        cid: number;
        uid: number;
        email: string;
        phone: string;
        location: string;
        linkedin: string;
        github: string;
      },
      ExtArgs["result"]["contact"]
    >;
    composites: {};
  };

  type contactGetPayload<
    S extends boolean | null | undefined | contactDefaultArgs,
  > = $Result.GetResult<Prisma.$contactPayload, S>;

  type contactCountArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = Omit<contactFindManyArgs, "select" | "include" | "distinct" | "omit"> & {
    select?: ContactCountAggregateInputType | true;
  };

  export interface contactDelegate<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    GlobalOmitOptions = {},
  > {
    [K: symbol]: {
      types: Prisma.TypeMap<ExtArgs>["model"]["contact"];
      meta: { name: "contact" };
    };
    /**
     * Find zero or one Contact that matches the filter.
     * @param {contactFindUniqueArgs} args - Arguments to find a Contact
     * @example
     * // Get one Contact
     * const contact = await prisma.contact.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends contactFindUniqueArgs>(
      args: SelectSubset<T, contactFindUniqueArgs<ExtArgs>>,
    ): Prisma__contactClient<
      $Result.GetResult<
        Prisma.$contactPayload<ExtArgs>,
        T,
        "findUnique",
        GlobalOmitOptions
      > | null,
      null,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Find one Contact that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {contactFindUniqueOrThrowArgs} args - Arguments to find a Contact
     * @example
     * // Get one Contact
     * const contact = await prisma.contact.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends contactFindUniqueOrThrowArgs>(
      args: SelectSubset<T, contactFindUniqueOrThrowArgs<ExtArgs>>,
    ): Prisma__contactClient<
      $Result.GetResult<
        Prisma.$contactPayload<ExtArgs>,
        T,
        "findUniqueOrThrow",
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Find the first Contact that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {contactFindFirstArgs} args - Arguments to find a Contact
     * @example
     * // Get one Contact
     * const contact = await prisma.contact.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends contactFindFirstArgs>(
      args?: SelectSubset<T, contactFindFirstArgs<ExtArgs>>,
    ): Prisma__contactClient<
      $Result.GetResult<
        Prisma.$contactPayload<ExtArgs>,
        T,
        "findFirst",
        GlobalOmitOptions
      > | null,
      null,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Find the first Contact that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {contactFindFirstOrThrowArgs} args - Arguments to find a Contact
     * @example
     * // Get one Contact
     * const contact = await prisma.contact.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends contactFindFirstOrThrowArgs>(
      args?: SelectSubset<T, contactFindFirstOrThrowArgs<ExtArgs>>,
    ): Prisma__contactClient<
      $Result.GetResult<
        Prisma.$contactPayload<ExtArgs>,
        T,
        "findFirstOrThrow",
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Find zero or more Contacts that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {contactFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Contacts
     * const contacts = await prisma.contact.findMany()
     *
     * // Get first 10 Contacts
     * const contacts = await prisma.contact.findMany({ take: 10 })
     *
     * // Only select the `cid`
     * const contactWithCidOnly = await prisma.contact.findMany({ select: { cid: true } })
     *
     */
    findMany<T extends contactFindManyArgs>(
      args?: SelectSubset<T, contactFindManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<
      $Result.GetResult<
        Prisma.$contactPayload<ExtArgs>,
        T,
        "findMany",
        GlobalOmitOptions
      >
    >;

    /**
     * Create a Contact.
     * @param {contactCreateArgs} args - Arguments to create a Contact.
     * @example
     * // Create one Contact
     * const Contact = await prisma.contact.create({
     *   data: {
     *     // ... data to create a Contact
     *   }
     * })
     *
     */
    create<T extends contactCreateArgs>(
      args: SelectSubset<T, contactCreateArgs<ExtArgs>>,
    ): Prisma__contactClient<
      $Result.GetResult<
        Prisma.$contactPayload<ExtArgs>,
        T,
        "create",
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Create many Contacts.
     * @param {contactCreateManyArgs} args - Arguments to create many Contacts.
     * @example
     * // Create many Contacts
     * const contact = await prisma.contact.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     */
    createMany<T extends contactCreateManyArgs>(
      args?: SelectSubset<T, contactCreateManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Create many Contacts and returns the data saved in the database.
     * @param {contactCreateManyAndReturnArgs} args - Arguments to create many Contacts.
     * @example
     * // Create many Contacts
     * const contact = await prisma.contact.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Create many Contacts and only return the `cid`
     * const contactWithCidOnly = await prisma.contact.createManyAndReturn({
     *   select: { cid: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     *
     */
    createManyAndReturn<T extends contactCreateManyAndReturnArgs>(
      args?: SelectSubset<T, contactCreateManyAndReturnArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<
      $Result.GetResult<
        Prisma.$contactPayload<ExtArgs>,
        T,
        "createManyAndReturn",
        GlobalOmitOptions
      >
    >;

    /**
     * Delete a Contact.
     * @param {contactDeleteArgs} args - Arguments to delete one Contact.
     * @example
     * // Delete one Contact
     * const Contact = await prisma.contact.delete({
     *   where: {
     *     // ... filter to delete one Contact
     *   }
     * })
     *
     */
    delete<T extends contactDeleteArgs>(
      args: SelectSubset<T, contactDeleteArgs<ExtArgs>>,
    ): Prisma__contactClient<
      $Result.GetResult<
        Prisma.$contactPayload<ExtArgs>,
        T,
        "delete",
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Update one Contact.
     * @param {contactUpdateArgs} args - Arguments to update one Contact.
     * @example
     * // Update one Contact
     * const contact = await prisma.contact.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    update<T extends contactUpdateArgs>(
      args: SelectSubset<T, contactUpdateArgs<ExtArgs>>,
    ): Prisma__contactClient<
      $Result.GetResult<
        Prisma.$contactPayload<ExtArgs>,
        T,
        "update",
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Delete zero or more Contacts.
     * @param {contactDeleteManyArgs} args - Arguments to filter Contacts to delete.
     * @example
     * // Delete a few Contacts
     * const { count } = await prisma.contact.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     *
     */
    deleteMany<T extends contactDeleteManyArgs>(
      args?: SelectSubset<T, contactDeleteManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Update zero or more Contacts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {contactUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Contacts
     * const contact = await prisma.contact.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    updateMany<T extends contactUpdateManyArgs>(
      args: SelectSubset<T, contactUpdateManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Update zero or more Contacts and returns the data updated in the database.
     * @param {contactUpdateManyAndReturnArgs} args - Arguments to update many Contacts.
     * @example
     * // Update many Contacts
     * const contact = await prisma.contact.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Update zero or more Contacts and only return the `cid`
     * const contactWithCidOnly = await prisma.contact.updateManyAndReturn({
     *   select: { cid: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     *
     */
    updateManyAndReturn<T extends contactUpdateManyAndReturnArgs>(
      args: SelectSubset<T, contactUpdateManyAndReturnArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<
      $Result.GetResult<
        Prisma.$contactPayload<ExtArgs>,
        T,
        "updateManyAndReturn",
        GlobalOmitOptions
      >
    >;

    /**
     * Create or update one Contact.
     * @param {contactUpsertArgs} args - Arguments to update or create a Contact.
     * @example
     * // Update or create a Contact
     * const contact = await prisma.contact.upsert({
     *   create: {
     *     // ... data to create a Contact
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Contact we want to update
     *   }
     * })
     */
    upsert<T extends contactUpsertArgs>(
      args: SelectSubset<T, contactUpsertArgs<ExtArgs>>,
    ): Prisma__contactClient<
      $Result.GetResult<
        Prisma.$contactPayload<ExtArgs>,
        T,
        "upsert",
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Count the number of Contacts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {contactCountArgs} args - Arguments to filter Contacts to count.
     * @example
     * // Count the number of Contacts
     * const count = await prisma.contact.count({
     *   where: {
     *     // ... the filter for the Contacts we want to count
     *   }
     * })
     **/
    count<T extends contactCountArgs>(
      args?: Subset<T, contactCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<"select", any>
        ? T["select"] extends true
          ? number
          : GetScalarType<T["select"], ContactCountAggregateOutputType>
        : number
    >;

    /**
     * Allows you to perform aggregations operations on a Contact.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ContactAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
     **/
    aggregate<T extends ContactAggregateArgs>(
      args: Subset<T, ContactAggregateArgs>,
    ): Prisma.PrismaPromise<GetContactAggregateType<T>>;

    /**
     * Group by Contact.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {contactGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     *
     **/
    groupBy<
      T extends contactGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<"skip", Keys<T>>,
        Extends<"take", Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: contactGroupByArgs["orderBy"] }
        : { orderBy?: contactGroupByArgs["orderBy"] },
      OrderFields extends ExcludeUnderscoreKeys<
        Keys<MaybeTupleToUnion<T["orderBy"]>>
      >,
      ByFields extends MaybeTupleToUnion<T["by"]>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T["having"]>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T["by"] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
        ? `Error: "by" must not be empty.`
        : HavingValid extends False
          ? {
              [P in HavingFields]: P extends ByFields
                ? never
                : P extends string
                  ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
                  : [
                      Error,
                      "Field ",
                      P,
                      ` in "having" needs to be provided in "by"`,
                    ];
            }[HavingFields]
          : "take" extends Keys<T>
            ? "orderBy" extends Keys<T>
              ? ByValid extends True
                ? {}
                : {
                    [P in OrderFields]: P extends ByFields
                      ? never
                      : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
                  }[OrderFields]
              : 'Error: If you provide "take", you also need to provide "orderBy"'
            : "skip" extends Keys<T>
              ? "orderBy" extends Keys<T>
                ? ByValid extends True
                  ? {}
                  : {
                      [P in OrderFields]: P extends ByFields
                        ? never
                        : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
                    }[OrderFields]
                : 'Error: If you provide "skip", you also need to provide "orderBy"'
              : ByValid extends True
                ? {}
                : {
                    [P in OrderFields]: P extends ByFields
                      ? never
                      : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
                  }[OrderFields],
    >(
      args: SubsetIntersection<T, contactGroupByArgs, OrderByArg> & InputErrors,
    ): {} extends InputErrors
      ? GetContactGroupByPayload<T>
      : Prisma.PrismaPromise<InputErrors>;
    /**
     * Fields of the contact model
     */
    readonly fields: contactFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for contact.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__contactClient<
    T,
    Null = never,
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    GlobalOmitOptions = {},
  > extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    user<T extends userDefaultArgs<ExtArgs> = {}>(
      args?: Subset<T, userDefaultArgs<ExtArgs>>,
    ): Prisma__userClient<
      | $Result.GetResult<
          Prisma.$userPayload<ExtArgs>,
          T,
          "findUniqueOrThrow",
          GlobalOmitOptions
        >
      | Null,
      Null,
      ExtArgs,
      GlobalOmitOptions
    >;
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(
      onfulfilled?:
        | ((value: T) => TResult1 | PromiseLike<TResult1>)
        | undefined
        | null,
      onrejected?:
        | ((reason: any) => TResult2 | PromiseLike<TResult2>)
        | undefined
        | null,
    ): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(
      onrejected?:
        | ((reason: any) => TResult | PromiseLike<TResult>)
        | undefined
        | null,
    ): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }

  /**
   * Fields of the contact model
   */
  interface contactFieldRefs {
    readonly cid: FieldRef<"contact", "Int">;
    readonly uid: FieldRef<"contact", "Int">;
    readonly email: FieldRef<"contact", "String">;
    readonly phone: FieldRef<"contact", "String">;
    readonly location: FieldRef<"contact", "String">;
    readonly linkedin: FieldRef<"contact", "String">;
    readonly github: FieldRef<"contact", "String">;
  }

  // Custom InputTypes
  /**
   * contact findUnique
   */
  export type contactFindUniqueArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the contact
     */
    select?: contactSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the contact
     */
    omit?: contactOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: contactInclude<ExtArgs> | null;
    /**
     * Filter, which contact to fetch.
     */
    where: contactWhereUniqueInput;
  };

  /**
   * contact findUniqueOrThrow
   */
  export type contactFindUniqueOrThrowArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the contact
     */
    select?: contactSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the contact
     */
    omit?: contactOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: contactInclude<ExtArgs> | null;
    /**
     * Filter, which contact to fetch.
     */
    where: contactWhereUniqueInput;
  };

  /**
   * contact findFirst
   */
  export type contactFindFirstArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the contact
     */
    select?: contactSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the contact
     */
    omit?: contactOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: contactInclude<ExtArgs> | null;
    /**
     * Filter, which contact to fetch.
     */
    where?: contactWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of contacts to fetch.
     */
    orderBy?:
      | contactOrderByWithRelationInput
      | contactOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for contacts.
     */
    cursor?: contactWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` contacts from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` contacts.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of contacts.
     */
    distinct?: ContactScalarFieldEnum | ContactScalarFieldEnum[];
  };

  /**
   * contact findFirstOrThrow
   */
  export type contactFindFirstOrThrowArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the contact
     */
    select?: contactSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the contact
     */
    omit?: contactOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: contactInclude<ExtArgs> | null;
    /**
     * Filter, which contact to fetch.
     */
    where?: contactWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of contacts to fetch.
     */
    orderBy?:
      | contactOrderByWithRelationInput
      | contactOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for contacts.
     */
    cursor?: contactWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` contacts from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` contacts.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of contacts.
     */
    distinct?: ContactScalarFieldEnum | ContactScalarFieldEnum[];
  };

  /**
   * contact findMany
   */
  export type contactFindManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the contact
     */
    select?: contactSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the contact
     */
    omit?: contactOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: contactInclude<ExtArgs> | null;
    /**
     * Filter, which contacts to fetch.
     */
    where?: contactWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of contacts to fetch.
     */
    orderBy?:
      | contactOrderByWithRelationInput
      | contactOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing contacts.
     */
    cursor?: contactWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` contacts from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` contacts.
     */
    skip?: number;
    distinct?: ContactScalarFieldEnum | ContactScalarFieldEnum[];
  };

  /**
   * contact create
   */
  export type contactCreateArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the contact
     */
    select?: contactSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the contact
     */
    omit?: contactOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: contactInclude<ExtArgs> | null;
    /**
     * The data needed to create a contact.
     */
    data: XOR<contactCreateInput, contactUncheckedCreateInput>;
  };

  /**
   * contact createMany
   */
  export type contactCreateManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * The data used to create many contacts.
     */
    data: contactCreateManyInput | contactCreateManyInput[];
    skipDuplicates?: boolean;
  };

  /**
   * contact createManyAndReturn
   */
  export type contactCreateManyAndReturnArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the contact
     */
    select?: contactSelectCreateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the contact
     */
    omit?: contactOmit<ExtArgs> | null;
    /**
     * The data used to create many contacts.
     */
    data: contactCreateManyInput | contactCreateManyInput[];
    skipDuplicates?: boolean;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: contactIncludeCreateManyAndReturn<ExtArgs> | null;
  };

  /**
   * contact update
   */
  export type contactUpdateArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the contact
     */
    select?: contactSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the contact
     */
    omit?: contactOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: contactInclude<ExtArgs> | null;
    /**
     * The data needed to update a contact.
     */
    data: XOR<contactUpdateInput, contactUncheckedUpdateInput>;
    /**
     * Choose, which contact to update.
     */
    where: contactWhereUniqueInput;
  };

  /**
   * contact updateMany
   */
  export type contactUpdateManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * The data used to update contacts.
     */
    data: XOR<contactUpdateManyMutationInput, contactUncheckedUpdateManyInput>;
    /**
     * Filter which contacts to update
     */
    where?: contactWhereInput;
    /**
     * Limit how many contacts to update.
     */
    limit?: number;
  };

  /**
   * contact updateManyAndReturn
   */
  export type contactUpdateManyAndReturnArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the contact
     */
    select?: contactSelectUpdateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the contact
     */
    omit?: contactOmit<ExtArgs> | null;
    /**
     * The data used to update contacts.
     */
    data: XOR<contactUpdateManyMutationInput, contactUncheckedUpdateManyInput>;
    /**
     * Filter which contacts to update
     */
    where?: contactWhereInput;
    /**
     * Limit how many contacts to update.
     */
    limit?: number;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: contactIncludeUpdateManyAndReturn<ExtArgs> | null;
  };

  /**
   * contact upsert
   */
  export type contactUpsertArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the contact
     */
    select?: contactSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the contact
     */
    omit?: contactOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: contactInclude<ExtArgs> | null;
    /**
     * The filter to search for the contact to update in case it exists.
     */
    where: contactWhereUniqueInput;
    /**
     * In case the contact found by the `where` argument doesn't exist, create a new contact with this data.
     */
    create: XOR<contactCreateInput, contactUncheckedCreateInput>;
    /**
     * In case the contact was found with the provided `where` argument, update it with this data.
     */
    update: XOR<contactUpdateInput, contactUncheckedUpdateInput>;
  };

  /**
   * contact delete
   */
  export type contactDeleteArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the contact
     */
    select?: contactSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the contact
     */
    omit?: contactOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: contactInclude<ExtArgs> | null;
    /**
     * Filter which contact to delete.
     */
    where: contactWhereUniqueInput;
  };

  /**
   * contact deleteMany
   */
  export type contactDeleteManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Filter which contacts to delete
     */
    where?: contactWhereInput;
    /**
     * Limit how many contacts to delete.
     */
    limit?: number;
  };

  /**
   * contact without action
   */
  export type contactDefaultArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the contact
     */
    select?: contactSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the contact
     */
    omit?: contactOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: contactInclude<ExtArgs> | null;
  };

  /**
   * Model About
   */

  export type AggregateAbout = {
    _count: AboutCountAggregateOutputType | null;
    _avg: AboutAvgAggregateOutputType | null;
    _sum: AboutSumAggregateOutputType | null;
    _min: AboutMinAggregateOutputType | null;
    _max: AboutMaxAggregateOutputType | null;
  };

  export type AboutAvgAggregateOutputType = {
    aid: number | null;
    uid: number | null;
  };

  export type AboutSumAggregateOutputType = {
    aid: number | null;
    uid: number | null;
  };

  export type AboutMinAggregateOutputType = {
    aid: number | null;
    uid: number | null;
    image: string | null;
    about: string | null;
    style: string | null;
  };

  export type AboutMaxAggregateOutputType = {
    aid: number | null;
    uid: number | null;
    image: string | null;
    about: string | null;
    style: string | null;
  };

  export type AboutCountAggregateOutputType = {
    aid: number;
    uid: number;
    image: number;
    about: number;
    style: number;
    _all: number;
  };

  export type AboutAvgAggregateInputType = {
    aid?: true;
    uid?: true;
  };

  export type AboutSumAggregateInputType = {
    aid?: true;
    uid?: true;
  };

  export type AboutMinAggregateInputType = {
    aid?: true;
    uid?: true;
    image?: true;
    about?: true;
    style?: true;
  };

  export type AboutMaxAggregateInputType = {
    aid?: true;
    uid?: true;
    image?: true;
    about?: true;
    style?: true;
  };

  export type AboutCountAggregateInputType = {
    aid?: true;
    uid?: true;
    image?: true;
    about?: true;
    style?: true;
    _all?: true;
  };

  export type AboutAggregateArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Filter which About to aggregate.
     */
    where?: AboutWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Abouts to fetch.
     */
    orderBy?: AboutOrderByWithRelationInput | AboutOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: AboutWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Abouts from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Abouts.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned Abouts
     **/
    _count?: true | AboutCountAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to average
     **/
    _avg?: AboutAvgAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to sum
     **/
    _sum?: AboutSumAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
     **/
    _min?: AboutMinAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
     **/
    _max?: AboutMaxAggregateInputType;
  };

  export type GetAboutAggregateType<T extends AboutAggregateArgs> = {
    [P in keyof T & keyof AggregateAbout]: P extends "_count" | "count"
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAbout[P]>
      : GetScalarType<T[P], AggregateAbout[P]>;
  };

  export type AboutGroupByArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    where?: AboutWhereInput;
    orderBy?:
      | AboutOrderByWithAggregationInput
      | AboutOrderByWithAggregationInput[];
    by: AboutScalarFieldEnum[] | AboutScalarFieldEnum;
    having?: AboutScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: AboutCountAggregateInputType | true;
    _avg?: AboutAvgAggregateInputType;
    _sum?: AboutSumAggregateInputType;
    _min?: AboutMinAggregateInputType;
    _max?: AboutMaxAggregateInputType;
  };

  export type AboutGroupByOutputType = {
    aid: number;
    uid: number;
    image: string;
    about: string;
    style: string;
    _count: AboutCountAggregateOutputType | null;
    _avg: AboutAvgAggregateOutputType | null;
    _sum: AboutSumAggregateOutputType | null;
    _min: AboutMinAggregateOutputType | null;
    _max: AboutMaxAggregateOutputType | null;
  };

  type GetAboutGroupByPayload<T extends AboutGroupByArgs> =
    Prisma.PrismaPromise<
      Array<
        PickEnumerable<AboutGroupByOutputType, T["by"]> & {
          [P in keyof T & keyof AboutGroupByOutputType]: P extends "_count"
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AboutGroupByOutputType[P]>
            : GetScalarType<T[P], AboutGroupByOutputType[P]>;
        }
      >
    >;

  export type AboutSelect<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = $Extensions.GetSelect<
    {
      aid?: boolean;
      uid?: boolean;
      image?: boolean;
      about?: boolean;
      style?: boolean;
      user?: boolean | userDefaultArgs<ExtArgs>;
    },
    ExtArgs["result"]["about"]
  >;

  export type AboutSelectCreateManyAndReturn<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = $Extensions.GetSelect<
    {
      aid?: boolean;
      uid?: boolean;
      image?: boolean;
      about?: boolean;
      style?: boolean;
      user?: boolean | userDefaultArgs<ExtArgs>;
    },
    ExtArgs["result"]["about"]
  >;

  export type AboutSelectUpdateManyAndReturn<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = $Extensions.GetSelect<
    {
      aid?: boolean;
      uid?: boolean;
      image?: boolean;
      about?: boolean;
      style?: boolean;
      user?: boolean | userDefaultArgs<ExtArgs>;
    },
    ExtArgs["result"]["about"]
  >;

  export type AboutSelectScalar = {
    aid?: boolean;
    uid?: boolean;
    image?: boolean;
    about?: boolean;
    style?: boolean;
  };

  export type AboutOmit<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = $Extensions.GetOmit<
    "aid" | "uid" | "image" | "about" | "style",
    ExtArgs["result"]["about"]
  >;
  export type AboutInclude<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    user?: boolean | userDefaultArgs<ExtArgs>;
  };
  export type AboutIncludeCreateManyAndReturn<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    user?: boolean | userDefaultArgs<ExtArgs>;
  };
  export type AboutIncludeUpdateManyAndReturn<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    user?: boolean | userDefaultArgs<ExtArgs>;
  };

  export type $AboutPayload<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    name: "About";
    objects: {
      user: Prisma.$userPayload<ExtArgs>;
    };
    scalars: $Extensions.GetPayloadResult<
      {
        aid: number;
        uid: number;
        image: string;
        about: string;
        style: string;
      },
      ExtArgs["result"]["about"]
    >;
    composites: {};
  };

  type AboutGetPayload<
    S extends boolean | null | undefined | AboutDefaultArgs,
  > = $Result.GetResult<Prisma.$AboutPayload, S>;

  type AboutCountArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = Omit<AboutFindManyArgs, "select" | "include" | "distinct" | "omit"> & {
    select?: AboutCountAggregateInputType | true;
  };

  export interface AboutDelegate<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    GlobalOmitOptions = {},
  > {
    [K: symbol]: {
      types: Prisma.TypeMap<ExtArgs>["model"]["About"];
      meta: { name: "About" };
    };
    /**
     * Find zero or one About that matches the filter.
     * @param {AboutFindUniqueArgs} args - Arguments to find a About
     * @example
     * // Get one About
     * const about = await prisma.about.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends AboutFindUniqueArgs>(
      args: SelectSubset<T, AboutFindUniqueArgs<ExtArgs>>,
    ): Prisma__AboutClient<
      $Result.GetResult<
        Prisma.$AboutPayload<ExtArgs>,
        T,
        "findUnique",
        GlobalOmitOptions
      > | null,
      null,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Find one About that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {AboutFindUniqueOrThrowArgs} args - Arguments to find a About
     * @example
     * // Get one About
     * const about = await prisma.about.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends AboutFindUniqueOrThrowArgs>(
      args: SelectSubset<T, AboutFindUniqueOrThrowArgs<ExtArgs>>,
    ): Prisma__AboutClient<
      $Result.GetResult<
        Prisma.$AboutPayload<ExtArgs>,
        T,
        "findUniqueOrThrow",
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Find the first About that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AboutFindFirstArgs} args - Arguments to find a About
     * @example
     * // Get one About
     * const about = await prisma.about.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends AboutFindFirstArgs>(
      args?: SelectSubset<T, AboutFindFirstArgs<ExtArgs>>,
    ): Prisma__AboutClient<
      $Result.GetResult<
        Prisma.$AboutPayload<ExtArgs>,
        T,
        "findFirst",
        GlobalOmitOptions
      > | null,
      null,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Find the first About that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AboutFindFirstOrThrowArgs} args - Arguments to find a About
     * @example
     * // Get one About
     * const about = await prisma.about.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends AboutFindFirstOrThrowArgs>(
      args?: SelectSubset<T, AboutFindFirstOrThrowArgs<ExtArgs>>,
    ): Prisma__AboutClient<
      $Result.GetResult<
        Prisma.$AboutPayload<ExtArgs>,
        T,
        "findFirstOrThrow",
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Find zero or more Abouts that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AboutFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Abouts
     * const abouts = await prisma.about.findMany()
     *
     * // Get first 10 Abouts
     * const abouts = await prisma.about.findMany({ take: 10 })
     *
     * // Only select the `aid`
     * const aboutWithAidOnly = await prisma.about.findMany({ select: { aid: true } })
     *
     */
    findMany<T extends AboutFindManyArgs>(
      args?: SelectSubset<T, AboutFindManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<
      $Result.GetResult<
        Prisma.$AboutPayload<ExtArgs>,
        T,
        "findMany",
        GlobalOmitOptions
      >
    >;

    /**
     * Create a About.
     * @param {AboutCreateArgs} args - Arguments to create a About.
     * @example
     * // Create one About
     * const About = await prisma.about.create({
     *   data: {
     *     // ... data to create a About
     *   }
     * })
     *
     */
    create<T extends AboutCreateArgs>(
      args: SelectSubset<T, AboutCreateArgs<ExtArgs>>,
    ): Prisma__AboutClient<
      $Result.GetResult<
        Prisma.$AboutPayload<ExtArgs>,
        T,
        "create",
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Create many Abouts.
     * @param {AboutCreateManyArgs} args - Arguments to create many Abouts.
     * @example
     * // Create many Abouts
     * const about = await prisma.about.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     */
    createMany<T extends AboutCreateManyArgs>(
      args?: SelectSubset<T, AboutCreateManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Create many Abouts and returns the data saved in the database.
     * @param {AboutCreateManyAndReturnArgs} args - Arguments to create many Abouts.
     * @example
     * // Create many Abouts
     * const about = await prisma.about.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Create many Abouts and only return the `aid`
     * const aboutWithAidOnly = await prisma.about.createManyAndReturn({
     *   select: { aid: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     *
     */
    createManyAndReturn<T extends AboutCreateManyAndReturnArgs>(
      args?: SelectSubset<T, AboutCreateManyAndReturnArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<
      $Result.GetResult<
        Prisma.$AboutPayload<ExtArgs>,
        T,
        "createManyAndReturn",
        GlobalOmitOptions
      >
    >;

    /**
     * Delete a About.
     * @param {AboutDeleteArgs} args - Arguments to delete one About.
     * @example
     * // Delete one About
     * const About = await prisma.about.delete({
     *   where: {
     *     // ... filter to delete one About
     *   }
     * })
     *
     */
    delete<T extends AboutDeleteArgs>(
      args: SelectSubset<T, AboutDeleteArgs<ExtArgs>>,
    ): Prisma__AboutClient<
      $Result.GetResult<
        Prisma.$AboutPayload<ExtArgs>,
        T,
        "delete",
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Update one About.
     * @param {AboutUpdateArgs} args - Arguments to update one About.
     * @example
     * // Update one About
     * const about = await prisma.about.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    update<T extends AboutUpdateArgs>(
      args: SelectSubset<T, AboutUpdateArgs<ExtArgs>>,
    ): Prisma__AboutClient<
      $Result.GetResult<
        Prisma.$AboutPayload<ExtArgs>,
        T,
        "update",
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Delete zero or more Abouts.
     * @param {AboutDeleteManyArgs} args - Arguments to filter Abouts to delete.
     * @example
     * // Delete a few Abouts
     * const { count } = await prisma.about.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     *
     */
    deleteMany<T extends AboutDeleteManyArgs>(
      args?: SelectSubset<T, AboutDeleteManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Update zero or more Abouts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AboutUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Abouts
     * const about = await prisma.about.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    updateMany<T extends AboutUpdateManyArgs>(
      args: SelectSubset<T, AboutUpdateManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Update zero or more Abouts and returns the data updated in the database.
     * @param {AboutUpdateManyAndReturnArgs} args - Arguments to update many Abouts.
     * @example
     * // Update many Abouts
     * const about = await prisma.about.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Update zero or more Abouts and only return the `aid`
     * const aboutWithAidOnly = await prisma.about.updateManyAndReturn({
     *   select: { aid: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     *
     */
    updateManyAndReturn<T extends AboutUpdateManyAndReturnArgs>(
      args: SelectSubset<T, AboutUpdateManyAndReturnArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<
      $Result.GetResult<
        Prisma.$AboutPayload<ExtArgs>,
        T,
        "updateManyAndReturn",
        GlobalOmitOptions
      >
    >;

    /**
     * Create or update one About.
     * @param {AboutUpsertArgs} args - Arguments to update or create a About.
     * @example
     * // Update or create a About
     * const about = await prisma.about.upsert({
     *   create: {
     *     // ... data to create a About
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the About we want to update
     *   }
     * })
     */
    upsert<T extends AboutUpsertArgs>(
      args: SelectSubset<T, AboutUpsertArgs<ExtArgs>>,
    ): Prisma__AboutClient<
      $Result.GetResult<
        Prisma.$AboutPayload<ExtArgs>,
        T,
        "upsert",
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Count the number of Abouts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AboutCountArgs} args - Arguments to filter Abouts to count.
     * @example
     * // Count the number of Abouts
     * const count = await prisma.about.count({
     *   where: {
     *     // ... the filter for the Abouts we want to count
     *   }
     * })
     **/
    count<T extends AboutCountArgs>(
      args?: Subset<T, AboutCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<"select", any>
        ? T["select"] extends true
          ? number
          : GetScalarType<T["select"], AboutCountAggregateOutputType>
        : number
    >;

    /**
     * Allows you to perform aggregations operations on a About.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AboutAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
     **/
    aggregate<T extends AboutAggregateArgs>(
      args: Subset<T, AboutAggregateArgs>,
    ): Prisma.PrismaPromise<GetAboutAggregateType<T>>;

    /**
     * Group by About.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AboutGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     *
     **/
    groupBy<
      T extends AboutGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<"skip", Keys<T>>,
        Extends<"take", Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: AboutGroupByArgs["orderBy"] }
        : { orderBy?: AboutGroupByArgs["orderBy"] },
      OrderFields extends ExcludeUnderscoreKeys<
        Keys<MaybeTupleToUnion<T["orderBy"]>>
      >,
      ByFields extends MaybeTupleToUnion<T["by"]>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T["having"]>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T["by"] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
        ? `Error: "by" must not be empty.`
        : HavingValid extends False
          ? {
              [P in HavingFields]: P extends ByFields
                ? never
                : P extends string
                  ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
                  : [
                      Error,
                      "Field ",
                      P,
                      ` in "having" needs to be provided in "by"`,
                    ];
            }[HavingFields]
          : "take" extends Keys<T>
            ? "orderBy" extends Keys<T>
              ? ByValid extends True
                ? {}
                : {
                    [P in OrderFields]: P extends ByFields
                      ? never
                      : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
                  }[OrderFields]
              : 'Error: If you provide "take", you also need to provide "orderBy"'
            : "skip" extends Keys<T>
              ? "orderBy" extends Keys<T>
                ? ByValid extends True
                  ? {}
                  : {
                      [P in OrderFields]: P extends ByFields
                        ? never
                        : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
                    }[OrderFields]
                : 'Error: If you provide "skip", you also need to provide "orderBy"'
              : ByValid extends True
                ? {}
                : {
                    [P in OrderFields]: P extends ByFields
                      ? never
                      : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
                  }[OrderFields],
    >(
      args: SubsetIntersection<T, AboutGroupByArgs, OrderByArg> & InputErrors,
    ): {} extends InputErrors
      ? GetAboutGroupByPayload<T>
      : Prisma.PrismaPromise<InputErrors>;
    /**
     * Fields of the About model
     */
    readonly fields: AboutFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for About.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__AboutClient<
    T,
    Null = never,
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    GlobalOmitOptions = {},
  > extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    user<T extends userDefaultArgs<ExtArgs> = {}>(
      args?: Subset<T, userDefaultArgs<ExtArgs>>,
    ): Prisma__userClient<
      | $Result.GetResult<
          Prisma.$userPayload<ExtArgs>,
          T,
          "findUniqueOrThrow",
          GlobalOmitOptions
        >
      | Null,
      Null,
      ExtArgs,
      GlobalOmitOptions
    >;
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(
      onfulfilled?:
        | ((value: T) => TResult1 | PromiseLike<TResult1>)
        | undefined
        | null,
      onrejected?:
        | ((reason: any) => TResult2 | PromiseLike<TResult2>)
        | undefined
        | null,
    ): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(
      onrejected?:
        | ((reason: any) => TResult | PromiseLike<TResult>)
        | undefined
        | null,
    ): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }

  /**
   * Fields of the About model
   */
  interface AboutFieldRefs {
    readonly aid: FieldRef<"About", "Int">;
    readonly uid: FieldRef<"About", "Int">;
    readonly image: FieldRef<"About", "String">;
    readonly about: FieldRef<"About", "String">;
    readonly style: FieldRef<"About", "String">;
  }

  // Custom InputTypes
  /**
   * About findUnique
   */
  export type AboutFindUniqueArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the About
     */
    select?: AboutSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the About
     */
    omit?: AboutOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AboutInclude<ExtArgs> | null;
    /**
     * Filter, which About to fetch.
     */
    where: AboutWhereUniqueInput;
  };

  /**
   * About findUniqueOrThrow
   */
  export type AboutFindUniqueOrThrowArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the About
     */
    select?: AboutSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the About
     */
    omit?: AboutOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AboutInclude<ExtArgs> | null;
    /**
     * Filter, which About to fetch.
     */
    where: AboutWhereUniqueInput;
  };

  /**
   * About findFirst
   */
  export type AboutFindFirstArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the About
     */
    select?: AboutSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the About
     */
    omit?: AboutOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AboutInclude<ExtArgs> | null;
    /**
     * Filter, which About to fetch.
     */
    where?: AboutWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Abouts to fetch.
     */
    orderBy?: AboutOrderByWithRelationInput | AboutOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for Abouts.
     */
    cursor?: AboutWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Abouts from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Abouts.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of Abouts.
     */
    distinct?: AboutScalarFieldEnum | AboutScalarFieldEnum[];
  };

  /**
   * About findFirstOrThrow
   */
  export type AboutFindFirstOrThrowArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the About
     */
    select?: AboutSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the About
     */
    omit?: AboutOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AboutInclude<ExtArgs> | null;
    /**
     * Filter, which About to fetch.
     */
    where?: AboutWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Abouts to fetch.
     */
    orderBy?: AboutOrderByWithRelationInput | AboutOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for Abouts.
     */
    cursor?: AboutWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Abouts from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Abouts.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of Abouts.
     */
    distinct?: AboutScalarFieldEnum | AboutScalarFieldEnum[];
  };

  /**
   * About findMany
   */
  export type AboutFindManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the About
     */
    select?: AboutSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the About
     */
    omit?: AboutOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AboutInclude<ExtArgs> | null;
    /**
     * Filter, which Abouts to fetch.
     */
    where?: AboutWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Abouts to fetch.
     */
    orderBy?: AboutOrderByWithRelationInput | AboutOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing Abouts.
     */
    cursor?: AboutWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Abouts from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Abouts.
     */
    skip?: number;
    distinct?: AboutScalarFieldEnum | AboutScalarFieldEnum[];
  };

  /**
   * About create
   */
  export type AboutCreateArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the About
     */
    select?: AboutSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the About
     */
    omit?: AboutOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AboutInclude<ExtArgs> | null;
    /**
     * The data needed to create a About.
     */
    data: XOR<AboutCreateInput, AboutUncheckedCreateInput>;
  };

  /**
   * About createMany
   */
  export type AboutCreateManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * The data used to create many Abouts.
     */
    data: AboutCreateManyInput | AboutCreateManyInput[];
    skipDuplicates?: boolean;
  };

  /**
   * About createManyAndReturn
   */
  export type AboutCreateManyAndReturnArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the About
     */
    select?: AboutSelectCreateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the About
     */
    omit?: AboutOmit<ExtArgs> | null;
    /**
     * The data used to create many Abouts.
     */
    data: AboutCreateManyInput | AboutCreateManyInput[];
    skipDuplicates?: boolean;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AboutIncludeCreateManyAndReturn<ExtArgs> | null;
  };

  /**
   * About update
   */
  export type AboutUpdateArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the About
     */
    select?: AboutSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the About
     */
    omit?: AboutOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AboutInclude<ExtArgs> | null;
    /**
     * The data needed to update a About.
     */
    data: XOR<AboutUpdateInput, AboutUncheckedUpdateInput>;
    /**
     * Choose, which About to update.
     */
    where: AboutWhereUniqueInput;
  };

  /**
   * About updateMany
   */
  export type AboutUpdateManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * The data used to update Abouts.
     */
    data: XOR<AboutUpdateManyMutationInput, AboutUncheckedUpdateManyInput>;
    /**
     * Filter which Abouts to update
     */
    where?: AboutWhereInput;
    /**
     * Limit how many Abouts to update.
     */
    limit?: number;
  };

  /**
   * About updateManyAndReturn
   */
  export type AboutUpdateManyAndReturnArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the About
     */
    select?: AboutSelectUpdateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the About
     */
    omit?: AboutOmit<ExtArgs> | null;
    /**
     * The data used to update Abouts.
     */
    data: XOR<AboutUpdateManyMutationInput, AboutUncheckedUpdateManyInput>;
    /**
     * Filter which Abouts to update
     */
    where?: AboutWhereInput;
    /**
     * Limit how many Abouts to update.
     */
    limit?: number;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AboutIncludeUpdateManyAndReturn<ExtArgs> | null;
  };

  /**
   * About upsert
   */
  export type AboutUpsertArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the About
     */
    select?: AboutSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the About
     */
    omit?: AboutOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AboutInclude<ExtArgs> | null;
    /**
     * The filter to search for the About to update in case it exists.
     */
    where: AboutWhereUniqueInput;
    /**
     * In case the About found by the `where` argument doesn't exist, create a new About with this data.
     */
    create: XOR<AboutCreateInput, AboutUncheckedCreateInput>;
    /**
     * In case the About was found with the provided `where` argument, update it with this data.
     */
    update: XOR<AboutUpdateInput, AboutUncheckedUpdateInput>;
  };

  /**
   * About delete
   */
  export type AboutDeleteArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the About
     */
    select?: AboutSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the About
     */
    omit?: AboutOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AboutInclude<ExtArgs> | null;
    /**
     * Filter which About to delete.
     */
    where: AboutWhereUniqueInput;
  };

  /**
   * About deleteMany
   */
  export type AboutDeleteManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Filter which Abouts to delete
     */
    where?: AboutWhereInput;
    /**
     * Limit how many Abouts to delete.
     */
    limit?: number;
  };

  /**
   * About without action
   */
  export type AboutDefaultArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the About
     */
    select?: AboutSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the About
     */
    omit?: AboutOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AboutInclude<ExtArgs> | null;
  };

  /**
   * Model userstyle
   */

  export type AggregateUserstyle = {
    _count: UserstyleCountAggregateOutputType | null;
    _avg: UserstyleAvgAggregateOutputType | null;
    _sum: UserstyleSumAggregateOutputType | null;
    _min: UserstyleMinAggregateOutputType | null;
    _max: UserstyleMaxAggregateOutputType | null;
  };

  export type UserstyleAvgAggregateOutputType = {
    uid: number | null;
  };

  export type UserstyleSumAggregateOutputType = {
    uid: number | null;
  };

  export type UserstyleMinAggregateOutputType = {
    uid: number | null;
    sstyle: string | null;
    pstyle: string | null;
    estyle: string | null;
    exstyle: string | null;
  };

  export type UserstyleMaxAggregateOutputType = {
    uid: number | null;
    sstyle: string | null;
    pstyle: string | null;
    estyle: string | null;
    exstyle: string | null;
  };

  export type UserstyleCountAggregateOutputType = {
    uid: number;
    sstyle: number;
    pstyle: number;
    estyle: number;
    exstyle: number;
    _all: number;
  };

  export type UserstyleAvgAggregateInputType = {
    uid?: true;
  };

  export type UserstyleSumAggregateInputType = {
    uid?: true;
  };

  export type UserstyleMinAggregateInputType = {
    uid?: true;
    sstyle?: true;
    pstyle?: true;
    estyle?: true;
    exstyle?: true;
  };

  export type UserstyleMaxAggregateInputType = {
    uid?: true;
    sstyle?: true;
    pstyle?: true;
    estyle?: true;
    exstyle?: true;
  };

  export type UserstyleCountAggregateInputType = {
    uid?: true;
    sstyle?: true;
    pstyle?: true;
    estyle?: true;
    exstyle?: true;
    _all?: true;
  };

  export type UserstyleAggregateArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Filter which userstyle to aggregate.
     */
    where?: userstyleWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of userstyles to fetch.
     */
    orderBy?:
      | userstyleOrderByWithRelationInput
      | userstyleOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: userstyleWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` userstyles from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` userstyles.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned userstyles
     **/
    _count?: true | UserstyleCountAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to average
     **/
    _avg?: UserstyleAvgAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to sum
     **/
    _sum?: UserstyleSumAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
     **/
    _min?: UserstyleMinAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
     **/
    _max?: UserstyleMaxAggregateInputType;
  };

  export type GetUserstyleAggregateType<T extends UserstyleAggregateArgs> = {
    [P in keyof T & keyof AggregateUserstyle]: P extends "_count" | "count"
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUserstyle[P]>
      : GetScalarType<T[P], AggregateUserstyle[P]>;
  };

  export type userstyleGroupByArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    where?: userstyleWhereInput;
    orderBy?:
      | userstyleOrderByWithAggregationInput
      | userstyleOrderByWithAggregationInput[];
    by: UserstyleScalarFieldEnum[] | UserstyleScalarFieldEnum;
    having?: userstyleScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: UserstyleCountAggregateInputType | true;
    _avg?: UserstyleAvgAggregateInputType;
    _sum?: UserstyleSumAggregateInputType;
    _min?: UserstyleMinAggregateInputType;
    _max?: UserstyleMaxAggregateInputType;
  };

  export type UserstyleGroupByOutputType = {
    uid: number;
    sstyle: string;
    pstyle: string;
    estyle: string;
    exstyle: string;
    _count: UserstyleCountAggregateOutputType | null;
    _avg: UserstyleAvgAggregateOutputType | null;
    _sum: UserstyleSumAggregateOutputType | null;
    _min: UserstyleMinAggregateOutputType | null;
    _max: UserstyleMaxAggregateOutputType | null;
  };

  type GetUserstyleGroupByPayload<T extends userstyleGroupByArgs> =
    Prisma.PrismaPromise<
      Array<
        PickEnumerable<UserstyleGroupByOutputType, T["by"]> & {
          [P in keyof T & keyof UserstyleGroupByOutputType]: P extends "_count"
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserstyleGroupByOutputType[P]>
            : GetScalarType<T[P], UserstyleGroupByOutputType[P]>;
        }
      >
    >;

  export type userstyleSelect<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = $Extensions.GetSelect<
    {
      uid?: boolean;
      sstyle?: boolean;
      pstyle?: boolean;
      estyle?: boolean;
      exstyle?: boolean;
      user?: boolean | userDefaultArgs<ExtArgs>;
    },
    ExtArgs["result"]["userstyle"]
  >;

  export type userstyleSelectCreateManyAndReturn<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = $Extensions.GetSelect<
    {
      uid?: boolean;
      sstyle?: boolean;
      pstyle?: boolean;
      estyle?: boolean;
      exstyle?: boolean;
      user?: boolean | userDefaultArgs<ExtArgs>;
    },
    ExtArgs["result"]["userstyle"]
  >;

  export type userstyleSelectUpdateManyAndReturn<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = $Extensions.GetSelect<
    {
      uid?: boolean;
      sstyle?: boolean;
      pstyle?: boolean;
      estyle?: boolean;
      exstyle?: boolean;
      user?: boolean | userDefaultArgs<ExtArgs>;
    },
    ExtArgs["result"]["userstyle"]
  >;

  export type userstyleSelectScalar = {
    uid?: boolean;
    sstyle?: boolean;
    pstyle?: boolean;
    estyle?: boolean;
    exstyle?: boolean;
  };

  export type userstyleOmit<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = $Extensions.GetOmit<
    "uid" | "sstyle" | "pstyle" | "estyle" | "exstyle",
    ExtArgs["result"]["userstyle"]
  >;
  export type userstyleInclude<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    user?: boolean | userDefaultArgs<ExtArgs>;
  };
  export type userstyleIncludeCreateManyAndReturn<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    user?: boolean | userDefaultArgs<ExtArgs>;
  };
  export type userstyleIncludeUpdateManyAndReturn<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    user?: boolean | userDefaultArgs<ExtArgs>;
  };

  export type $userstylePayload<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    name: "userstyle";
    objects: {
      user: Prisma.$userPayload<ExtArgs>;
    };
    scalars: $Extensions.GetPayloadResult<
      {
        uid: number;
        sstyle: string;
        pstyle: string;
        estyle: string;
        exstyle: string;
      },
      ExtArgs["result"]["userstyle"]
    >;
    composites: {};
  };

  type userstyleGetPayload<
    S extends boolean | null | undefined | userstyleDefaultArgs,
  > = $Result.GetResult<Prisma.$userstylePayload, S>;

  type userstyleCountArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = Omit<
    userstyleFindManyArgs,
    "select" | "include" | "distinct" | "omit"
  > & {
    select?: UserstyleCountAggregateInputType | true;
  };

  export interface userstyleDelegate<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    GlobalOmitOptions = {},
  > {
    [K: symbol]: {
      types: Prisma.TypeMap<ExtArgs>["model"]["userstyle"];
      meta: { name: "userstyle" };
    };
    /**
     * Find zero or one Userstyle that matches the filter.
     * @param {userstyleFindUniqueArgs} args - Arguments to find a Userstyle
     * @example
     * // Get one Userstyle
     * const userstyle = await prisma.userstyle.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends userstyleFindUniqueArgs>(
      args: SelectSubset<T, userstyleFindUniqueArgs<ExtArgs>>,
    ): Prisma__userstyleClient<
      $Result.GetResult<
        Prisma.$userstylePayload<ExtArgs>,
        T,
        "findUnique",
        GlobalOmitOptions
      > | null,
      null,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Find one Userstyle that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {userstyleFindUniqueOrThrowArgs} args - Arguments to find a Userstyle
     * @example
     * // Get one Userstyle
     * const userstyle = await prisma.userstyle.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends userstyleFindUniqueOrThrowArgs>(
      args: SelectSubset<T, userstyleFindUniqueOrThrowArgs<ExtArgs>>,
    ): Prisma__userstyleClient<
      $Result.GetResult<
        Prisma.$userstylePayload<ExtArgs>,
        T,
        "findUniqueOrThrow",
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Find the first Userstyle that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {userstyleFindFirstArgs} args - Arguments to find a Userstyle
     * @example
     * // Get one Userstyle
     * const userstyle = await prisma.userstyle.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends userstyleFindFirstArgs>(
      args?: SelectSubset<T, userstyleFindFirstArgs<ExtArgs>>,
    ): Prisma__userstyleClient<
      $Result.GetResult<
        Prisma.$userstylePayload<ExtArgs>,
        T,
        "findFirst",
        GlobalOmitOptions
      > | null,
      null,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Find the first Userstyle that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {userstyleFindFirstOrThrowArgs} args - Arguments to find a Userstyle
     * @example
     * // Get one Userstyle
     * const userstyle = await prisma.userstyle.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends userstyleFindFirstOrThrowArgs>(
      args?: SelectSubset<T, userstyleFindFirstOrThrowArgs<ExtArgs>>,
    ): Prisma__userstyleClient<
      $Result.GetResult<
        Prisma.$userstylePayload<ExtArgs>,
        T,
        "findFirstOrThrow",
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Find zero or more Userstyles that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {userstyleFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Userstyles
     * const userstyles = await prisma.userstyle.findMany()
     *
     * // Get first 10 Userstyles
     * const userstyles = await prisma.userstyle.findMany({ take: 10 })
     *
     * // Only select the `uid`
     * const userstyleWithUidOnly = await prisma.userstyle.findMany({ select: { uid: true } })
     *
     */
    findMany<T extends userstyleFindManyArgs>(
      args?: SelectSubset<T, userstyleFindManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<
      $Result.GetResult<
        Prisma.$userstylePayload<ExtArgs>,
        T,
        "findMany",
        GlobalOmitOptions
      >
    >;

    /**
     * Create a Userstyle.
     * @param {userstyleCreateArgs} args - Arguments to create a Userstyle.
     * @example
     * // Create one Userstyle
     * const Userstyle = await prisma.userstyle.create({
     *   data: {
     *     // ... data to create a Userstyle
     *   }
     * })
     *
     */
    create<T extends userstyleCreateArgs>(
      args: SelectSubset<T, userstyleCreateArgs<ExtArgs>>,
    ): Prisma__userstyleClient<
      $Result.GetResult<
        Prisma.$userstylePayload<ExtArgs>,
        T,
        "create",
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Create many Userstyles.
     * @param {userstyleCreateManyArgs} args - Arguments to create many Userstyles.
     * @example
     * // Create many Userstyles
     * const userstyle = await prisma.userstyle.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     */
    createMany<T extends userstyleCreateManyArgs>(
      args?: SelectSubset<T, userstyleCreateManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Create many Userstyles and returns the data saved in the database.
     * @param {userstyleCreateManyAndReturnArgs} args - Arguments to create many Userstyles.
     * @example
     * // Create many Userstyles
     * const userstyle = await prisma.userstyle.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Create many Userstyles and only return the `uid`
     * const userstyleWithUidOnly = await prisma.userstyle.createManyAndReturn({
     *   select: { uid: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     *
     */
    createManyAndReturn<T extends userstyleCreateManyAndReturnArgs>(
      args?: SelectSubset<T, userstyleCreateManyAndReturnArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<
      $Result.GetResult<
        Prisma.$userstylePayload<ExtArgs>,
        T,
        "createManyAndReturn",
        GlobalOmitOptions
      >
    >;

    /**
     * Delete a Userstyle.
     * @param {userstyleDeleteArgs} args - Arguments to delete one Userstyle.
     * @example
     * // Delete one Userstyle
     * const Userstyle = await prisma.userstyle.delete({
     *   where: {
     *     // ... filter to delete one Userstyle
     *   }
     * })
     *
     */
    delete<T extends userstyleDeleteArgs>(
      args: SelectSubset<T, userstyleDeleteArgs<ExtArgs>>,
    ): Prisma__userstyleClient<
      $Result.GetResult<
        Prisma.$userstylePayload<ExtArgs>,
        T,
        "delete",
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Update one Userstyle.
     * @param {userstyleUpdateArgs} args - Arguments to update one Userstyle.
     * @example
     * // Update one Userstyle
     * const userstyle = await prisma.userstyle.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    update<T extends userstyleUpdateArgs>(
      args: SelectSubset<T, userstyleUpdateArgs<ExtArgs>>,
    ): Prisma__userstyleClient<
      $Result.GetResult<
        Prisma.$userstylePayload<ExtArgs>,
        T,
        "update",
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Delete zero or more Userstyles.
     * @param {userstyleDeleteManyArgs} args - Arguments to filter Userstyles to delete.
     * @example
     * // Delete a few Userstyles
     * const { count } = await prisma.userstyle.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     *
     */
    deleteMany<T extends userstyleDeleteManyArgs>(
      args?: SelectSubset<T, userstyleDeleteManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Update zero or more Userstyles.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {userstyleUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Userstyles
     * const userstyle = await prisma.userstyle.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    updateMany<T extends userstyleUpdateManyArgs>(
      args: SelectSubset<T, userstyleUpdateManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Update zero or more Userstyles and returns the data updated in the database.
     * @param {userstyleUpdateManyAndReturnArgs} args - Arguments to update many Userstyles.
     * @example
     * // Update many Userstyles
     * const userstyle = await prisma.userstyle.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Update zero or more Userstyles and only return the `uid`
     * const userstyleWithUidOnly = await prisma.userstyle.updateManyAndReturn({
     *   select: { uid: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     *
     */
    updateManyAndReturn<T extends userstyleUpdateManyAndReturnArgs>(
      args: SelectSubset<T, userstyleUpdateManyAndReturnArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<
      $Result.GetResult<
        Prisma.$userstylePayload<ExtArgs>,
        T,
        "updateManyAndReturn",
        GlobalOmitOptions
      >
    >;

    /**
     * Create or update one Userstyle.
     * @param {userstyleUpsertArgs} args - Arguments to update or create a Userstyle.
     * @example
     * // Update or create a Userstyle
     * const userstyle = await prisma.userstyle.upsert({
     *   create: {
     *     // ... data to create a Userstyle
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Userstyle we want to update
     *   }
     * })
     */
    upsert<T extends userstyleUpsertArgs>(
      args: SelectSubset<T, userstyleUpsertArgs<ExtArgs>>,
    ): Prisma__userstyleClient<
      $Result.GetResult<
        Prisma.$userstylePayload<ExtArgs>,
        T,
        "upsert",
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Count the number of Userstyles.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {userstyleCountArgs} args - Arguments to filter Userstyles to count.
     * @example
     * // Count the number of Userstyles
     * const count = await prisma.userstyle.count({
     *   where: {
     *     // ... the filter for the Userstyles we want to count
     *   }
     * })
     **/
    count<T extends userstyleCountArgs>(
      args?: Subset<T, userstyleCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<"select", any>
        ? T["select"] extends true
          ? number
          : GetScalarType<T["select"], UserstyleCountAggregateOutputType>
        : number
    >;

    /**
     * Allows you to perform aggregations operations on a Userstyle.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserstyleAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
     **/
    aggregate<T extends UserstyleAggregateArgs>(
      args: Subset<T, UserstyleAggregateArgs>,
    ): Prisma.PrismaPromise<GetUserstyleAggregateType<T>>;

    /**
     * Group by Userstyle.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {userstyleGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     *
     **/
    groupBy<
      T extends userstyleGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<"skip", Keys<T>>,
        Extends<"take", Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: userstyleGroupByArgs["orderBy"] }
        : { orderBy?: userstyleGroupByArgs["orderBy"] },
      OrderFields extends ExcludeUnderscoreKeys<
        Keys<MaybeTupleToUnion<T["orderBy"]>>
      >,
      ByFields extends MaybeTupleToUnion<T["by"]>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T["having"]>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T["by"] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
        ? `Error: "by" must not be empty.`
        : HavingValid extends False
          ? {
              [P in HavingFields]: P extends ByFields
                ? never
                : P extends string
                  ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
                  : [
                      Error,
                      "Field ",
                      P,
                      ` in "having" needs to be provided in "by"`,
                    ];
            }[HavingFields]
          : "take" extends Keys<T>
            ? "orderBy" extends Keys<T>
              ? ByValid extends True
                ? {}
                : {
                    [P in OrderFields]: P extends ByFields
                      ? never
                      : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
                  }[OrderFields]
              : 'Error: If you provide "take", you also need to provide "orderBy"'
            : "skip" extends Keys<T>
              ? "orderBy" extends Keys<T>
                ? ByValid extends True
                  ? {}
                  : {
                      [P in OrderFields]: P extends ByFields
                        ? never
                        : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
                    }[OrderFields]
                : 'Error: If you provide "skip", you also need to provide "orderBy"'
              : ByValid extends True
                ? {}
                : {
                    [P in OrderFields]: P extends ByFields
                      ? never
                      : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
                  }[OrderFields],
    >(
      args: SubsetIntersection<T, userstyleGroupByArgs, OrderByArg> &
        InputErrors,
    ): {} extends InputErrors
      ? GetUserstyleGroupByPayload<T>
      : Prisma.PrismaPromise<InputErrors>;
    /**
     * Fields of the userstyle model
     */
    readonly fields: userstyleFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for userstyle.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__userstyleClient<
    T,
    Null = never,
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    GlobalOmitOptions = {},
  > extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    user<T extends userDefaultArgs<ExtArgs> = {}>(
      args?: Subset<T, userDefaultArgs<ExtArgs>>,
    ): Prisma__userClient<
      | $Result.GetResult<
          Prisma.$userPayload<ExtArgs>,
          T,
          "findUniqueOrThrow",
          GlobalOmitOptions
        >
      | Null,
      Null,
      ExtArgs,
      GlobalOmitOptions
    >;
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(
      onfulfilled?:
        | ((value: T) => TResult1 | PromiseLike<TResult1>)
        | undefined
        | null,
      onrejected?:
        | ((reason: any) => TResult2 | PromiseLike<TResult2>)
        | undefined
        | null,
    ): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(
      onrejected?:
        | ((reason: any) => TResult | PromiseLike<TResult>)
        | undefined
        | null,
    ): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }

  /**
   * Fields of the userstyle model
   */
  interface userstyleFieldRefs {
    readonly uid: FieldRef<"userstyle", "Int">;
    readonly sstyle: FieldRef<"userstyle", "String">;
    readonly pstyle: FieldRef<"userstyle", "String">;
    readonly estyle: FieldRef<"userstyle", "String">;
    readonly exstyle: FieldRef<"userstyle", "String">;
  }

  // Custom InputTypes
  /**
   * userstyle findUnique
   */
  export type userstyleFindUniqueArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the userstyle
     */
    select?: userstyleSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the userstyle
     */
    omit?: userstyleOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: userstyleInclude<ExtArgs> | null;
    /**
     * Filter, which userstyle to fetch.
     */
    where: userstyleWhereUniqueInput;
  };

  /**
   * userstyle findUniqueOrThrow
   */
  export type userstyleFindUniqueOrThrowArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the userstyle
     */
    select?: userstyleSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the userstyle
     */
    omit?: userstyleOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: userstyleInclude<ExtArgs> | null;
    /**
     * Filter, which userstyle to fetch.
     */
    where: userstyleWhereUniqueInput;
  };

  /**
   * userstyle findFirst
   */
  export type userstyleFindFirstArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the userstyle
     */
    select?: userstyleSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the userstyle
     */
    omit?: userstyleOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: userstyleInclude<ExtArgs> | null;
    /**
     * Filter, which userstyle to fetch.
     */
    where?: userstyleWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of userstyles to fetch.
     */
    orderBy?:
      | userstyleOrderByWithRelationInput
      | userstyleOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for userstyles.
     */
    cursor?: userstyleWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` userstyles from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` userstyles.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of userstyles.
     */
    distinct?: UserstyleScalarFieldEnum | UserstyleScalarFieldEnum[];
  };

  /**
   * userstyle findFirstOrThrow
   */
  export type userstyleFindFirstOrThrowArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the userstyle
     */
    select?: userstyleSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the userstyle
     */
    omit?: userstyleOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: userstyleInclude<ExtArgs> | null;
    /**
     * Filter, which userstyle to fetch.
     */
    where?: userstyleWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of userstyles to fetch.
     */
    orderBy?:
      | userstyleOrderByWithRelationInput
      | userstyleOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for userstyles.
     */
    cursor?: userstyleWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` userstyles from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` userstyles.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of userstyles.
     */
    distinct?: UserstyleScalarFieldEnum | UserstyleScalarFieldEnum[];
  };

  /**
   * userstyle findMany
   */
  export type userstyleFindManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the userstyle
     */
    select?: userstyleSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the userstyle
     */
    omit?: userstyleOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: userstyleInclude<ExtArgs> | null;
    /**
     * Filter, which userstyles to fetch.
     */
    where?: userstyleWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of userstyles to fetch.
     */
    orderBy?:
      | userstyleOrderByWithRelationInput
      | userstyleOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing userstyles.
     */
    cursor?: userstyleWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` userstyles from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` userstyles.
     */
    skip?: number;
    distinct?: UserstyleScalarFieldEnum | UserstyleScalarFieldEnum[];
  };

  /**
   * userstyle create
   */
  export type userstyleCreateArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the userstyle
     */
    select?: userstyleSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the userstyle
     */
    omit?: userstyleOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: userstyleInclude<ExtArgs> | null;
    /**
     * The data needed to create a userstyle.
     */
    data: XOR<userstyleCreateInput, userstyleUncheckedCreateInput>;
  };

  /**
   * userstyle createMany
   */
  export type userstyleCreateManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * The data used to create many userstyles.
     */
    data: userstyleCreateManyInput | userstyleCreateManyInput[];
    skipDuplicates?: boolean;
  };

  /**
   * userstyle createManyAndReturn
   */
  export type userstyleCreateManyAndReturnArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the userstyle
     */
    select?: userstyleSelectCreateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the userstyle
     */
    omit?: userstyleOmit<ExtArgs> | null;
    /**
     * The data used to create many userstyles.
     */
    data: userstyleCreateManyInput | userstyleCreateManyInput[];
    skipDuplicates?: boolean;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: userstyleIncludeCreateManyAndReturn<ExtArgs> | null;
  };

  /**
   * userstyle update
   */
  export type userstyleUpdateArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the userstyle
     */
    select?: userstyleSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the userstyle
     */
    omit?: userstyleOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: userstyleInclude<ExtArgs> | null;
    /**
     * The data needed to update a userstyle.
     */
    data: XOR<userstyleUpdateInput, userstyleUncheckedUpdateInput>;
    /**
     * Choose, which userstyle to update.
     */
    where: userstyleWhereUniqueInput;
  };

  /**
   * userstyle updateMany
   */
  export type userstyleUpdateManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * The data used to update userstyles.
     */
    data: XOR<
      userstyleUpdateManyMutationInput,
      userstyleUncheckedUpdateManyInput
    >;
    /**
     * Filter which userstyles to update
     */
    where?: userstyleWhereInput;
    /**
     * Limit how many userstyles to update.
     */
    limit?: number;
  };

  /**
   * userstyle updateManyAndReturn
   */
  export type userstyleUpdateManyAndReturnArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the userstyle
     */
    select?: userstyleSelectUpdateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the userstyle
     */
    omit?: userstyleOmit<ExtArgs> | null;
    /**
     * The data used to update userstyles.
     */
    data: XOR<
      userstyleUpdateManyMutationInput,
      userstyleUncheckedUpdateManyInput
    >;
    /**
     * Filter which userstyles to update
     */
    where?: userstyleWhereInput;
    /**
     * Limit how many userstyles to update.
     */
    limit?: number;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: userstyleIncludeUpdateManyAndReturn<ExtArgs> | null;
  };

  /**
   * userstyle upsert
   */
  export type userstyleUpsertArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the userstyle
     */
    select?: userstyleSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the userstyle
     */
    omit?: userstyleOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: userstyleInclude<ExtArgs> | null;
    /**
     * The filter to search for the userstyle to update in case it exists.
     */
    where: userstyleWhereUniqueInput;
    /**
     * In case the userstyle found by the `where` argument doesn't exist, create a new userstyle with this data.
     */
    create: XOR<userstyleCreateInput, userstyleUncheckedCreateInput>;
    /**
     * In case the userstyle was found with the provided `where` argument, update it with this data.
     */
    update: XOR<userstyleUpdateInput, userstyleUncheckedUpdateInput>;
  };

  /**
   * userstyle delete
   */
  export type userstyleDeleteArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the userstyle
     */
    select?: userstyleSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the userstyle
     */
    omit?: userstyleOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: userstyleInclude<ExtArgs> | null;
    /**
     * Filter which userstyle to delete.
     */
    where: userstyleWhereUniqueInput;
  };

  /**
   * userstyle deleteMany
   */
  export type userstyleDeleteManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Filter which userstyles to delete
     */
    where?: userstyleWhereInput;
    /**
     * Limit how many userstyles to delete.
     */
    limit?: number;
  };

  /**
   * userstyle without action
   */
  export type userstyleDefaultArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the userstyle
     */
    select?: userstyleSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the userstyle
     */
    omit?: userstyleOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: userstyleInclude<ExtArgs> | null;
  };

  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: "ReadUncommitted";
    ReadCommitted: "ReadCommitted";
    RepeatableRead: "RepeatableRead";
    Serializable: "Serializable";
  };

  export type TransactionIsolationLevel =
    (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel];

  export const UserScalarFieldEnum: {
    uid: "uid";
    username: "username";
    password: "password";
    email: "email";
    sessions: "sessions";
  };

  export type UserScalarFieldEnum =
    (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum];

  export const HeroScalarFieldEnum: {
    hid: "hid";
    uid: "uid";
    style: "style";
    hero: "hero";
    subhero: "subhero";
  };

  export type HeroScalarFieldEnum =
    (typeof HeroScalarFieldEnum)[keyof typeof HeroScalarFieldEnum];

  export const ProjectScalarFieldEnum: {
    pid: "pid";
    uid: "uid";
    title: "title";
    image: "image";
    desc: "desc";
    tags: "tags";
    github: "github";
    Link: "Link";
  };

  export type ProjectScalarFieldEnum =
    (typeof ProjectScalarFieldEnum)[keyof typeof ProjectScalarFieldEnum];

  export const ExperienceScalarFieldEnum: {
    exid: "exid";
    title: "title";
    corp: "corp";
    startdate: "startdate";
    enddate: "enddate";
    desc: "desc";
    uid: "uid";
  };

  export type ExperienceScalarFieldEnum =
    (typeof ExperienceScalarFieldEnum)[keyof typeof ExperienceScalarFieldEnum];

  export const EducationScalarFieldEnum: {
    edid: "edid";
    inst: "inst";
    degree: "degree";
    startdate: "startdate";
    enddate: "enddate";
    uid: "uid";
  };

  export type EducationScalarFieldEnum =
    (typeof EducationScalarFieldEnum)[keyof typeof EducationScalarFieldEnum];

  export const SkillsScalarFieldEnum: {
    sid: "sid";
    uid: "uid";
    skillname: "skillname";
    skills: "skills";
    icon: "icon";
  };

  export type SkillsScalarFieldEnum =
    (typeof SkillsScalarFieldEnum)[keyof typeof SkillsScalarFieldEnum];

  export const ContactScalarFieldEnum: {
    cid: "cid";
    uid: "uid";
    email: "email";
    phone: "phone";
    location: "location";
    linkedin: "linkedin";
    github: "github";
  };

  export type ContactScalarFieldEnum =
    (typeof ContactScalarFieldEnum)[keyof typeof ContactScalarFieldEnum];

  export const AboutScalarFieldEnum: {
    aid: "aid";
    uid: "uid";
    image: "image";
    about: "about";
    style: "style";
  };

  export type AboutScalarFieldEnum =
    (typeof AboutScalarFieldEnum)[keyof typeof AboutScalarFieldEnum];

  export const UserstyleScalarFieldEnum: {
    uid: "uid";
    sstyle: "sstyle";
    pstyle: "pstyle";
    estyle: "estyle";
    exstyle: "exstyle";
  };

  export type UserstyleScalarFieldEnum =
    (typeof UserstyleScalarFieldEnum)[keyof typeof UserstyleScalarFieldEnum];

  export const SortOrder: {
    asc: "asc";
    desc: "desc";
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder];

  export const QueryMode: {
    default: "default";
    insensitive: "insensitive";
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode];

  export const NullsOrder: {
    first: "first";
    last: "last";
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder];

  /**
   * Field references
   */

  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<
    $PrismaModel,
    "Int"
  >;

  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<
    $PrismaModel,
    "Int[]"
  >;

  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<
    $PrismaModel,
    "String"
  >;

  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<
    $PrismaModel,
    "String[]"
  >;

  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<
    $PrismaModel,
    "Float"
  >;

  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<
    $PrismaModel,
    "Float[]"
  >;

  /**
   * Deep Input Types
   */

  export type userWhereInput = {
    AND?: userWhereInput | userWhereInput[];
    OR?: userWhereInput[];
    NOT?: userWhereInput | userWhereInput[];
    uid?: IntFilter<"user"> | number;
    username?: StringFilter<"user"> | string;
    password?: StringFilter<"user"> | string;
    email?: StringFilter<"user"> | string;
    sessions?: StringNullableListFilter<"user">;
    skills?: SkillsListRelationFilter;
    contact?: ContactListRelationFilter;
    About?: AboutListRelationFilter;
    project?: ProjectListRelationFilter;
    experience?: ExperienceListRelationFilter;
    education?: EducationListRelationFilter;
    hero?: HeroListRelationFilter;
    userstyle?: UserstyleListRelationFilter;
  };

  export type userOrderByWithRelationInput = {
    uid?: SortOrder;
    username?: SortOrder;
    password?: SortOrder;
    email?: SortOrder;
    sessions?: SortOrder;
    skills?: skillsOrderByRelationAggregateInput;
    contact?: contactOrderByRelationAggregateInput;
    About?: AboutOrderByRelationAggregateInput;
    project?: projectOrderByRelationAggregateInput;
    experience?: experienceOrderByRelationAggregateInput;
    education?: educationOrderByRelationAggregateInput;
    hero?: heroOrderByRelationAggregateInput;
    userstyle?: userstyleOrderByRelationAggregateInput;
  };

  export type userWhereUniqueInput = Prisma.AtLeast<
    {
      uid?: number;
      username?: string;
      email?: string;
      AND?: userWhereInput | userWhereInput[];
      OR?: userWhereInput[];
      NOT?: userWhereInput | userWhereInput[];
      password?: StringFilter<"user"> | string;
      sessions?: StringNullableListFilter<"user">;
      skills?: SkillsListRelationFilter;
      contact?: ContactListRelationFilter;
      About?: AboutListRelationFilter;
      project?: ProjectListRelationFilter;
      experience?: ExperienceListRelationFilter;
      education?: EducationListRelationFilter;
      hero?: HeroListRelationFilter;
      userstyle?: UserstyleListRelationFilter;
    },
    "uid" | "username" | "email"
  >;

  export type userOrderByWithAggregationInput = {
    uid?: SortOrder;
    username?: SortOrder;
    password?: SortOrder;
    email?: SortOrder;
    sessions?: SortOrder;
    _count?: userCountOrderByAggregateInput;
    _avg?: userAvgOrderByAggregateInput;
    _max?: userMaxOrderByAggregateInput;
    _min?: userMinOrderByAggregateInput;
    _sum?: userSumOrderByAggregateInput;
  };

  export type userScalarWhereWithAggregatesInput = {
    AND?:
      | userScalarWhereWithAggregatesInput
      | userScalarWhereWithAggregatesInput[];
    OR?: userScalarWhereWithAggregatesInput[];
    NOT?:
      | userScalarWhereWithAggregatesInput
      | userScalarWhereWithAggregatesInput[];
    uid?: IntWithAggregatesFilter<"user"> | number;
    username?: StringWithAggregatesFilter<"user"> | string;
    password?: StringWithAggregatesFilter<"user"> | string;
    email?: StringWithAggregatesFilter<"user"> | string;
    sessions?: StringNullableListFilter<"user">;
  };

  export type heroWhereInput = {
    AND?: heroWhereInput | heroWhereInput[];
    OR?: heroWhereInput[];
    NOT?: heroWhereInput | heroWhereInput[];
    hid?: IntFilter<"hero"> | number;
    uid?: IntFilter<"hero"> | number;
    style?: StringFilter<"hero"> | string;
    hero?: StringFilter<"hero"> | string;
    subhero?: StringFilter<"hero"> | string;
    user?: XOR<UserScalarRelationFilter, userWhereInput>;
  };

  export type heroOrderByWithRelationInput = {
    hid?: SortOrder;
    uid?: SortOrder;
    style?: SortOrder;
    hero?: SortOrder;
    subhero?: SortOrder;
    user?: userOrderByWithRelationInput;
  };

  export type heroWhereUniqueInput = Prisma.AtLeast<
    {
      hid?: number;
      AND?: heroWhereInput | heroWhereInput[];
      OR?: heroWhereInput[];
      NOT?: heroWhereInput | heroWhereInput[];
      uid?: IntFilter<"hero"> | number;
      style?: StringFilter<"hero"> | string;
      hero?: StringFilter<"hero"> | string;
      subhero?: StringFilter<"hero"> | string;
      user?: XOR<UserScalarRelationFilter, userWhereInput>;
    },
    "hid"
  >;

  export type heroOrderByWithAggregationInput = {
    hid?: SortOrder;
    uid?: SortOrder;
    style?: SortOrder;
    hero?: SortOrder;
    subhero?: SortOrder;
    _count?: heroCountOrderByAggregateInput;
    _avg?: heroAvgOrderByAggregateInput;
    _max?: heroMaxOrderByAggregateInput;
    _min?: heroMinOrderByAggregateInput;
    _sum?: heroSumOrderByAggregateInput;
  };

  export type heroScalarWhereWithAggregatesInput = {
    AND?:
      | heroScalarWhereWithAggregatesInput
      | heroScalarWhereWithAggregatesInput[];
    OR?: heroScalarWhereWithAggregatesInput[];
    NOT?:
      | heroScalarWhereWithAggregatesInput
      | heroScalarWhereWithAggregatesInput[];
    hid?: IntWithAggregatesFilter<"hero"> | number;
    uid?: IntWithAggregatesFilter<"hero"> | number;
    style?: StringWithAggregatesFilter<"hero"> | string;
    hero?: StringWithAggregatesFilter<"hero"> | string;
    subhero?: StringWithAggregatesFilter<"hero"> | string;
  };

  export type projectWhereInput = {
    AND?: projectWhereInput | projectWhereInput[];
    OR?: projectWhereInput[];
    NOT?: projectWhereInput | projectWhereInput[];
    pid?: IntFilter<"project"> | number;
    uid?: IntFilter<"project"> | number;
    title?: StringFilter<"project"> | string;
    image?: StringFilter<"project"> | string;
    desc?: StringFilter<"project"> | string;
    tags?: StringNullableListFilter<"project">;
    github?: StringFilter<"project"> | string;
    Link?: StringFilter<"project"> | string;
    user?: XOR<UserScalarRelationFilter, userWhereInput>;
  };

  export type projectOrderByWithRelationInput = {
    pid?: SortOrder;
    uid?: SortOrder;
    title?: SortOrder;
    image?: SortOrder;
    desc?: SortOrder;
    tags?: SortOrder;
    github?: SortOrder;
    Link?: SortOrder;
    user?: userOrderByWithRelationInput;
  };

  export type projectWhereUniqueInput = Prisma.AtLeast<
    {
      pid?: number;
      AND?: projectWhereInput | projectWhereInput[];
      OR?: projectWhereInput[];
      NOT?: projectWhereInput | projectWhereInput[];
      uid?: IntFilter<"project"> | number;
      title?: StringFilter<"project"> | string;
      image?: StringFilter<"project"> | string;
      desc?: StringFilter<"project"> | string;
      tags?: StringNullableListFilter<"project">;
      github?: StringFilter<"project"> | string;
      Link?: StringFilter<"project"> | string;
      user?: XOR<UserScalarRelationFilter, userWhereInput>;
    },
    "pid"
  >;

  export type projectOrderByWithAggregationInput = {
    pid?: SortOrder;
    uid?: SortOrder;
    title?: SortOrder;
    image?: SortOrder;
    desc?: SortOrder;
    tags?: SortOrder;
    github?: SortOrder;
    Link?: SortOrder;
    _count?: projectCountOrderByAggregateInput;
    _avg?: projectAvgOrderByAggregateInput;
    _max?: projectMaxOrderByAggregateInput;
    _min?: projectMinOrderByAggregateInput;
    _sum?: projectSumOrderByAggregateInput;
  };

  export type projectScalarWhereWithAggregatesInput = {
    AND?:
      | projectScalarWhereWithAggregatesInput
      | projectScalarWhereWithAggregatesInput[];
    OR?: projectScalarWhereWithAggregatesInput[];
    NOT?:
      | projectScalarWhereWithAggregatesInput
      | projectScalarWhereWithAggregatesInput[];
    pid?: IntWithAggregatesFilter<"project"> | number;
    uid?: IntWithAggregatesFilter<"project"> | number;
    title?: StringWithAggregatesFilter<"project"> | string;
    image?: StringWithAggregatesFilter<"project"> | string;
    desc?: StringWithAggregatesFilter<"project"> | string;
    tags?: StringNullableListFilter<"project">;
    github?: StringWithAggregatesFilter<"project"> | string;
    Link?: StringWithAggregatesFilter<"project"> | string;
  };

  export type experienceWhereInput = {
    AND?: experienceWhereInput | experienceWhereInput[];
    OR?: experienceWhereInput[];
    NOT?: experienceWhereInput | experienceWhereInput[];
    exid?: IntFilter<"experience"> | number;
    title?: StringFilter<"experience"> | string;
    corp?: StringFilter<"experience"> | string;
    startdate?: StringFilter<"experience"> | string;
    enddate?: StringNullableFilter<"experience"> | string | null;
    desc?: StringFilter<"experience"> | string;
    uid?: IntFilter<"experience"> | number;
    user?: XOR<UserScalarRelationFilter, userWhereInput>;
  };

  export type experienceOrderByWithRelationInput = {
    exid?: SortOrder;
    title?: SortOrder;
    corp?: SortOrder;
    startdate?: SortOrder;
    enddate?: SortOrderInput | SortOrder;
    desc?: SortOrder;
    uid?: SortOrder;
    user?: userOrderByWithRelationInput;
  };

  export type experienceWhereUniqueInput = Prisma.AtLeast<
    {
      exid?: number;
      AND?: experienceWhereInput | experienceWhereInput[];
      OR?: experienceWhereInput[];
      NOT?: experienceWhereInput | experienceWhereInput[];
      title?: StringFilter<"experience"> | string;
      corp?: StringFilter<"experience"> | string;
      startdate?: StringFilter<"experience"> | string;
      enddate?: StringNullableFilter<"experience"> | string | null;
      desc?: StringFilter<"experience"> | string;
      uid?: IntFilter<"experience"> | number;
      user?: XOR<UserScalarRelationFilter, userWhereInput>;
    },
    "exid"
  >;

  export type experienceOrderByWithAggregationInput = {
    exid?: SortOrder;
    title?: SortOrder;
    corp?: SortOrder;
    startdate?: SortOrder;
    enddate?: SortOrderInput | SortOrder;
    desc?: SortOrder;
    uid?: SortOrder;
    _count?: experienceCountOrderByAggregateInput;
    _avg?: experienceAvgOrderByAggregateInput;
    _max?: experienceMaxOrderByAggregateInput;
    _min?: experienceMinOrderByAggregateInput;
    _sum?: experienceSumOrderByAggregateInput;
  };

  export type experienceScalarWhereWithAggregatesInput = {
    AND?:
      | experienceScalarWhereWithAggregatesInput
      | experienceScalarWhereWithAggregatesInput[];
    OR?: experienceScalarWhereWithAggregatesInput[];
    NOT?:
      | experienceScalarWhereWithAggregatesInput
      | experienceScalarWhereWithAggregatesInput[];
    exid?: IntWithAggregatesFilter<"experience"> | number;
    title?: StringWithAggregatesFilter<"experience"> | string;
    corp?: StringWithAggregatesFilter<"experience"> | string;
    startdate?: StringWithAggregatesFilter<"experience"> | string;
    enddate?: StringNullableWithAggregatesFilter<"experience"> | string | null;
    desc?: StringWithAggregatesFilter<"experience"> | string;
    uid?: IntWithAggregatesFilter<"experience"> | number;
  };

  export type educationWhereInput = {
    AND?: educationWhereInput | educationWhereInput[];
    OR?: educationWhereInput[];
    NOT?: educationWhereInput | educationWhereInput[];
    edid?: IntFilter<"education"> | number;
    inst?: StringFilter<"education"> | string;
    degree?: StringFilter<"education"> | string;
    startdate?: StringFilter<"education"> | string;
    enddate?: StringNullableFilter<"education"> | string | null;
    uid?: IntFilter<"education"> | number;
    user?: XOR<UserScalarRelationFilter, userWhereInput>;
  };

  export type educationOrderByWithRelationInput = {
    edid?: SortOrder;
    inst?: SortOrder;
    degree?: SortOrder;
    startdate?: SortOrder;
    enddate?: SortOrderInput | SortOrder;
    uid?: SortOrder;
    user?: userOrderByWithRelationInput;
  };

  export type educationWhereUniqueInput = Prisma.AtLeast<
    {
      edid?: number;
      AND?: educationWhereInput | educationWhereInput[];
      OR?: educationWhereInput[];
      NOT?: educationWhereInput | educationWhereInput[];
      inst?: StringFilter<"education"> | string;
      degree?: StringFilter<"education"> | string;
      startdate?: StringFilter<"education"> | string;
      enddate?: StringNullableFilter<"education"> | string | null;
      uid?: IntFilter<"education"> | number;
      user?: XOR<UserScalarRelationFilter, userWhereInput>;
    },
    "edid"
  >;

  export type educationOrderByWithAggregationInput = {
    edid?: SortOrder;
    inst?: SortOrder;
    degree?: SortOrder;
    startdate?: SortOrder;
    enddate?: SortOrderInput | SortOrder;
    uid?: SortOrder;
    _count?: educationCountOrderByAggregateInput;
    _avg?: educationAvgOrderByAggregateInput;
    _max?: educationMaxOrderByAggregateInput;
    _min?: educationMinOrderByAggregateInput;
    _sum?: educationSumOrderByAggregateInput;
  };

  export type educationScalarWhereWithAggregatesInput = {
    AND?:
      | educationScalarWhereWithAggregatesInput
      | educationScalarWhereWithAggregatesInput[];
    OR?: educationScalarWhereWithAggregatesInput[];
    NOT?:
      | educationScalarWhereWithAggregatesInput
      | educationScalarWhereWithAggregatesInput[];
    edid?: IntWithAggregatesFilter<"education"> | number;
    inst?: StringWithAggregatesFilter<"education"> | string;
    degree?: StringWithAggregatesFilter<"education"> | string;
    startdate?: StringWithAggregatesFilter<"education"> | string;
    enddate?: StringNullableWithAggregatesFilter<"education"> | string | null;
    uid?: IntWithAggregatesFilter<"education"> | number;
  };

  export type skillsWhereInput = {
    AND?: skillsWhereInput | skillsWhereInput[];
    OR?: skillsWhereInput[];
    NOT?: skillsWhereInput | skillsWhereInput[];
    sid?: IntFilter<"skills"> | number;
    uid?: IntFilter<"skills"> | number;
    skillname?: StringFilter<"skills"> | string;
    skills?: StringNullableListFilter<"skills">;
    icon?: StringFilter<"skills"> | string;
    user?: XOR<UserScalarRelationFilter, userWhereInput>;
  };

  export type skillsOrderByWithRelationInput = {
    sid?: SortOrder;
    uid?: SortOrder;
    skillname?: SortOrder;
    skills?: SortOrder;
    icon?: SortOrder;
    user?: userOrderByWithRelationInput;
  };

  export type skillsWhereUniqueInput = Prisma.AtLeast<
    {
      sid?: number;
      AND?: skillsWhereInput | skillsWhereInput[];
      OR?: skillsWhereInput[];
      NOT?: skillsWhereInput | skillsWhereInput[];
      uid?: IntFilter<"skills"> | number;
      skillname?: StringFilter<"skills"> | string;
      skills?: StringNullableListFilter<"skills">;
      icon?: StringFilter<"skills"> | string;
      user?: XOR<UserScalarRelationFilter, userWhereInput>;
    },
    "sid"
  >;

  export type skillsOrderByWithAggregationInput = {
    sid?: SortOrder;
    uid?: SortOrder;
    skillname?: SortOrder;
    skills?: SortOrder;
    icon?: SortOrder;
    _count?: skillsCountOrderByAggregateInput;
    _avg?: skillsAvgOrderByAggregateInput;
    _max?: skillsMaxOrderByAggregateInput;
    _min?: skillsMinOrderByAggregateInput;
    _sum?: skillsSumOrderByAggregateInput;
  };

  export type skillsScalarWhereWithAggregatesInput = {
    AND?:
      | skillsScalarWhereWithAggregatesInput
      | skillsScalarWhereWithAggregatesInput[];
    OR?: skillsScalarWhereWithAggregatesInput[];
    NOT?:
      | skillsScalarWhereWithAggregatesInput
      | skillsScalarWhereWithAggregatesInput[];
    sid?: IntWithAggregatesFilter<"skills"> | number;
    uid?: IntWithAggregatesFilter<"skills"> | number;
    skillname?: StringWithAggregatesFilter<"skills"> | string;
    skills?: StringNullableListFilter<"skills">;
    icon?: StringWithAggregatesFilter<"skills"> | string;
  };

  export type contactWhereInput = {
    AND?: contactWhereInput | contactWhereInput[];
    OR?: contactWhereInput[];
    NOT?: contactWhereInput | contactWhereInput[];
    cid?: IntFilter<"contact"> | number;
    uid?: IntFilter<"contact"> | number;
    email?: StringFilter<"contact"> | string;
    phone?: StringFilter<"contact"> | string;
    location?: StringFilter<"contact"> | string;
    linkedin?: StringFilter<"contact"> | string;
    github?: StringFilter<"contact"> | string;
    user?: XOR<UserScalarRelationFilter, userWhereInput>;
  };

  export type contactOrderByWithRelationInput = {
    cid?: SortOrder;
    uid?: SortOrder;
    email?: SortOrder;
    phone?: SortOrder;
    location?: SortOrder;
    linkedin?: SortOrder;
    github?: SortOrder;
    user?: userOrderByWithRelationInput;
  };

  export type contactWhereUniqueInput = Prisma.AtLeast<
    {
      cid?: number;
      AND?: contactWhereInput | contactWhereInput[];
      OR?: contactWhereInput[];
      NOT?: contactWhereInput | contactWhereInput[];
      uid?: IntFilter<"contact"> | number;
      email?: StringFilter<"contact"> | string;
      phone?: StringFilter<"contact"> | string;
      location?: StringFilter<"contact"> | string;
      linkedin?: StringFilter<"contact"> | string;
      github?: StringFilter<"contact"> | string;
      user?: XOR<UserScalarRelationFilter, userWhereInput>;
    },
    "cid"
  >;

  export type contactOrderByWithAggregationInput = {
    cid?: SortOrder;
    uid?: SortOrder;
    email?: SortOrder;
    phone?: SortOrder;
    location?: SortOrder;
    linkedin?: SortOrder;
    github?: SortOrder;
    _count?: contactCountOrderByAggregateInput;
    _avg?: contactAvgOrderByAggregateInput;
    _max?: contactMaxOrderByAggregateInput;
    _min?: contactMinOrderByAggregateInput;
    _sum?: contactSumOrderByAggregateInput;
  };

  export type contactScalarWhereWithAggregatesInput = {
    AND?:
      | contactScalarWhereWithAggregatesInput
      | contactScalarWhereWithAggregatesInput[];
    OR?: contactScalarWhereWithAggregatesInput[];
    NOT?:
      | contactScalarWhereWithAggregatesInput
      | contactScalarWhereWithAggregatesInput[];
    cid?: IntWithAggregatesFilter<"contact"> | number;
    uid?: IntWithAggregatesFilter<"contact"> | number;
    email?: StringWithAggregatesFilter<"contact"> | string;
    phone?: StringWithAggregatesFilter<"contact"> | string;
    location?: StringWithAggregatesFilter<"contact"> | string;
    linkedin?: StringWithAggregatesFilter<"contact"> | string;
    github?: StringWithAggregatesFilter<"contact"> | string;
  };

  export type AboutWhereInput = {
    AND?: AboutWhereInput | AboutWhereInput[];
    OR?: AboutWhereInput[];
    NOT?: AboutWhereInput | AboutWhereInput[];
    aid?: IntFilter<"About"> | number;
    uid?: IntFilter<"About"> | number;
    image?: StringFilter<"About"> | string;
    about?: StringFilter<"About"> | string;
    style?: StringFilter<"About"> | string;
    user?: XOR<UserScalarRelationFilter, userWhereInput>;
  };

  export type AboutOrderByWithRelationInput = {
    aid?: SortOrder;
    uid?: SortOrder;
    image?: SortOrder;
    about?: SortOrder;
    style?: SortOrder;
    user?: userOrderByWithRelationInput;
  };

  export type AboutWhereUniqueInput = Prisma.AtLeast<
    {
      aid?: number;
      AND?: AboutWhereInput | AboutWhereInput[];
      OR?: AboutWhereInput[];
      NOT?: AboutWhereInput | AboutWhereInput[];
      uid?: IntFilter<"About"> | number;
      image?: StringFilter<"About"> | string;
      about?: StringFilter<"About"> | string;
      style?: StringFilter<"About"> | string;
      user?: XOR<UserScalarRelationFilter, userWhereInput>;
    },
    "aid"
  >;

  export type AboutOrderByWithAggregationInput = {
    aid?: SortOrder;
    uid?: SortOrder;
    image?: SortOrder;
    about?: SortOrder;
    style?: SortOrder;
    _count?: AboutCountOrderByAggregateInput;
    _avg?: AboutAvgOrderByAggregateInput;
    _max?: AboutMaxOrderByAggregateInput;
    _min?: AboutMinOrderByAggregateInput;
    _sum?: AboutSumOrderByAggregateInput;
  };

  export type AboutScalarWhereWithAggregatesInput = {
    AND?:
      | AboutScalarWhereWithAggregatesInput
      | AboutScalarWhereWithAggregatesInput[];
    OR?: AboutScalarWhereWithAggregatesInput[];
    NOT?:
      | AboutScalarWhereWithAggregatesInput
      | AboutScalarWhereWithAggregatesInput[];
    aid?: IntWithAggregatesFilter<"About"> | number;
    uid?: IntWithAggregatesFilter<"About"> | number;
    image?: StringWithAggregatesFilter<"About"> | string;
    about?: StringWithAggregatesFilter<"About"> | string;
    style?: StringWithAggregatesFilter<"About"> | string;
  };

  export type userstyleWhereInput = {
    AND?: userstyleWhereInput | userstyleWhereInput[];
    OR?: userstyleWhereInput[];
    NOT?: userstyleWhereInput | userstyleWhereInput[];
    uid?: IntFilter<"userstyle"> | number;
    sstyle?: StringFilter<"userstyle"> | string;
    pstyle?: StringFilter<"userstyle"> | string;
    estyle?: StringFilter<"userstyle"> | string;
    exstyle?: StringFilter<"userstyle"> | string;
    user?: XOR<UserScalarRelationFilter, userWhereInput>;
  };

  export type userstyleOrderByWithRelationInput = {
    uid?: SortOrder;
    sstyle?: SortOrder;
    pstyle?: SortOrder;
    estyle?: SortOrder;
    exstyle?: SortOrder;
    user?: userOrderByWithRelationInput;
  };

  export type userstyleWhereUniqueInput = Prisma.AtLeast<
    {
      uid?: number;
      AND?: userstyleWhereInput | userstyleWhereInput[];
      OR?: userstyleWhereInput[];
      NOT?: userstyleWhereInput | userstyleWhereInput[];
      sstyle?: StringFilter<"userstyle"> | string;
      pstyle?: StringFilter<"userstyle"> | string;
      estyle?: StringFilter<"userstyle"> | string;
      exstyle?: StringFilter<"userstyle"> | string;
      user?: XOR<UserScalarRelationFilter, userWhereInput>;
    },
    "uid"
  >;

  export type userstyleOrderByWithAggregationInput = {
    uid?: SortOrder;
    sstyle?: SortOrder;
    pstyle?: SortOrder;
    estyle?: SortOrder;
    exstyle?: SortOrder;
    _count?: userstyleCountOrderByAggregateInput;
    _avg?: userstyleAvgOrderByAggregateInput;
    _max?: userstyleMaxOrderByAggregateInput;
    _min?: userstyleMinOrderByAggregateInput;
    _sum?: userstyleSumOrderByAggregateInput;
  };

  export type userstyleScalarWhereWithAggregatesInput = {
    AND?:
      | userstyleScalarWhereWithAggregatesInput
      | userstyleScalarWhereWithAggregatesInput[];
    OR?: userstyleScalarWhereWithAggregatesInput[];
    NOT?:
      | userstyleScalarWhereWithAggregatesInput
      | userstyleScalarWhereWithAggregatesInput[];
    uid?: IntWithAggregatesFilter<"userstyle"> | number;
    sstyle?: StringWithAggregatesFilter<"userstyle"> | string;
    pstyle?: StringWithAggregatesFilter<"userstyle"> | string;
    estyle?: StringWithAggregatesFilter<"userstyle"> | string;
    exstyle?: StringWithAggregatesFilter<"userstyle"> | string;
  };

  export type userCreateInput = {
    username: string;
    password: string;
    email: string;
    sessions?: userCreatesessionsInput | string[];
    skills?: skillsCreateNestedManyWithoutUserInput;
    contact?: contactCreateNestedManyWithoutUserInput;
    About?: AboutCreateNestedManyWithoutUserInput;
    project?: projectCreateNestedManyWithoutUserInput;
    experience?: experienceCreateNestedManyWithoutUserInput;
    education?: educationCreateNestedManyWithoutUserInput;
    hero?: heroCreateNestedManyWithoutUserInput;
    userstyle?: userstyleCreateNestedManyWithoutUserInput;
  };

  export type userUncheckedCreateInput = {
    uid?: number;
    username: string;
    password: string;
    email: string;
    sessions?: userCreatesessionsInput | string[];
    skills?: skillsUncheckedCreateNestedManyWithoutUserInput;
    contact?: contactUncheckedCreateNestedManyWithoutUserInput;
    About?: AboutUncheckedCreateNestedManyWithoutUserInput;
    project?: projectUncheckedCreateNestedManyWithoutUserInput;
    experience?: experienceUncheckedCreateNestedManyWithoutUserInput;
    education?: educationUncheckedCreateNestedManyWithoutUserInput;
    hero?: heroUncheckedCreateNestedManyWithoutUserInput;
    userstyle?: userstyleUncheckedCreateNestedManyWithoutUserInput;
  };

  export type userUpdateInput = {
    username?: StringFieldUpdateOperationsInput | string;
    password?: StringFieldUpdateOperationsInput | string;
    email?: StringFieldUpdateOperationsInput | string;
    sessions?: userUpdatesessionsInput | string[];
    skills?: skillsUpdateManyWithoutUserNestedInput;
    contact?: contactUpdateManyWithoutUserNestedInput;
    About?: AboutUpdateManyWithoutUserNestedInput;
    project?: projectUpdateManyWithoutUserNestedInput;
    experience?: experienceUpdateManyWithoutUserNestedInput;
    education?: educationUpdateManyWithoutUserNestedInput;
    hero?: heroUpdateManyWithoutUserNestedInput;
    userstyle?: userstyleUpdateManyWithoutUserNestedInput;
  };

  export type userUncheckedUpdateInput = {
    uid?: IntFieldUpdateOperationsInput | number;
    username?: StringFieldUpdateOperationsInput | string;
    password?: StringFieldUpdateOperationsInput | string;
    email?: StringFieldUpdateOperationsInput | string;
    sessions?: userUpdatesessionsInput | string[];
    skills?: skillsUncheckedUpdateManyWithoutUserNestedInput;
    contact?: contactUncheckedUpdateManyWithoutUserNestedInput;
    About?: AboutUncheckedUpdateManyWithoutUserNestedInput;
    project?: projectUncheckedUpdateManyWithoutUserNestedInput;
    experience?: experienceUncheckedUpdateManyWithoutUserNestedInput;
    education?: educationUncheckedUpdateManyWithoutUserNestedInput;
    hero?: heroUncheckedUpdateManyWithoutUserNestedInput;
    userstyle?: userstyleUncheckedUpdateManyWithoutUserNestedInput;
  };

  export type userCreateManyInput = {
    uid?: number;
    username: string;
    password: string;
    email: string;
    sessions?: userCreatesessionsInput | string[];
  };

  export type userUpdateManyMutationInput = {
    username?: StringFieldUpdateOperationsInput | string;
    password?: StringFieldUpdateOperationsInput | string;
    email?: StringFieldUpdateOperationsInput | string;
    sessions?: userUpdatesessionsInput | string[];
  };

  export type userUncheckedUpdateManyInput = {
    uid?: IntFieldUpdateOperationsInput | number;
    username?: StringFieldUpdateOperationsInput | string;
    password?: StringFieldUpdateOperationsInput | string;
    email?: StringFieldUpdateOperationsInput | string;
    sessions?: userUpdatesessionsInput | string[];
  };

  export type heroCreateInput = {
    style: string;
    hero: string;
    subhero: string;
    user: userCreateNestedOneWithoutHeroInput;
  };

  export type heroUncheckedCreateInput = {
    hid?: number;
    uid: number;
    style: string;
    hero: string;
    subhero: string;
  };

  export type heroUpdateInput = {
    style?: StringFieldUpdateOperationsInput | string;
    hero?: StringFieldUpdateOperationsInput | string;
    subhero?: StringFieldUpdateOperationsInput | string;
    user?: userUpdateOneRequiredWithoutHeroNestedInput;
  };

  export type heroUncheckedUpdateInput = {
    hid?: IntFieldUpdateOperationsInput | number;
    uid?: IntFieldUpdateOperationsInput | number;
    style?: StringFieldUpdateOperationsInput | string;
    hero?: StringFieldUpdateOperationsInput | string;
    subhero?: StringFieldUpdateOperationsInput | string;
  };

  export type heroCreateManyInput = {
    hid?: number;
    uid: number;
    style: string;
    hero: string;
    subhero: string;
  };

  export type heroUpdateManyMutationInput = {
    style?: StringFieldUpdateOperationsInput | string;
    hero?: StringFieldUpdateOperationsInput | string;
    subhero?: StringFieldUpdateOperationsInput | string;
  };

  export type heroUncheckedUpdateManyInput = {
    hid?: IntFieldUpdateOperationsInput | number;
    uid?: IntFieldUpdateOperationsInput | number;
    style?: StringFieldUpdateOperationsInput | string;
    hero?: StringFieldUpdateOperationsInput | string;
    subhero?: StringFieldUpdateOperationsInput | string;
  };

  export type projectCreateInput = {
    title: string;
    image: string;
    desc: string;
    tags?: projectCreatetagsInput | string[];
    github: string;
    Link: string;
    user: userCreateNestedOneWithoutProjectInput;
  };

  export type projectUncheckedCreateInput = {
    pid?: number;
    uid: number;
    title: string;
    image: string;
    desc: string;
    tags?: projectCreatetagsInput | string[];
    github: string;
    Link: string;
  };

  export type projectUpdateInput = {
    title?: StringFieldUpdateOperationsInput | string;
    image?: StringFieldUpdateOperationsInput | string;
    desc?: StringFieldUpdateOperationsInput | string;
    tags?: projectUpdatetagsInput | string[];
    github?: StringFieldUpdateOperationsInput | string;
    Link?: StringFieldUpdateOperationsInput | string;
    user?: userUpdateOneRequiredWithoutProjectNestedInput;
  };

  export type projectUncheckedUpdateInput = {
    pid?: IntFieldUpdateOperationsInput | number;
    uid?: IntFieldUpdateOperationsInput | number;
    title?: StringFieldUpdateOperationsInput | string;
    image?: StringFieldUpdateOperationsInput | string;
    desc?: StringFieldUpdateOperationsInput | string;
    tags?: projectUpdatetagsInput | string[];
    github?: StringFieldUpdateOperationsInput | string;
    Link?: StringFieldUpdateOperationsInput | string;
  };

  export type projectCreateManyInput = {
    pid?: number;
    uid: number;
    title: string;
    image: string;
    desc: string;
    tags?: projectCreatetagsInput | string[];
    github: string;
    Link: string;
  };

  export type projectUpdateManyMutationInput = {
    title?: StringFieldUpdateOperationsInput | string;
    image?: StringFieldUpdateOperationsInput | string;
    desc?: StringFieldUpdateOperationsInput | string;
    tags?: projectUpdatetagsInput | string[];
    github?: StringFieldUpdateOperationsInput | string;
    Link?: StringFieldUpdateOperationsInput | string;
  };

  export type projectUncheckedUpdateManyInput = {
    pid?: IntFieldUpdateOperationsInput | number;
    uid?: IntFieldUpdateOperationsInput | number;
    title?: StringFieldUpdateOperationsInput | string;
    image?: StringFieldUpdateOperationsInput | string;
    desc?: StringFieldUpdateOperationsInput | string;
    tags?: projectUpdatetagsInput | string[];
    github?: StringFieldUpdateOperationsInput | string;
    Link?: StringFieldUpdateOperationsInput | string;
  };

  export type experienceCreateInput = {
    title: string;
    corp: string;
    startdate: string;
    enddate?: string | null;
    desc: string;
    user: userCreateNestedOneWithoutExperienceInput;
  };

  export type experienceUncheckedCreateInput = {
    exid?: number;
    title: string;
    corp: string;
    startdate: string;
    enddate?: string | null;
    desc: string;
    uid: number;
  };

  export type experienceUpdateInput = {
    title?: StringFieldUpdateOperationsInput | string;
    corp?: StringFieldUpdateOperationsInput | string;
    startdate?: StringFieldUpdateOperationsInput | string;
    enddate?: NullableStringFieldUpdateOperationsInput | string | null;
    desc?: StringFieldUpdateOperationsInput | string;
    user?: userUpdateOneRequiredWithoutExperienceNestedInput;
  };

  export type experienceUncheckedUpdateInput = {
    exid?: IntFieldUpdateOperationsInput | number;
    title?: StringFieldUpdateOperationsInput | string;
    corp?: StringFieldUpdateOperationsInput | string;
    startdate?: StringFieldUpdateOperationsInput | string;
    enddate?: NullableStringFieldUpdateOperationsInput | string | null;
    desc?: StringFieldUpdateOperationsInput | string;
    uid?: IntFieldUpdateOperationsInput | number;
  };

  export type experienceCreateManyInput = {
    exid?: number;
    title: string;
    corp: string;
    startdate: string;
    enddate?: string | null;
    desc: string;
    uid: number;
  };

  export type experienceUpdateManyMutationInput = {
    title?: StringFieldUpdateOperationsInput | string;
    corp?: StringFieldUpdateOperationsInput | string;
    startdate?: StringFieldUpdateOperationsInput | string;
    enddate?: NullableStringFieldUpdateOperationsInput | string | null;
    desc?: StringFieldUpdateOperationsInput | string;
  };

  export type experienceUncheckedUpdateManyInput = {
    exid?: IntFieldUpdateOperationsInput | number;
    title?: StringFieldUpdateOperationsInput | string;
    corp?: StringFieldUpdateOperationsInput | string;
    startdate?: StringFieldUpdateOperationsInput | string;
    enddate?: NullableStringFieldUpdateOperationsInput | string | null;
    desc?: StringFieldUpdateOperationsInput | string;
    uid?: IntFieldUpdateOperationsInput | number;
  };

  export type educationCreateInput = {
    inst: string;
    degree: string;
    startdate: string;
    enddate?: string | null;
    user: userCreateNestedOneWithoutEducationInput;
  };

  export type educationUncheckedCreateInput = {
    edid?: number;
    inst: string;
    degree: string;
    startdate: string;
    enddate?: string | null;
    uid: number;
  };

  export type educationUpdateInput = {
    inst?: StringFieldUpdateOperationsInput | string;
    degree?: StringFieldUpdateOperationsInput | string;
    startdate?: StringFieldUpdateOperationsInput | string;
    enddate?: NullableStringFieldUpdateOperationsInput | string | null;
    user?: userUpdateOneRequiredWithoutEducationNestedInput;
  };

  export type educationUncheckedUpdateInput = {
    edid?: IntFieldUpdateOperationsInput | number;
    inst?: StringFieldUpdateOperationsInput | string;
    degree?: StringFieldUpdateOperationsInput | string;
    startdate?: StringFieldUpdateOperationsInput | string;
    enddate?: NullableStringFieldUpdateOperationsInput | string | null;
    uid?: IntFieldUpdateOperationsInput | number;
  };

  export type educationCreateManyInput = {
    edid?: number;
    inst: string;
    degree: string;
    startdate: string;
    enddate?: string | null;
    uid: number;
  };

  export type educationUpdateManyMutationInput = {
    inst?: StringFieldUpdateOperationsInput | string;
    degree?: StringFieldUpdateOperationsInput | string;
    startdate?: StringFieldUpdateOperationsInput | string;
    enddate?: NullableStringFieldUpdateOperationsInput | string | null;
  };

  export type educationUncheckedUpdateManyInput = {
    edid?: IntFieldUpdateOperationsInput | number;
    inst?: StringFieldUpdateOperationsInput | string;
    degree?: StringFieldUpdateOperationsInput | string;
    startdate?: StringFieldUpdateOperationsInput | string;
    enddate?: NullableStringFieldUpdateOperationsInput | string | null;
    uid?: IntFieldUpdateOperationsInput | number;
  };

  export type skillsCreateInput = {
    skillname: string;
    skills?: skillsCreateskillsInput | string[];
    icon: string;
    user: userCreateNestedOneWithoutSkillsInput;
  };

  export type skillsUncheckedCreateInput = {
    sid?: number;
    uid: number;
    skillname: string;
    skills?: skillsCreateskillsInput | string[];
    icon: string;
  };

  export type skillsUpdateInput = {
    skillname?: StringFieldUpdateOperationsInput | string;
    skills?: skillsUpdateskillsInput | string[];
    icon?: StringFieldUpdateOperationsInput | string;
    user?: userUpdateOneRequiredWithoutSkillsNestedInput;
  };

  export type skillsUncheckedUpdateInput = {
    sid?: IntFieldUpdateOperationsInput | number;
    uid?: IntFieldUpdateOperationsInput | number;
    skillname?: StringFieldUpdateOperationsInput | string;
    skills?: skillsUpdateskillsInput | string[];
    icon?: StringFieldUpdateOperationsInput | string;
  };

  export type skillsCreateManyInput = {
    sid?: number;
    uid: number;
    skillname: string;
    skills?: skillsCreateskillsInput | string[];
    icon: string;
  };

  export type skillsUpdateManyMutationInput = {
    skillname?: StringFieldUpdateOperationsInput | string;
    skills?: skillsUpdateskillsInput | string[];
    icon?: StringFieldUpdateOperationsInput | string;
  };

  export type skillsUncheckedUpdateManyInput = {
    sid?: IntFieldUpdateOperationsInput | number;
    uid?: IntFieldUpdateOperationsInput | number;
    skillname?: StringFieldUpdateOperationsInput | string;
    skills?: skillsUpdateskillsInput | string[];
    icon?: StringFieldUpdateOperationsInput | string;
  };

  export type contactCreateInput = {
    email: string;
    phone: string;
    location: string;
    linkedin?: string;
    github?: string;
    user: userCreateNestedOneWithoutContactInput;
  };

  export type contactUncheckedCreateInput = {
    cid?: number;
    uid: number;
    email: string;
    phone: string;
    location: string;
    linkedin?: string;
    github?: string;
  };

  export type contactUpdateInput = {
    email?: StringFieldUpdateOperationsInput | string;
    phone?: StringFieldUpdateOperationsInput | string;
    location?: StringFieldUpdateOperationsInput | string;
    linkedin?: StringFieldUpdateOperationsInput | string;
    github?: StringFieldUpdateOperationsInput | string;
    user?: userUpdateOneRequiredWithoutContactNestedInput;
  };

  export type contactUncheckedUpdateInput = {
    cid?: IntFieldUpdateOperationsInput | number;
    uid?: IntFieldUpdateOperationsInput | number;
    email?: StringFieldUpdateOperationsInput | string;
    phone?: StringFieldUpdateOperationsInput | string;
    location?: StringFieldUpdateOperationsInput | string;
    linkedin?: StringFieldUpdateOperationsInput | string;
    github?: StringFieldUpdateOperationsInput | string;
  };

  export type contactCreateManyInput = {
    cid?: number;
    uid: number;
    email: string;
    phone: string;
    location: string;
    linkedin?: string;
    github?: string;
  };

  export type contactUpdateManyMutationInput = {
    email?: StringFieldUpdateOperationsInput | string;
    phone?: StringFieldUpdateOperationsInput | string;
    location?: StringFieldUpdateOperationsInput | string;
    linkedin?: StringFieldUpdateOperationsInput | string;
    github?: StringFieldUpdateOperationsInput | string;
  };

  export type contactUncheckedUpdateManyInput = {
    cid?: IntFieldUpdateOperationsInput | number;
    uid?: IntFieldUpdateOperationsInput | number;
    email?: StringFieldUpdateOperationsInput | string;
    phone?: StringFieldUpdateOperationsInput | string;
    location?: StringFieldUpdateOperationsInput | string;
    linkedin?: StringFieldUpdateOperationsInput | string;
    github?: StringFieldUpdateOperationsInput | string;
  };

  export type AboutCreateInput = {
    image: string;
    about: string;
    style: string;
    user: userCreateNestedOneWithoutAboutInput;
  };

  export type AboutUncheckedCreateInput = {
    aid?: number;
    uid: number;
    image: string;
    about: string;
    style: string;
  };

  export type AboutUpdateInput = {
    image?: StringFieldUpdateOperationsInput | string;
    about?: StringFieldUpdateOperationsInput | string;
    style?: StringFieldUpdateOperationsInput | string;
    user?: userUpdateOneRequiredWithoutAboutNestedInput;
  };

  export type AboutUncheckedUpdateInput = {
    aid?: IntFieldUpdateOperationsInput | number;
    uid?: IntFieldUpdateOperationsInput | number;
    image?: StringFieldUpdateOperationsInput | string;
    about?: StringFieldUpdateOperationsInput | string;
    style?: StringFieldUpdateOperationsInput | string;
  };

  export type AboutCreateManyInput = {
    aid?: number;
    uid: number;
    image: string;
    about: string;
    style: string;
  };

  export type AboutUpdateManyMutationInput = {
    image?: StringFieldUpdateOperationsInput | string;
    about?: StringFieldUpdateOperationsInput | string;
    style?: StringFieldUpdateOperationsInput | string;
  };

  export type AboutUncheckedUpdateManyInput = {
    aid?: IntFieldUpdateOperationsInput | number;
    uid?: IntFieldUpdateOperationsInput | number;
    image?: StringFieldUpdateOperationsInput | string;
    about?: StringFieldUpdateOperationsInput | string;
    style?: StringFieldUpdateOperationsInput | string;
  };

  export type userstyleCreateInput = {
    sstyle: string;
    pstyle: string;
    estyle: string;
    exstyle: string;
    user: userCreateNestedOneWithoutUserstyleInput;
  };

  export type userstyleUncheckedCreateInput = {
    uid: number;
    sstyle: string;
    pstyle: string;
    estyle: string;
    exstyle: string;
  };

  export type userstyleUpdateInput = {
    sstyle?: StringFieldUpdateOperationsInput | string;
    pstyle?: StringFieldUpdateOperationsInput | string;
    estyle?: StringFieldUpdateOperationsInput | string;
    exstyle?: StringFieldUpdateOperationsInput | string;
    user?: userUpdateOneRequiredWithoutUserstyleNestedInput;
  };

  export type userstyleUncheckedUpdateInput = {
    uid?: IntFieldUpdateOperationsInput | number;
    sstyle?: StringFieldUpdateOperationsInput | string;
    pstyle?: StringFieldUpdateOperationsInput | string;
    estyle?: StringFieldUpdateOperationsInput | string;
    exstyle?: StringFieldUpdateOperationsInput | string;
  };

  export type userstyleCreateManyInput = {
    uid: number;
    sstyle: string;
    pstyle: string;
    estyle: string;
    exstyle: string;
  };

  export type userstyleUpdateManyMutationInput = {
    sstyle?: StringFieldUpdateOperationsInput | string;
    pstyle?: StringFieldUpdateOperationsInput | string;
    estyle?: StringFieldUpdateOperationsInput | string;
    exstyle?: StringFieldUpdateOperationsInput | string;
  };

  export type userstyleUncheckedUpdateManyInput = {
    uid?: IntFieldUpdateOperationsInput | number;
    sstyle?: StringFieldUpdateOperationsInput | string;
    pstyle?: StringFieldUpdateOperationsInput | string;
    estyle?: StringFieldUpdateOperationsInput | string;
    exstyle?: StringFieldUpdateOperationsInput | string;
  };

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>;
    in?: number[] | ListIntFieldRefInput<$PrismaModel>;
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>;
    lt?: number | IntFieldRefInput<$PrismaModel>;
    lte?: number | IntFieldRefInput<$PrismaModel>;
    gt?: number | IntFieldRefInput<$PrismaModel>;
    gte?: number | IntFieldRefInput<$PrismaModel>;
    not?: NestedIntFilter<$PrismaModel> | number;
  };

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>;
    in?: string[] | ListStringFieldRefInput<$PrismaModel>;
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>;
    lt?: string | StringFieldRefInput<$PrismaModel>;
    lte?: string | StringFieldRefInput<$PrismaModel>;
    gt?: string | StringFieldRefInput<$PrismaModel>;
    gte?: string | StringFieldRefInput<$PrismaModel>;
    contains?: string | StringFieldRefInput<$PrismaModel>;
    startsWith?: string | StringFieldRefInput<$PrismaModel>;
    endsWith?: string | StringFieldRefInput<$PrismaModel>;
    mode?: QueryMode;
    not?: NestedStringFilter<$PrismaModel> | string;
  };

  export type StringNullableListFilter<$PrismaModel = never> = {
    equals?: string[] | ListStringFieldRefInput<$PrismaModel> | null;
    has?: string | StringFieldRefInput<$PrismaModel> | null;
    hasEvery?: string[] | ListStringFieldRefInput<$PrismaModel>;
    hasSome?: string[] | ListStringFieldRefInput<$PrismaModel>;
    isEmpty?: boolean;
  };

  export type SkillsListRelationFilter = {
    every?: skillsWhereInput;
    some?: skillsWhereInput;
    none?: skillsWhereInput;
  };

  export type ContactListRelationFilter = {
    every?: contactWhereInput;
    some?: contactWhereInput;
    none?: contactWhereInput;
  };

  export type AboutListRelationFilter = {
    every?: AboutWhereInput;
    some?: AboutWhereInput;
    none?: AboutWhereInput;
  };

  export type ProjectListRelationFilter = {
    every?: projectWhereInput;
    some?: projectWhereInput;
    none?: projectWhereInput;
  };

  export type ExperienceListRelationFilter = {
    every?: experienceWhereInput;
    some?: experienceWhereInput;
    none?: experienceWhereInput;
  };

  export type EducationListRelationFilter = {
    every?: educationWhereInput;
    some?: educationWhereInput;
    none?: educationWhereInput;
  };

  export type HeroListRelationFilter = {
    every?: heroWhereInput;
    some?: heroWhereInput;
    none?: heroWhereInput;
  };

  export type UserstyleListRelationFilter = {
    every?: userstyleWhereInput;
    some?: userstyleWhereInput;
    none?: userstyleWhereInput;
  };

  export type skillsOrderByRelationAggregateInput = {
    _count?: SortOrder;
  };

  export type contactOrderByRelationAggregateInput = {
    _count?: SortOrder;
  };

  export type AboutOrderByRelationAggregateInput = {
    _count?: SortOrder;
  };

  export type projectOrderByRelationAggregateInput = {
    _count?: SortOrder;
  };

  export type experienceOrderByRelationAggregateInput = {
    _count?: SortOrder;
  };

  export type educationOrderByRelationAggregateInput = {
    _count?: SortOrder;
  };

  export type heroOrderByRelationAggregateInput = {
    _count?: SortOrder;
  };

  export type userstyleOrderByRelationAggregateInput = {
    _count?: SortOrder;
  };

  export type userCountOrderByAggregateInput = {
    uid?: SortOrder;
    username?: SortOrder;
    password?: SortOrder;
    email?: SortOrder;
    sessions?: SortOrder;
  };

  export type userAvgOrderByAggregateInput = {
    uid?: SortOrder;
  };

  export type userMaxOrderByAggregateInput = {
    uid?: SortOrder;
    username?: SortOrder;
    password?: SortOrder;
    email?: SortOrder;
  };

  export type userMinOrderByAggregateInput = {
    uid?: SortOrder;
    username?: SortOrder;
    password?: SortOrder;
    email?: SortOrder;
  };

  export type userSumOrderByAggregateInput = {
    uid?: SortOrder;
  };

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>;
    in?: number[] | ListIntFieldRefInput<$PrismaModel>;
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>;
    lt?: number | IntFieldRefInput<$PrismaModel>;
    lte?: number | IntFieldRefInput<$PrismaModel>;
    gt?: number | IntFieldRefInput<$PrismaModel>;
    gte?: number | IntFieldRefInput<$PrismaModel>;
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number;
    _count?: NestedIntFilter<$PrismaModel>;
    _avg?: NestedFloatFilter<$PrismaModel>;
    _sum?: NestedIntFilter<$PrismaModel>;
    _min?: NestedIntFilter<$PrismaModel>;
    _max?: NestedIntFilter<$PrismaModel>;
  };

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>;
    in?: string[] | ListStringFieldRefInput<$PrismaModel>;
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>;
    lt?: string | StringFieldRefInput<$PrismaModel>;
    lte?: string | StringFieldRefInput<$PrismaModel>;
    gt?: string | StringFieldRefInput<$PrismaModel>;
    gte?: string | StringFieldRefInput<$PrismaModel>;
    contains?: string | StringFieldRefInput<$PrismaModel>;
    startsWith?: string | StringFieldRefInput<$PrismaModel>;
    endsWith?: string | StringFieldRefInput<$PrismaModel>;
    mode?: QueryMode;
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string;
    _count?: NestedIntFilter<$PrismaModel>;
    _min?: NestedStringFilter<$PrismaModel>;
    _max?: NestedStringFilter<$PrismaModel>;
  };

  export type UserScalarRelationFilter = {
    is?: userWhereInput;
    isNot?: userWhereInput;
  };

  export type heroCountOrderByAggregateInput = {
    hid?: SortOrder;
    uid?: SortOrder;
    style?: SortOrder;
    hero?: SortOrder;
    subhero?: SortOrder;
  };

  export type heroAvgOrderByAggregateInput = {
    hid?: SortOrder;
    uid?: SortOrder;
  };

  export type heroMaxOrderByAggregateInput = {
    hid?: SortOrder;
    uid?: SortOrder;
    style?: SortOrder;
    hero?: SortOrder;
    subhero?: SortOrder;
  };

  export type heroMinOrderByAggregateInput = {
    hid?: SortOrder;
    uid?: SortOrder;
    style?: SortOrder;
    hero?: SortOrder;
    subhero?: SortOrder;
  };

  export type heroSumOrderByAggregateInput = {
    hid?: SortOrder;
    uid?: SortOrder;
  };

  export type projectCountOrderByAggregateInput = {
    pid?: SortOrder;
    uid?: SortOrder;
    title?: SortOrder;
    image?: SortOrder;
    desc?: SortOrder;
    tags?: SortOrder;
    github?: SortOrder;
    Link?: SortOrder;
  };

  export type projectAvgOrderByAggregateInput = {
    pid?: SortOrder;
    uid?: SortOrder;
  };

  export type projectMaxOrderByAggregateInput = {
    pid?: SortOrder;
    uid?: SortOrder;
    title?: SortOrder;
    image?: SortOrder;
    desc?: SortOrder;
    github?: SortOrder;
    Link?: SortOrder;
  };

  export type projectMinOrderByAggregateInput = {
    pid?: SortOrder;
    uid?: SortOrder;
    title?: SortOrder;
    image?: SortOrder;
    desc?: SortOrder;
    github?: SortOrder;
    Link?: SortOrder;
  };

  export type projectSumOrderByAggregateInput = {
    pid?: SortOrder;
    uid?: SortOrder;
  };

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null;
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null;
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null;
    lt?: string | StringFieldRefInput<$PrismaModel>;
    lte?: string | StringFieldRefInput<$PrismaModel>;
    gt?: string | StringFieldRefInput<$PrismaModel>;
    gte?: string | StringFieldRefInput<$PrismaModel>;
    contains?: string | StringFieldRefInput<$PrismaModel>;
    startsWith?: string | StringFieldRefInput<$PrismaModel>;
    endsWith?: string | StringFieldRefInput<$PrismaModel>;
    mode?: QueryMode;
    not?: NestedStringNullableFilter<$PrismaModel> | string | null;
  };

  export type SortOrderInput = {
    sort: SortOrder;
    nulls?: NullsOrder;
  };

  export type experienceCountOrderByAggregateInput = {
    exid?: SortOrder;
    title?: SortOrder;
    corp?: SortOrder;
    startdate?: SortOrder;
    enddate?: SortOrder;
    desc?: SortOrder;
    uid?: SortOrder;
  };

  export type experienceAvgOrderByAggregateInput = {
    exid?: SortOrder;
    uid?: SortOrder;
  };

  export type experienceMaxOrderByAggregateInput = {
    exid?: SortOrder;
    title?: SortOrder;
    corp?: SortOrder;
    startdate?: SortOrder;
    enddate?: SortOrder;
    desc?: SortOrder;
    uid?: SortOrder;
  };

  export type experienceMinOrderByAggregateInput = {
    exid?: SortOrder;
    title?: SortOrder;
    corp?: SortOrder;
    startdate?: SortOrder;
    enddate?: SortOrder;
    desc?: SortOrder;
    uid?: SortOrder;
  };

  export type experienceSumOrderByAggregateInput = {
    exid?: SortOrder;
    uid?: SortOrder;
  };

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null;
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null;
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null;
    lt?: string | StringFieldRefInput<$PrismaModel>;
    lte?: string | StringFieldRefInput<$PrismaModel>;
    gt?: string | StringFieldRefInput<$PrismaModel>;
    gte?: string | StringFieldRefInput<$PrismaModel>;
    contains?: string | StringFieldRefInput<$PrismaModel>;
    startsWith?: string | StringFieldRefInput<$PrismaModel>;
    endsWith?: string | StringFieldRefInput<$PrismaModel>;
    mode?: QueryMode;
    not?:
      | NestedStringNullableWithAggregatesFilter<$PrismaModel>
      | string
      | null;
    _count?: NestedIntNullableFilter<$PrismaModel>;
    _min?: NestedStringNullableFilter<$PrismaModel>;
    _max?: NestedStringNullableFilter<$PrismaModel>;
  };

  export type educationCountOrderByAggregateInput = {
    edid?: SortOrder;
    inst?: SortOrder;
    degree?: SortOrder;
    startdate?: SortOrder;
    enddate?: SortOrder;
    uid?: SortOrder;
  };

  export type educationAvgOrderByAggregateInput = {
    edid?: SortOrder;
    uid?: SortOrder;
  };

  export type educationMaxOrderByAggregateInput = {
    edid?: SortOrder;
    inst?: SortOrder;
    degree?: SortOrder;
    startdate?: SortOrder;
    enddate?: SortOrder;
    uid?: SortOrder;
  };

  export type educationMinOrderByAggregateInput = {
    edid?: SortOrder;
    inst?: SortOrder;
    degree?: SortOrder;
    startdate?: SortOrder;
    enddate?: SortOrder;
    uid?: SortOrder;
  };

  export type educationSumOrderByAggregateInput = {
    edid?: SortOrder;
    uid?: SortOrder;
  };

  export type skillsCountOrderByAggregateInput = {
    sid?: SortOrder;
    uid?: SortOrder;
    skillname?: SortOrder;
    skills?: SortOrder;
    icon?: SortOrder;
  };

  export type skillsAvgOrderByAggregateInput = {
    sid?: SortOrder;
    uid?: SortOrder;
  };

  export type skillsMaxOrderByAggregateInput = {
    sid?: SortOrder;
    uid?: SortOrder;
    skillname?: SortOrder;
    icon?: SortOrder;
  };

  export type skillsMinOrderByAggregateInput = {
    sid?: SortOrder;
    uid?: SortOrder;
    skillname?: SortOrder;
    icon?: SortOrder;
  };

  export type skillsSumOrderByAggregateInput = {
    sid?: SortOrder;
    uid?: SortOrder;
  };

  export type contactCountOrderByAggregateInput = {
    cid?: SortOrder;
    uid?: SortOrder;
    email?: SortOrder;
    phone?: SortOrder;
    location?: SortOrder;
    linkedin?: SortOrder;
    github?: SortOrder;
  };

  export type contactAvgOrderByAggregateInput = {
    cid?: SortOrder;
    uid?: SortOrder;
  };

  export type contactMaxOrderByAggregateInput = {
    cid?: SortOrder;
    uid?: SortOrder;
    email?: SortOrder;
    phone?: SortOrder;
    location?: SortOrder;
    linkedin?: SortOrder;
    github?: SortOrder;
  };

  export type contactMinOrderByAggregateInput = {
    cid?: SortOrder;
    uid?: SortOrder;
    email?: SortOrder;
    phone?: SortOrder;
    location?: SortOrder;
    linkedin?: SortOrder;
    github?: SortOrder;
  };

  export type contactSumOrderByAggregateInput = {
    cid?: SortOrder;
    uid?: SortOrder;
  };

  export type AboutCountOrderByAggregateInput = {
    aid?: SortOrder;
    uid?: SortOrder;
    image?: SortOrder;
    about?: SortOrder;
    style?: SortOrder;
  };

  export type AboutAvgOrderByAggregateInput = {
    aid?: SortOrder;
    uid?: SortOrder;
  };

  export type AboutMaxOrderByAggregateInput = {
    aid?: SortOrder;
    uid?: SortOrder;
    image?: SortOrder;
    about?: SortOrder;
    style?: SortOrder;
  };

  export type AboutMinOrderByAggregateInput = {
    aid?: SortOrder;
    uid?: SortOrder;
    image?: SortOrder;
    about?: SortOrder;
    style?: SortOrder;
  };

  export type AboutSumOrderByAggregateInput = {
    aid?: SortOrder;
    uid?: SortOrder;
  };

  export type userstyleCountOrderByAggregateInput = {
    uid?: SortOrder;
    sstyle?: SortOrder;
    pstyle?: SortOrder;
    estyle?: SortOrder;
    exstyle?: SortOrder;
  };

  export type userstyleAvgOrderByAggregateInput = {
    uid?: SortOrder;
  };

  export type userstyleMaxOrderByAggregateInput = {
    uid?: SortOrder;
    sstyle?: SortOrder;
    pstyle?: SortOrder;
    estyle?: SortOrder;
    exstyle?: SortOrder;
  };

  export type userstyleMinOrderByAggregateInput = {
    uid?: SortOrder;
    sstyle?: SortOrder;
    pstyle?: SortOrder;
    estyle?: SortOrder;
    exstyle?: SortOrder;
  };

  export type userstyleSumOrderByAggregateInput = {
    uid?: SortOrder;
  };

  export type userCreatesessionsInput = {
    set: string[];
  };

  export type skillsCreateNestedManyWithoutUserInput = {
    create?:
      | XOR<skillsCreateWithoutUserInput, skillsUncheckedCreateWithoutUserInput>
      | skillsCreateWithoutUserInput[]
      | skillsUncheckedCreateWithoutUserInput[];
    connectOrCreate?:
      | skillsCreateOrConnectWithoutUserInput
      | skillsCreateOrConnectWithoutUserInput[];
    createMany?: skillsCreateManyUserInputEnvelope;
    connect?: skillsWhereUniqueInput | skillsWhereUniqueInput[];
  };

  export type contactCreateNestedManyWithoutUserInput = {
    create?:
      | XOR<
          contactCreateWithoutUserInput,
          contactUncheckedCreateWithoutUserInput
        >
      | contactCreateWithoutUserInput[]
      | contactUncheckedCreateWithoutUserInput[];
    connectOrCreate?:
      | contactCreateOrConnectWithoutUserInput
      | contactCreateOrConnectWithoutUserInput[];
    createMany?: contactCreateManyUserInputEnvelope;
    connect?: contactWhereUniqueInput | contactWhereUniqueInput[];
  };

  export type AboutCreateNestedManyWithoutUserInput = {
    create?:
      | XOR<AboutCreateWithoutUserInput, AboutUncheckedCreateWithoutUserInput>
      | AboutCreateWithoutUserInput[]
      | AboutUncheckedCreateWithoutUserInput[];
    connectOrCreate?:
      | AboutCreateOrConnectWithoutUserInput
      | AboutCreateOrConnectWithoutUserInput[];
    createMany?: AboutCreateManyUserInputEnvelope;
    connect?: AboutWhereUniqueInput | AboutWhereUniqueInput[];
  };

  export type projectCreateNestedManyWithoutUserInput = {
    create?:
      | XOR<
          projectCreateWithoutUserInput,
          projectUncheckedCreateWithoutUserInput
        >
      | projectCreateWithoutUserInput[]
      | projectUncheckedCreateWithoutUserInput[];
    connectOrCreate?:
      | projectCreateOrConnectWithoutUserInput
      | projectCreateOrConnectWithoutUserInput[];
    createMany?: projectCreateManyUserInputEnvelope;
    connect?: projectWhereUniqueInput | projectWhereUniqueInput[];
  };

  export type experienceCreateNestedManyWithoutUserInput = {
    create?:
      | XOR<
          experienceCreateWithoutUserInput,
          experienceUncheckedCreateWithoutUserInput
        >
      | experienceCreateWithoutUserInput[]
      | experienceUncheckedCreateWithoutUserInput[];
    connectOrCreate?:
      | experienceCreateOrConnectWithoutUserInput
      | experienceCreateOrConnectWithoutUserInput[];
    createMany?: experienceCreateManyUserInputEnvelope;
    connect?: experienceWhereUniqueInput | experienceWhereUniqueInput[];
  };

  export type educationCreateNestedManyWithoutUserInput = {
    create?:
      | XOR<
          educationCreateWithoutUserInput,
          educationUncheckedCreateWithoutUserInput
        >
      | educationCreateWithoutUserInput[]
      | educationUncheckedCreateWithoutUserInput[];
    connectOrCreate?:
      | educationCreateOrConnectWithoutUserInput
      | educationCreateOrConnectWithoutUserInput[];
    createMany?: educationCreateManyUserInputEnvelope;
    connect?: educationWhereUniqueInput | educationWhereUniqueInput[];
  };

  export type heroCreateNestedManyWithoutUserInput = {
    create?:
      | XOR<heroCreateWithoutUserInput, heroUncheckedCreateWithoutUserInput>
      | heroCreateWithoutUserInput[]
      | heroUncheckedCreateWithoutUserInput[];
    connectOrCreate?:
      | heroCreateOrConnectWithoutUserInput
      | heroCreateOrConnectWithoutUserInput[];
    createMany?: heroCreateManyUserInputEnvelope;
    connect?: heroWhereUniqueInput | heroWhereUniqueInput[];
  };

  export type userstyleCreateNestedManyWithoutUserInput = {
    create?:
      | XOR<
          userstyleCreateWithoutUserInput,
          userstyleUncheckedCreateWithoutUserInput
        >
      | userstyleCreateWithoutUserInput[]
      | userstyleUncheckedCreateWithoutUserInput[];
    connectOrCreate?:
      | userstyleCreateOrConnectWithoutUserInput
      | userstyleCreateOrConnectWithoutUserInput[];
    createMany?: userstyleCreateManyUserInputEnvelope;
    connect?: userstyleWhereUniqueInput | userstyleWhereUniqueInput[];
  };

  export type skillsUncheckedCreateNestedManyWithoutUserInput = {
    create?:
      | XOR<skillsCreateWithoutUserInput, skillsUncheckedCreateWithoutUserInput>
      | skillsCreateWithoutUserInput[]
      | skillsUncheckedCreateWithoutUserInput[];
    connectOrCreate?:
      | skillsCreateOrConnectWithoutUserInput
      | skillsCreateOrConnectWithoutUserInput[];
    createMany?: skillsCreateManyUserInputEnvelope;
    connect?: skillsWhereUniqueInput | skillsWhereUniqueInput[];
  };

  export type contactUncheckedCreateNestedManyWithoutUserInput = {
    create?:
      | XOR<
          contactCreateWithoutUserInput,
          contactUncheckedCreateWithoutUserInput
        >
      | contactCreateWithoutUserInput[]
      | contactUncheckedCreateWithoutUserInput[];
    connectOrCreate?:
      | contactCreateOrConnectWithoutUserInput
      | contactCreateOrConnectWithoutUserInput[];
    createMany?: contactCreateManyUserInputEnvelope;
    connect?: contactWhereUniqueInput | contactWhereUniqueInput[];
  };

  export type AboutUncheckedCreateNestedManyWithoutUserInput = {
    create?:
      | XOR<AboutCreateWithoutUserInput, AboutUncheckedCreateWithoutUserInput>
      | AboutCreateWithoutUserInput[]
      | AboutUncheckedCreateWithoutUserInput[];
    connectOrCreate?:
      | AboutCreateOrConnectWithoutUserInput
      | AboutCreateOrConnectWithoutUserInput[];
    createMany?: AboutCreateManyUserInputEnvelope;
    connect?: AboutWhereUniqueInput | AboutWhereUniqueInput[];
  };

  export type projectUncheckedCreateNestedManyWithoutUserInput = {
    create?:
      | XOR<
          projectCreateWithoutUserInput,
          projectUncheckedCreateWithoutUserInput
        >
      | projectCreateWithoutUserInput[]
      | projectUncheckedCreateWithoutUserInput[];
    connectOrCreate?:
      | projectCreateOrConnectWithoutUserInput
      | projectCreateOrConnectWithoutUserInput[];
    createMany?: projectCreateManyUserInputEnvelope;
    connect?: projectWhereUniqueInput | projectWhereUniqueInput[];
  };

  export type experienceUncheckedCreateNestedManyWithoutUserInput = {
    create?:
      | XOR<
          experienceCreateWithoutUserInput,
          experienceUncheckedCreateWithoutUserInput
        >
      | experienceCreateWithoutUserInput[]
      | experienceUncheckedCreateWithoutUserInput[];
    connectOrCreate?:
      | experienceCreateOrConnectWithoutUserInput
      | experienceCreateOrConnectWithoutUserInput[];
    createMany?: experienceCreateManyUserInputEnvelope;
    connect?: experienceWhereUniqueInput | experienceWhereUniqueInput[];
  };

  export type educationUncheckedCreateNestedManyWithoutUserInput = {
    create?:
      | XOR<
          educationCreateWithoutUserInput,
          educationUncheckedCreateWithoutUserInput
        >
      | educationCreateWithoutUserInput[]
      | educationUncheckedCreateWithoutUserInput[];
    connectOrCreate?:
      | educationCreateOrConnectWithoutUserInput
      | educationCreateOrConnectWithoutUserInput[];
    createMany?: educationCreateManyUserInputEnvelope;
    connect?: educationWhereUniqueInput | educationWhereUniqueInput[];
  };

  export type heroUncheckedCreateNestedManyWithoutUserInput = {
    create?:
      | XOR<heroCreateWithoutUserInput, heroUncheckedCreateWithoutUserInput>
      | heroCreateWithoutUserInput[]
      | heroUncheckedCreateWithoutUserInput[];
    connectOrCreate?:
      | heroCreateOrConnectWithoutUserInput
      | heroCreateOrConnectWithoutUserInput[];
    createMany?: heroCreateManyUserInputEnvelope;
    connect?: heroWhereUniqueInput | heroWhereUniqueInput[];
  };

  export type userstyleUncheckedCreateNestedManyWithoutUserInput = {
    create?:
      | XOR<
          userstyleCreateWithoutUserInput,
          userstyleUncheckedCreateWithoutUserInput
        >
      | userstyleCreateWithoutUserInput[]
      | userstyleUncheckedCreateWithoutUserInput[];
    connectOrCreate?:
      | userstyleCreateOrConnectWithoutUserInput
      | userstyleCreateOrConnectWithoutUserInput[];
    createMany?: userstyleCreateManyUserInputEnvelope;
    connect?: userstyleWhereUniqueInput | userstyleWhereUniqueInput[];
  };

  export type StringFieldUpdateOperationsInput = {
    set?: string;
  };

  export type userUpdatesessionsInput = {
    set?: string[];
    push?: string | string[];
  };

  export type skillsUpdateManyWithoutUserNestedInput = {
    create?:
      | XOR<skillsCreateWithoutUserInput, skillsUncheckedCreateWithoutUserInput>
      | skillsCreateWithoutUserInput[]
      | skillsUncheckedCreateWithoutUserInput[];
    connectOrCreate?:
      | skillsCreateOrConnectWithoutUserInput
      | skillsCreateOrConnectWithoutUserInput[];
    upsert?:
      | skillsUpsertWithWhereUniqueWithoutUserInput
      | skillsUpsertWithWhereUniqueWithoutUserInput[];
    createMany?: skillsCreateManyUserInputEnvelope;
    set?: skillsWhereUniqueInput | skillsWhereUniqueInput[];
    disconnect?: skillsWhereUniqueInput | skillsWhereUniqueInput[];
    delete?: skillsWhereUniqueInput | skillsWhereUniqueInput[];
    connect?: skillsWhereUniqueInput | skillsWhereUniqueInput[];
    update?:
      | skillsUpdateWithWhereUniqueWithoutUserInput
      | skillsUpdateWithWhereUniqueWithoutUserInput[];
    updateMany?:
      | skillsUpdateManyWithWhereWithoutUserInput
      | skillsUpdateManyWithWhereWithoutUserInput[];
    deleteMany?: skillsScalarWhereInput | skillsScalarWhereInput[];
  };

  export type contactUpdateManyWithoutUserNestedInput = {
    create?:
      | XOR<
          contactCreateWithoutUserInput,
          contactUncheckedCreateWithoutUserInput
        >
      | contactCreateWithoutUserInput[]
      | contactUncheckedCreateWithoutUserInput[];
    connectOrCreate?:
      | contactCreateOrConnectWithoutUserInput
      | contactCreateOrConnectWithoutUserInput[];
    upsert?:
      | contactUpsertWithWhereUniqueWithoutUserInput
      | contactUpsertWithWhereUniqueWithoutUserInput[];
    createMany?: contactCreateManyUserInputEnvelope;
    set?: contactWhereUniqueInput | contactWhereUniqueInput[];
    disconnect?: contactWhereUniqueInput | contactWhereUniqueInput[];
    delete?: contactWhereUniqueInput | contactWhereUniqueInput[];
    connect?: contactWhereUniqueInput | contactWhereUniqueInput[];
    update?:
      | contactUpdateWithWhereUniqueWithoutUserInput
      | contactUpdateWithWhereUniqueWithoutUserInput[];
    updateMany?:
      | contactUpdateManyWithWhereWithoutUserInput
      | contactUpdateManyWithWhereWithoutUserInput[];
    deleteMany?: contactScalarWhereInput | contactScalarWhereInput[];
  };

  export type AboutUpdateManyWithoutUserNestedInput = {
    create?:
      | XOR<AboutCreateWithoutUserInput, AboutUncheckedCreateWithoutUserInput>
      | AboutCreateWithoutUserInput[]
      | AboutUncheckedCreateWithoutUserInput[];
    connectOrCreate?:
      | AboutCreateOrConnectWithoutUserInput
      | AboutCreateOrConnectWithoutUserInput[];
    upsert?:
      | AboutUpsertWithWhereUniqueWithoutUserInput
      | AboutUpsertWithWhereUniqueWithoutUserInput[];
    createMany?: AboutCreateManyUserInputEnvelope;
    set?: AboutWhereUniqueInput | AboutWhereUniqueInput[];
    disconnect?: AboutWhereUniqueInput | AboutWhereUniqueInput[];
    delete?: AboutWhereUniqueInput | AboutWhereUniqueInput[];
    connect?: AboutWhereUniqueInput | AboutWhereUniqueInput[];
    update?:
      | AboutUpdateWithWhereUniqueWithoutUserInput
      | AboutUpdateWithWhereUniqueWithoutUserInput[];
    updateMany?:
      | AboutUpdateManyWithWhereWithoutUserInput
      | AboutUpdateManyWithWhereWithoutUserInput[];
    deleteMany?: AboutScalarWhereInput | AboutScalarWhereInput[];
  };

  export type projectUpdateManyWithoutUserNestedInput = {
    create?:
      | XOR<
          projectCreateWithoutUserInput,
          projectUncheckedCreateWithoutUserInput
        >
      | projectCreateWithoutUserInput[]
      | projectUncheckedCreateWithoutUserInput[];
    connectOrCreate?:
      | projectCreateOrConnectWithoutUserInput
      | projectCreateOrConnectWithoutUserInput[];
    upsert?:
      | projectUpsertWithWhereUniqueWithoutUserInput
      | projectUpsertWithWhereUniqueWithoutUserInput[];
    createMany?: projectCreateManyUserInputEnvelope;
    set?: projectWhereUniqueInput | projectWhereUniqueInput[];
    disconnect?: projectWhereUniqueInput | projectWhereUniqueInput[];
    delete?: projectWhereUniqueInput | projectWhereUniqueInput[];
    connect?: projectWhereUniqueInput | projectWhereUniqueInput[];
    update?:
      | projectUpdateWithWhereUniqueWithoutUserInput
      | projectUpdateWithWhereUniqueWithoutUserInput[];
    updateMany?:
      | projectUpdateManyWithWhereWithoutUserInput
      | projectUpdateManyWithWhereWithoutUserInput[];
    deleteMany?: projectScalarWhereInput | projectScalarWhereInput[];
  };

  export type experienceUpdateManyWithoutUserNestedInput = {
    create?:
      | XOR<
          experienceCreateWithoutUserInput,
          experienceUncheckedCreateWithoutUserInput
        >
      | experienceCreateWithoutUserInput[]
      | experienceUncheckedCreateWithoutUserInput[];
    connectOrCreate?:
      | experienceCreateOrConnectWithoutUserInput
      | experienceCreateOrConnectWithoutUserInput[];
    upsert?:
      | experienceUpsertWithWhereUniqueWithoutUserInput
      | experienceUpsertWithWhereUniqueWithoutUserInput[];
    createMany?: experienceCreateManyUserInputEnvelope;
    set?: experienceWhereUniqueInput | experienceWhereUniqueInput[];
    disconnect?: experienceWhereUniqueInput | experienceWhereUniqueInput[];
    delete?: experienceWhereUniqueInput | experienceWhereUniqueInput[];
    connect?: experienceWhereUniqueInput | experienceWhereUniqueInput[];
    update?:
      | experienceUpdateWithWhereUniqueWithoutUserInput
      | experienceUpdateWithWhereUniqueWithoutUserInput[];
    updateMany?:
      | experienceUpdateManyWithWhereWithoutUserInput
      | experienceUpdateManyWithWhereWithoutUserInput[];
    deleteMany?: experienceScalarWhereInput | experienceScalarWhereInput[];
  };

  export type educationUpdateManyWithoutUserNestedInput = {
    create?:
      | XOR<
          educationCreateWithoutUserInput,
          educationUncheckedCreateWithoutUserInput
        >
      | educationCreateWithoutUserInput[]
      | educationUncheckedCreateWithoutUserInput[];
    connectOrCreate?:
      | educationCreateOrConnectWithoutUserInput
      | educationCreateOrConnectWithoutUserInput[];
    upsert?:
      | educationUpsertWithWhereUniqueWithoutUserInput
      | educationUpsertWithWhereUniqueWithoutUserInput[];
    createMany?: educationCreateManyUserInputEnvelope;
    set?: educationWhereUniqueInput | educationWhereUniqueInput[];
    disconnect?: educationWhereUniqueInput | educationWhereUniqueInput[];
    delete?: educationWhereUniqueInput | educationWhereUniqueInput[];
    connect?: educationWhereUniqueInput | educationWhereUniqueInput[];
    update?:
      | educationUpdateWithWhereUniqueWithoutUserInput
      | educationUpdateWithWhereUniqueWithoutUserInput[];
    updateMany?:
      | educationUpdateManyWithWhereWithoutUserInput
      | educationUpdateManyWithWhereWithoutUserInput[];
    deleteMany?: educationScalarWhereInput | educationScalarWhereInput[];
  };

  export type heroUpdateManyWithoutUserNestedInput = {
    create?:
      | XOR<heroCreateWithoutUserInput, heroUncheckedCreateWithoutUserInput>
      | heroCreateWithoutUserInput[]
      | heroUncheckedCreateWithoutUserInput[];
    connectOrCreate?:
      | heroCreateOrConnectWithoutUserInput
      | heroCreateOrConnectWithoutUserInput[];
    upsert?:
      | heroUpsertWithWhereUniqueWithoutUserInput
      | heroUpsertWithWhereUniqueWithoutUserInput[];
    createMany?: heroCreateManyUserInputEnvelope;
    set?: heroWhereUniqueInput | heroWhereUniqueInput[];
    disconnect?: heroWhereUniqueInput | heroWhereUniqueInput[];
    delete?: heroWhereUniqueInput | heroWhereUniqueInput[];
    connect?: heroWhereUniqueInput | heroWhereUniqueInput[];
    update?:
      | heroUpdateWithWhereUniqueWithoutUserInput
      | heroUpdateWithWhereUniqueWithoutUserInput[];
    updateMany?:
      | heroUpdateManyWithWhereWithoutUserInput
      | heroUpdateManyWithWhereWithoutUserInput[];
    deleteMany?: heroScalarWhereInput | heroScalarWhereInput[];
  };

  export type userstyleUpdateManyWithoutUserNestedInput = {
    create?:
      | XOR<
          userstyleCreateWithoutUserInput,
          userstyleUncheckedCreateWithoutUserInput
        >
      | userstyleCreateWithoutUserInput[]
      | userstyleUncheckedCreateWithoutUserInput[];
    connectOrCreate?:
      | userstyleCreateOrConnectWithoutUserInput
      | userstyleCreateOrConnectWithoutUserInput[];
    upsert?:
      | userstyleUpsertWithWhereUniqueWithoutUserInput
      | userstyleUpsertWithWhereUniqueWithoutUserInput[];
    createMany?: userstyleCreateManyUserInputEnvelope;
    set?: userstyleWhereUniqueInput | userstyleWhereUniqueInput[];
    disconnect?: userstyleWhereUniqueInput | userstyleWhereUniqueInput[];
    delete?: userstyleWhereUniqueInput | userstyleWhereUniqueInput[];
    connect?: userstyleWhereUniqueInput | userstyleWhereUniqueInput[];
    update?:
      | userstyleUpdateWithWhereUniqueWithoutUserInput
      | userstyleUpdateWithWhereUniqueWithoutUserInput[];
    updateMany?:
      | userstyleUpdateManyWithWhereWithoutUserInput
      | userstyleUpdateManyWithWhereWithoutUserInput[];
    deleteMany?: userstyleScalarWhereInput | userstyleScalarWhereInput[];
  };

  export type IntFieldUpdateOperationsInput = {
    set?: number;
    increment?: number;
    decrement?: number;
    multiply?: number;
    divide?: number;
  };

  export type skillsUncheckedUpdateManyWithoutUserNestedInput = {
    create?:
      | XOR<skillsCreateWithoutUserInput, skillsUncheckedCreateWithoutUserInput>
      | skillsCreateWithoutUserInput[]
      | skillsUncheckedCreateWithoutUserInput[];
    connectOrCreate?:
      | skillsCreateOrConnectWithoutUserInput
      | skillsCreateOrConnectWithoutUserInput[];
    upsert?:
      | skillsUpsertWithWhereUniqueWithoutUserInput
      | skillsUpsertWithWhereUniqueWithoutUserInput[];
    createMany?: skillsCreateManyUserInputEnvelope;
    set?: skillsWhereUniqueInput | skillsWhereUniqueInput[];
    disconnect?: skillsWhereUniqueInput | skillsWhereUniqueInput[];
    delete?: skillsWhereUniqueInput | skillsWhereUniqueInput[];
    connect?: skillsWhereUniqueInput | skillsWhereUniqueInput[];
    update?:
      | skillsUpdateWithWhereUniqueWithoutUserInput
      | skillsUpdateWithWhereUniqueWithoutUserInput[];
    updateMany?:
      | skillsUpdateManyWithWhereWithoutUserInput
      | skillsUpdateManyWithWhereWithoutUserInput[];
    deleteMany?: skillsScalarWhereInput | skillsScalarWhereInput[];
  };

  export type contactUncheckedUpdateManyWithoutUserNestedInput = {
    create?:
      | XOR<
          contactCreateWithoutUserInput,
          contactUncheckedCreateWithoutUserInput
        >
      | contactCreateWithoutUserInput[]
      | contactUncheckedCreateWithoutUserInput[];
    connectOrCreate?:
      | contactCreateOrConnectWithoutUserInput
      | contactCreateOrConnectWithoutUserInput[];
    upsert?:
      | contactUpsertWithWhereUniqueWithoutUserInput
      | contactUpsertWithWhereUniqueWithoutUserInput[];
    createMany?: contactCreateManyUserInputEnvelope;
    set?: contactWhereUniqueInput | contactWhereUniqueInput[];
    disconnect?: contactWhereUniqueInput | contactWhereUniqueInput[];
    delete?: contactWhereUniqueInput | contactWhereUniqueInput[];
    connect?: contactWhereUniqueInput | contactWhereUniqueInput[];
    update?:
      | contactUpdateWithWhereUniqueWithoutUserInput
      | contactUpdateWithWhereUniqueWithoutUserInput[];
    updateMany?:
      | contactUpdateManyWithWhereWithoutUserInput
      | contactUpdateManyWithWhereWithoutUserInput[];
    deleteMany?: contactScalarWhereInput | contactScalarWhereInput[];
  };

  export type AboutUncheckedUpdateManyWithoutUserNestedInput = {
    create?:
      | XOR<AboutCreateWithoutUserInput, AboutUncheckedCreateWithoutUserInput>
      | AboutCreateWithoutUserInput[]
      | AboutUncheckedCreateWithoutUserInput[];
    connectOrCreate?:
      | AboutCreateOrConnectWithoutUserInput
      | AboutCreateOrConnectWithoutUserInput[];
    upsert?:
      | AboutUpsertWithWhereUniqueWithoutUserInput
      | AboutUpsertWithWhereUniqueWithoutUserInput[];
    createMany?: AboutCreateManyUserInputEnvelope;
    set?: AboutWhereUniqueInput | AboutWhereUniqueInput[];
    disconnect?: AboutWhereUniqueInput | AboutWhereUniqueInput[];
    delete?: AboutWhereUniqueInput | AboutWhereUniqueInput[];
    connect?: AboutWhereUniqueInput | AboutWhereUniqueInput[];
    update?:
      | AboutUpdateWithWhereUniqueWithoutUserInput
      | AboutUpdateWithWhereUniqueWithoutUserInput[];
    updateMany?:
      | AboutUpdateManyWithWhereWithoutUserInput
      | AboutUpdateManyWithWhereWithoutUserInput[];
    deleteMany?: AboutScalarWhereInput | AboutScalarWhereInput[];
  };

  export type projectUncheckedUpdateManyWithoutUserNestedInput = {
    create?:
      | XOR<
          projectCreateWithoutUserInput,
          projectUncheckedCreateWithoutUserInput
        >
      | projectCreateWithoutUserInput[]
      | projectUncheckedCreateWithoutUserInput[];
    connectOrCreate?:
      | projectCreateOrConnectWithoutUserInput
      | projectCreateOrConnectWithoutUserInput[];
    upsert?:
      | projectUpsertWithWhereUniqueWithoutUserInput
      | projectUpsertWithWhereUniqueWithoutUserInput[];
    createMany?: projectCreateManyUserInputEnvelope;
    set?: projectWhereUniqueInput | projectWhereUniqueInput[];
    disconnect?: projectWhereUniqueInput | projectWhereUniqueInput[];
    delete?: projectWhereUniqueInput | projectWhereUniqueInput[];
    connect?: projectWhereUniqueInput | projectWhereUniqueInput[];
    update?:
      | projectUpdateWithWhereUniqueWithoutUserInput
      | projectUpdateWithWhereUniqueWithoutUserInput[];
    updateMany?:
      | projectUpdateManyWithWhereWithoutUserInput
      | projectUpdateManyWithWhereWithoutUserInput[];
    deleteMany?: projectScalarWhereInput | projectScalarWhereInput[];
  };

  export type experienceUncheckedUpdateManyWithoutUserNestedInput = {
    create?:
      | XOR<
          experienceCreateWithoutUserInput,
          experienceUncheckedCreateWithoutUserInput
        >
      | experienceCreateWithoutUserInput[]
      | experienceUncheckedCreateWithoutUserInput[];
    connectOrCreate?:
      | experienceCreateOrConnectWithoutUserInput
      | experienceCreateOrConnectWithoutUserInput[];
    upsert?:
      | experienceUpsertWithWhereUniqueWithoutUserInput
      | experienceUpsertWithWhereUniqueWithoutUserInput[];
    createMany?: experienceCreateManyUserInputEnvelope;
    set?: experienceWhereUniqueInput | experienceWhereUniqueInput[];
    disconnect?: experienceWhereUniqueInput | experienceWhereUniqueInput[];
    delete?: experienceWhereUniqueInput | experienceWhereUniqueInput[];
    connect?: experienceWhereUniqueInput | experienceWhereUniqueInput[];
    update?:
      | experienceUpdateWithWhereUniqueWithoutUserInput
      | experienceUpdateWithWhereUniqueWithoutUserInput[];
    updateMany?:
      | experienceUpdateManyWithWhereWithoutUserInput
      | experienceUpdateManyWithWhereWithoutUserInput[];
    deleteMany?: experienceScalarWhereInput | experienceScalarWhereInput[];
  };

  export type educationUncheckedUpdateManyWithoutUserNestedInput = {
    create?:
      | XOR<
          educationCreateWithoutUserInput,
          educationUncheckedCreateWithoutUserInput
        >
      | educationCreateWithoutUserInput[]
      | educationUncheckedCreateWithoutUserInput[];
    connectOrCreate?:
      | educationCreateOrConnectWithoutUserInput
      | educationCreateOrConnectWithoutUserInput[];
    upsert?:
      | educationUpsertWithWhereUniqueWithoutUserInput
      | educationUpsertWithWhereUniqueWithoutUserInput[];
    createMany?: educationCreateManyUserInputEnvelope;
    set?: educationWhereUniqueInput | educationWhereUniqueInput[];
    disconnect?: educationWhereUniqueInput | educationWhereUniqueInput[];
    delete?: educationWhereUniqueInput | educationWhereUniqueInput[];
    connect?: educationWhereUniqueInput | educationWhereUniqueInput[];
    update?:
      | educationUpdateWithWhereUniqueWithoutUserInput
      | educationUpdateWithWhereUniqueWithoutUserInput[];
    updateMany?:
      | educationUpdateManyWithWhereWithoutUserInput
      | educationUpdateManyWithWhereWithoutUserInput[];
    deleteMany?: educationScalarWhereInput | educationScalarWhereInput[];
  };

  export type heroUncheckedUpdateManyWithoutUserNestedInput = {
    create?:
      | XOR<heroCreateWithoutUserInput, heroUncheckedCreateWithoutUserInput>
      | heroCreateWithoutUserInput[]
      | heroUncheckedCreateWithoutUserInput[];
    connectOrCreate?:
      | heroCreateOrConnectWithoutUserInput
      | heroCreateOrConnectWithoutUserInput[];
    upsert?:
      | heroUpsertWithWhereUniqueWithoutUserInput
      | heroUpsertWithWhereUniqueWithoutUserInput[];
    createMany?: heroCreateManyUserInputEnvelope;
    set?: heroWhereUniqueInput | heroWhereUniqueInput[];
    disconnect?: heroWhereUniqueInput | heroWhereUniqueInput[];
    delete?: heroWhereUniqueInput | heroWhereUniqueInput[];
    connect?: heroWhereUniqueInput | heroWhereUniqueInput[];
    update?:
      | heroUpdateWithWhereUniqueWithoutUserInput
      | heroUpdateWithWhereUniqueWithoutUserInput[];
    updateMany?:
      | heroUpdateManyWithWhereWithoutUserInput
      | heroUpdateManyWithWhereWithoutUserInput[];
    deleteMany?: heroScalarWhereInput | heroScalarWhereInput[];
  };

  export type userstyleUncheckedUpdateManyWithoutUserNestedInput = {
    create?:
      | XOR<
          userstyleCreateWithoutUserInput,
          userstyleUncheckedCreateWithoutUserInput
        >
      | userstyleCreateWithoutUserInput[]
      | userstyleUncheckedCreateWithoutUserInput[];
    connectOrCreate?:
      | userstyleCreateOrConnectWithoutUserInput
      | userstyleCreateOrConnectWithoutUserInput[];
    upsert?:
      | userstyleUpsertWithWhereUniqueWithoutUserInput
      | userstyleUpsertWithWhereUniqueWithoutUserInput[];
    createMany?: userstyleCreateManyUserInputEnvelope;
    set?: userstyleWhereUniqueInput | userstyleWhereUniqueInput[];
    disconnect?: userstyleWhereUniqueInput | userstyleWhereUniqueInput[];
    delete?: userstyleWhereUniqueInput | userstyleWhereUniqueInput[];
    connect?: userstyleWhereUniqueInput | userstyleWhereUniqueInput[];
    update?:
      | userstyleUpdateWithWhereUniqueWithoutUserInput
      | userstyleUpdateWithWhereUniqueWithoutUserInput[];
    updateMany?:
      | userstyleUpdateManyWithWhereWithoutUserInput
      | userstyleUpdateManyWithWhereWithoutUserInput[];
    deleteMany?: userstyleScalarWhereInput | userstyleScalarWhereInput[];
  };

  export type userCreateNestedOneWithoutHeroInput = {
    create?: XOR<
      userCreateWithoutHeroInput,
      userUncheckedCreateWithoutHeroInput
    >;
    connectOrCreate?: userCreateOrConnectWithoutHeroInput;
    connect?: userWhereUniqueInput;
  };

  export type userUpdateOneRequiredWithoutHeroNestedInput = {
    create?: XOR<
      userCreateWithoutHeroInput,
      userUncheckedCreateWithoutHeroInput
    >;
    connectOrCreate?: userCreateOrConnectWithoutHeroInput;
    upsert?: userUpsertWithoutHeroInput;
    connect?: userWhereUniqueInput;
    update?: XOR<
      XOR<userUpdateToOneWithWhereWithoutHeroInput, userUpdateWithoutHeroInput>,
      userUncheckedUpdateWithoutHeroInput
    >;
  };

  export type projectCreatetagsInput = {
    set: string[];
  };

  export type userCreateNestedOneWithoutProjectInput = {
    create?: XOR<
      userCreateWithoutProjectInput,
      userUncheckedCreateWithoutProjectInput
    >;
    connectOrCreate?: userCreateOrConnectWithoutProjectInput;
    connect?: userWhereUniqueInput;
  };

  export type projectUpdatetagsInput = {
    set?: string[];
    push?: string | string[];
  };

  export type userUpdateOneRequiredWithoutProjectNestedInput = {
    create?: XOR<
      userCreateWithoutProjectInput,
      userUncheckedCreateWithoutProjectInput
    >;
    connectOrCreate?: userCreateOrConnectWithoutProjectInput;
    upsert?: userUpsertWithoutProjectInput;
    connect?: userWhereUniqueInput;
    update?: XOR<
      XOR<
        userUpdateToOneWithWhereWithoutProjectInput,
        userUpdateWithoutProjectInput
      >,
      userUncheckedUpdateWithoutProjectInput
    >;
  };

  export type userCreateNestedOneWithoutExperienceInput = {
    create?: XOR<
      userCreateWithoutExperienceInput,
      userUncheckedCreateWithoutExperienceInput
    >;
    connectOrCreate?: userCreateOrConnectWithoutExperienceInput;
    connect?: userWhereUniqueInput;
  };

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null;
  };

  export type userUpdateOneRequiredWithoutExperienceNestedInput = {
    create?: XOR<
      userCreateWithoutExperienceInput,
      userUncheckedCreateWithoutExperienceInput
    >;
    connectOrCreate?: userCreateOrConnectWithoutExperienceInput;
    upsert?: userUpsertWithoutExperienceInput;
    connect?: userWhereUniqueInput;
    update?: XOR<
      XOR<
        userUpdateToOneWithWhereWithoutExperienceInput,
        userUpdateWithoutExperienceInput
      >,
      userUncheckedUpdateWithoutExperienceInput
    >;
  };

  export type userCreateNestedOneWithoutEducationInput = {
    create?: XOR<
      userCreateWithoutEducationInput,
      userUncheckedCreateWithoutEducationInput
    >;
    connectOrCreate?: userCreateOrConnectWithoutEducationInput;
    connect?: userWhereUniqueInput;
  };

  export type userUpdateOneRequiredWithoutEducationNestedInput = {
    create?: XOR<
      userCreateWithoutEducationInput,
      userUncheckedCreateWithoutEducationInput
    >;
    connectOrCreate?: userCreateOrConnectWithoutEducationInput;
    upsert?: userUpsertWithoutEducationInput;
    connect?: userWhereUniqueInput;
    update?: XOR<
      XOR<
        userUpdateToOneWithWhereWithoutEducationInput,
        userUpdateWithoutEducationInput
      >,
      userUncheckedUpdateWithoutEducationInput
    >;
  };

  export type skillsCreateskillsInput = {
    set: string[];
  };

  export type userCreateNestedOneWithoutSkillsInput = {
    create?: XOR<
      userCreateWithoutSkillsInput,
      userUncheckedCreateWithoutSkillsInput
    >;
    connectOrCreate?: userCreateOrConnectWithoutSkillsInput;
    connect?: userWhereUniqueInput;
  };

  export type skillsUpdateskillsInput = {
    set?: string[];
    push?: string | string[];
  };

  export type userUpdateOneRequiredWithoutSkillsNestedInput = {
    create?: XOR<
      userCreateWithoutSkillsInput,
      userUncheckedCreateWithoutSkillsInput
    >;
    connectOrCreate?: userCreateOrConnectWithoutSkillsInput;
    upsert?: userUpsertWithoutSkillsInput;
    connect?: userWhereUniqueInput;
    update?: XOR<
      XOR<
        userUpdateToOneWithWhereWithoutSkillsInput,
        userUpdateWithoutSkillsInput
      >,
      userUncheckedUpdateWithoutSkillsInput
    >;
  };

  export type userCreateNestedOneWithoutContactInput = {
    create?: XOR<
      userCreateWithoutContactInput,
      userUncheckedCreateWithoutContactInput
    >;
    connectOrCreate?: userCreateOrConnectWithoutContactInput;
    connect?: userWhereUniqueInput;
  };

  export type userUpdateOneRequiredWithoutContactNestedInput = {
    create?: XOR<
      userCreateWithoutContactInput,
      userUncheckedCreateWithoutContactInput
    >;
    connectOrCreate?: userCreateOrConnectWithoutContactInput;
    upsert?: userUpsertWithoutContactInput;
    connect?: userWhereUniqueInput;
    update?: XOR<
      XOR<
        userUpdateToOneWithWhereWithoutContactInput,
        userUpdateWithoutContactInput
      >,
      userUncheckedUpdateWithoutContactInput
    >;
  };

  export type userCreateNestedOneWithoutAboutInput = {
    create?: XOR<
      userCreateWithoutAboutInput,
      userUncheckedCreateWithoutAboutInput
    >;
    connectOrCreate?: userCreateOrConnectWithoutAboutInput;
    connect?: userWhereUniqueInput;
  };

  export type userUpdateOneRequiredWithoutAboutNestedInput = {
    create?: XOR<
      userCreateWithoutAboutInput,
      userUncheckedCreateWithoutAboutInput
    >;
    connectOrCreate?: userCreateOrConnectWithoutAboutInput;
    upsert?: userUpsertWithoutAboutInput;
    connect?: userWhereUniqueInput;
    update?: XOR<
      XOR<
        userUpdateToOneWithWhereWithoutAboutInput,
        userUpdateWithoutAboutInput
      >,
      userUncheckedUpdateWithoutAboutInput
    >;
  };

  export type userCreateNestedOneWithoutUserstyleInput = {
    create?: XOR<
      userCreateWithoutUserstyleInput,
      userUncheckedCreateWithoutUserstyleInput
    >;
    connectOrCreate?: userCreateOrConnectWithoutUserstyleInput;
    connect?: userWhereUniqueInput;
  };

  export type userUpdateOneRequiredWithoutUserstyleNestedInput = {
    create?: XOR<
      userCreateWithoutUserstyleInput,
      userUncheckedCreateWithoutUserstyleInput
    >;
    connectOrCreate?: userCreateOrConnectWithoutUserstyleInput;
    upsert?: userUpsertWithoutUserstyleInput;
    connect?: userWhereUniqueInput;
    update?: XOR<
      XOR<
        userUpdateToOneWithWhereWithoutUserstyleInput,
        userUpdateWithoutUserstyleInput
      >,
      userUncheckedUpdateWithoutUserstyleInput
    >;
  };

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>;
    in?: number[] | ListIntFieldRefInput<$PrismaModel>;
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>;
    lt?: number | IntFieldRefInput<$PrismaModel>;
    lte?: number | IntFieldRefInput<$PrismaModel>;
    gt?: number | IntFieldRefInput<$PrismaModel>;
    gte?: number | IntFieldRefInput<$PrismaModel>;
    not?: NestedIntFilter<$PrismaModel> | number;
  };

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>;
    in?: string[] | ListStringFieldRefInput<$PrismaModel>;
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>;
    lt?: string | StringFieldRefInput<$PrismaModel>;
    lte?: string | StringFieldRefInput<$PrismaModel>;
    gt?: string | StringFieldRefInput<$PrismaModel>;
    gte?: string | StringFieldRefInput<$PrismaModel>;
    contains?: string | StringFieldRefInput<$PrismaModel>;
    startsWith?: string | StringFieldRefInput<$PrismaModel>;
    endsWith?: string | StringFieldRefInput<$PrismaModel>;
    not?: NestedStringFilter<$PrismaModel> | string;
  };

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>;
    in?: number[] | ListIntFieldRefInput<$PrismaModel>;
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>;
    lt?: number | IntFieldRefInput<$PrismaModel>;
    lte?: number | IntFieldRefInput<$PrismaModel>;
    gt?: number | IntFieldRefInput<$PrismaModel>;
    gte?: number | IntFieldRefInput<$PrismaModel>;
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number;
    _count?: NestedIntFilter<$PrismaModel>;
    _avg?: NestedFloatFilter<$PrismaModel>;
    _sum?: NestedIntFilter<$PrismaModel>;
    _min?: NestedIntFilter<$PrismaModel>;
    _max?: NestedIntFilter<$PrismaModel>;
  };

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>;
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>;
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>;
    lt?: number | FloatFieldRefInput<$PrismaModel>;
    lte?: number | FloatFieldRefInput<$PrismaModel>;
    gt?: number | FloatFieldRefInput<$PrismaModel>;
    gte?: number | FloatFieldRefInput<$PrismaModel>;
    not?: NestedFloatFilter<$PrismaModel> | number;
  };

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>;
    in?: string[] | ListStringFieldRefInput<$PrismaModel>;
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>;
    lt?: string | StringFieldRefInput<$PrismaModel>;
    lte?: string | StringFieldRefInput<$PrismaModel>;
    gt?: string | StringFieldRefInput<$PrismaModel>;
    gte?: string | StringFieldRefInput<$PrismaModel>;
    contains?: string | StringFieldRefInput<$PrismaModel>;
    startsWith?: string | StringFieldRefInput<$PrismaModel>;
    endsWith?: string | StringFieldRefInput<$PrismaModel>;
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string;
    _count?: NestedIntFilter<$PrismaModel>;
    _min?: NestedStringFilter<$PrismaModel>;
    _max?: NestedStringFilter<$PrismaModel>;
  };

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null;
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null;
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null;
    lt?: string | StringFieldRefInput<$PrismaModel>;
    lte?: string | StringFieldRefInput<$PrismaModel>;
    gt?: string | StringFieldRefInput<$PrismaModel>;
    gte?: string | StringFieldRefInput<$PrismaModel>;
    contains?: string | StringFieldRefInput<$PrismaModel>;
    startsWith?: string | StringFieldRefInput<$PrismaModel>;
    endsWith?: string | StringFieldRefInput<$PrismaModel>;
    not?: NestedStringNullableFilter<$PrismaModel> | string | null;
  };

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null;
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null;
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null;
    lt?: string | StringFieldRefInput<$PrismaModel>;
    lte?: string | StringFieldRefInput<$PrismaModel>;
    gt?: string | StringFieldRefInput<$PrismaModel>;
    gte?: string | StringFieldRefInput<$PrismaModel>;
    contains?: string | StringFieldRefInput<$PrismaModel>;
    startsWith?: string | StringFieldRefInput<$PrismaModel>;
    endsWith?: string | StringFieldRefInput<$PrismaModel>;
    not?:
      | NestedStringNullableWithAggregatesFilter<$PrismaModel>
      | string
      | null;
    _count?: NestedIntNullableFilter<$PrismaModel>;
    _min?: NestedStringNullableFilter<$PrismaModel>;
    _max?: NestedStringNullableFilter<$PrismaModel>;
  };

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null;
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null;
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null;
    lt?: number | IntFieldRefInput<$PrismaModel>;
    lte?: number | IntFieldRefInput<$PrismaModel>;
    gt?: number | IntFieldRefInput<$PrismaModel>;
    gte?: number | IntFieldRefInput<$PrismaModel>;
    not?: NestedIntNullableFilter<$PrismaModel> | number | null;
  };

  export type skillsCreateWithoutUserInput = {
    skillname: string;
    skills?: skillsCreateskillsInput | string[];
    icon: string;
  };

  export type skillsUncheckedCreateWithoutUserInput = {
    sid?: number;
    skillname: string;
    skills?: skillsCreateskillsInput | string[];
    icon: string;
  };

  export type skillsCreateOrConnectWithoutUserInput = {
    where: skillsWhereUniqueInput;
    create: XOR<
      skillsCreateWithoutUserInput,
      skillsUncheckedCreateWithoutUserInput
    >;
  };

  export type skillsCreateManyUserInputEnvelope = {
    data: skillsCreateManyUserInput | skillsCreateManyUserInput[];
    skipDuplicates?: boolean;
  };

  export type contactCreateWithoutUserInput = {
    email: string;
    phone: string;
    location: string;
    linkedin?: string;
    github?: string;
  };

  export type contactUncheckedCreateWithoutUserInput = {
    cid?: number;
    email: string;
    phone: string;
    location: string;
    linkedin?: string;
    github?: string;
  };

  export type contactCreateOrConnectWithoutUserInput = {
    where: contactWhereUniqueInput;
    create: XOR<
      contactCreateWithoutUserInput,
      contactUncheckedCreateWithoutUserInput
    >;
  };

  export type contactCreateManyUserInputEnvelope = {
    data: contactCreateManyUserInput | contactCreateManyUserInput[];
    skipDuplicates?: boolean;
  };

  export type AboutCreateWithoutUserInput = {
    image: string;
    about: string;
    style: string;
  };

  export type AboutUncheckedCreateWithoutUserInput = {
    aid?: number;
    image: string;
    about: string;
    style: string;
  };

  export type AboutCreateOrConnectWithoutUserInput = {
    where: AboutWhereUniqueInput;
    create: XOR<
      AboutCreateWithoutUserInput,
      AboutUncheckedCreateWithoutUserInput
    >;
  };

  export type AboutCreateManyUserInputEnvelope = {
    data: AboutCreateManyUserInput | AboutCreateManyUserInput[];
    skipDuplicates?: boolean;
  };

  export type projectCreateWithoutUserInput = {
    title: string;
    image: string;
    desc: string;
    tags?: projectCreatetagsInput | string[];
    github: string;
    Link: string;
  };

  export type projectUncheckedCreateWithoutUserInput = {
    pid?: number;
    title: string;
    image: string;
    desc: string;
    tags?: projectCreatetagsInput | string[];
    github: string;
    Link: string;
  };

  export type projectCreateOrConnectWithoutUserInput = {
    where: projectWhereUniqueInput;
    create: XOR<
      projectCreateWithoutUserInput,
      projectUncheckedCreateWithoutUserInput
    >;
  };

  export type projectCreateManyUserInputEnvelope = {
    data: projectCreateManyUserInput | projectCreateManyUserInput[];
    skipDuplicates?: boolean;
  };

  export type experienceCreateWithoutUserInput = {
    title: string;
    corp: string;
    startdate: string;
    enddate?: string | null;
    desc: string;
  };

  export type experienceUncheckedCreateWithoutUserInput = {
    exid?: number;
    title: string;
    corp: string;
    startdate: string;
    enddate?: string | null;
    desc: string;
  };

  export type experienceCreateOrConnectWithoutUserInput = {
    where: experienceWhereUniqueInput;
    create: XOR<
      experienceCreateWithoutUserInput,
      experienceUncheckedCreateWithoutUserInput
    >;
  };

  export type experienceCreateManyUserInputEnvelope = {
    data: experienceCreateManyUserInput | experienceCreateManyUserInput[];
    skipDuplicates?: boolean;
  };

  export type educationCreateWithoutUserInput = {
    inst: string;
    degree: string;
    startdate: string;
    enddate?: string | null;
  };

  export type educationUncheckedCreateWithoutUserInput = {
    edid?: number;
    inst: string;
    degree: string;
    startdate: string;
    enddate?: string | null;
  };

  export type educationCreateOrConnectWithoutUserInput = {
    where: educationWhereUniqueInput;
    create: XOR<
      educationCreateWithoutUserInput,
      educationUncheckedCreateWithoutUserInput
    >;
  };

  export type educationCreateManyUserInputEnvelope = {
    data: educationCreateManyUserInput | educationCreateManyUserInput[];
    skipDuplicates?: boolean;
  };

  export type heroCreateWithoutUserInput = {
    style: string;
    hero: string;
    subhero: string;
  };

  export type heroUncheckedCreateWithoutUserInput = {
    hid?: number;
    style: string;
    hero: string;
    subhero: string;
  };

  export type heroCreateOrConnectWithoutUserInput = {
    where: heroWhereUniqueInput;
    create: XOR<
      heroCreateWithoutUserInput,
      heroUncheckedCreateWithoutUserInput
    >;
  };

  export type heroCreateManyUserInputEnvelope = {
    data: heroCreateManyUserInput | heroCreateManyUserInput[];
    skipDuplicates?: boolean;
  };

  export type userstyleCreateWithoutUserInput = {
    sstyle: string;
    pstyle: string;
    estyle: string;
    exstyle: string;
  };

  export type userstyleUncheckedCreateWithoutUserInput = {
    sstyle: string;
    pstyle: string;
    estyle: string;
    exstyle: string;
  };

  export type userstyleCreateOrConnectWithoutUserInput = {
    where: userstyleWhereUniqueInput;
    create: XOR<
      userstyleCreateWithoutUserInput,
      userstyleUncheckedCreateWithoutUserInput
    >;
  };

  export type userstyleCreateManyUserInputEnvelope = {
    data: userstyleCreateManyUserInput | userstyleCreateManyUserInput[];
    skipDuplicates?: boolean;
  };

  export type skillsUpsertWithWhereUniqueWithoutUserInput = {
    where: skillsWhereUniqueInput;
    update: XOR<
      skillsUpdateWithoutUserInput,
      skillsUncheckedUpdateWithoutUserInput
    >;
    create: XOR<
      skillsCreateWithoutUserInput,
      skillsUncheckedCreateWithoutUserInput
    >;
  };

  export type skillsUpdateWithWhereUniqueWithoutUserInput = {
    where: skillsWhereUniqueInput;
    data: XOR<
      skillsUpdateWithoutUserInput,
      skillsUncheckedUpdateWithoutUserInput
    >;
  };

  export type skillsUpdateManyWithWhereWithoutUserInput = {
    where: skillsScalarWhereInput;
    data: XOR<
      skillsUpdateManyMutationInput,
      skillsUncheckedUpdateManyWithoutUserInput
    >;
  };

  export type skillsScalarWhereInput = {
    AND?: skillsScalarWhereInput | skillsScalarWhereInput[];
    OR?: skillsScalarWhereInput[];
    NOT?: skillsScalarWhereInput | skillsScalarWhereInput[];
    sid?: IntFilter<"skills"> | number;
    uid?: IntFilter<"skills"> | number;
    skillname?: StringFilter<"skills"> | string;
    skills?: StringNullableListFilter<"skills">;
    icon?: StringFilter<"skills"> | string;
  };

  export type contactUpsertWithWhereUniqueWithoutUserInput = {
    where: contactWhereUniqueInput;
    update: XOR<
      contactUpdateWithoutUserInput,
      contactUncheckedUpdateWithoutUserInput
    >;
    create: XOR<
      contactCreateWithoutUserInput,
      contactUncheckedCreateWithoutUserInput
    >;
  };

  export type contactUpdateWithWhereUniqueWithoutUserInput = {
    where: contactWhereUniqueInput;
    data: XOR<
      contactUpdateWithoutUserInput,
      contactUncheckedUpdateWithoutUserInput
    >;
  };

  export type contactUpdateManyWithWhereWithoutUserInput = {
    where: contactScalarWhereInput;
    data: XOR<
      contactUpdateManyMutationInput,
      contactUncheckedUpdateManyWithoutUserInput
    >;
  };

  export type contactScalarWhereInput = {
    AND?: contactScalarWhereInput | contactScalarWhereInput[];
    OR?: contactScalarWhereInput[];
    NOT?: contactScalarWhereInput | contactScalarWhereInput[];
    cid?: IntFilter<"contact"> | number;
    uid?: IntFilter<"contact"> | number;
    email?: StringFilter<"contact"> | string;
    phone?: StringFilter<"contact"> | string;
    location?: StringFilter<"contact"> | string;
    linkedin?: StringFilter<"contact"> | string;
    github?: StringFilter<"contact"> | string;
  };

  export type AboutUpsertWithWhereUniqueWithoutUserInput = {
    where: AboutWhereUniqueInput;
    update: XOR<
      AboutUpdateWithoutUserInput,
      AboutUncheckedUpdateWithoutUserInput
    >;
    create: XOR<
      AboutCreateWithoutUserInput,
      AboutUncheckedCreateWithoutUserInput
    >;
  };

  export type AboutUpdateWithWhereUniqueWithoutUserInput = {
    where: AboutWhereUniqueInput;
    data: XOR<
      AboutUpdateWithoutUserInput,
      AboutUncheckedUpdateWithoutUserInput
    >;
  };

  export type AboutUpdateManyWithWhereWithoutUserInput = {
    where: AboutScalarWhereInput;
    data: XOR<
      AboutUpdateManyMutationInput,
      AboutUncheckedUpdateManyWithoutUserInput
    >;
  };

  export type AboutScalarWhereInput = {
    AND?: AboutScalarWhereInput | AboutScalarWhereInput[];
    OR?: AboutScalarWhereInput[];
    NOT?: AboutScalarWhereInput | AboutScalarWhereInput[];
    aid?: IntFilter<"About"> | number;
    uid?: IntFilter<"About"> | number;
    image?: StringFilter<"About"> | string;
    about?: StringFilter<"About"> | string;
    style?: StringFilter<"About"> | string;
  };

  export type projectUpsertWithWhereUniqueWithoutUserInput = {
    where: projectWhereUniqueInput;
    update: XOR<
      projectUpdateWithoutUserInput,
      projectUncheckedUpdateWithoutUserInput
    >;
    create: XOR<
      projectCreateWithoutUserInput,
      projectUncheckedCreateWithoutUserInput
    >;
  };

  export type projectUpdateWithWhereUniqueWithoutUserInput = {
    where: projectWhereUniqueInput;
    data: XOR<
      projectUpdateWithoutUserInput,
      projectUncheckedUpdateWithoutUserInput
    >;
  };

  export type projectUpdateManyWithWhereWithoutUserInput = {
    where: projectScalarWhereInput;
    data: XOR<
      projectUpdateManyMutationInput,
      projectUncheckedUpdateManyWithoutUserInput
    >;
  };

  export type projectScalarWhereInput = {
    AND?: projectScalarWhereInput | projectScalarWhereInput[];
    OR?: projectScalarWhereInput[];
    NOT?: projectScalarWhereInput | projectScalarWhereInput[];
    pid?: IntFilter<"project"> | number;
    uid?: IntFilter<"project"> | number;
    title?: StringFilter<"project"> | string;
    image?: StringFilter<"project"> | string;
    desc?: StringFilter<"project"> | string;
    tags?: StringNullableListFilter<"project">;
    github?: StringFilter<"project"> | string;
    Link?: StringFilter<"project"> | string;
  };

  export type experienceUpsertWithWhereUniqueWithoutUserInput = {
    where: experienceWhereUniqueInput;
    update: XOR<
      experienceUpdateWithoutUserInput,
      experienceUncheckedUpdateWithoutUserInput
    >;
    create: XOR<
      experienceCreateWithoutUserInput,
      experienceUncheckedCreateWithoutUserInput
    >;
  };

  export type experienceUpdateWithWhereUniqueWithoutUserInput = {
    where: experienceWhereUniqueInput;
    data: XOR<
      experienceUpdateWithoutUserInput,
      experienceUncheckedUpdateWithoutUserInput
    >;
  };

  export type experienceUpdateManyWithWhereWithoutUserInput = {
    where: experienceScalarWhereInput;
    data: XOR<
      experienceUpdateManyMutationInput,
      experienceUncheckedUpdateManyWithoutUserInput
    >;
  };

  export type experienceScalarWhereInput = {
    AND?: experienceScalarWhereInput | experienceScalarWhereInput[];
    OR?: experienceScalarWhereInput[];
    NOT?: experienceScalarWhereInput | experienceScalarWhereInput[];
    exid?: IntFilter<"experience"> | number;
    title?: StringFilter<"experience"> | string;
    corp?: StringFilter<"experience"> | string;
    startdate?: StringFilter<"experience"> | string;
    enddate?: StringNullableFilter<"experience"> | string | null;
    desc?: StringFilter<"experience"> | string;
    uid?: IntFilter<"experience"> | number;
  };

  export type educationUpsertWithWhereUniqueWithoutUserInput = {
    where: educationWhereUniqueInput;
    update: XOR<
      educationUpdateWithoutUserInput,
      educationUncheckedUpdateWithoutUserInput
    >;
    create: XOR<
      educationCreateWithoutUserInput,
      educationUncheckedCreateWithoutUserInput
    >;
  };

  export type educationUpdateWithWhereUniqueWithoutUserInput = {
    where: educationWhereUniqueInput;
    data: XOR<
      educationUpdateWithoutUserInput,
      educationUncheckedUpdateWithoutUserInput
    >;
  };

  export type educationUpdateManyWithWhereWithoutUserInput = {
    where: educationScalarWhereInput;
    data: XOR<
      educationUpdateManyMutationInput,
      educationUncheckedUpdateManyWithoutUserInput
    >;
  };

  export type educationScalarWhereInput = {
    AND?: educationScalarWhereInput | educationScalarWhereInput[];
    OR?: educationScalarWhereInput[];
    NOT?: educationScalarWhereInput | educationScalarWhereInput[];
    edid?: IntFilter<"education"> | number;
    inst?: StringFilter<"education"> | string;
    degree?: StringFilter<"education"> | string;
    startdate?: StringFilter<"education"> | string;
    enddate?: StringNullableFilter<"education"> | string | null;
    uid?: IntFilter<"education"> | number;
  };

  export type heroUpsertWithWhereUniqueWithoutUserInput = {
    where: heroWhereUniqueInput;
    update: XOR<
      heroUpdateWithoutUserInput,
      heroUncheckedUpdateWithoutUserInput
    >;
    create: XOR<
      heroCreateWithoutUserInput,
      heroUncheckedCreateWithoutUserInput
    >;
  };

  export type heroUpdateWithWhereUniqueWithoutUserInput = {
    where: heroWhereUniqueInput;
    data: XOR<heroUpdateWithoutUserInput, heroUncheckedUpdateWithoutUserInput>;
  };

  export type heroUpdateManyWithWhereWithoutUserInput = {
    where: heroScalarWhereInput;
    data: XOR<
      heroUpdateManyMutationInput,
      heroUncheckedUpdateManyWithoutUserInput
    >;
  };

  export type heroScalarWhereInput = {
    AND?: heroScalarWhereInput | heroScalarWhereInput[];
    OR?: heroScalarWhereInput[];
    NOT?: heroScalarWhereInput | heroScalarWhereInput[];
    hid?: IntFilter<"hero"> | number;
    uid?: IntFilter<"hero"> | number;
    style?: StringFilter<"hero"> | string;
    hero?: StringFilter<"hero"> | string;
    subhero?: StringFilter<"hero"> | string;
  };

  export type userstyleUpsertWithWhereUniqueWithoutUserInput = {
    where: userstyleWhereUniqueInput;
    update: XOR<
      userstyleUpdateWithoutUserInput,
      userstyleUncheckedUpdateWithoutUserInput
    >;
    create: XOR<
      userstyleCreateWithoutUserInput,
      userstyleUncheckedCreateWithoutUserInput
    >;
  };

  export type userstyleUpdateWithWhereUniqueWithoutUserInput = {
    where: userstyleWhereUniqueInput;
    data: XOR<
      userstyleUpdateWithoutUserInput,
      userstyleUncheckedUpdateWithoutUserInput
    >;
  };

  export type userstyleUpdateManyWithWhereWithoutUserInput = {
    where: userstyleScalarWhereInput;
    data: XOR<
      userstyleUpdateManyMutationInput,
      userstyleUncheckedUpdateManyWithoutUserInput
    >;
  };

  export type userstyleScalarWhereInput = {
    AND?: userstyleScalarWhereInput | userstyleScalarWhereInput[];
    OR?: userstyleScalarWhereInput[];
    NOT?: userstyleScalarWhereInput | userstyleScalarWhereInput[];
    uid?: IntFilter<"userstyle"> | number;
    sstyle?: StringFilter<"userstyle"> | string;
    pstyle?: StringFilter<"userstyle"> | string;
    estyle?: StringFilter<"userstyle"> | string;
    exstyle?: StringFilter<"userstyle"> | string;
  };

  export type userCreateWithoutHeroInput = {
    username: string;
    password: string;
    email: string;
    sessions?: userCreatesessionsInput | string[];
    skills?: skillsCreateNestedManyWithoutUserInput;
    contact?: contactCreateNestedManyWithoutUserInput;
    About?: AboutCreateNestedManyWithoutUserInput;
    project?: projectCreateNestedManyWithoutUserInput;
    experience?: experienceCreateNestedManyWithoutUserInput;
    education?: educationCreateNestedManyWithoutUserInput;
    userstyle?: userstyleCreateNestedManyWithoutUserInput;
  };

  export type userUncheckedCreateWithoutHeroInput = {
    uid?: number;
    username: string;
    password: string;
    email: string;
    sessions?: userCreatesessionsInput | string[];
    skills?: skillsUncheckedCreateNestedManyWithoutUserInput;
    contact?: contactUncheckedCreateNestedManyWithoutUserInput;
    About?: AboutUncheckedCreateNestedManyWithoutUserInput;
    project?: projectUncheckedCreateNestedManyWithoutUserInput;
    experience?: experienceUncheckedCreateNestedManyWithoutUserInput;
    education?: educationUncheckedCreateNestedManyWithoutUserInput;
    userstyle?: userstyleUncheckedCreateNestedManyWithoutUserInput;
  };

  export type userCreateOrConnectWithoutHeroInput = {
    where: userWhereUniqueInput;
    create: XOR<
      userCreateWithoutHeroInput,
      userUncheckedCreateWithoutHeroInput
    >;
  };

  export type userUpsertWithoutHeroInput = {
    update: XOR<
      userUpdateWithoutHeroInput,
      userUncheckedUpdateWithoutHeroInput
    >;
    create: XOR<
      userCreateWithoutHeroInput,
      userUncheckedCreateWithoutHeroInput
    >;
    where?: userWhereInput;
  };

  export type userUpdateToOneWithWhereWithoutHeroInput = {
    where?: userWhereInput;
    data: XOR<userUpdateWithoutHeroInput, userUncheckedUpdateWithoutHeroInput>;
  };

  export type userUpdateWithoutHeroInput = {
    username?: StringFieldUpdateOperationsInput | string;
    password?: StringFieldUpdateOperationsInput | string;
    email?: StringFieldUpdateOperationsInput | string;
    sessions?: userUpdatesessionsInput | string[];
    skills?: skillsUpdateManyWithoutUserNestedInput;
    contact?: contactUpdateManyWithoutUserNestedInput;
    About?: AboutUpdateManyWithoutUserNestedInput;
    project?: projectUpdateManyWithoutUserNestedInput;
    experience?: experienceUpdateManyWithoutUserNestedInput;
    education?: educationUpdateManyWithoutUserNestedInput;
    userstyle?: userstyleUpdateManyWithoutUserNestedInput;
  };

  export type userUncheckedUpdateWithoutHeroInput = {
    uid?: IntFieldUpdateOperationsInput | number;
    username?: StringFieldUpdateOperationsInput | string;
    password?: StringFieldUpdateOperationsInput | string;
    email?: StringFieldUpdateOperationsInput | string;
    sessions?: userUpdatesessionsInput | string[];
    skills?: skillsUncheckedUpdateManyWithoutUserNestedInput;
    contact?: contactUncheckedUpdateManyWithoutUserNestedInput;
    About?: AboutUncheckedUpdateManyWithoutUserNestedInput;
    project?: projectUncheckedUpdateManyWithoutUserNestedInput;
    experience?: experienceUncheckedUpdateManyWithoutUserNestedInput;
    education?: educationUncheckedUpdateManyWithoutUserNestedInput;
    userstyle?: userstyleUncheckedUpdateManyWithoutUserNestedInput;
  };

  export type userCreateWithoutProjectInput = {
    username: string;
    password: string;
    email: string;
    sessions?: userCreatesessionsInput | string[];
    skills?: skillsCreateNestedManyWithoutUserInput;
    contact?: contactCreateNestedManyWithoutUserInput;
    About?: AboutCreateNestedManyWithoutUserInput;
    experience?: experienceCreateNestedManyWithoutUserInput;
    education?: educationCreateNestedManyWithoutUserInput;
    hero?: heroCreateNestedManyWithoutUserInput;
    userstyle?: userstyleCreateNestedManyWithoutUserInput;
  };

  export type userUncheckedCreateWithoutProjectInput = {
    uid?: number;
    username: string;
    password: string;
    email: string;
    sessions?: userCreatesessionsInput | string[];
    skills?: skillsUncheckedCreateNestedManyWithoutUserInput;
    contact?: contactUncheckedCreateNestedManyWithoutUserInput;
    About?: AboutUncheckedCreateNestedManyWithoutUserInput;
    experience?: experienceUncheckedCreateNestedManyWithoutUserInput;
    education?: educationUncheckedCreateNestedManyWithoutUserInput;
    hero?: heroUncheckedCreateNestedManyWithoutUserInput;
    userstyle?: userstyleUncheckedCreateNestedManyWithoutUserInput;
  };

  export type userCreateOrConnectWithoutProjectInput = {
    where: userWhereUniqueInput;
    create: XOR<
      userCreateWithoutProjectInput,
      userUncheckedCreateWithoutProjectInput
    >;
  };

  export type userUpsertWithoutProjectInput = {
    update: XOR<
      userUpdateWithoutProjectInput,
      userUncheckedUpdateWithoutProjectInput
    >;
    create: XOR<
      userCreateWithoutProjectInput,
      userUncheckedCreateWithoutProjectInput
    >;
    where?: userWhereInput;
  };

  export type userUpdateToOneWithWhereWithoutProjectInput = {
    where?: userWhereInput;
    data: XOR<
      userUpdateWithoutProjectInput,
      userUncheckedUpdateWithoutProjectInput
    >;
  };

  export type userUpdateWithoutProjectInput = {
    username?: StringFieldUpdateOperationsInput | string;
    password?: StringFieldUpdateOperationsInput | string;
    email?: StringFieldUpdateOperationsInput | string;
    sessions?: userUpdatesessionsInput | string[];
    skills?: skillsUpdateManyWithoutUserNestedInput;
    contact?: contactUpdateManyWithoutUserNestedInput;
    About?: AboutUpdateManyWithoutUserNestedInput;
    experience?: experienceUpdateManyWithoutUserNestedInput;
    education?: educationUpdateManyWithoutUserNestedInput;
    hero?: heroUpdateManyWithoutUserNestedInput;
    userstyle?: userstyleUpdateManyWithoutUserNestedInput;
  };

  export type userUncheckedUpdateWithoutProjectInput = {
    uid?: IntFieldUpdateOperationsInput | number;
    username?: StringFieldUpdateOperationsInput | string;
    password?: StringFieldUpdateOperationsInput | string;
    email?: StringFieldUpdateOperationsInput | string;
    sessions?: userUpdatesessionsInput | string[];
    skills?: skillsUncheckedUpdateManyWithoutUserNestedInput;
    contact?: contactUncheckedUpdateManyWithoutUserNestedInput;
    About?: AboutUncheckedUpdateManyWithoutUserNestedInput;
    experience?: experienceUncheckedUpdateManyWithoutUserNestedInput;
    education?: educationUncheckedUpdateManyWithoutUserNestedInput;
    hero?: heroUncheckedUpdateManyWithoutUserNestedInput;
    userstyle?: userstyleUncheckedUpdateManyWithoutUserNestedInput;
  };

  export type userCreateWithoutExperienceInput = {
    username: string;
    password: string;
    email: string;
    sessions?: userCreatesessionsInput | string[];
    skills?: skillsCreateNestedManyWithoutUserInput;
    contact?: contactCreateNestedManyWithoutUserInput;
    About?: AboutCreateNestedManyWithoutUserInput;
    project?: projectCreateNestedManyWithoutUserInput;
    education?: educationCreateNestedManyWithoutUserInput;
    hero?: heroCreateNestedManyWithoutUserInput;
    userstyle?: userstyleCreateNestedManyWithoutUserInput;
  };

  export type userUncheckedCreateWithoutExperienceInput = {
    uid?: number;
    username: string;
    password: string;
    email: string;
    sessions?: userCreatesessionsInput | string[];
    skills?: skillsUncheckedCreateNestedManyWithoutUserInput;
    contact?: contactUncheckedCreateNestedManyWithoutUserInput;
    About?: AboutUncheckedCreateNestedManyWithoutUserInput;
    project?: projectUncheckedCreateNestedManyWithoutUserInput;
    education?: educationUncheckedCreateNestedManyWithoutUserInput;
    hero?: heroUncheckedCreateNestedManyWithoutUserInput;
    userstyle?: userstyleUncheckedCreateNestedManyWithoutUserInput;
  };

  export type userCreateOrConnectWithoutExperienceInput = {
    where: userWhereUniqueInput;
    create: XOR<
      userCreateWithoutExperienceInput,
      userUncheckedCreateWithoutExperienceInput
    >;
  };

  export type userUpsertWithoutExperienceInput = {
    update: XOR<
      userUpdateWithoutExperienceInput,
      userUncheckedUpdateWithoutExperienceInput
    >;
    create: XOR<
      userCreateWithoutExperienceInput,
      userUncheckedCreateWithoutExperienceInput
    >;
    where?: userWhereInput;
  };

  export type userUpdateToOneWithWhereWithoutExperienceInput = {
    where?: userWhereInput;
    data: XOR<
      userUpdateWithoutExperienceInput,
      userUncheckedUpdateWithoutExperienceInput
    >;
  };

  export type userUpdateWithoutExperienceInput = {
    username?: StringFieldUpdateOperationsInput | string;
    password?: StringFieldUpdateOperationsInput | string;
    email?: StringFieldUpdateOperationsInput | string;
    sessions?: userUpdatesessionsInput | string[];
    skills?: skillsUpdateManyWithoutUserNestedInput;
    contact?: contactUpdateManyWithoutUserNestedInput;
    About?: AboutUpdateManyWithoutUserNestedInput;
    project?: projectUpdateManyWithoutUserNestedInput;
    education?: educationUpdateManyWithoutUserNestedInput;
    hero?: heroUpdateManyWithoutUserNestedInput;
    userstyle?: userstyleUpdateManyWithoutUserNestedInput;
  };

  export type userUncheckedUpdateWithoutExperienceInput = {
    uid?: IntFieldUpdateOperationsInput | number;
    username?: StringFieldUpdateOperationsInput | string;
    password?: StringFieldUpdateOperationsInput | string;
    email?: StringFieldUpdateOperationsInput | string;
    sessions?: userUpdatesessionsInput | string[];
    skills?: skillsUncheckedUpdateManyWithoutUserNestedInput;
    contact?: contactUncheckedUpdateManyWithoutUserNestedInput;
    About?: AboutUncheckedUpdateManyWithoutUserNestedInput;
    project?: projectUncheckedUpdateManyWithoutUserNestedInput;
    education?: educationUncheckedUpdateManyWithoutUserNestedInput;
    hero?: heroUncheckedUpdateManyWithoutUserNestedInput;
    userstyle?: userstyleUncheckedUpdateManyWithoutUserNestedInput;
  };

  export type userCreateWithoutEducationInput = {
    username: string;
    password: string;
    email: string;
    sessions?: userCreatesessionsInput | string[];
    skills?: skillsCreateNestedManyWithoutUserInput;
    contact?: contactCreateNestedManyWithoutUserInput;
    About?: AboutCreateNestedManyWithoutUserInput;
    project?: projectCreateNestedManyWithoutUserInput;
    experience?: experienceCreateNestedManyWithoutUserInput;
    hero?: heroCreateNestedManyWithoutUserInput;
    userstyle?: userstyleCreateNestedManyWithoutUserInput;
  };

  export type userUncheckedCreateWithoutEducationInput = {
    uid?: number;
    username: string;
    password: string;
    email: string;
    sessions?: userCreatesessionsInput | string[];
    skills?: skillsUncheckedCreateNestedManyWithoutUserInput;
    contact?: contactUncheckedCreateNestedManyWithoutUserInput;
    About?: AboutUncheckedCreateNestedManyWithoutUserInput;
    project?: projectUncheckedCreateNestedManyWithoutUserInput;
    experience?: experienceUncheckedCreateNestedManyWithoutUserInput;
    hero?: heroUncheckedCreateNestedManyWithoutUserInput;
    userstyle?: userstyleUncheckedCreateNestedManyWithoutUserInput;
  };

  export type userCreateOrConnectWithoutEducationInput = {
    where: userWhereUniqueInput;
    create: XOR<
      userCreateWithoutEducationInput,
      userUncheckedCreateWithoutEducationInput
    >;
  };

  export type userUpsertWithoutEducationInput = {
    update: XOR<
      userUpdateWithoutEducationInput,
      userUncheckedUpdateWithoutEducationInput
    >;
    create: XOR<
      userCreateWithoutEducationInput,
      userUncheckedCreateWithoutEducationInput
    >;
    where?: userWhereInput;
  };

  export type userUpdateToOneWithWhereWithoutEducationInput = {
    where?: userWhereInput;
    data: XOR<
      userUpdateWithoutEducationInput,
      userUncheckedUpdateWithoutEducationInput
    >;
  };

  export type userUpdateWithoutEducationInput = {
    username?: StringFieldUpdateOperationsInput | string;
    password?: StringFieldUpdateOperationsInput | string;
    email?: StringFieldUpdateOperationsInput | string;
    sessions?: userUpdatesessionsInput | string[];
    skills?: skillsUpdateManyWithoutUserNestedInput;
    contact?: contactUpdateManyWithoutUserNestedInput;
    About?: AboutUpdateManyWithoutUserNestedInput;
    project?: projectUpdateManyWithoutUserNestedInput;
    experience?: experienceUpdateManyWithoutUserNestedInput;
    hero?: heroUpdateManyWithoutUserNestedInput;
    userstyle?: userstyleUpdateManyWithoutUserNestedInput;
  };

  export type userUncheckedUpdateWithoutEducationInput = {
    uid?: IntFieldUpdateOperationsInput | number;
    username?: StringFieldUpdateOperationsInput | string;
    password?: StringFieldUpdateOperationsInput | string;
    email?: StringFieldUpdateOperationsInput | string;
    sessions?: userUpdatesessionsInput | string[];
    skills?: skillsUncheckedUpdateManyWithoutUserNestedInput;
    contact?: contactUncheckedUpdateManyWithoutUserNestedInput;
    About?: AboutUncheckedUpdateManyWithoutUserNestedInput;
    project?: projectUncheckedUpdateManyWithoutUserNestedInput;
    experience?: experienceUncheckedUpdateManyWithoutUserNestedInput;
    hero?: heroUncheckedUpdateManyWithoutUserNestedInput;
    userstyle?: userstyleUncheckedUpdateManyWithoutUserNestedInput;
  };

  export type userCreateWithoutSkillsInput = {
    username: string;
    password: string;
    email: string;
    sessions?: userCreatesessionsInput | string[];
    contact?: contactCreateNestedManyWithoutUserInput;
    About?: AboutCreateNestedManyWithoutUserInput;
    project?: projectCreateNestedManyWithoutUserInput;
    experience?: experienceCreateNestedManyWithoutUserInput;
    education?: educationCreateNestedManyWithoutUserInput;
    hero?: heroCreateNestedManyWithoutUserInput;
    userstyle?: userstyleCreateNestedManyWithoutUserInput;
  };

  export type userUncheckedCreateWithoutSkillsInput = {
    uid?: number;
    username: string;
    password: string;
    email: string;
    sessions?: userCreatesessionsInput | string[];
    contact?: contactUncheckedCreateNestedManyWithoutUserInput;
    About?: AboutUncheckedCreateNestedManyWithoutUserInput;
    project?: projectUncheckedCreateNestedManyWithoutUserInput;
    experience?: experienceUncheckedCreateNestedManyWithoutUserInput;
    education?: educationUncheckedCreateNestedManyWithoutUserInput;
    hero?: heroUncheckedCreateNestedManyWithoutUserInput;
    userstyle?: userstyleUncheckedCreateNestedManyWithoutUserInput;
  };

  export type userCreateOrConnectWithoutSkillsInput = {
    where: userWhereUniqueInput;
    create: XOR<
      userCreateWithoutSkillsInput,
      userUncheckedCreateWithoutSkillsInput
    >;
  };

  export type userUpsertWithoutSkillsInput = {
    update: XOR<
      userUpdateWithoutSkillsInput,
      userUncheckedUpdateWithoutSkillsInput
    >;
    create: XOR<
      userCreateWithoutSkillsInput,
      userUncheckedCreateWithoutSkillsInput
    >;
    where?: userWhereInput;
  };

  export type userUpdateToOneWithWhereWithoutSkillsInput = {
    where?: userWhereInput;
    data: XOR<
      userUpdateWithoutSkillsInput,
      userUncheckedUpdateWithoutSkillsInput
    >;
  };

  export type userUpdateWithoutSkillsInput = {
    username?: StringFieldUpdateOperationsInput | string;
    password?: StringFieldUpdateOperationsInput | string;
    email?: StringFieldUpdateOperationsInput | string;
    sessions?: userUpdatesessionsInput | string[];
    contact?: contactUpdateManyWithoutUserNestedInput;
    About?: AboutUpdateManyWithoutUserNestedInput;
    project?: projectUpdateManyWithoutUserNestedInput;
    experience?: experienceUpdateManyWithoutUserNestedInput;
    education?: educationUpdateManyWithoutUserNestedInput;
    hero?: heroUpdateManyWithoutUserNestedInput;
    userstyle?: userstyleUpdateManyWithoutUserNestedInput;
  };

  export type userUncheckedUpdateWithoutSkillsInput = {
    uid?: IntFieldUpdateOperationsInput | number;
    username?: StringFieldUpdateOperationsInput | string;
    password?: StringFieldUpdateOperationsInput | string;
    email?: StringFieldUpdateOperationsInput | string;
    sessions?: userUpdatesessionsInput | string[];
    contact?: contactUncheckedUpdateManyWithoutUserNestedInput;
    About?: AboutUncheckedUpdateManyWithoutUserNestedInput;
    project?: projectUncheckedUpdateManyWithoutUserNestedInput;
    experience?: experienceUncheckedUpdateManyWithoutUserNestedInput;
    education?: educationUncheckedUpdateManyWithoutUserNestedInput;
    hero?: heroUncheckedUpdateManyWithoutUserNestedInput;
    userstyle?: userstyleUncheckedUpdateManyWithoutUserNestedInput;
  };

  export type userCreateWithoutContactInput = {
    username: string;
    password: string;
    email: string;
    sessions?: userCreatesessionsInput | string[];
    skills?: skillsCreateNestedManyWithoutUserInput;
    About?: AboutCreateNestedManyWithoutUserInput;
    project?: projectCreateNestedManyWithoutUserInput;
    experience?: experienceCreateNestedManyWithoutUserInput;
    education?: educationCreateNestedManyWithoutUserInput;
    hero?: heroCreateNestedManyWithoutUserInput;
    userstyle?: userstyleCreateNestedManyWithoutUserInput;
  };

  export type userUncheckedCreateWithoutContactInput = {
    uid?: number;
    username: string;
    password: string;
    email: string;
    sessions?: userCreatesessionsInput | string[];
    skills?: skillsUncheckedCreateNestedManyWithoutUserInput;
    About?: AboutUncheckedCreateNestedManyWithoutUserInput;
    project?: projectUncheckedCreateNestedManyWithoutUserInput;
    experience?: experienceUncheckedCreateNestedManyWithoutUserInput;
    education?: educationUncheckedCreateNestedManyWithoutUserInput;
    hero?: heroUncheckedCreateNestedManyWithoutUserInput;
    userstyle?: userstyleUncheckedCreateNestedManyWithoutUserInput;
  };

  export type userCreateOrConnectWithoutContactInput = {
    where: userWhereUniqueInput;
    create: XOR<
      userCreateWithoutContactInput,
      userUncheckedCreateWithoutContactInput
    >;
  };

  export type userUpsertWithoutContactInput = {
    update: XOR<
      userUpdateWithoutContactInput,
      userUncheckedUpdateWithoutContactInput
    >;
    create: XOR<
      userCreateWithoutContactInput,
      userUncheckedCreateWithoutContactInput
    >;
    where?: userWhereInput;
  };

  export type userUpdateToOneWithWhereWithoutContactInput = {
    where?: userWhereInput;
    data: XOR<
      userUpdateWithoutContactInput,
      userUncheckedUpdateWithoutContactInput
    >;
  };

  export type userUpdateWithoutContactInput = {
    username?: StringFieldUpdateOperationsInput | string;
    password?: StringFieldUpdateOperationsInput | string;
    email?: StringFieldUpdateOperationsInput | string;
    sessions?: userUpdatesessionsInput | string[];
    skills?: skillsUpdateManyWithoutUserNestedInput;
    About?: AboutUpdateManyWithoutUserNestedInput;
    project?: projectUpdateManyWithoutUserNestedInput;
    experience?: experienceUpdateManyWithoutUserNestedInput;
    education?: educationUpdateManyWithoutUserNestedInput;
    hero?: heroUpdateManyWithoutUserNestedInput;
    userstyle?: userstyleUpdateManyWithoutUserNestedInput;
  };

  export type userUncheckedUpdateWithoutContactInput = {
    uid?: IntFieldUpdateOperationsInput | number;
    username?: StringFieldUpdateOperationsInput | string;
    password?: StringFieldUpdateOperationsInput | string;
    email?: StringFieldUpdateOperationsInput | string;
    sessions?: userUpdatesessionsInput | string[];
    skills?: skillsUncheckedUpdateManyWithoutUserNestedInput;
    About?: AboutUncheckedUpdateManyWithoutUserNestedInput;
    project?: projectUncheckedUpdateManyWithoutUserNestedInput;
    experience?: experienceUncheckedUpdateManyWithoutUserNestedInput;
    education?: educationUncheckedUpdateManyWithoutUserNestedInput;
    hero?: heroUncheckedUpdateManyWithoutUserNestedInput;
    userstyle?: userstyleUncheckedUpdateManyWithoutUserNestedInput;
  };

  export type userCreateWithoutAboutInput = {
    username: string;
    password: string;
    email: string;
    sessions?: userCreatesessionsInput | string[];
    skills?: skillsCreateNestedManyWithoutUserInput;
    contact?: contactCreateNestedManyWithoutUserInput;
    project?: projectCreateNestedManyWithoutUserInput;
    experience?: experienceCreateNestedManyWithoutUserInput;
    education?: educationCreateNestedManyWithoutUserInput;
    hero?: heroCreateNestedManyWithoutUserInput;
    userstyle?: userstyleCreateNestedManyWithoutUserInput;
  };

  export type userUncheckedCreateWithoutAboutInput = {
    uid?: number;
    username: string;
    password: string;
    email: string;
    sessions?: userCreatesessionsInput | string[];
    skills?: skillsUncheckedCreateNestedManyWithoutUserInput;
    contact?: contactUncheckedCreateNestedManyWithoutUserInput;
    project?: projectUncheckedCreateNestedManyWithoutUserInput;
    experience?: experienceUncheckedCreateNestedManyWithoutUserInput;
    education?: educationUncheckedCreateNestedManyWithoutUserInput;
    hero?: heroUncheckedCreateNestedManyWithoutUserInput;
    userstyle?: userstyleUncheckedCreateNestedManyWithoutUserInput;
  };

  export type userCreateOrConnectWithoutAboutInput = {
    where: userWhereUniqueInput;
    create: XOR<
      userCreateWithoutAboutInput,
      userUncheckedCreateWithoutAboutInput
    >;
  };

  export type userUpsertWithoutAboutInput = {
    update: XOR<
      userUpdateWithoutAboutInput,
      userUncheckedUpdateWithoutAboutInput
    >;
    create: XOR<
      userCreateWithoutAboutInput,
      userUncheckedCreateWithoutAboutInput
    >;
    where?: userWhereInput;
  };

  export type userUpdateToOneWithWhereWithoutAboutInput = {
    where?: userWhereInput;
    data: XOR<
      userUpdateWithoutAboutInput,
      userUncheckedUpdateWithoutAboutInput
    >;
  };

  export type userUpdateWithoutAboutInput = {
    username?: StringFieldUpdateOperationsInput | string;
    password?: StringFieldUpdateOperationsInput | string;
    email?: StringFieldUpdateOperationsInput | string;
    sessions?: userUpdatesessionsInput | string[];
    skills?: skillsUpdateManyWithoutUserNestedInput;
    contact?: contactUpdateManyWithoutUserNestedInput;
    project?: projectUpdateManyWithoutUserNestedInput;
    experience?: experienceUpdateManyWithoutUserNestedInput;
    education?: educationUpdateManyWithoutUserNestedInput;
    hero?: heroUpdateManyWithoutUserNestedInput;
    userstyle?: userstyleUpdateManyWithoutUserNestedInput;
  };

  export type userUncheckedUpdateWithoutAboutInput = {
    uid?: IntFieldUpdateOperationsInput | number;
    username?: StringFieldUpdateOperationsInput | string;
    password?: StringFieldUpdateOperationsInput | string;
    email?: StringFieldUpdateOperationsInput | string;
    sessions?: userUpdatesessionsInput | string[];
    skills?: skillsUncheckedUpdateManyWithoutUserNestedInput;
    contact?: contactUncheckedUpdateManyWithoutUserNestedInput;
    project?: projectUncheckedUpdateManyWithoutUserNestedInput;
    experience?: experienceUncheckedUpdateManyWithoutUserNestedInput;
    education?: educationUncheckedUpdateManyWithoutUserNestedInput;
    hero?: heroUncheckedUpdateManyWithoutUserNestedInput;
    userstyle?: userstyleUncheckedUpdateManyWithoutUserNestedInput;
  };

  export type userCreateWithoutUserstyleInput = {
    username: string;
    password: string;
    email: string;
    sessions?: userCreatesessionsInput | string[];
    skills?: skillsCreateNestedManyWithoutUserInput;
    contact?: contactCreateNestedManyWithoutUserInput;
    About?: AboutCreateNestedManyWithoutUserInput;
    project?: projectCreateNestedManyWithoutUserInput;
    experience?: experienceCreateNestedManyWithoutUserInput;
    education?: educationCreateNestedManyWithoutUserInput;
    hero?: heroCreateNestedManyWithoutUserInput;
  };

  export type userUncheckedCreateWithoutUserstyleInput = {
    uid?: number;
    username: string;
    password: string;
    email: string;
    sessions?: userCreatesessionsInput | string[];
    skills?: skillsUncheckedCreateNestedManyWithoutUserInput;
    contact?: contactUncheckedCreateNestedManyWithoutUserInput;
    About?: AboutUncheckedCreateNestedManyWithoutUserInput;
    project?: projectUncheckedCreateNestedManyWithoutUserInput;
    experience?: experienceUncheckedCreateNestedManyWithoutUserInput;
    education?: educationUncheckedCreateNestedManyWithoutUserInput;
    hero?: heroUncheckedCreateNestedManyWithoutUserInput;
  };

  export type userCreateOrConnectWithoutUserstyleInput = {
    where: userWhereUniqueInput;
    create: XOR<
      userCreateWithoutUserstyleInput,
      userUncheckedCreateWithoutUserstyleInput
    >;
  };

  export type userUpsertWithoutUserstyleInput = {
    update: XOR<
      userUpdateWithoutUserstyleInput,
      userUncheckedUpdateWithoutUserstyleInput
    >;
    create: XOR<
      userCreateWithoutUserstyleInput,
      userUncheckedCreateWithoutUserstyleInput
    >;
    where?: userWhereInput;
  };

  export type userUpdateToOneWithWhereWithoutUserstyleInput = {
    where?: userWhereInput;
    data: XOR<
      userUpdateWithoutUserstyleInput,
      userUncheckedUpdateWithoutUserstyleInput
    >;
  };

  export type userUpdateWithoutUserstyleInput = {
    username?: StringFieldUpdateOperationsInput | string;
    password?: StringFieldUpdateOperationsInput | string;
    email?: StringFieldUpdateOperationsInput | string;
    sessions?: userUpdatesessionsInput | string[];
    skills?: skillsUpdateManyWithoutUserNestedInput;
    contact?: contactUpdateManyWithoutUserNestedInput;
    About?: AboutUpdateManyWithoutUserNestedInput;
    project?: projectUpdateManyWithoutUserNestedInput;
    experience?: experienceUpdateManyWithoutUserNestedInput;
    education?: educationUpdateManyWithoutUserNestedInput;
    hero?: heroUpdateManyWithoutUserNestedInput;
  };

  export type userUncheckedUpdateWithoutUserstyleInput = {
    uid?: IntFieldUpdateOperationsInput | number;
    username?: StringFieldUpdateOperationsInput | string;
    password?: StringFieldUpdateOperationsInput | string;
    email?: StringFieldUpdateOperationsInput | string;
    sessions?: userUpdatesessionsInput | string[];
    skills?: skillsUncheckedUpdateManyWithoutUserNestedInput;
    contact?: contactUncheckedUpdateManyWithoutUserNestedInput;
    About?: AboutUncheckedUpdateManyWithoutUserNestedInput;
    project?: projectUncheckedUpdateManyWithoutUserNestedInput;
    experience?: experienceUncheckedUpdateManyWithoutUserNestedInput;
    education?: educationUncheckedUpdateManyWithoutUserNestedInput;
    hero?: heroUncheckedUpdateManyWithoutUserNestedInput;
  };

  export type skillsCreateManyUserInput = {
    sid?: number;
    skillname: string;
    skills?: skillsCreateskillsInput | string[];
    icon: string;
  };

  export type contactCreateManyUserInput = {
    cid?: number;
    email: string;
    phone: string;
    location: string;
    linkedin?: string;
    github?: string;
  };

  export type AboutCreateManyUserInput = {
    aid?: number;
    image: string;
    about: string;
    style: string;
  };

  export type projectCreateManyUserInput = {
    pid?: number;
    title: string;
    image: string;
    desc: string;
    tags?: projectCreatetagsInput | string[];
    github: string;
    Link: string;
  };

  export type experienceCreateManyUserInput = {
    exid?: number;
    title: string;
    corp: string;
    startdate: string;
    enddate?: string | null;
    desc: string;
  };

  export type educationCreateManyUserInput = {
    edid?: number;
    inst: string;
    degree: string;
    startdate: string;
    enddate?: string | null;
  };

  export type heroCreateManyUserInput = {
    hid?: number;
    style: string;
    hero: string;
    subhero: string;
  };

  export type userstyleCreateManyUserInput = {
    sstyle: string;
    pstyle: string;
    estyle: string;
    exstyle: string;
  };

  export type skillsUpdateWithoutUserInput = {
    skillname?: StringFieldUpdateOperationsInput | string;
    skills?: skillsUpdateskillsInput | string[];
    icon?: StringFieldUpdateOperationsInput | string;
  };

  export type skillsUncheckedUpdateWithoutUserInput = {
    sid?: IntFieldUpdateOperationsInput | number;
    skillname?: StringFieldUpdateOperationsInput | string;
    skills?: skillsUpdateskillsInput | string[];
    icon?: StringFieldUpdateOperationsInput | string;
  };

  export type skillsUncheckedUpdateManyWithoutUserInput = {
    sid?: IntFieldUpdateOperationsInput | number;
    skillname?: StringFieldUpdateOperationsInput | string;
    skills?: skillsUpdateskillsInput | string[];
    icon?: StringFieldUpdateOperationsInput | string;
  };

  export type contactUpdateWithoutUserInput = {
    email?: StringFieldUpdateOperationsInput | string;
    phone?: StringFieldUpdateOperationsInput | string;
    location?: StringFieldUpdateOperationsInput | string;
    linkedin?: StringFieldUpdateOperationsInput | string;
    github?: StringFieldUpdateOperationsInput | string;
  };

  export type contactUncheckedUpdateWithoutUserInput = {
    cid?: IntFieldUpdateOperationsInput | number;
    email?: StringFieldUpdateOperationsInput | string;
    phone?: StringFieldUpdateOperationsInput | string;
    location?: StringFieldUpdateOperationsInput | string;
    linkedin?: StringFieldUpdateOperationsInput | string;
    github?: StringFieldUpdateOperationsInput | string;
  };

  export type contactUncheckedUpdateManyWithoutUserInput = {
    cid?: IntFieldUpdateOperationsInput | number;
    email?: StringFieldUpdateOperationsInput | string;
    phone?: StringFieldUpdateOperationsInput | string;
    location?: StringFieldUpdateOperationsInput | string;
    linkedin?: StringFieldUpdateOperationsInput | string;
    github?: StringFieldUpdateOperationsInput | string;
  };

  export type AboutUpdateWithoutUserInput = {
    image?: StringFieldUpdateOperationsInput | string;
    about?: StringFieldUpdateOperationsInput | string;
    style?: StringFieldUpdateOperationsInput | string;
  };

  export type AboutUncheckedUpdateWithoutUserInput = {
    aid?: IntFieldUpdateOperationsInput | number;
    image?: StringFieldUpdateOperationsInput | string;
    about?: StringFieldUpdateOperationsInput | string;
    style?: StringFieldUpdateOperationsInput | string;
  };

  export type AboutUncheckedUpdateManyWithoutUserInput = {
    aid?: IntFieldUpdateOperationsInput | number;
    image?: StringFieldUpdateOperationsInput | string;
    about?: StringFieldUpdateOperationsInput | string;
    style?: StringFieldUpdateOperationsInput | string;
  };

  export type projectUpdateWithoutUserInput = {
    title?: StringFieldUpdateOperationsInput | string;
    image?: StringFieldUpdateOperationsInput | string;
    desc?: StringFieldUpdateOperationsInput | string;
    tags?: projectUpdatetagsInput | string[];
    github?: StringFieldUpdateOperationsInput | string;
    Link?: StringFieldUpdateOperationsInput | string;
  };

  export type projectUncheckedUpdateWithoutUserInput = {
    pid?: IntFieldUpdateOperationsInput | number;
    title?: StringFieldUpdateOperationsInput | string;
    image?: StringFieldUpdateOperationsInput | string;
    desc?: StringFieldUpdateOperationsInput | string;
    tags?: projectUpdatetagsInput | string[];
    github?: StringFieldUpdateOperationsInput | string;
    Link?: StringFieldUpdateOperationsInput | string;
  };

  export type projectUncheckedUpdateManyWithoutUserInput = {
    pid?: IntFieldUpdateOperationsInput | number;
    title?: StringFieldUpdateOperationsInput | string;
    image?: StringFieldUpdateOperationsInput | string;
    desc?: StringFieldUpdateOperationsInput | string;
    tags?: projectUpdatetagsInput | string[];
    github?: StringFieldUpdateOperationsInput | string;
    Link?: StringFieldUpdateOperationsInput | string;
  };

  export type experienceUpdateWithoutUserInput = {
    title?: StringFieldUpdateOperationsInput | string;
    corp?: StringFieldUpdateOperationsInput | string;
    startdate?: StringFieldUpdateOperationsInput | string;
    enddate?: NullableStringFieldUpdateOperationsInput | string | null;
    desc?: StringFieldUpdateOperationsInput | string;
  };

  export type experienceUncheckedUpdateWithoutUserInput = {
    exid?: IntFieldUpdateOperationsInput | number;
    title?: StringFieldUpdateOperationsInput | string;
    corp?: StringFieldUpdateOperationsInput | string;
    startdate?: StringFieldUpdateOperationsInput | string;
    enddate?: NullableStringFieldUpdateOperationsInput | string | null;
    desc?: StringFieldUpdateOperationsInput | string;
  };

  export type experienceUncheckedUpdateManyWithoutUserInput = {
    exid?: IntFieldUpdateOperationsInput | number;
    title?: StringFieldUpdateOperationsInput | string;
    corp?: StringFieldUpdateOperationsInput | string;
    startdate?: StringFieldUpdateOperationsInput | string;
    enddate?: NullableStringFieldUpdateOperationsInput | string | null;
    desc?: StringFieldUpdateOperationsInput | string;
  };

  export type educationUpdateWithoutUserInput = {
    inst?: StringFieldUpdateOperationsInput | string;
    degree?: StringFieldUpdateOperationsInput | string;
    startdate?: StringFieldUpdateOperationsInput | string;
    enddate?: NullableStringFieldUpdateOperationsInput | string | null;
  };

  export type educationUncheckedUpdateWithoutUserInput = {
    edid?: IntFieldUpdateOperationsInput | number;
    inst?: StringFieldUpdateOperationsInput | string;
    degree?: StringFieldUpdateOperationsInput | string;
    startdate?: StringFieldUpdateOperationsInput | string;
    enddate?: NullableStringFieldUpdateOperationsInput | string | null;
  };

  export type educationUncheckedUpdateManyWithoutUserInput = {
    edid?: IntFieldUpdateOperationsInput | number;
    inst?: StringFieldUpdateOperationsInput | string;
    degree?: StringFieldUpdateOperationsInput | string;
    startdate?: StringFieldUpdateOperationsInput | string;
    enddate?: NullableStringFieldUpdateOperationsInput | string | null;
  };

  export type heroUpdateWithoutUserInput = {
    style?: StringFieldUpdateOperationsInput | string;
    hero?: StringFieldUpdateOperationsInput | string;
    subhero?: StringFieldUpdateOperationsInput | string;
  };

  export type heroUncheckedUpdateWithoutUserInput = {
    hid?: IntFieldUpdateOperationsInput | number;
    style?: StringFieldUpdateOperationsInput | string;
    hero?: StringFieldUpdateOperationsInput | string;
    subhero?: StringFieldUpdateOperationsInput | string;
  };

  export type heroUncheckedUpdateManyWithoutUserInput = {
    hid?: IntFieldUpdateOperationsInput | number;
    style?: StringFieldUpdateOperationsInput | string;
    hero?: StringFieldUpdateOperationsInput | string;
    subhero?: StringFieldUpdateOperationsInput | string;
  };

  export type userstyleUpdateWithoutUserInput = {
    sstyle?: StringFieldUpdateOperationsInput | string;
    pstyle?: StringFieldUpdateOperationsInput | string;
    estyle?: StringFieldUpdateOperationsInput | string;
    exstyle?: StringFieldUpdateOperationsInput | string;
  };

  export type userstyleUncheckedUpdateWithoutUserInput = {
    sstyle?: StringFieldUpdateOperationsInput | string;
    pstyle?: StringFieldUpdateOperationsInput | string;
    estyle?: StringFieldUpdateOperationsInput | string;
    exstyle?: StringFieldUpdateOperationsInput | string;
  };

  export type userstyleUncheckedUpdateManyWithoutUserInput = {
    sstyle?: StringFieldUpdateOperationsInput | string;
    pstyle?: StringFieldUpdateOperationsInput | string;
    estyle?: StringFieldUpdateOperationsInput | string;
    exstyle?: StringFieldUpdateOperationsInput | string;
  };

  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number;
  };

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF;
}
