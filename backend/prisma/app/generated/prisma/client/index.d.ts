
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model user
 * 
 */
export type user = $Result.DefaultSelection<Prisma.$userPayload>
/**
 * Model project
 * 
 */
export type project = $Result.DefaultSelection<Prisma.$projectPayload>
/**
 * Model user_project
 * 
 */
export type user_project = $Result.DefaultSelection<Prisma.$user_projectPayload>
/**
 * Model experience
 * 
 */
export type experience = $Result.DefaultSelection<Prisma.$experiencePayload>
/**
 * Model user_experience
 * 
 */
export type user_experience = $Result.DefaultSelection<Prisma.$user_experiencePayload>
/**
 * Model education
 * 
 */
export type education = $Result.DefaultSelection<Prisma.$educationPayload>
/**
 * Model user_education
 * 
 */
export type user_education = $Result.DefaultSelection<Prisma.$user_educationPayload>
/**
 * Model skills
 * 
 */
export type skills = $Result.DefaultSelection<Prisma.$skillsPayload>
/**
 * Model contact
 * 
 */
export type contact = $Result.DefaultSelection<Prisma.$contactPayload>
/**
 * Model About
 * 
 */
export type About = $Result.DefaultSelection<Prisma.$AboutPayload>

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
  U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

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

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

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
  $use(cb: Prisma.Middleware): void

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

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
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

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
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


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
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

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
   * `prisma.project`: Exposes CRUD operations for the **project** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Projects
    * const projects = await prisma.project.findMany()
    * ```
    */
  get project(): Prisma.projectDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.user_project`: Exposes CRUD operations for the **user_project** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more User_projects
    * const user_projects = await prisma.user_project.findMany()
    * ```
    */
  get user_project(): Prisma.user_projectDelegate<ExtArgs, ClientOptions>;

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
   * `prisma.user_experience`: Exposes CRUD operations for the **user_experience** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more User_experiences
    * const user_experiences = await prisma.user_experience.findMany()
    * ```
    */
  get user_experience(): Prisma.user_experienceDelegate<ExtArgs, ClientOptions>;

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
   * `prisma.user_education`: Exposes CRUD operations for the **user_education** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more User_educations
    * const user_educations = await prisma.user_education.findMany()
    * ```
    */
  get user_education(): Prisma.user_educationDelegate<ExtArgs, ClientOptions>;

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
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 6.5.0
   * Query Engine version: 173f8d54f8d52e692c7e27e72a88314ec7aeff60
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

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
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

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
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
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
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    user: 'user',
    project: 'project',
    user_project: 'user_project',
    experience: 'experience',
    user_experience: 'user_experience',
    education: 'education',
    user_education: 'user_education',
    skills: 'skills',
    contact: 'contact',
    About: 'About'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "user" | "project" | "user_project" | "experience" | "user_experience" | "education" | "user_education" | "skills" | "contact" | "about"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      user: {
        payload: Prisma.$userPayload<ExtArgs>
        fields: Prisma.userFieldRefs
        operations: {
          findUnique: {
            args: Prisma.userFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$userPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.userFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$userPayload>
          }
          findFirst: {
            args: Prisma.userFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$userPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.userFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$userPayload>
          }
          findMany: {
            args: Prisma.userFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$userPayload>[]
          }
          create: {
            args: Prisma.userCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$userPayload>
          }
          createMany: {
            args: Prisma.userCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.userCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$userPayload>[]
          }
          delete: {
            args: Prisma.userDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$userPayload>
          }
          update: {
            args: Prisma.userUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$userPayload>
          }
          deleteMany: {
            args: Prisma.userDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.userUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.userUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$userPayload>[]
          }
          upsert: {
            args: Prisma.userUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$userPayload>
          }
          aggregate: {
            args: Prisma.UserAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUser>
          }
          groupBy: {
            args: Prisma.userGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserGroupByOutputType>[]
          }
          count: {
            args: Prisma.userCountArgs<ExtArgs>
            result: $Utils.Optional<UserCountAggregateOutputType> | number
          }
        }
      }
      project: {
        payload: Prisma.$projectPayload<ExtArgs>
        fields: Prisma.projectFieldRefs
        operations: {
          findUnique: {
            args: Prisma.projectFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$projectPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.projectFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$projectPayload>
          }
          findFirst: {
            args: Prisma.projectFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$projectPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.projectFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$projectPayload>
          }
          findMany: {
            args: Prisma.projectFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$projectPayload>[]
          }
          create: {
            args: Prisma.projectCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$projectPayload>
          }
          createMany: {
            args: Prisma.projectCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.projectCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$projectPayload>[]
          }
          delete: {
            args: Prisma.projectDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$projectPayload>
          }
          update: {
            args: Prisma.projectUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$projectPayload>
          }
          deleteMany: {
            args: Prisma.projectDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.projectUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.projectUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$projectPayload>[]
          }
          upsert: {
            args: Prisma.projectUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$projectPayload>
          }
          aggregate: {
            args: Prisma.ProjectAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateProject>
          }
          groupBy: {
            args: Prisma.projectGroupByArgs<ExtArgs>
            result: $Utils.Optional<ProjectGroupByOutputType>[]
          }
          count: {
            args: Prisma.projectCountArgs<ExtArgs>
            result: $Utils.Optional<ProjectCountAggregateOutputType> | number
          }
        }
      }
      user_project: {
        payload: Prisma.$user_projectPayload<ExtArgs>
        fields: Prisma.user_projectFieldRefs
        operations: {
          findUnique: {
            args: Prisma.user_projectFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$user_projectPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.user_projectFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$user_projectPayload>
          }
          findFirst: {
            args: Prisma.user_projectFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$user_projectPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.user_projectFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$user_projectPayload>
          }
          findMany: {
            args: Prisma.user_projectFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$user_projectPayload>[]
          }
          create: {
            args: Prisma.user_projectCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$user_projectPayload>
          }
          createMany: {
            args: Prisma.user_projectCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.user_projectCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$user_projectPayload>[]
          }
          delete: {
            args: Prisma.user_projectDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$user_projectPayload>
          }
          update: {
            args: Prisma.user_projectUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$user_projectPayload>
          }
          deleteMany: {
            args: Prisma.user_projectDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.user_projectUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.user_projectUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$user_projectPayload>[]
          }
          upsert: {
            args: Prisma.user_projectUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$user_projectPayload>
          }
          aggregate: {
            args: Prisma.User_projectAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUser_project>
          }
          groupBy: {
            args: Prisma.user_projectGroupByArgs<ExtArgs>
            result: $Utils.Optional<User_projectGroupByOutputType>[]
          }
          count: {
            args: Prisma.user_projectCountArgs<ExtArgs>
            result: $Utils.Optional<User_projectCountAggregateOutputType> | number
          }
        }
      }
      experience: {
        payload: Prisma.$experiencePayload<ExtArgs>
        fields: Prisma.experienceFieldRefs
        operations: {
          findUnique: {
            args: Prisma.experienceFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$experiencePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.experienceFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$experiencePayload>
          }
          findFirst: {
            args: Prisma.experienceFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$experiencePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.experienceFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$experiencePayload>
          }
          findMany: {
            args: Prisma.experienceFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$experiencePayload>[]
          }
          create: {
            args: Prisma.experienceCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$experiencePayload>
          }
          createMany: {
            args: Prisma.experienceCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.experienceCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$experiencePayload>[]
          }
          delete: {
            args: Prisma.experienceDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$experiencePayload>
          }
          update: {
            args: Prisma.experienceUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$experiencePayload>
          }
          deleteMany: {
            args: Prisma.experienceDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.experienceUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.experienceUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$experiencePayload>[]
          }
          upsert: {
            args: Prisma.experienceUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$experiencePayload>
          }
          aggregate: {
            args: Prisma.ExperienceAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateExperience>
          }
          groupBy: {
            args: Prisma.experienceGroupByArgs<ExtArgs>
            result: $Utils.Optional<ExperienceGroupByOutputType>[]
          }
          count: {
            args: Prisma.experienceCountArgs<ExtArgs>
            result: $Utils.Optional<ExperienceCountAggregateOutputType> | number
          }
        }
      }
      user_experience: {
        payload: Prisma.$user_experiencePayload<ExtArgs>
        fields: Prisma.user_experienceFieldRefs
        operations: {
          findUnique: {
            args: Prisma.user_experienceFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$user_experiencePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.user_experienceFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$user_experiencePayload>
          }
          findFirst: {
            args: Prisma.user_experienceFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$user_experiencePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.user_experienceFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$user_experiencePayload>
          }
          findMany: {
            args: Prisma.user_experienceFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$user_experiencePayload>[]
          }
          create: {
            args: Prisma.user_experienceCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$user_experiencePayload>
          }
          createMany: {
            args: Prisma.user_experienceCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.user_experienceCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$user_experiencePayload>[]
          }
          delete: {
            args: Prisma.user_experienceDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$user_experiencePayload>
          }
          update: {
            args: Prisma.user_experienceUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$user_experiencePayload>
          }
          deleteMany: {
            args: Prisma.user_experienceDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.user_experienceUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.user_experienceUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$user_experiencePayload>[]
          }
          upsert: {
            args: Prisma.user_experienceUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$user_experiencePayload>
          }
          aggregate: {
            args: Prisma.User_experienceAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUser_experience>
          }
          groupBy: {
            args: Prisma.user_experienceGroupByArgs<ExtArgs>
            result: $Utils.Optional<User_experienceGroupByOutputType>[]
          }
          count: {
            args: Prisma.user_experienceCountArgs<ExtArgs>
            result: $Utils.Optional<User_experienceCountAggregateOutputType> | number
          }
        }
      }
      education: {
        payload: Prisma.$educationPayload<ExtArgs>
        fields: Prisma.educationFieldRefs
        operations: {
          findUnique: {
            args: Prisma.educationFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$educationPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.educationFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$educationPayload>
          }
          findFirst: {
            args: Prisma.educationFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$educationPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.educationFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$educationPayload>
          }
          findMany: {
            args: Prisma.educationFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$educationPayload>[]
          }
          create: {
            args: Prisma.educationCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$educationPayload>
          }
          createMany: {
            args: Prisma.educationCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.educationCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$educationPayload>[]
          }
          delete: {
            args: Prisma.educationDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$educationPayload>
          }
          update: {
            args: Prisma.educationUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$educationPayload>
          }
          deleteMany: {
            args: Prisma.educationDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.educationUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.educationUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$educationPayload>[]
          }
          upsert: {
            args: Prisma.educationUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$educationPayload>
          }
          aggregate: {
            args: Prisma.EducationAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateEducation>
          }
          groupBy: {
            args: Prisma.educationGroupByArgs<ExtArgs>
            result: $Utils.Optional<EducationGroupByOutputType>[]
          }
          count: {
            args: Prisma.educationCountArgs<ExtArgs>
            result: $Utils.Optional<EducationCountAggregateOutputType> | number
          }
        }
      }
      user_education: {
        payload: Prisma.$user_educationPayload<ExtArgs>
        fields: Prisma.user_educationFieldRefs
        operations: {
          findUnique: {
            args: Prisma.user_educationFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$user_educationPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.user_educationFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$user_educationPayload>
          }
          findFirst: {
            args: Prisma.user_educationFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$user_educationPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.user_educationFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$user_educationPayload>
          }
          findMany: {
            args: Prisma.user_educationFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$user_educationPayload>[]
          }
          create: {
            args: Prisma.user_educationCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$user_educationPayload>
          }
          createMany: {
            args: Prisma.user_educationCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.user_educationCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$user_educationPayload>[]
          }
          delete: {
            args: Prisma.user_educationDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$user_educationPayload>
          }
          update: {
            args: Prisma.user_educationUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$user_educationPayload>
          }
          deleteMany: {
            args: Prisma.user_educationDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.user_educationUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.user_educationUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$user_educationPayload>[]
          }
          upsert: {
            args: Prisma.user_educationUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$user_educationPayload>
          }
          aggregate: {
            args: Prisma.User_educationAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUser_education>
          }
          groupBy: {
            args: Prisma.user_educationGroupByArgs<ExtArgs>
            result: $Utils.Optional<User_educationGroupByOutputType>[]
          }
          count: {
            args: Prisma.user_educationCountArgs<ExtArgs>
            result: $Utils.Optional<User_educationCountAggregateOutputType> | number
          }
        }
      }
      skills: {
        payload: Prisma.$skillsPayload<ExtArgs>
        fields: Prisma.skillsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.skillsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$skillsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.skillsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$skillsPayload>
          }
          findFirst: {
            args: Prisma.skillsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$skillsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.skillsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$skillsPayload>
          }
          findMany: {
            args: Prisma.skillsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$skillsPayload>[]
          }
          create: {
            args: Prisma.skillsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$skillsPayload>
          }
          createMany: {
            args: Prisma.skillsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.skillsCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$skillsPayload>[]
          }
          delete: {
            args: Prisma.skillsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$skillsPayload>
          }
          update: {
            args: Prisma.skillsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$skillsPayload>
          }
          deleteMany: {
            args: Prisma.skillsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.skillsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.skillsUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$skillsPayload>[]
          }
          upsert: {
            args: Prisma.skillsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$skillsPayload>
          }
          aggregate: {
            args: Prisma.SkillsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateSkills>
          }
          groupBy: {
            args: Prisma.skillsGroupByArgs<ExtArgs>
            result: $Utils.Optional<SkillsGroupByOutputType>[]
          }
          count: {
            args: Prisma.skillsCountArgs<ExtArgs>
            result: $Utils.Optional<SkillsCountAggregateOutputType> | number
          }
        }
      }
      contact: {
        payload: Prisma.$contactPayload<ExtArgs>
        fields: Prisma.contactFieldRefs
        operations: {
          findUnique: {
            args: Prisma.contactFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$contactPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.contactFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$contactPayload>
          }
          findFirst: {
            args: Prisma.contactFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$contactPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.contactFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$contactPayload>
          }
          findMany: {
            args: Prisma.contactFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$contactPayload>[]
          }
          create: {
            args: Prisma.contactCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$contactPayload>
          }
          createMany: {
            args: Prisma.contactCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.contactCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$contactPayload>[]
          }
          delete: {
            args: Prisma.contactDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$contactPayload>
          }
          update: {
            args: Prisma.contactUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$contactPayload>
          }
          deleteMany: {
            args: Prisma.contactDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.contactUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.contactUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$contactPayload>[]
          }
          upsert: {
            args: Prisma.contactUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$contactPayload>
          }
          aggregate: {
            args: Prisma.ContactAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateContact>
          }
          groupBy: {
            args: Prisma.contactGroupByArgs<ExtArgs>
            result: $Utils.Optional<ContactGroupByOutputType>[]
          }
          count: {
            args: Prisma.contactCountArgs<ExtArgs>
            result: $Utils.Optional<ContactCountAggregateOutputType> | number
          }
        }
      }
      About: {
        payload: Prisma.$AboutPayload<ExtArgs>
        fields: Prisma.AboutFieldRefs
        operations: {
          findUnique: {
            args: Prisma.AboutFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AboutPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.AboutFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AboutPayload>
          }
          findFirst: {
            args: Prisma.AboutFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AboutPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.AboutFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AboutPayload>
          }
          findMany: {
            args: Prisma.AboutFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AboutPayload>[]
          }
          create: {
            args: Prisma.AboutCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AboutPayload>
          }
          createMany: {
            args: Prisma.AboutCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.AboutCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AboutPayload>[]
          }
          delete: {
            args: Prisma.AboutDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AboutPayload>
          }
          update: {
            args: Prisma.AboutUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AboutPayload>
          }
          deleteMany: {
            args: Prisma.AboutDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.AboutUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.AboutUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AboutPayload>[]
          }
          upsert: {
            args: Prisma.AboutUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AboutPayload>
          }
          aggregate: {
            args: Prisma.AboutAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateAbout>
          }
          groupBy: {
            args: Prisma.AboutGroupByArgs<ExtArgs>
            result: $Utils.Optional<AboutGroupByOutputType>[]
          }
          count: {
            args: Prisma.AboutCountArgs<ExtArgs>
            result: $Utils.Optional<AboutCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
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
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
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
    omit?: Prisma.GlobalOmitConfig
  }
  export type GlobalOmitConfig = {
    user?: userOmit
    project?: projectOmit
    user_project?: user_projectOmit
    experience?: experienceOmit
    user_experience?: user_experienceOmit
    education?: educationOmit
    user_education?: user_educationOmit
    skills?: skillsOmit
    contact?: contactOmit
    about?: AboutOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition> ?
    GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type UserCountOutputType
   */

  export type UserCountOutputType = {
    user_education: number
    user_experience: number
    user_project: number
    contact: number
    About: number
  }

  export type UserCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user_education?: boolean | UserCountOutputTypeCountUser_educationArgs
    user_experience?: boolean | UserCountOutputTypeCountUser_experienceArgs
    user_project?: boolean | UserCountOutputTypeCountUser_projectArgs
    contact?: boolean | UserCountOutputTypeCountContactArgs
    About?: boolean | UserCountOutputTypeCountAboutArgs
  }

  // Custom InputTypes
  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCountOutputType
     */
    select?: UserCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountUser_educationArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: user_educationWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountUser_experienceArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: user_experienceWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountUser_projectArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: user_projectWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountContactArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: contactWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountAboutArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AboutWhereInput
  }


  /**
   * Count Type ProjectCountOutputType
   */

  export type ProjectCountOutputType = {
    user_project: number
  }

  export type ProjectCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user_project?: boolean | ProjectCountOutputTypeCountUser_projectArgs
  }

  // Custom InputTypes
  /**
   * ProjectCountOutputType without action
   */
  export type ProjectCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProjectCountOutputType
     */
    select?: ProjectCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ProjectCountOutputType without action
   */
  export type ProjectCountOutputTypeCountUser_projectArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: user_projectWhereInput
  }


  /**
   * Count Type ExperienceCountOutputType
   */

  export type ExperienceCountOutputType = {
    user_experience: number
  }

  export type ExperienceCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user_experience?: boolean | ExperienceCountOutputTypeCountUser_experienceArgs
  }

  // Custom InputTypes
  /**
   * ExperienceCountOutputType without action
   */
  export type ExperienceCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ExperienceCountOutputType
     */
    select?: ExperienceCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ExperienceCountOutputType without action
   */
  export type ExperienceCountOutputTypeCountUser_experienceArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: user_experienceWhereInput
  }


  /**
   * Count Type EducationCountOutputType
   */

  export type EducationCountOutputType = {
    user_education: number
  }

  export type EducationCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user_education?: boolean | EducationCountOutputTypeCountUser_educationArgs
  }

  // Custom InputTypes
  /**
   * EducationCountOutputType without action
   */
  export type EducationCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EducationCountOutputType
     */
    select?: EducationCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * EducationCountOutputType without action
   */
  export type EducationCountOutputTypeCountUser_educationArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: user_educationWhereInput
  }


  /**
   * Models
   */

  /**
   * Model user
   */

  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null
    _avg: UserAvgAggregateOutputType | null
    _sum: UserSumAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  export type UserAvgAggregateOutputType = {
    uid: number | null
  }

  export type UserSumAggregateOutputType = {
    uid: number | null
  }

  export type UserMinAggregateOutputType = {
    uid: number | null
    username: string | null
    password: string | null
    style: string | null
    hero: string | null
    subhero: string | null
  }

  export type UserMaxAggregateOutputType = {
    uid: number | null
    username: string | null
    password: string | null
    style: string | null
    hero: string | null
    subhero: string | null
  }

  export type UserCountAggregateOutputType = {
    uid: number
    username: number
    password: number
    style: number
    hero: number
    subhero: number
    _all: number
  }


  export type UserAvgAggregateInputType = {
    uid?: true
  }

  export type UserSumAggregateInputType = {
    uid?: true
  }

  export type UserMinAggregateInputType = {
    uid?: true
    username?: true
    password?: true
    style?: true
    hero?: true
    subhero?: true
  }

  export type UserMaxAggregateInputType = {
    uid?: true
    username?: true
    password?: true
    style?: true
    hero?: true
    subhero?: true
  }

  export type UserCountAggregateInputType = {
    uid?: true
    username?: true
    password?: true
    style?: true
    hero?: true
    subhero?: true
    _all?: true
  }

  export type UserAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which user to aggregate.
     */
    where?: userWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of users to fetch.
     */
    orderBy?: userOrderByWithRelationInput | userOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: userWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned users
    **/
    _count?: true | UserCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: UserAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: UserSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserMaxAggregateInputType
  }

  export type GetUserAggregateType<T extends UserAggregateArgs> = {
        [P in keyof T & keyof AggregateUser]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUser[P]>
      : GetScalarType<T[P], AggregateUser[P]>
  }




  export type userGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: userWhereInput
    orderBy?: userOrderByWithAggregationInput | userOrderByWithAggregationInput[]
    by: UserScalarFieldEnum[] | UserScalarFieldEnum
    having?: userScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserCountAggregateInputType | true
    _avg?: UserAvgAggregateInputType
    _sum?: UserSumAggregateInputType
    _min?: UserMinAggregateInputType
    _max?: UserMaxAggregateInputType
  }

  export type UserGroupByOutputType = {
    uid: number
    username: string
    password: string
    style: string
    hero: string
    subhero: string
    _count: UserCountAggregateOutputType | null
    _avg: UserAvgAggregateOutputType | null
    _sum: UserSumAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  type GetUserGroupByPayload<T extends userGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserGroupByOutputType[P]>
            : GetScalarType<T[P], UserGroupByOutputType[P]>
        }
      >
    >


  export type userSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    uid?: boolean
    username?: boolean
    password?: boolean
    style?: boolean
    hero?: boolean
    subhero?: boolean
    skills?: boolean | user$skillsArgs<ExtArgs>
    user_education?: boolean | user$user_educationArgs<ExtArgs>
    user_experience?: boolean | user$user_experienceArgs<ExtArgs>
    user_project?: boolean | user$user_projectArgs<ExtArgs>
    contact?: boolean | user$contactArgs<ExtArgs>
    About?: boolean | user$AboutArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type userSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    uid?: boolean
    username?: boolean
    password?: boolean
    style?: boolean
    hero?: boolean
    subhero?: boolean
  }, ExtArgs["result"]["user"]>

  export type userSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    uid?: boolean
    username?: boolean
    password?: boolean
    style?: boolean
    hero?: boolean
    subhero?: boolean
  }, ExtArgs["result"]["user"]>

  export type userSelectScalar = {
    uid?: boolean
    username?: boolean
    password?: boolean
    style?: boolean
    hero?: boolean
    subhero?: boolean
  }

  export type userOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"uid" | "username" | "password" | "style" | "hero" | "subhero", ExtArgs["result"]["user"]>
  export type userInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    skills?: boolean | user$skillsArgs<ExtArgs>
    user_education?: boolean | user$user_educationArgs<ExtArgs>
    user_experience?: boolean | user$user_experienceArgs<ExtArgs>
    user_project?: boolean | user$user_projectArgs<ExtArgs>
    contact?: boolean | user$contactArgs<ExtArgs>
    About?: boolean | user$AboutArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type userIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type userIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $userPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "user"
    objects: {
      skills: Prisma.$skillsPayload<ExtArgs> | null
      user_education: Prisma.$user_educationPayload<ExtArgs>[]
      user_experience: Prisma.$user_experiencePayload<ExtArgs>[]
      user_project: Prisma.$user_projectPayload<ExtArgs>[]
      contact: Prisma.$contactPayload<ExtArgs>[]
      About: Prisma.$AboutPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      uid: number
      username: string
      password: string
      style: string
      hero: string
      subhero: string
    }, ExtArgs["result"]["user"]>
    composites: {}
  }

  type userGetPayload<S extends boolean | null | undefined | userDefaultArgs> = $Result.GetResult<Prisma.$userPayload, S>

  type userCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<userFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UserCountAggregateInputType | true
    }

  export interface userDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['user'], meta: { name: 'user' } }
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
    findUnique<T extends userFindUniqueArgs>(args: SelectSubset<T, userFindUniqueArgs<ExtArgs>>): Prisma__userClient<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

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
    findUniqueOrThrow<T extends userFindUniqueOrThrowArgs>(args: SelectSubset<T, userFindUniqueOrThrowArgs<ExtArgs>>): Prisma__userClient<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

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
    findFirst<T extends userFindFirstArgs>(args?: SelectSubset<T, userFindFirstArgs<ExtArgs>>): Prisma__userClient<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

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
    findFirstOrThrow<T extends userFindFirstOrThrowArgs>(args?: SelectSubset<T, userFindFirstOrThrowArgs<ExtArgs>>): Prisma__userClient<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

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
    findMany<T extends userFindManyArgs>(args?: SelectSubset<T, userFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

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
    create<T extends userCreateArgs>(args: SelectSubset<T, userCreateArgs<ExtArgs>>): Prisma__userClient<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

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
    createMany<T extends userCreateManyArgs>(args?: SelectSubset<T, userCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

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
    createManyAndReturn<T extends userCreateManyAndReturnArgs>(args?: SelectSubset<T, userCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

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
    delete<T extends userDeleteArgs>(args: SelectSubset<T, userDeleteArgs<ExtArgs>>): Prisma__userClient<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

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
    update<T extends userUpdateArgs>(args: SelectSubset<T, userUpdateArgs<ExtArgs>>): Prisma__userClient<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

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
    deleteMany<T extends userDeleteManyArgs>(args?: SelectSubset<T, userDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

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
    updateMany<T extends userUpdateManyArgs>(args: SelectSubset<T, userUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

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
    updateManyAndReturn<T extends userUpdateManyAndReturnArgs>(args: SelectSubset<T, userUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

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
    upsert<T extends userUpsertArgs>(args: SelectSubset<T, userUpsertArgs<ExtArgs>>): Prisma__userClient<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


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
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserCountAggregateOutputType>
        : number
    >

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
    aggregate<T extends UserAggregateArgs>(args: Subset<T, UserAggregateArgs>): Prisma.PrismaPromise<GetUserAggregateType<T>>

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
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: userGroupByArgs['orderBy'] }
        : { orderBy?: userGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
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
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, userGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
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
  export interface Prisma__userClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    skills<T extends user$skillsArgs<ExtArgs> = {}>(args?: Subset<T, user$skillsArgs<ExtArgs>>): Prisma__skillsClient<$Result.GetResult<Prisma.$skillsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    user_education<T extends user$user_educationArgs<ExtArgs> = {}>(args?: Subset<T, user$user_educationArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$user_educationPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    user_experience<T extends user$user_experienceArgs<ExtArgs> = {}>(args?: Subset<T, user$user_experienceArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$user_experiencePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    user_project<T extends user$user_projectArgs<ExtArgs> = {}>(args?: Subset<T, user$user_projectArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$user_projectPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    contact<T extends user$contactArgs<ExtArgs> = {}>(args?: Subset<T, user$contactArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$contactPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    About<T extends user$AboutArgs<ExtArgs> = {}>(args?: Subset<T, user$AboutArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AboutPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the user model
   */ 
  interface userFieldRefs {
    readonly uid: FieldRef<"user", 'Int'>
    readonly username: FieldRef<"user", 'String'>
    readonly password: FieldRef<"user", 'String'>
    readonly style: FieldRef<"user", 'String'>
    readonly hero: FieldRef<"user", 'String'>
    readonly subhero: FieldRef<"user", 'String'>
  }
    

  // Custom InputTypes
  /**
   * user findUnique
   */
  export type userFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null
    /**
     * Omit specific fields from the user
     */
    omit?: userOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: userInclude<ExtArgs> | null
    /**
     * Filter, which user to fetch.
     */
    where: userWhereUniqueInput
  }

  /**
   * user findUniqueOrThrow
   */
  export type userFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null
    /**
     * Omit specific fields from the user
     */
    omit?: userOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: userInclude<ExtArgs> | null
    /**
     * Filter, which user to fetch.
     */
    where: userWhereUniqueInput
  }

  /**
   * user findFirst
   */
  export type userFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null
    /**
     * Omit specific fields from the user
     */
    omit?: userOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: userInclude<ExtArgs> | null
    /**
     * Filter, which user to fetch.
     */
    where?: userWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of users to fetch.
     */
    orderBy?: userOrderByWithRelationInput | userOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for users.
     */
    cursor?: userWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * user findFirstOrThrow
   */
  export type userFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null
    /**
     * Omit specific fields from the user
     */
    omit?: userOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: userInclude<ExtArgs> | null
    /**
     * Filter, which user to fetch.
     */
    where?: userWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of users to fetch.
     */
    orderBy?: userOrderByWithRelationInput | userOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for users.
     */
    cursor?: userWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * user findMany
   */
  export type userFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null
    /**
     * Omit specific fields from the user
     */
    omit?: userOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: userInclude<ExtArgs> | null
    /**
     * Filter, which users to fetch.
     */
    where?: userWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of users to fetch.
     */
    orderBy?: userOrderByWithRelationInput | userOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing users.
     */
    cursor?: userWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` users.
     */
    skip?: number
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * user create
   */
  export type userCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null
    /**
     * Omit specific fields from the user
     */
    omit?: userOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: userInclude<ExtArgs> | null
    /**
     * The data needed to create a user.
     */
    data: XOR<userCreateInput, userUncheckedCreateInput>
  }

  /**
   * user createMany
   */
  export type userCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many users.
     */
    data: userCreateManyInput | userCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * user createManyAndReturn
   */
  export type userCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the user
     */
    omit?: userOmit<ExtArgs> | null
    /**
     * The data used to create many users.
     */
    data: userCreateManyInput | userCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * user update
   */
  export type userUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null
    /**
     * Omit specific fields from the user
     */
    omit?: userOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: userInclude<ExtArgs> | null
    /**
     * The data needed to update a user.
     */
    data: XOR<userUpdateInput, userUncheckedUpdateInput>
    /**
     * Choose, which user to update.
     */
    where: userWhereUniqueInput
  }

  /**
   * user updateMany
   */
  export type userUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update users.
     */
    data: XOR<userUpdateManyMutationInput, userUncheckedUpdateManyInput>
    /**
     * Filter which users to update
     */
    where?: userWhereInput
    /**
     * Limit how many users to update.
     */
    limit?: number
  }

  /**
   * user updateManyAndReturn
   */
  export type userUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the user
     */
    omit?: userOmit<ExtArgs> | null
    /**
     * The data used to update users.
     */
    data: XOR<userUpdateManyMutationInput, userUncheckedUpdateManyInput>
    /**
     * Filter which users to update
     */
    where?: userWhereInput
    /**
     * Limit how many users to update.
     */
    limit?: number
  }

  /**
   * user upsert
   */
  export type userUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null
    /**
     * Omit specific fields from the user
     */
    omit?: userOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: userInclude<ExtArgs> | null
    /**
     * The filter to search for the user to update in case it exists.
     */
    where: userWhereUniqueInput
    /**
     * In case the user found by the `where` argument doesn't exist, create a new user with this data.
     */
    create: XOR<userCreateInput, userUncheckedCreateInput>
    /**
     * In case the user was found with the provided `where` argument, update it with this data.
     */
    update: XOR<userUpdateInput, userUncheckedUpdateInput>
  }

  /**
   * user delete
   */
  export type userDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null
    /**
     * Omit specific fields from the user
     */
    omit?: userOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: userInclude<ExtArgs> | null
    /**
     * Filter which user to delete.
     */
    where: userWhereUniqueInput
  }

  /**
   * user deleteMany
   */
  export type userDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which users to delete
     */
    where?: userWhereInput
    /**
     * Limit how many users to delete.
     */
    limit?: number
  }

  /**
   * user.skills
   */
  export type user$skillsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the skills
     */
    select?: skillsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the skills
     */
    omit?: skillsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: skillsInclude<ExtArgs> | null
    where?: skillsWhereInput
  }

  /**
   * user.user_education
   */
  export type user$user_educationArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user_education
     */
    select?: user_educationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the user_education
     */
    omit?: user_educationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: user_educationInclude<ExtArgs> | null
    where?: user_educationWhereInput
    orderBy?: user_educationOrderByWithRelationInput | user_educationOrderByWithRelationInput[]
    cursor?: user_educationWhereUniqueInput
    take?: number
    skip?: number
    distinct?: User_educationScalarFieldEnum | User_educationScalarFieldEnum[]
  }

  /**
   * user.user_experience
   */
  export type user$user_experienceArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user_experience
     */
    select?: user_experienceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the user_experience
     */
    omit?: user_experienceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: user_experienceInclude<ExtArgs> | null
    where?: user_experienceWhereInput
    orderBy?: user_experienceOrderByWithRelationInput | user_experienceOrderByWithRelationInput[]
    cursor?: user_experienceWhereUniqueInput
    take?: number
    skip?: number
    distinct?: User_experienceScalarFieldEnum | User_experienceScalarFieldEnum[]
  }

  /**
   * user.user_project
   */
  export type user$user_projectArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user_project
     */
    select?: user_projectSelect<ExtArgs> | null
    /**
     * Omit specific fields from the user_project
     */
    omit?: user_projectOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: user_projectInclude<ExtArgs> | null
    where?: user_projectWhereInput
    orderBy?: user_projectOrderByWithRelationInput | user_projectOrderByWithRelationInput[]
    cursor?: user_projectWhereUniqueInput
    take?: number
    skip?: number
    distinct?: User_projectScalarFieldEnum | User_projectScalarFieldEnum[]
  }

  /**
   * user.contact
   */
  export type user$contactArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the contact
     */
    select?: contactSelect<ExtArgs> | null
    /**
     * Omit specific fields from the contact
     */
    omit?: contactOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: contactInclude<ExtArgs> | null
    where?: contactWhereInput
    orderBy?: contactOrderByWithRelationInput | contactOrderByWithRelationInput[]
    cursor?: contactWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ContactScalarFieldEnum | ContactScalarFieldEnum[]
  }

  /**
   * user.About
   */
  export type user$AboutArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the About
     */
    select?: AboutSelect<ExtArgs> | null
    /**
     * Omit specific fields from the About
     */
    omit?: AboutOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AboutInclude<ExtArgs> | null
    where?: AboutWhereInput
    orderBy?: AboutOrderByWithRelationInput | AboutOrderByWithRelationInput[]
    cursor?: AboutWhereUniqueInput
    take?: number
    skip?: number
    distinct?: AboutScalarFieldEnum | AboutScalarFieldEnum[]
  }

  /**
   * user without action
   */
  export type userDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null
    /**
     * Omit specific fields from the user
     */
    omit?: userOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: userInclude<ExtArgs> | null
  }


  /**
   * Model project
   */

  export type AggregateProject = {
    _count: ProjectCountAggregateOutputType | null
    _avg: ProjectAvgAggregateOutputType | null
    _sum: ProjectSumAggregateOutputType | null
    _min: ProjectMinAggregateOutputType | null
    _max: ProjectMaxAggregateOutputType | null
  }

  export type ProjectAvgAggregateOutputType = {
    pid: number | null
  }

  export type ProjectSumAggregateOutputType = {
    pid: number | null
  }

  export type ProjectMinAggregateOutputType = {
    pid: number | null
    title: string | null
    image: string | null
    desc: string | null
    github: string | null
    Link: string | null
    style: string | null
  }

  export type ProjectMaxAggregateOutputType = {
    pid: number | null
    title: string | null
    image: string | null
    desc: string | null
    github: string | null
    Link: string | null
    style: string | null
  }

  export type ProjectCountAggregateOutputType = {
    pid: number
    title: number
    image: number
    desc: number
    tags: number
    github: number
    Link: number
    style: number
    _all: number
  }


  export type ProjectAvgAggregateInputType = {
    pid?: true
  }

  export type ProjectSumAggregateInputType = {
    pid?: true
  }

  export type ProjectMinAggregateInputType = {
    pid?: true
    title?: true
    image?: true
    desc?: true
    github?: true
    Link?: true
    style?: true
  }

  export type ProjectMaxAggregateInputType = {
    pid?: true
    title?: true
    image?: true
    desc?: true
    github?: true
    Link?: true
    style?: true
  }

  export type ProjectCountAggregateInputType = {
    pid?: true
    title?: true
    image?: true
    desc?: true
    tags?: true
    github?: true
    Link?: true
    style?: true
    _all?: true
  }

  export type ProjectAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which project to aggregate.
     */
    where?: projectWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of projects to fetch.
     */
    orderBy?: projectOrderByWithRelationInput | projectOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: projectWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` projects from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` projects.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned projects
    **/
    _count?: true | ProjectCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ProjectAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ProjectSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ProjectMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ProjectMaxAggregateInputType
  }

  export type GetProjectAggregateType<T extends ProjectAggregateArgs> = {
        [P in keyof T & keyof AggregateProject]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateProject[P]>
      : GetScalarType<T[P], AggregateProject[P]>
  }




  export type projectGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: projectWhereInput
    orderBy?: projectOrderByWithAggregationInput | projectOrderByWithAggregationInput[]
    by: ProjectScalarFieldEnum[] | ProjectScalarFieldEnum
    having?: projectScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ProjectCountAggregateInputType | true
    _avg?: ProjectAvgAggregateInputType
    _sum?: ProjectSumAggregateInputType
    _min?: ProjectMinAggregateInputType
    _max?: ProjectMaxAggregateInputType
  }

  export type ProjectGroupByOutputType = {
    pid: number
    title: string
    image: string
    desc: string
    tags: string[]
    github: string
    Link: string
    style: string
    _count: ProjectCountAggregateOutputType | null
    _avg: ProjectAvgAggregateOutputType | null
    _sum: ProjectSumAggregateOutputType | null
    _min: ProjectMinAggregateOutputType | null
    _max: ProjectMaxAggregateOutputType | null
  }

  type GetProjectGroupByPayload<T extends projectGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ProjectGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ProjectGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ProjectGroupByOutputType[P]>
            : GetScalarType<T[P], ProjectGroupByOutputType[P]>
        }
      >
    >


  export type projectSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    pid?: boolean
    title?: boolean
    image?: boolean
    desc?: boolean
    tags?: boolean
    github?: boolean
    Link?: boolean
    style?: boolean
    user_project?: boolean | project$user_projectArgs<ExtArgs>
    _count?: boolean | ProjectCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["project"]>

  export type projectSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    pid?: boolean
    title?: boolean
    image?: boolean
    desc?: boolean
    tags?: boolean
    github?: boolean
    Link?: boolean
    style?: boolean
  }, ExtArgs["result"]["project"]>

  export type projectSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    pid?: boolean
    title?: boolean
    image?: boolean
    desc?: boolean
    tags?: boolean
    github?: boolean
    Link?: boolean
    style?: boolean
  }, ExtArgs["result"]["project"]>

  export type projectSelectScalar = {
    pid?: boolean
    title?: boolean
    image?: boolean
    desc?: boolean
    tags?: boolean
    github?: boolean
    Link?: boolean
    style?: boolean
  }

  export type projectOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"pid" | "title" | "image" | "desc" | "tags" | "github" | "Link" | "style", ExtArgs["result"]["project"]>
  export type projectInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user_project?: boolean | project$user_projectArgs<ExtArgs>
    _count?: boolean | ProjectCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type projectIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type projectIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $projectPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "project"
    objects: {
      user_project: Prisma.$user_projectPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      pid: number
      title: string
      image: string
      desc: string
      tags: string[]
      github: string
      Link: string
      style: string
    }, ExtArgs["result"]["project"]>
    composites: {}
  }

  type projectGetPayload<S extends boolean | null | undefined | projectDefaultArgs> = $Result.GetResult<Prisma.$projectPayload, S>

  type projectCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<projectFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ProjectCountAggregateInputType | true
    }

  export interface projectDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['project'], meta: { name: 'project' } }
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
    findUnique<T extends projectFindUniqueArgs>(args: SelectSubset<T, projectFindUniqueArgs<ExtArgs>>): Prisma__projectClient<$Result.GetResult<Prisma.$projectPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

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
    findUniqueOrThrow<T extends projectFindUniqueOrThrowArgs>(args: SelectSubset<T, projectFindUniqueOrThrowArgs<ExtArgs>>): Prisma__projectClient<$Result.GetResult<Prisma.$projectPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

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
    findFirst<T extends projectFindFirstArgs>(args?: SelectSubset<T, projectFindFirstArgs<ExtArgs>>): Prisma__projectClient<$Result.GetResult<Prisma.$projectPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

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
    findFirstOrThrow<T extends projectFindFirstOrThrowArgs>(args?: SelectSubset<T, projectFindFirstOrThrowArgs<ExtArgs>>): Prisma__projectClient<$Result.GetResult<Prisma.$projectPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

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
    findMany<T extends projectFindManyArgs>(args?: SelectSubset<T, projectFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$projectPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

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
    create<T extends projectCreateArgs>(args: SelectSubset<T, projectCreateArgs<ExtArgs>>): Prisma__projectClient<$Result.GetResult<Prisma.$projectPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

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
    createMany<T extends projectCreateManyArgs>(args?: SelectSubset<T, projectCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

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
    createManyAndReturn<T extends projectCreateManyAndReturnArgs>(args?: SelectSubset<T, projectCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$projectPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

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
    delete<T extends projectDeleteArgs>(args: SelectSubset<T, projectDeleteArgs<ExtArgs>>): Prisma__projectClient<$Result.GetResult<Prisma.$projectPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

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
    update<T extends projectUpdateArgs>(args: SelectSubset<T, projectUpdateArgs<ExtArgs>>): Prisma__projectClient<$Result.GetResult<Prisma.$projectPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

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
    deleteMany<T extends projectDeleteManyArgs>(args?: SelectSubset<T, projectDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

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
    updateMany<T extends projectUpdateManyArgs>(args: SelectSubset<T, projectUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

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
    updateManyAndReturn<T extends projectUpdateManyAndReturnArgs>(args: SelectSubset<T, projectUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$projectPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

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
    upsert<T extends projectUpsertArgs>(args: SelectSubset<T, projectUpsertArgs<ExtArgs>>): Prisma__projectClient<$Result.GetResult<Prisma.$projectPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


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
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ProjectCountAggregateOutputType>
        : number
    >

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
    aggregate<T extends ProjectAggregateArgs>(args: Subset<T, ProjectAggregateArgs>): Prisma.PrismaPromise<GetProjectAggregateType<T>>

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
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: projectGroupByArgs['orderBy'] }
        : { orderBy?: projectGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
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
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, projectGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetProjectGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
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
  export interface Prisma__projectClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user_project<T extends project$user_projectArgs<ExtArgs> = {}>(args?: Subset<T, project$user_projectArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$user_projectPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the project model
   */ 
  interface projectFieldRefs {
    readonly pid: FieldRef<"project", 'Int'>
    readonly title: FieldRef<"project", 'String'>
    readonly image: FieldRef<"project", 'String'>
    readonly desc: FieldRef<"project", 'String'>
    readonly tags: FieldRef<"project", 'String[]'>
    readonly github: FieldRef<"project", 'String'>
    readonly Link: FieldRef<"project", 'String'>
    readonly style: FieldRef<"project", 'String'>
  }
    

  // Custom InputTypes
  /**
   * project findUnique
   */
  export type projectFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the project
     */
    select?: projectSelect<ExtArgs> | null
    /**
     * Omit specific fields from the project
     */
    omit?: projectOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: projectInclude<ExtArgs> | null
    /**
     * Filter, which project to fetch.
     */
    where: projectWhereUniqueInput
  }

  /**
   * project findUniqueOrThrow
   */
  export type projectFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the project
     */
    select?: projectSelect<ExtArgs> | null
    /**
     * Omit specific fields from the project
     */
    omit?: projectOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: projectInclude<ExtArgs> | null
    /**
     * Filter, which project to fetch.
     */
    where: projectWhereUniqueInput
  }

  /**
   * project findFirst
   */
  export type projectFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the project
     */
    select?: projectSelect<ExtArgs> | null
    /**
     * Omit specific fields from the project
     */
    omit?: projectOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: projectInclude<ExtArgs> | null
    /**
     * Filter, which project to fetch.
     */
    where?: projectWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of projects to fetch.
     */
    orderBy?: projectOrderByWithRelationInput | projectOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for projects.
     */
    cursor?: projectWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` projects from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` projects.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of projects.
     */
    distinct?: ProjectScalarFieldEnum | ProjectScalarFieldEnum[]
  }

  /**
   * project findFirstOrThrow
   */
  export type projectFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the project
     */
    select?: projectSelect<ExtArgs> | null
    /**
     * Omit specific fields from the project
     */
    omit?: projectOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: projectInclude<ExtArgs> | null
    /**
     * Filter, which project to fetch.
     */
    where?: projectWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of projects to fetch.
     */
    orderBy?: projectOrderByWithRelationInput | projectOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for projects.
     */
    cursor?: projectWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` projects from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` projects.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of projects.
     */
    distinct?: ProjectScalarFieldEnum | ProjectScalarFieldEnum[]
  }

  /**
   * project findMany
   */
  export type projectFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the project
     */
    select?: projectSelect<ExtArgs> | null
    /**
     * Omit specific fields from the project
     */
    omit?: projectOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: projectInclude<ExtArgs> | null
    /**
     * Filter, which projects to fetch.
     */
    where?: projectWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of projects to fetch.
     */
    orderBy?: projectOrderByWithRelationInput | projectOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing projects.
     */
    cursor?: projectWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` projects from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` projects.
     */
    skip?: number
    distinct?: ProjectScalarFieldEnum | ProjectScalarFieldEnum[]
  }

  /**
   * project create
   */
  export type projectCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the project
     */
    select?: projectSelect<ExtArgs> | null
    /**
     * Omit specific fields from the project
     */
    omit?: projectOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: projectInclude<ExtArgs> | null
    /**
     * The data needed to create a project.
     */
    data: XOR<projectCreateInput, projectUncheckedCreateInput>
  }

  /**
   * project createMany
   */
  export type projectCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many projects.
     */
    data: projectCreateManyInput | projectCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * project createManyAndReturn
   */
  export type projectCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the project
     */
    select?: projectSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the project
     */
    omit?: projectOmit<ExtArgs> | null
    /**
     * The data used to create many projects.
     */
    data: projectCreateManyInput | projectCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * project update
   */
  export type projectUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the project
     */
    select?: projectSelect<ExtArgs> | null
    /**
     * Omit specific fields from the project
     */
    omit?: projectOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: projectInclude<ExtArgs> | null
    /**
     * The data needed to update a project.
     */
    data: XOR<projectUpdateInput, projectUncheckedUpdateInput>
    /**
     * Choose, which project to update.
     */
    where: projectWhereUniqueInput
  }

  /**
   * project updateMany
   */
  export type projectUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update projects.
     */
    data: XOR<projectUpdateManyMutationInput, projectUncheckedUpdateManyInput>
    /**
     * Filter which projects to update
     */
    where?: projectWhereInput
    /**
     * Limit how many projects to update.
     */
    limit?: number
  }

  /**
   * project updateManyAndReturn
   */
  export type projectUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the project
     */
    select?: projectSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the project
     */
    omit?: projectOmit<ExtArgs> | null
    /**
     * The data used to update projects.
     */
    data: XOR<projectUpdateManyMutationInput, projectUncheckedUpdateManyInput>
    /**
     * Filter which projects to update
     */
    where?: projectWhereInput
    /**
     * Limit how many projects to update.
     */
    limit?: number
  }

  /**
   * project upsert
   */
  export type projectUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the project
     */
    select?: projectSelect<ExtArgs> | null
    /**
     * Omit specific fields from the project
     */
    omit?: projectOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: projectInclude<ExtArgs> | null
    /**
     * The filter to search for the project to update in case it exists.
     */
    where: projectWhereUniqueInput
    /**
     * In case the project found by the `where` argument doesn't exist, create a new project with this data.
     */
    create: XOR<projectCreateInput, projectUncheckedCreateInput>
    /**
     * In case the project was found with the provided `where` argument, update it with this data.
     */
    update: XOR<projectUpdateInput, projectUncheckedUpdateInput>
  }

  /**
   * project delete
   */
  export type projectDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the project
     */
    select?: projectSelect<ExtArgs> | null
    /**
     * Omit specific fields from the project
     */
    omit?: projectOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: projectInclude<ExtArgs> | null
    /**
     * Filter which project to delete.
     */
    where: projectWhereUniqueInput
  }

  /**
   * project deleteMany
   */
  export type projectDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which projects to delete
     */
    where?: projectWhereInput
    /**
     * Limit how many projects to delete.
     */
    limit?: number
  }

  /**
   * project.user_project
   */
  export type project$user_projectArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user_project
     */
    select?: user_projectSelect<ExtArgs> | null
    /**
     * Omit specific fields from the user_project
     */
    omit?: user_projectOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: user_projectInclude<ExtArgs> | null
    where?: user_projectWhereInput
    orderBy?: user_projectOrderByWithRelationInput | user_projectOrderByWithRelationInput[]
    cursor?: user_projectWhereUniqueInput
    take?: number
    skip?: number
    distinct?: User_projectScalarFieldEnum | User_projectScalarFieldEnum[]
  }

  /**
   * project without action
   */
  export type projectDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the project
     */
    select?: projectSelect<ExtArgs> | null
    /**
     * Omit specific fields from the project
     */
    omit?: projectOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: projectInclude<ExtArgs> | null
  }


  /**
   * Model user_project
   */

  export type AggregateUser_project = {
    _count: User_projectCountAggregateOutputType | null
    _avg: User_projectAvgAggregateOutputType | null
    _sum: User_projectSumAggregateOutputType | null
    _min: User_projectMinAggregateOutputType | null
    _max: User_projectMaxAggregateOutputType | null
  }

  export type User_projectAvgAggregateOutputType = {
    pid: number | null
    uid: number | null
  }

  export type User_projectSumAggregateOutputType = {
    pid: number | null
    uid: number | null
  }

  export type User_projectMinAggregateOutputType = {
    pid: number | null
    uid: number | null
  }

  export type User_projectMaxAggregateOutputType = {
    pid: number | null
    uid: number | null
  }

  export type User_projectCountAggregateOutputType = {
    pid: number
    uid: number
    _all: number
  }


  export type User_projectAvgAggregateInputType = {
    pid?: true
    uid?: true
  }

  export type User_projectSumAggregateInputType = {
    pid?: true
    uid?: true
  }

  export type User_projectMinAggregateInputType = {
    pid?: true
    uid?: true
  }

  export type User_projectMaxAggregateInputType = {
    pid?: true
    uid?: true
  }

  export type User_projectCountAggregateInputType = {
    pid?: true
    uid?: true
    _all?: true
  }

  export type User_projectAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which user_project to aggregate.
     */
    where?: user_projectWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of user_projects to fetch.
     */
    orderBy?: user_projectOrderByWithRelationInput | user_projectOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: user_projectWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` user_projects from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` user_projects.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned user_projects
    **/
    _count?: true | User_projectCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: User_projectAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: User_projectSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: User_projectMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: User_projectMaxAggregateInputType
  }

  export type GetUser_projectAggregateType<T extends User_projectAggregateArgs> = {
        [P in keyof T & keyof AggregateUser_project]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUser_project[P]>
      : GetScalarType<T[P], AggregateUser_project[P]>
  }




  export type user_projectGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: user_projectWhereInput
    orderBy?: user_projectOrderByWithAggregationInput | user_projectOrderByWithAggregationInput[]
    by: User_projectScalarFieldEnum[] | User_projectScalarFieldEnum
    having?: user_projectScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: User_projectCountAggregateInputType | true
    _avg?: User_projectAvgAggregateInputType
    _sum?: User_projectSumAggregateInputType
    _min?: User_projectMinAggregateInputType
    _max?: User_projectMaxAggregateInputType
  }

  export type User_projectGroupByOutputType = {
    pid: number
    uid: number
    _count: User_projectCountAggregateOutputType | null
    _avg: User_projectAvgAggregateOutputType | null
    _sum: User_projectSumAggregateOutputType | null
    _min: User_projectMinAggregateOutputType | null
    _max: User_projectMaxAggregateOutputType | null
  }

  type GetUser_projectGroupByPayload<T extends user_projectGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<User_projectGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof User_projectGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], User_projectGroupByOutputType[P]>
            : GetScalarType<T[P], User_projectGroupByOutputType[P]>
        }
      >
    >


  export type user_projectSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    pid?: boolean
    uid?: boolean
    project?: boolean | projectDefaultArgs<ExtArgs>
    user?: boolean | userDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user_project"]>

  export type user_projectSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    pid?: boolean
    uid?: boolean
    project?: boolean | projectDefaultArgs<ExtArgs>
    user?: boolean | userDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user_project"]>

  export type user_projectSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    pid?: boolean
    uid?: boolean
    project?: boolean | projectDefaultArgs<ExtArgs>
    user?: boolean | userDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user_project"]>

  export type user_projectSelectScalar = {
    pid?: boolean
    uid?: boolean
  }

  export type user_projectOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"pid" | "uid", ExtArgs["result"]["user_project"]>
  export type user_projectInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    project?: boolean | projectDefaultArgs<ExtArgs>
    user?: boolean | userDefaultArgs<ExtArgs>
  }
  export type user_projectIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    project?: boolean | projectDefaultArgs<ExtArgs>
    user?: boolean | userDefaultArgs<ExtArgs>
  }
  export type user_projectIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    project?: boolean | projectDefaultArgs<ExtArgs>
    user?: boolean | userDefaultArgs<ExtArgs>
  }

  export type $user_projectPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "user_project"
    objects: {
      project: Prisma.$projectPayload<ExtArgs>
      user: Prisma.$userPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      pid: number
      uid: number
    }, ExtArgs["result"]["user_project"]>
    composites: {}
  }

  type user_projectGetPayload<S extends boolean | null | undefined | user_projectDefaultArgs> = $Result.GetResult<Prisma.$user_projectPayload, S>

  type user_projectCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<user_projectFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: User_projectCountAggregateInputType | true
    }

  export interface user_projectDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['user_project'], meta: { name: 'user_project' } }
    /**
     * Find zero or one User_project that matches the filter.
     * @param {user_projectFindUniqueArgs} args - Arguments to find a User_project
     * @example
     * // Get one User_project
     * const user_project = await prisma.user_project.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends user_projectFindUniqueArgs>(args: SelectSubset<T, user_projectFindUniqueArgs<ExtArgs>>): Prisma__user_projectClient<$Result.GetResult<Prisma.$user_projectPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one User_project that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {user_projectFindUniqueOrThrowArgs} args - Arguments to find a User_project
     * @example
     * // Get one User_project
     * const user_project = await prisma.user_project.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends user_projectFindUniqueOrThrowArgs>(args: SelectSubset<T, user_projectFindUniqueOrThrowArgs<ExtArgs>>): Prisma__user_projectClient<$Result.GetResult<Prisma.$user_projectPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User_project that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {user_projectFindFirstArgs} args - Arguments to find a User_project
     * @example
     * // Get one User_project
     * const user_project = await prisma.user_project.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends user_projectFindFirstArgs>(args?: SelectSubset<T, user_projectFindFirstArgs<ExtArgs>>): Prisma__user_projectClient<$Result.GetResult<Prisma.$user_projectPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User_project that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {user_projectFindFirstOrThrowArgs} args - Arguments to find a User_project
     * @example
     * // Get one User_project
     * const user_project = await prisma.user_project.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends user_projectFindFirstOrThrowArgs>(args?: SelectSubset<T, user_projectFindFirstOrThrowArgs<ExtArgs>>): Prisma__user_projectClient<$Result.GetResult<Prisma.$user_projectPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more User_projects that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {user_projectFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all User_projects
     * const user_projects = await prisma.user_project.findMany()
     * 
     * // Get first 10 User_projects
     * const user_projects = await prisma.user_project.findMany({ take: 10 })
     * 
     * // Only select the `pid`
     * const user_projectWithPidOnly = await prisma.user_project.findMany({ select: { pid: true } })
     * 
     */
    findMany<T extends user_projectFindManyArgs>(args?: SelectSubset<T, user_projectFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$user_projectPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a User_project.
     * @param {user_projectCreateArgs} args - Arguments to create a User_project.
     * @example
     * // Create one User_project
     * const User_project = await prisma.user_project.create({
     *   data: {
     *     // ... data to create a User_project
     *   }
     * })
     * 
     */
    create<T extends user_projectCreateArgs>(args: SelectSubset<T, user_projectCreateArgs<ExtArgs>>): Prisma__user_projectClient<$Result.GetResult<Prisma.$user_projectPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many User_projects.
     * @param {user_projectCreateManyArgs} args - Arguments to create many User_projects.
     * @example
     * // Create many User_projects
     * const user_project = await prisma.user_project.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends user_projectCreateManyArgs>(args?: SelectSubset<T, user_projectCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many User_projects and returns the data saved in the database.
     * @param {user_projectCreateManyAndReturnArgs} args - Arguments to create many User_projects.
     * @example
     * // Create many User_projects
     * const user_project = await prisma.user_project.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many User_projects and only return the `pid`
     * const user_projectWithPidOnly = await prisma.user_project.createManyAndReturn({
     *   select: { pid: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends user_projectCreateManyAndReturnArgs>(args?: SelectSubset<T, user_projectCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$user_projectPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a User_project.
     * @param {user_projectDeleteArgs} args - Arguments to delete one User_project.
     * @example
     * // Delete one User_project
     * const User_project = await prisma.user_project.delete({
     *   where: {
     *     // ... filter to delete one User_project
     *   }
     * })
     * 
     */
    delete<T extends user_projectDeleteArgs>(args: SelectSubset<T, user_projectDeleteArgs<ExtArgs>>): Prisma__user_projectClient<$Result.GetResult<Prisma.$user_projectPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one User_project.
     * @param {user_projectUpdateArgs} args - Arguments to update one User_project.
     * @example
     * // Update one User_project
     * const user_project = await prisma.user_project.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends user_projectUpdateArgs>(args: SelectSubset<T, user_projectUpdateArgs<ExtArgs>>): Prisma__user_projectClient<$Result.GetResult<Prisma.$user_projectPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more User_projects.
     * @param {user_projectDeleteManyArgs} args - Arguments to filter User_projects to delete.
     * @example
     * // Delete a few User_projects
     * const { count } = await prisma.user_project.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends user_projectDeleteManyArgs>(args?: SelectSubset<T, user_projectDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more User_projects.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {user_projectUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many User_projects
     * const user_project = await prisma.user_project.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends user_projectUpdateManyArgs>(args: SelectSubset<T, user_projectUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more User_projects and returns the data updated in the database.
     * @param {user_projectUpdateManyAndReturnArgs} args - Arguments to update many User_projects.
     * @example
     * // Update many User_projects
     * const user_project = await prisma.user_project.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more User_projects and only return the `pid`
     * const user_projectWithPidOnly = await prisma.user_project.updateManyAndReturn({
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
    updateManyAndReturn<T extends user_projectUpdateManyAndReturnArgs>(args: SelectSubset<T, user_projectUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$user_projectPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one User_project.
     * @param {user_projectUpsertArgs} args - Arguments to update or create a User_project.
     * @example
     * // Update or create a User_project
     * const user_project = await prisma.user_project.upsert({
     *   create: {
     *     // ... data to create a User_project
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the User_project we want to update
     *   }
     * })
     */
    upsert<T extends user_projectUpsertArgs>(args: SelectSubset<T, user_projectUpsertArgs<ExtArgs>>): Prisma__user_projectClient<$Result.GetResult<Prisma.$user_projectPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of User_projects.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {user_projectCountArgs} args - Arguments to filter User_projects to count.
     * @example
     * // Count the number of User_projects
     * const count = await prisma.user_project.count({
     *   where: {
     *     // ... the filter for the User_projects we want to count
     *   }
     * })
    **/
    count<T extends user_projectCountArgs>(
      args?: Subset<T, user_projectCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], User_projectCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a User_project.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {User_projectAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends User_projectAggregateArgs>(args: Subset<T, User_projectAggregateArgs>): Prisma.PrismaPromise<GetUser_projectAggregateType<T>>

    /**
     * Group by User_project.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {user_projectGroupByArgs} args - Group by arguments.
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
      T extends user_projectGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: user_projectGroupByArgs['orderBy'] }
        : { orderBy?: user_projectGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
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
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, user_projectGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUser_projectGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the user_project model
   */
  readonly fields: user_projectFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for user_project.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__user_projectClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    project<T extends projectDefaultArgs<ExtArgs> = {}>(args?: Subset<T, projectDefaultArgs<ExtArgs>>): Prisma__projectClient<$Result.GetResult<Prisma.$projectPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    user<T extends userDefaultArgs<ExtArgs> = {}>(args?: Subset<T, userDefaultArgs<ExtArgs>>): Prisma__userClient<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the user_project model
   */ 
  interface user_projectFieldRefs {
    readonly pid: FieldRef<"user_project", 'Int'>
    readonly uid: FieldRef<"user_project", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * user_project findUnique
   */
  export type user_projectFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user_project
     */
    select?: user_projectSelect<ExtArgs> | null
    /**
     * Omit specific fields from the user_project
     */
    omit?: user_projectOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: user_projectInclude<ExtArgs> | null
    /**
     * Filter, which user_project to fetch.
     */
    where: user_projectWhereUniqueInput
  }

  /**
   * user_project findUniqueOrThrow
   */
  export type user_projectFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user_project
     */
    select?: user_projectSelect<ExtArgs> | null
    /**
     * Omit specific fields from the user_project
     */
    omit?: user_projectOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: user_projectInclude<ExtArgs> | null
    /**
     * Filter, which user_project to fetch.
     */
    where: user_projectWhereUniqueInput
  }

  /**
   * user_project findFirst
   */
  export type user_projectFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user_project
     */
    select?: user_projectSelect<ExtArgs> | null
    /**
     * Omit specific fields from the user_project
     */
    omit?: user_projectOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: user_projectInclude<ExtArgs> | null
    /**
     * Filter, which user_project to fetch.
     */
    where?: user_projectWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of user_projects to fetch.
     */
    orderBy?: user_projectOrderByWithRelationInput | user_projectOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for user_projects.
     */
    cursor?: user_projectWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` user_projects from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` user_projects.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of user_projects.
     */
    distinct?: User_projectScalarFieldEnum | User_projectScalarFieldEnum[]
  }

  /**
   * user_project findFirstOrThrow
   */
  export type user_projectFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user_project
     */
    select?: user_projectSelect<ExtArgs> | null
    /**
     * Omit specific fields from the user_project
     */
    omit?: user_projectOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: user_projectInclude<ExtArgs> | null
    /**
     * Filter, which user_project to fetch.
     */
    where?: user_projectWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of user_projects to fetch.
     */
    orderBy?: user_projectOrderByWithRelationInput | user_projectOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for user_projects.
     */
    cursor?: user_projectWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` user_projects from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` user_projects.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of user_projects.
     */
    distinct?: User_projectScalarFieldEnum | User_projectScalarFieldEnum[]
  }

  /**
   * user_project findMany
   */
  export type user_projectFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user_project
     */
    select?: user_projectSelect<ExtArgs> | null
    /**
     * Omit specific fields from the user_project
     */
    omit?: user_projectOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: user_projectInclude<ExtArgs> | null
    /**
     * Filter, which user_projects to fetch.
     */
    where?: user_projectWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of user_projects to fetch.
     */
    orderBy?: user_projectOrderByWithRelationInput | user_projectOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing user_projects.
     */
    cursor?: user_projectWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` user_projects from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` user_projects.
     */
    skip?: number
    distinct?: User_projectScalarFieldEnum | User_projectScalarFieldEnum[]
  }

  /**
   * user_project create
   */
  export type user_projectCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user_project
     */
    select?: user_projectSelect<ExtArgs> | null
    /**
     * Omit specific fields from the user_project
     */
    omit?: user_projectOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: user_projectInclude<ExtArgs> | null
    /**
     * The data needed to create a user_project.
     */
    data: XOR<user_projectCreateInput, user_projectUncheckedCreateInput>
  }

  /**
   * user_project createMany
   */
  export type user_projectCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many user_projects.
     */
    data: user_projectCreateManyInput | user_projectCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * user_project createManyAndReturn
   */
  export type user_projectCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user_project
     */
    select?: user_projectSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the user_project
     */
    omit?: user_projectOmit<ExtArgs> | null
    /**
     * The data used to create many user_projects.
     */
    data: user_projectCreateManyInput | user_projectCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: user_projectIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * user_project update
   */
  export type user_projectUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user_project
     */
    select?: user_projectSelect<ExtArgs> | null
    /**
     * Omit specific fields from the user_project
     */
    omit?: user_projectOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: user_projectInclude<ExtArgs> | null
    /**
     * The data needed to update a user_project.
     */
    data: XOR<user_projectUpdateInput, user_projectUncheckedUpdateInput>
    /**
     * Choose, which user_project to update.
     */
    where: user_projectWhereUniqueInput
  }

  /**
   * user_project updateMany
   */
  export type user_projectUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update user_projects.
     */
    data: XOR<user_projectUpdateManyMutationInput, user_projectUncheckedUpdateManyInput>
    /**
     * Filter which user_projects to update
     */
    where?: user_projectWhereInput
    /**
     * Limit how many user_projects to update.
     */
    limit?: number
  }

  /**
   * user_project updateManyAndReturn
   */
  export type user_projectUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user_project
     */
    select?: user_projectSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the user_project
     */
    omit?: user_projectOmit<ExtArgs> | null
    /**
     * The data used to update user_projects.
     */
    data: XOR<user_projectUpdateManyMutationInput, user_projectUncheckedUpdateManyInput>
    /**
     * Filter which user_projects to update
     */
    where?: user_projectWhereInput
    /**
     * Limit how many user_projects to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: user_projectIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * user_project upsert
   */
  export type user_projectUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user_project
     */
    select?: user_projectSelect<ExtArgs> | null
    /**
     * Omit specific fields from the user_project
     */
    omit?: user_projectOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: user_projectInclude<ExtArgs> | null
    /**
     * The filter to search for the user_project to update in case it exists.
     */
    where: user_projectWhereUniqueInput
    /**
     * In case the user_project found by the `where` argument doesn't exist, create a new user_project with this data.
     */
    create: XOR<user_projectCreateInput, user_projectUncheckedCreateInput>
    /**
     * In case the user_project was found with the provided `where` argument, update it with this data.
     */
    update: XOR<user_projectUpdateInput, user_projectUncheckedUpdateInput>
  }

  /**
   * user_project delete
   */
  export type user_projectDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user_project
     */
    select?: user_projectSelect<ExtArgs> | null
    /**
     * Omit specific fields from the user_project
     */
    omit?: user_projectOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: user_projectInclude<ExtArgs> | null
    /**
     * Filter which user_project to delete.
     */
    where: user_projectWhereUniqueInput
  }

  /**
   * user_project deleteMany
   */
  export type user_projectDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which user_projects to delete
     */
    where?: user_projectWhereInput
    /**
     * Limit how many user_projects to delete.
     */
    limit?: number
  }

  /**
   * user_project without action
   */
  export type user_projectDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user_project
     */
    select?: user_projectSelect<ExtArgs> | null
    /**
     * Omit specific fields from the user_project
     */
    omit?: user_projectOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: user_projectInclude<ExtArgs> | null
  }


  /**
   * Model experience
   */

  export type AggregateExperience = {
    _count: ExperienceCountAggregateOutputType | null
    _avg: ExperienceAvgAggregateOutputType | null
    _sum: ExperienceSumAggregateOutputType | null
    _min: ExperienceMinAggregateOutputType | null
    _max: ExperienceMaxAggregateOutputType | null
  }

  export type ExperienceAvgAggregateOutputType = {
    eid: number | null
  }

  export type ExperienceSumAggregateOutputType = {
    eid: number | null
  }

  export type ExperienceMinAggregateOutputType = {
    eid: number | null
    title: string | null
    corp: string | null
    style: string | null
    startdate: Date | null
    enddate: Date | null
    desc: string | null
  }

  export type ExperienceMaxAggregateOutputType = {
    eid: number | null
    title: string | null
    corp: string | null
    style: string | null
    startdate: Date | null
    enddate: Date | null
    desc: string | null
  }

  export type ExperienceCountAggregateOutputType = {
    eid: number
    title: number
    corp: number
    style: number
    startdate: number
    enddate: number
    desc: number
    _all: number
  }


  export type ExperienceAvgAggregateInputType = {
    eid?: true
  }

  export type ExperienceSumAggregateInputType = {
    eid?: true
  }

  export type ExperienceMinAggregateInputType = {
    eid?: true
    title?: true
    corp?: true
    style?: true
    startdate?: true
    enddate?: true
    desc?: true
  }

  export type ExperienceMaxAggregateInputType = {
    eid?: true
    title?: true
    corp?: true
    style?: true
    startdate?: true
    enddate?: true
    desc?: true
  }

  export type ExperienceCountAggregateInputType = {
    eid?: true
    title?: true
    corp?: true
    style?: true
    startdate?: true
    enddate?: true
    desc?: true
    _all?: true
  }

  export type ExperienceAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which experience to aggregate.
     */
    where?: experienceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of experiences to fetch.
     */
    orderBy?: experienceOrderByWithRelationInput | experienceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: experienceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` experiences from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` experiences.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned experiences
    **/
    _count?: true | ExperienceCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ExperienceAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ExperienceSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ExperienceMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ExperienceMaxAggregateInputType
  }

  export type GetExperienceAggregateType<T extends ExperienceAggregateArgs> = {
        [P in keyof T & keyof AggregateExperience]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateExperience[P]>
      : GetScalarType<T[P], AggregateExperience[P]>
  }




  export type experienceGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: experienceWhereInput
    orderBy?: experienceOrderByWithAggregationInput | experienceOrderByWithAggregationInput[]
    by: ExperienceScalarFieldEnum[] | ExperienceScalarFieldEnum
    having?: experienceScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ExperienceCountAggregateInputType | true
    _avg?: ExperienceAvgAggregateInputType
    _sum?: ExperienceSumAggregateInputType
    _min?: ExperienceMinAggregateInputType
    _max?: ExperienceMaxAggregateInputType
  }

  export type ExperienceGroupByOutputType = {
    eid: number
    title: string
    corp: string
    style: string
    startdate: Date
    enddate: Date
    desc: string
    _count: ExperienceCountAggregateOutputType | null
    _avg: ExperienceAvgAggregateOutputType | null
    _sum: ExperienceSumAggregateOutputType | null
    _min: ExperienceMinAggregateOutputType | null
    _max: ExperienceMaxAggregateOutputType | null
  }

  type GetExperienceGroupByPayload<T extends experienceGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ExperienceGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ExperienceGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ExperienceGroupByOutputType[P]>
            : GetScalarType<T[P], ExperienceGroupByOutputType[P]>
        }
      >
    >


  export type experienceSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    eid?: boolean
    title?: boolean
    corp?: boolean
    style?: boolean
    startdate?: boolean
    enddate?: boolean
    desc?: boolean
    user_experience?: boolean | experience$user_experienceArgs<ExtArgs>
    _count?: boolean | ExperienceCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["experience"]>

  export type experienceSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    eid?: boolean
    title?: boolean
    corp?: boolean
    style?: boolean
    startdate?: boolean
    enddate?: boolean
    desc?: boolean
  }, ExtArgs["result"]["experience"]>

  export type experienceSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    eid?: boolean
    title?: boolean
    corp?: boolean
    style?: boolean
    startdate?: boolean
    enddate?: boolean
    desc?: boolean
  }, ExtArgs["result"]["experience"]>

  export type experienceSelectScalar = {
    eid?: boolean
    title?: boolean
    corp?: boolean
    style?: boolean
    startdate?: boolean
    enddate?: boolean
    desc?: boolean
  }

  export type experienceOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"eid" | "title" | "corp" | "style" | "startdate" | "enddate" | "desc", ExtArgs["result"]["experience"]>
  export type experienceInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user_experience?: boolean | experience$user_experienceArgs<ExtArgs>
    _count?: boolean | ExperienceCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type experienceIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type experienceIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $experiencePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "experience"
    objects: {
      user_experience: Prisma.$user_experiencePayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      eid: number
      title: string
      corp: string
      style: string
      startdate: Date
      enddate: Date
      desc: string
    }, ExtArgs["result"]["experience"]>
    composites: {}
  }

  type experienceGetPayload<S extends boolean | null | undefined | experienceDefaultArgs> = $Result.GetResult<Prisma.$experiencePayload, S>

  type experienceCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<experienceFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ExperienceCountAggregateInputType | true
    }

  export interface experienceDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['experience'], meta: { name: 'experience' } }
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
    findUnique<T extends experienceFindUniqueArgs>(args: SelectSubset<T, experienceFindUniqueArgs<ExtArgs>>): Prisma__experienceClient<$Result.GetResult<Prisma.$experiencePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

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
    findUniqueOrThrow<T extends experienceFindUniqueOrThrowArgs>(args: SelectSubset<T, experienceFindUniqueOrThrowArgs<ExtArgs>>): Prisma__experienceClient<$Result.GetResult<Prisma.$experiencePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

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
    findFirst<T extends experienceFindFirstArgs>(args?: SelectSubset<T, experienceFindFirstArgs<ExtArgs>>): Prisma__experienceClient<$Result.GetResult<Prisma.$experiencePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

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
    findFirstOrThrow<T extends experienceFindFirstOrThrowArgs>(args?: SelectSubset<T, experienceFindFirstOrThrowArgs<ExtArgs>>): Prisma__experienceClient<$Result.GetResult<Prisma.$experiencePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

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
     * // Only select the `eid`
     * const experienceWithEidOnly = await prisma.experience.findMany({ select: { eid: true } })
     * 
     */
    findMany<T extends experienceFindManyArgs>(args?: SelectSubset<T, experienceFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$experiencePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

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
    create<T extends experienceCreateArgs>(args: SelectSubset<T, experienceCreateArgs<ExtArgs>>): Prisma__experienceClient<$Result.GetResult<Prisma.$experiencePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

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
    createMany<T extends experienceCreateManyArgs>(args?: SelectSubset<T, experienceCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

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
     * // Create many Experiences and only return the `eid`
     * const experienceWithEidOnly = await prisma.experience.createManyAndReturn({
     *   select: { eid: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends experienceCreateManyAndReturnArgs>(args?: SelectSubset<T, experienceCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$experiencePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

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
    delete<T extends experienceDeleteArgs>(args: SelectSubset<T, experienceDeleteArgs<ExtArgs>>): Prisma__experienceClient<$Result.GetResult<Prisma.$experiencePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

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
    update<T extends experienceUpdateArgs>(args: SelectSubset<T, experienceUpdateArgs<ExtArgs>>): Prisma__experienceClient<$Result.GetResult<Prisma.$experiencePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

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
    deleteMany<T extends experienceDeleteManyArgs>(args?: SelectSubset<T, experienceDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

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
    updateMany<T extends experienceUpdateManyArgs>(args: SelectSubset<T, experienceUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

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
     * // Update zero or more Experiences and only return the `eid`
     * const experienceWithEidOnly = await prisma.experience.updateManyAndReturn({
     *   select: { eid: true },
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
    updateManyAndReturn<T extends experienceUpdateManyAndReturnArgs>(args: SelectSubset<T, experienceUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$experiencePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

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
    upsert<T extends experienceUpsertArgs>(args: SelectSubset<T, experienceUpsertArgs<ExtArgs>>): Prisma__experienceClient<$Result.GetResult<Prisma.$experiencePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


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
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ExperienceCountAggregateOutputType>
        : number
    >

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
    aggregate<T extends ExperienceAggregateArgs>(args: Subset<T, ExperienceAggregateArgs>): Prisma.PrismaPromise<GetExperienceAggregateType<T>>

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
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: experienceGroupByArgs['orderBy'] }
        : { orderBy?: experienceGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
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
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, experienceGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetExperienceGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
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
  export interface Prisma__experienceClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user_experience<T extends experience$user_experienceArgs<ExtArgs> = {}>(args?: Subset<T, experience$user_experienceArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$user_experiencePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the experience model
   */ 
  interface experienceFieldRefs {
    readonly eid: FieldRef<"experience", 'Int'>
    readonly title: FieldRef<"experience", 'String'>
    readonly corp: FieldRef<"experience", 'String'>
    readonly style: FieldRef<"experience", 'String'>
    readonly startdate: FieldRef<"experience", 'DateTime'>
    readonly enddate: FieldRef<"experience", 'DateTime'>
    readonly desc: FieldRef<"experience", 'String'>
  }
    

  // Custom InputTypes
  /**
   * experience findUnique
   */
  export type experienceFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the experience
     */
    select?: experienceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the experience
     */
    omit?: experienceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: experienceInclude<ExtArgs> | null
    /**
     * Filter, which experience to fetch.
     */
    where: experienceWhereUniqueInput
  }

  /**
   * experience findUniqueOrThrow
   */
  export type experienceFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the experience
     */
    select?: experienceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the experience
     */
    omit?: experienceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: experienceInclude<ExtArgs> | null
    /**
     * Filter, which experience to fetch.
     */
    where: experienceWhereUniqueInput
  }

  /**
   * experience findFirst
   */
  export type experienceFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the experience
     */
    select?: experienceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the experience
     */
    omit?: experienceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: experienceInclude<ExtArgs> | null
    /**
     * Filter, which experience to fetch.
     */
    where?: experienceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of experiences to fetch.
     */
    orderBy?: experienceOrderByWithRelationInput | experienceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for experiences.
     */
    cursor?: experienceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` experiences from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` experiences.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of experiences.
     */
    distinct?: ExperienceScalarFieldEnum | ExperienceScalarFieldEnum[]
  }

  /**
   * experience findFirstOrThrow
   */
  export type experienceFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the experience
     */
    select?: experienceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the experience
     */
    omit?: experienceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: experienceInclude<ExtArgs> | null
    /**
     * Filter, which experience to fetch.
     */
    where?: experienceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of experiences to fetch.
     */
    orderBy?: experienceOrderByWithRelationInput | experienceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for experiences.
     */
    cursor?: experienceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` experiences from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` experiences.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of experiences.
     */
    distinct?: ExperienceScalarFieldEnum | ExperienceScalarFieldEnum[]
  }

  /**
   * experience findMany
   */
  export type experienceFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the experience
     */
    select?: experienceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the experience
     */
    omit?: experienceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: experienceInclude<ExtArgs> | null
    /**
     * Filter, which experiences to fetch.
     */
    where?: experienceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of experiences to fetch.
     */
    orderBy?: experienceOrderByWithRelationInput | experienceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing experiences.
     */
    cursor?: experienceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` experiences from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` experiences.
     */
    skip?: number
    distinct?: ExperienceScalarFieldEnum | ExperienceScalarFieldEnum[]
  }

  /**
   * experience create
   */
  export type experienceCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the experience
     */
    select?: experienceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the experience
     */
    omit?: experienceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: experienceInclude<ExtArgs> | null
    /**
     * The data needed to create a experience.
     */
    data: XOR<experienceCreateInput, experienceUncheckedCreateInput>
  }

  /**
   * experience createMany
   */
  export type experienceCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many experiences.
     */
    data: experienceCreateManyInput | experienceCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * experience createManyAndReturn
   */
  export type experienceCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the experience
     */
    select?: experienceSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the experience
     */
    omit?: experienceOmit<ExtArgs> | null
    /**
     * The data used to create many experiences.
     */
    data: experienceCreateManyInput | experienceCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * experience update
   */
  export type experienceUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the experience
     */
    select?: experienceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the experience
     */
    omit?: experienceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: experienceInclude<ExtArgs> | null
    /**
     * The data needed to update a experience.
     */
    data: XOR<experienceUpdateInput, experienceUncheckedUpdateInput>
    /**
     * Choose, which experience to update.
     */
    where: experienceWhereUniqueInput
  }

  /**
   * experience updateMany
   */
  export type experienceUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update experiences.
     */
    data: XOR<experienceUpdateManyMutationInput, experienceUncheckedUpdateManyInput>
    /**
     * Filter which experiences to update
     */
    where?: experienceWhereInput
    /**
     * Limit how many experiences to update.
     */
    limit?: number
  }

  /**
   * experience updateManyAndReturn
   */
  export type experienceUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the experience
     */
    select?: experienceSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the experience
     */
    omit?: experienceOmit<ExtArgs> | null
    /**
     * The data used to update experiences.
     */
    data: XOR<experienceUpdateManyMutationInput, experienceUncheckedUpdateManyInput>
    /**
     * Filter which experiences to update
     */
    where?: experienceWhereInput
    /**
     * Limit how many experiences to update.
     */
    limit?: number
  }

  /**
   * experience upsert
   */
  export type experienceUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the experience
     */
    select?: experienceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the experience
     */
    omit?: experienceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: experienceInclude<ExtArgs> | null
    /**
     * The filter to search for the experience to update in case it exists.
     */
    where: experienceWhereUniqueInput
    /**
     * In case the experience found by the `where` argument doesn't exist, create a new experience with this data.
     */
    create: XOR<experienceCreateInput, experienceUncheckedCreateInput>
    /**
     * In case the experience was found with the provided `where` argument, update it with this data.
     */
    update: XOR<experienceUpdateInput, experienceUncheckedUpdateInput>
  }

  /**
   * experience delete
   */
  export type experienceDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the experience
     */
    select?: experienceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the experience
     */
    omit?: experienceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: experienceInclude<ExtArgs> | null
    /**
     * Filter which experience to delete.
     */
    where: experienceWhereUniqueInput
  }

  /**
   * experience deleteMany
   */
  export type experienceDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which experiences to delete
     */
    where?: experienceWhereInput
    /**
     * Limit how many experiences to delete.
     */
    limit?: number
  }

  /**
   * experience.user_experience
   */
  export type experience$user_experienceArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user_experience
     */
    select?: user_experienceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the user_experience
     */
    omit?: user_experienceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: user_experienceInclude<ExtArgs> | null
    where?: user_experienceWhereInput
    orderBy?: user_experienceOrderByWithRelationInput | user_experienceOrderByWithRelationInput[]
    cursor?: user_experienceWhereUniqueInput
    take?: number
    skip?: number
    distinct?: User_experienceScalarFieldEnum | User_experienceScalarFieldEnum[]
  }

  /**
   * experience without action
   */
  export type experienceDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the experience
     */
    select?: experienceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the experience
     */
    omit?: experienceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: experienceInclude<ExtArgs> | null
  }


  /**
   * Model user_experience
   */

  export type AggregateUser_experience = {
    _count: User_experienceCountAggregateOutputType | null
    _avg: User_experienceAvgAggregateOutputType | null
    _sum: User_experienceSumAggregateOutputType | null
    _min: User_experienceMinAggregateOutputType | null
    _max: User_experienceMaxAggregateOutputType | null
  }

  export type User_experienceAvgAggregateOutputType = {
    eid: number | null
    uid: number | null
  }

  export type User_experienceSumAggregateOutputType = {
    eid: number | null
    uid: number | null
  }

  export type User_experienceMinAggregateOutputType = {
    eid: number | null
    uid: number | null
  }

  export type User_experienceMaxAggregateOutputType = {
    eid: number | null
    uid: number | null
  }

  export type User_experienceCountAggregateOutputType = {
    eid: number
    uid: number
    _all: number
  }


  export type User_experienceAvgAggregateInputType = {
    eid?: true
    uid?: true
  }

  export type User_experienceSumAggregateInputType = {
    eid?: true
    uid?: true
  }

  export type User_experienceMinAggregateInputType = {
    eid?: true
    uid?: true
  }

  export type User_experienceMaxAggregateInputType = {
    eid?: true
    uid?: true
  }

  export type User_experienceCountAggregateInputType = {
    eid?: true
    uid?: true
    _all?: true
  }

  export type User_experienceAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which user_experience to aggregate.
     */
    where?: user_experienceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of user_experiences to fetch.
     */
    orderBy?: user_experienceOrderByWithRelationInput | user_experienceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: user_experienceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` user_experiences from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` user_experiences.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned user_experiences
    **/
    _count?: true | User_experienceCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: User_experienceAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: User_experienceSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: User_experienceMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: User_experienceMaxAggregateInputType
  }

  export type GetUser_experienceAggregateType<T extends User_experienceAggregateArgs> = {
        [P in keyof T & keyof AggregateUser_experience]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUser_experience[P]>
      : GetScalarType<T[P], AggregateUser_experience[P]>
  }




  export type user_experienceGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: user_experienceWhereInput
    orderBy?: user_experienceOrderByWithAggregationInput | user_experienceOrderByWithAggregationInput[]
    by: User_experienceScalarFieldEnum[] | User_experienceScalarFieldEnum
    having?: user_experienceScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: User_experienceCountAggregateInputType | true
    _avg?: User_experienceAvgAggregateInputType
    _sum?: User_experienceSumAggregateInputType
    _min?: User_experienceMinAggregateInputType
    _max?: User_experienceMaxAggregateInputType
  }

  export type User_experienceGroupByOutputType = {
    eid: number
    uid: number
    _count: User_experienceCountAggregateOutputType | null
    _avg: User_experienceAvgAggregateOutputType | null
    _sum: User_experienceSumAggregateOutputType | null
    _min: User_experienceMinAggregateOutputType | null
    _max: User_experienceMaxAggregateOutputType | null
  }

  type GetUser_experienceGroupByPayload<T extends user_experienceGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<User_experienceGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof User_experienceGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], User_experienceGroupByOutputType[P]>
            : GetScalarType<T[P], User_experienceGroupByOutputType[P]>
        }
      >
    >


  export type user_experienceSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    eid?: boolean
    uid?: boolean
    experience?: boolean | experienceDefaultArgs<ExtArgs>
    user?: boolean | userDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user_experience"]>

  export type user_experienceSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    eid?: boolean
    uid?: boolean
    experience?: boolean | experienceDefaultArgs<ExtArgs>
    user?: boolean | userDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user_experience"]>

  export type user_experienceSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    eid?: boolean
    uid?: boolean
    experience?: boolean | experienceDefaultArgs<ExtArgs>
    user?: boolean | userDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user_experience"]>

  export type user_experienceSelectScalar = {
    eid?: boolean
    uid?: boolean
  }

  export type user_experienceOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"eid" | "uid", ExtArgs["result"]["user_experience"]>
  export type user_experienceInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    experience?: boolean | experienceDefaultArgs<ExtArgs>
    user?: boolean | userDefaultArgs<ExtArgs>
  }
  export type user_experienceIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    experience?: boolean | experienceDefaultArgs<ExtArgs>
    user?: boolean | userDefaultArgs<ExtArgs>
  }
  export type user_experienceIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    experience?: boolean | experienceDefaultArgs<ExtArgs>
    user?: boolean | userDefaultArgs<ExtArgs>
  }

  export type $user_experiencePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "user_experience"
    objects: {
      experience: Prisma.$experiencePayload<ExtArgs>
      user: Prisma.$userPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      eid: number
      uid: number
    }, ExtArgs["result"]["user_experience"]>
    composites: {}
  }

  type user_experienceGetPayload<S extends boolean | null | undefined | user_experienceDefaultArgs> = $Result.GetResult<Prisma.$user_experiencePayload, S>

  type user_experienceCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<user_experienceFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: User_experienceCountAggregateInputType | true
    }

  export interface user_experienceDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['user_experience'], meta: { name: 'user_experience' } }
    /**
     * Find zero or one User_experience that matches the filter.
     * @param {user_experienceFindUniqueArgs} args - Arguments to find a User_experience
     * @example
     * // Get one User_experience
     * const user_experience = await prisma.user_experience.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends user_experienceFindUniqueArgs>(args: SelectSubset<T, user_experienceFindUniqueArgs<ExtArgs>>): Prisma__user_experienceClient<$Result.GetResult<Prisma.$user_experiencePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one User_experience that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {user_experienceFindUniqueOrThrowArgs} args - Arguments to find a User_experience
     * @example
     * // Get one User_experience
     * const user_experience = await prisma.user_experience.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends user_experienceFindUniqueOrThrowArgs>(args: SelectSubset<T, user_experienceFindUniqueOrThrowArgs<ExtArgs>>): Prisma__user_experienceClient<$Result.GetResult<Prisma.$user_experiencePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User_experience that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {user_experienceFindFirstArgs} args - Arguments to find a User_experience
     * @example
     * // Get one User_experience
     * const user_experience = await prisma.user_experience.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends user_experienceFindFirstArgs>(args?: SelectSubset<T, user_experienceFindFirstArgs<ExtArgs>>): Prisma__user_experienceClient<$Result.GetResult<Prisma.$user_experiencePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User_experience that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {user_experienceFindFirstOrThrowArgs} args - Arguments to find a User_experience
     * @example
     * // Get one User_experience
     * const user_experience = await prisma.user_experience.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends user_experienceFindFirstOrThrowArgs>(args?: SelectSubset<T, user_experienceFindFirstOrThrowArgs<ExtArgs>>): Prisma__user_experienceClient<$Result.GetResult<Prisma.$user_experiencePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more User_experiences that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {user_experienceFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all User_experiences
     * const user_experiences = await prisma.user_experience.findMany()
     * 
     * // Get first 10 User_experiences
     * const user_experiences = await prisma.user_experience.findMany({ take: 10 })
     * 
     * // Only select the `eid`
     * const user_experienceWithEidOnly = await prisma.user_experience.findMany({ select: { eid: true } })
     * 
     */
    findMany<T extends user_experienceFindManyArgs>(args?: SelectSubset<T, user_experienceFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$user_experiencePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a User_experience.
     * @param {user_experienceCreateArgs} args - Arguments to create a User_experience.
     * @example
     * // Create one User_experience
     * const User_experience = await prisma.user_experience.create({
     *   data: {
     *     // ... data to create a User_experience
     *   }
     * })
     * 
     */
    create<T extends user_experienceCreateArgs>(args: SelectSubset<T, user_experienceCreateArgs<ExtArgs>>): Prisma__user_experienceClient<$Result.GetResult<Prisma.$user_experiencePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many User_experiences.
     * @param {user_experienceCreateManyArgs} args - Arguments to create many User_experiences.
     * @example
     * // Create many User_experiences
     * const user_experience = await prisma.user_experience.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends user_experienceCreateManyArgs>(args?: SelectSubset<T, user_experienceCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many User_experiences and returns the data saved in the database.
     * @param {user_experienceCreateManyAndReturnArgs} args - Arguments to create many User_experiences.
     * @example
     * // Create many User_experiences
     * const user_experience = await prisma.user_experience.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many User_experiences and only return the `eid`
     * const user_experienceWithEidOnly = await prisma.user_experience.createManyAndReturn({
     *   select: { eid: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends user_experienceCreateManyAndReturnArgs>(args?: SelectSubset<T, user_experienceCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$user_experiencePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a User_experience.
     * @param {user_experienceDeleteArgs} args - Arguments to delete one User_experience.
     * @example
     * // Delete one User_experience
     * const User_experience = await prisma.user_experience.delete({
     *   where: {
     *     // ... filter to delete one User_experience
     *   }
     * })
     * 
     */
    delete<T extends user_experienceDeleteArgs>(args: SelectSubset<T, user_experienceDeleteArgs<ExtArgs>>): Prisma__user_experienceClient<$Result.GetResult<Prisma.$user_experiencePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one User_experience.
     * @param {user_experienceUpdateArgs} args - Arguments to update one User_experience.
     * @example
     * // Update one User_experience
     * const user_experience = await prisma.user_experience.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends user_experienceUpdateArgs>(args: SelectSubset<T, user_experienceUpdateArgs<ExtArgs>>): Prisma__user_experienceClient<$Result.GetResult<Prisma.$user_experiencePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more User_experiences.
     * @param {user_experienceDeleteManyArgs} args - Arguments to filter User_experiences to delete.
     * @example
     * // Delete a few User_experiences
     * const { count } = await prisma.user_experience.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends user_experienceDeleteManyArgs>(args?: SelectSubset<T, user_experienceDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more User_experiences.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {user_experienceUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many User_experiences
     * const user_experience = await prisma.user_experience.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends user_experienceUpdateManyArgs>(args: SelectSubset<T, user_experienceUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more User_experiences and returns the data updated in the database.
     * @param {user_experienceUpdateManyAndReturnArgs} args - Arguments to update many User_experiences.
     * @example
     * // Update many User_experiences
     * const user_experience = await prisma.user_experience.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more User_experiences and only return the `eid`
     * const user_experienceWithEidOnly = await prisma.user_experience.updateManyAndReturn({
     *   select: { eid: true },
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
    updateManyAndReturn<T extends user_experienceUpdateManyAndReturnArgs>(args: SelectSubset<T, user_experienceUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$user_experiencePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one User_experience.
     * @param {user_experienceUpsertArgs} args - Arguments to update or create a User_experience.
     * @example
     * // Update or create a User_experience
     * const user_experience = await prisma.user_experience.upsert({
     *   create: {
     *     // ... data to create a User_experience
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the User_experience we want to update
     *   }
     * })
     */
    upsert<T extends user_experienceUpsertArgs>(args: SelectSubset<T, user_experienceUpsertArgs<ExtArgs>>): Prisma__user_experienceClient<$Result.GetResult<Prisma.$user_experiencePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of User_experiences.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {user_experienceCountArgs} args - Arguments to filter User_experiences to count.
     * @example
     * // Count the number of User_experiences
     * const count = await prisma.user_experience.count({
     *   where: {
     *     // ... the filter for the User_experiences we want to count
     *   }
     * })
    **/
    count<T extends user_experienceCountArgs>(
      args?: Subset<T, user_experienceCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], User_experienceCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a User_experience.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {User_experienceAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends User_experienceAggregateArgs>(args: Subset<T, User_experienceAggregateArgs>): Prisma.PrismaPromise<GetUser_experienceAggregateType<T>>

    /**
     * Group by User_experience.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {user_experienceGroupByArgs} args - Group by arguments.
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
      T extends user_experienceGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: user_experienceGroupByArgs['orderBy'] }
        : { orderBy?: user_experienceGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
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
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, user_experienceGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUser_experienceGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the user_experience model
   */
  readonly fields: user_experienceFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for user_experience.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__user_experienceClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    experience<T extends experienceDefaultArgs<ExtArgs> = {}>(args?: Subset<T, experienceDefaultArgs<ExtArgs>>): Prisma__experienceClient<$Result.GetResult<Prisma.$experiencePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    user<T extends userDefaultArgs<ExtArgs> = {}>(args?: Subset<T, userDefaultArgs<ExtArgs>>): Prisma__userClient<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the user_experience model
   */ 
  interface user_experienceFieldRefs {
    readonly eid: FieldRef<"user_experience", 'Int'>
    readonly uid: FieldRef<"user_experience", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * user_experience findUnique
   */
  export type user_experienceFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user_experience
     */
    select?: user_experienceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the user_experience
     */
    omit?: user_experienceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: user_experienceInclude<ExtArgs> | null
    /**
     * Filter, which user_experience to fetch.
     */
    where: user_experienceWhereUniqueInput
  }

  /**
   * user_experience findUniqueOrThrow
   */
  export type user_experienceFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user_experience
     */
    select?: user_experienceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the user_experience
     */
    omit?: user_experienceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: user_experienceInclude<ExtArgs> | null
    /**
     * Filter, which user_experience to fetch.
     */
    where: user_experienceWhereUniqueInput
  }

  /**
   * user_experience findFirst
   */
  export type user_experienceFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user_experience
     */
    select?: user_experienceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the user_experience
     */
    omit?: user_experienceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: user_experienceInclude<ExtArgs> | null
    /**
     * Filter, which user_experience to fetch.
     */
    where?: user_experienceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of user_experiences to fetch.
     */
    orderBy?: user_experienceOrderByWithRelationInput | user_experienceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for user_experiences.
     */
    cursor?: user_experienceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` user_experiences from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` user_experiences.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of user_experiences.
     */
    distinct?: User_experienceScalarFieldEnum | User_experienceScalarFieldEnum[]
  }

  /**
   * user_experience findFirstOrThrow
   */
  export type user_experienceFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user_experience
     */
    select?: user_experienceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the user_experience
     */
    omit?: user_experienceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: user_experienceInclude<ExtArgs> | null
    /**
     * Filter, which user_experience to fetch.
     */
    where?: user_experienceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of user_experiences to fetch.
     */
    orderBy?: user_experienceOrderByWithRelationInput | user_experienceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for user_experiences.
     */
    cursor?: user_experienceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` user_experiences from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` user_experiences.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of user_experiences.
     */
    distinct?: User_experienceScalarFieldEnum | User_experienceScalarFieldEnum[]
  }

  /**
   * user_experience findMany
   */
  export type user_experienceFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user_experience
     */
    select?: user_experienceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the user_experience
     */
    omit?: user_experienceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: user_experienceInclude<ExtArgs> | null
    /**
     * Filter, which user_experiences to fetch.
     */
    where?: user_experienceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of user_experiences to fetch.
     */
    orderBy?: user_experienceOrderByWithRelationInput | user_experienceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing user_experiences.
     */
    cursor?: user_experienceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` user_experiences from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` user_experiences.
     */
    skip?: number
    distinct?: User_experienceScalarFieldEnum | User_experienceScalarFieldEnum[]
  }

  /**
   * user_experience create
   */
  export type user_experienceCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user_experience
     */
    select?: user_experienceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the user_experience
     */
    omit?: user_experienceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: user_experienceInclude<ExtArgs> | null
    /**
     * The data needed to create a user_experience.
     */
    data: XOR<user_experienceCreateInput, user_experienceUncheckedCreateInput>
  }

  /**
   * user_experience createMany
   */
  export type user_experienceCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many user_experiences.
     */
    data: user_experienceCreateManyInput | user_experienceCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * user_experience createManyAndReturn
   */
  export type user_experienceCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user_experience
     */
    select?: user_experienceSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the user_experience
     */
    omit?: user_experienceOmit<ExtArgs> | null
    /**
     * The data used to create many user_experiences.
     */
    data: user_experienceCreateManyInput | user_experienceCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: user_experienceIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * user_experience update
   */
  export type user_experienceUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user_experience
     */
    select?: user_experienceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the user_experience
     */
    omit?: user_experienceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: user_experienceInclude<ExtArgs> | null
    /**
     * The data needed to update a user_experience.
     */
    data: XOR<user_experienceUpdateInput, user_experienceUncheckedUpdateInput>
    /**
     * Choose, which user_experience to update.
     */
    where: user_experienceWhereUniqueInput
  }

  /**
   * user_experience updateMany
   */
  export type user_experienceUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update user_experiences.
     */
    data: XOR<user_experienceUpdateManyMutationInput, user_experienceUncheckedUpdateManyInput>
    /**
     * Filter which user_experiences to update
     */
    where?: user_experienceWhereInput
    /**
     * Limit how many user_experiences to update.
     */
    limit?: number
  }

  /**
   * user_experience updateManyAndReturn
   */
  export type user_experienceUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user_experience
     */
    select?: user_experienceSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the user_experience
     */
    omit?: user_experienceOmit<ExtArgs> | null
    /**
     * The data used to update user_experiences.
     */
    data: XOR<user_experienceUpdateManyMutationInput, user_experienceUncheckedUpdateManyInput>
    /**
     * Filter which user_experiences to update
     */
    where?: user_experienceWhereInput
    /**
     * Limit how many user_experiences to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: user_experienceIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * user_experience upsert
   */
  export type user_experienceUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user_experience
     */
    select?: user_experienceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the user_experience
     */
    omit?: user_experienceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: user_experienceInclude<ExtArgs> | null
    /**
     * The filter to search for the user_experience to update in case it exists.
     */
    where: user_experienceWhereUniqueInput
    /**
     * In case the user_experience found by the `where` argument doesn't exist, create a new user_experience with this data.
     */
    create: XOR<user_experienceCreateInput, user_experienceUncheckedCreateInput>
    /**
     * In case the user_experience was found with the provided `where` argument, update it with this data.
     */
    update: XOR<user_experienceUpdateInput, user_experienceUncheckedUpdateInput>
  }

  /**
   * user_experience delete
   */
  export type user_experienceDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user_experience
     */
    select?: user_experienceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the user_experience
     */
    omit?: user_experienceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: user_experienceInclude<ExtArgs> | null
    /**
     * Filter which user_experience to delete.
     */
    where: user_experienceWhereUniqueInput
  }

  /**
   * user_experience deleteMany
   */
  export type user_experienceDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which user_experiences to delete
     */
    where?: user_experienceWhereInput
    /**
     * Limit how many user_experiences to delete.
     */
    limit?: number
  }

  /**
   * user_experience without action
   */
  export type user_experienceDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user_experience
     */
    select?: user_experienceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the user_experience
     */
    omit?: user_experienceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: user_experienceInclude<ExtArgs> | null
  }


  /**
   * Model education
   */

  export type AggregateEducation = {
    _count: EducationCountAggregateOutputType | null
    _avg: EducationAvgAggregateOutputType | null
    _sum: EducationSumAggregateOutputType | null
    _min: EducationMinAggregateOutputType | null
    _max: EducationMaxAggregateOutputType | null
  }

  export type EducationAvgAggregateOutputType = {
    edid: number | null
  }

  export type EducationSumAggregateOutputType = {
    edid: number | null
  }

  export type EducationMinAggregateOutputType = {
    edid: number | null
    inst: string | null
    degree: string | null
    startdate: Date | null
    enddate: Date | null
    style: string | null
  }

  export type EducationMaxAggregateOutputType = {
    edid: number | null
    inst: string | null
    degree: string | null
    startdate: Date | null
    enddate: Date | null
    style: string | null
  }

  export type EducationCountAggregateOutputType = {
    edid: number
    inst: number
    degree: number
    startdate: number
    enddate: number
    style: number
    _all: number
  }


  export type EducationAvgAggregateInputType = {
    edid?: true
  }

  export type EducationSumAggregateInputType = {
    edid?: true
  }

  export type EducationMinAggregateInputType = {
    edid?: true
    inst?: true
    degree?: true
    startdate?: true
    enddate?: true
    style?: true
  }

  export type EducationMaxAggregateInputType = {
    edid?: true
    inst?: true
    degree?: true
    startdate?: true
    enddate?: true
    style?: true
  }

  export type EducationCountAggregateInputType = {
    edid?: true
    inst?: true
    degree?: true
    startdate?: true
    enddate?: true
    style?: true
    _all?: true
  }

  export type EducationAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which education to aggregate.
     */
    where?: educationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of educations to fetch.
     */
    orderBy?: educationOrderByWithRelationInput | educationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: educationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` educations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` educations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned educations
    **/
    _count?: true | EducationCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: EducationAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: EducationSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: EducationMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: EducationMaxAggregateInputType
  }

  export type GetEducationAggregateType<T extends EducationAggregateArgs> = {
        [P in keyof T & keyof AggregateEducation]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateEducation[P]>
      : GetScalarType<T[P], AggregateEducation[P]>
  }




  export type educationGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: educationWhereInput
    orderBy?: educationOrderByWithAggregationInput | educationOrderByWithAggregationInput[]
    by: EducationScalarFieldEnum[] | EducationScalarFieldEnum
    having?: educationScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: EducationCountAggregateInputType | true
    _avg?: EducationAvgAggregateInputType
    _sum?: EducationSumAggregateInputType
    _min?: EducationMinAggregateInputType
    _max?: EducationMaxAggregateInputType
  }

  export type EducationGroupByOutputType = {
    edid: number
    inst: string
    degree: string
    startdate: Date
    enddate: Date
    style: string
    _count: EducationCountAggregateOutputType | null
    _avg: EducationAvgAggregateOutputType | null
    _sum: EducationSumAggregateOutputType | null
    _min: EducationMinAggregateOutputType | null
    _max: EducationMaxAggregateOutputType | null
  }

  type GetEducationGroupByPayload<T extends educationGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<EducationGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof EducationGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], EducationGroupByOutputType[P]>
            : GetScalarType<T[P], EducationGroupByOutputType[P]>
        }
      >
    >


  export type educationSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    edid?: boolean
    inst?: boolean
    degree?: boolean
    startdate?: boolean
    enddate?: boolean
    style?: boolean
    user_education?: boolean | education$user_educationArgs<ExtArgs>
    _count?: boolean | EducationCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["education"]>

  export type educationSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    edid?: boolean
    inst?: boolean
    degree?: boolean
    startdate?: boolean
    enddate?: boolean
    style?: boolean
  }, ExtArgs["result"]["education"]>

  export type educationSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    edid?: boolean
    inst?: boolean
    degree?: boolean
    startdate?: boolean
    enddate?: boolean
    style?: boolean
  }, ExtArgs["result"]["education"]>

  export type educationSelectScalar = {
    edid?: boolean
    inst?: boolean
    degree?: boolean
    startdate?: boolean
    enddate?: boolean
    style?: boolean
  }

  export type educationOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"edid" | "inst" | "degree" | "startdate" | "enddate" | "style", ExtArgs["result"]["education"]>
  export type educationInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user_education?: boolean | education$user_educationArgs<ExtArgs>
    _count?: boolean | EducationCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type educationIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type educationIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $educationPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "education"
    objects: {
      user_education: Prisma.$user_educationPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      edid: number
      inst: string
      degree: string
      startdate: Date
      enddate: Date
      style: string
    }, ExtArgs["result"]["education"]>
    composites: {}
  }

  type educationGetPayload<S extends boolean | null | undefined | educationDefaultArgs> = $Result.GetResult<Prisma.$educationPayload, S>

  type educationCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<educationFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: EducationCountAggregateInputType | true
    }

  export interface educationDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['education'], meta: { name: 'education' } }
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
    findUnique<T extends educationFindUniqueArgs>(args: SelectSubset<T, educationFindUniqueArgs<ExtArgs>>): Prisma__educationClient<$Result.GetResult<Prisma.$educationPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

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
    findUniqueOrThrow<T extends educationFindUniqueOrThrowArgs>(args: SelectSubset<T, educationFindUniqueOrThrowArgs<ExtArgs>>): Prisma__educationClient<$Result.GetResult<Prisma.$educationPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

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
    findFirst<T extends educationFindFirstArgs>(args?: SelectSubset<T, educationFindFirstArgs<ExtArgs>>): Prisma__educationClient<$Result.GetResult<Prisma.$educationPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

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
    findFirstOrThrow<T extends educationFindFirstOrThrowArgs>(args?: SelectSubset<T, educationFindFirstOrThrowArgs<ExtArgs>>): Prisma__educationClient<$Result.GetResult<Prisma.$educationPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

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
    findMany<T extends educationFindManyArgs>(args?: SelectSubset<T, educationFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$educationPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

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
    create<T extends educationCreateArgs>(args: SelectSubset<T, educationCreateArgs<ExtArgs>>): Prisma__educationClient<$Result.GetResult<Prisma.$educationPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

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
    createMany<T extends educationCreateManyArgs>(args?: SelectSubset<T, educationCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

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
    createManyAndReturn<T extends educationCreateManyAndReturnArgs>(args?: SelectSubset<T, educationCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$educationPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

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
    delete<T extends educationDeleteArgs>(args: SelectSubset<T, educationDeleteArgs<ExtArgs>>): Prisma__educationClient<$Result.GetResult<Prisma.$educationPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

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
    update<T extends educationUpdateArgs>(args: SelectSubset<T, educationUpdateArgs<ExtArgs>>): Prisma__educationClient<$Result.GetResult<Prisma.$educationPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

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
    deleteMany<T extends educationDeleteManyArgs>(args?: SelectSubset<T, educationDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

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
    updateMany<T extends educationUpdateManyArgs>(args: SelectSubset<T, educationUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

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
    updateManyAndReturn<T extends educationUpdateManyAndReturnArgs>(args: SelectSubset<T, educationUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$educationPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

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
    upsert<T extends educationUpsertArgs>(args: SelectSubset<T, educationUpsertArgs<ExtArgs>>): Prisma__educationClient<$Result.GetResult<Prisma.$educationPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


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
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], EducationCountAggregateOutputType>
        : number
    >

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
    aggregate<T extends EducationAggregateArgs>(args: Subset<T, EducationAggregateArgs>): Prisma.PrismaPromise<GetEducationAggregateType<T>>

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
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: educationGroupByArgs['orderBy'] }
        : { orderBy?: educationGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
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
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, educationGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetEducationGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
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
  export interface Prisma__educationClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user_education<T extends education$user_educationArgs<ExtArgs> = {}>(args?: Subset<T, education$user_educationArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$user_educationPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the education model
   */ 
  interface educationFieldRefs {
    readonly edid: FieldRef<"education", 'Int'>
    readonly inst: FieldRef<"education", 'String'>
    readonly degree: FieldRef<"education", 'String'>
    readonly startdate: FieldRef<"education", 'DateTime'>
    readonly enddate: FieldRef<"education", 'DateTime'>
    readonly style: FieldRef<"education", 'String'>
  }
    

  // Custom InputTypes
  /**
   * education findUnique
   */
  export type educationFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the education
     */
    select?: educationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the education
     */
    omit?: educationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: educationInclude<ExtArgs> | null
    /**
     * Filter, which education to fetch.
     */
    where: educationWhereUniqueInput
  }

  /**
   * education findUniqueOrThrow
   */
  export type educationFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the education
     */
    select?: educationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the education
     */
    omit?: educationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: educationInclude<ExtArgs> | null
    /**
     * Filter, which education to fetch.
     */
    where: educationWhereUniqueInput
  }

  /**
   * education findFirst
   */
  export type educationFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the education
     */
    select?: educationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the education
     */
    omit?: educationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: educationInclude<ExtArgs> | null
    /**
     * Filter, which education to fetch.
     */
    where?: educationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of educations to fetch.
     */
    orderBy?: educationOrderByWithRelationInput | educationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for educations.
     */
    cursor?: educationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` educations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` educations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of educations.
     */
    distinct?: EducationScalarFieldEnum | EducationScalarFieldEnum[]
  }

  /**
   * education findFirstOrThrow
   */
  export type educationFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the education
     */
    select?: educationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the education
     */
    omit?: educationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: educationInclude<ExtArgs> | null
    /**
     * Filter, which education to fetch.
     */
    where?: educationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of educations to fetch.
     */
    orderBy?: educationOrderByWithRelationInput | educationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for educations.
     */
    cursor?: educationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` educations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` educations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of educations.
     */
    distinct?: EducationScalarFieldEnum | EducationScalarFieldEnum[]
  }

  /**
   * education findMany
   */
  export type educationFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the education
     */
    select?: educationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the education
     */
    omit?: educationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: educationInclude<ExtArgs> | null
    /**
     * Filter, which educations to fetch.
     */
    where?: educationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of educations to fetch.
     */
    orderBy?: educationOrderByWithRelationInput | educationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing educations.
     */
    cursor?: educationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` educations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` educations.
     */
    skip?: number
    distinct?: EducationScalarFieldEnum | EducationScalarFieldEnum[]
  }

  /**
   * education create
   */
  export type educationCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the education
     */
    select?: educationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the education
     */
    omit?: educationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: educationInclude<ExtArgs> | null
    /**
     * The data needed to create a education.
     */
    data: XOR<educationCreateInput, educationUncheckedCreateInput>
  }

  /**
   * education createMany
   */
  export type educationCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many educations.
     */
    data: educationCreateManyInput | educationCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * education createManyAndReturn
   */
  export type educationCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the education
     */
    select?: educationSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the education
     */
    omit?: educationOmit<ExtArgs> | null
    /**
     * The data used to create many educations.
     */
    data: educationCreateManyInput | educationCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * education update
   */
  export type educationUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the education
     */
    select?: educationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the education
     */
    omit?: educationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: educationInclude<ExtArgs> | null
    /**
     * The data needed to update a education.
     */
    data: XOR<educationUpdateInput, educationUncheckedUpdateInput>
    /**
     * Choose, which education to update.
     */
    where: educationWhereUniqueInput
  }

  /**
   * education updateMany
   */
  export type educationUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update educations.
     */
    data: XOR<educationUpdateManyMutationInput, educationUncheckedUpdateManyInput>
    /**
     * Filter which educations to update
     */
    where?: educationWhereInput
    /**
     * Limit how many educations to update.
     */
    limit?: number
  }

  /**
   * education updateManyAndReturn
   */
  export type educationUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the education
     */
    select?: educationSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the education
     */
    omit?: educationOmit<ExtArgs> | null
    /**
     * The data used to update educations.
     */
    data: XOR<educationUpdateManyMutationInput, educationUncheckedUpdateManyInput>
    /**
     * Filter which educations to update
     */
    where?: educationWhereInput
    /**
     * Limit how many educations to update.
     */
    limit?: number
  }

  /**
   * education upsert
   */
  export type educationUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the education
     */
    select?: educationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the education
     */
    omit?: educationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: educationInclude<ExtArgs> | null
    /**
     * The filter to search for the education to update in case it exists.
     */
    where: educationWhereUniqueInput
    /**
     * In case the education found by the `where` argument doesn't exist, create a new education with this data.
     */
    create: XOR<educationCreateInput, educationUncheckedCreateInput>
    /**
     * In case the education was found with the provided `where` argument, update it with this data.
     */
    update: XOR<educationUpdateInput, educationUncheckedUpdateInput>
  }

  /**
   * education delete
   */
  export type educationDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the education
     */
    select?: educationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the education
     */
    omit?: educationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: educationInclude<ExtArgs> | null
    /**
     * Filter which education to delete.
     */
    where: educationWhereUniqueInput
  }

  /**
   * education deleteMany
   */
  export type educationDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which educations to delete
     */
    where?: educationWhereInput
    /**
     * Limit how many educations to delete.
     */
    limit?: number
  }

  /**
   * education.user_education
   */
  export type education$user_educationArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user_education
     */
    select?: user_educationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the user_education
     */
    omit?: user_educationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: user_educationInclude<ExtArgs> | null
    where?: user_educationWhereInput
    orderBy?: user_educationOrderByWithRelationInput | user_educationOrderByWithRelationInput[]
    cursor?: user_educationWhereUniqueInput
    take?: number
    skip?: number
    distinct?: User_educationScalarFieldEnum | User_educationScalarFieldEnum[]
  }

  /**
   * education without action
   */
  export type educationDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the education
     */
    select?: educationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the education
     */
    omit?: educationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: educationInclude<ExtArgs> | null
  }


  /**
   * Model user_education
   */

  export type AggregateUser_education = {
    _count: User_educationCountAggregateOutputType | null
    _avg: User_educationAvgAggregateOutputType | null
    _sum: User_educationSumAggregateOutputType | null
    _min: User_educationMinAggregateOutputType | null
    _max: User_educationMaxAggregateOutputType | null
  }

  export type User_educationAvgAggregateOutputType = {
    edid: number | null
    uid: number | null
  }

  export type User_educationSumAggregateOutputType = {
    edid: number | null
    uid: number | null
  }

  export type User_educationMinAggregateOutputType = {
    edid: number | null
    uid: number | null
  }

  export type User_educationMaxAggregateOutputType = {
    edid: number | null
    uid: number | null
  }

  export type User_educationCountAggregateOutputType = {
    edid: number
    uid: number
    _all: number
  }


  export type User_educationAvgAggregateInputType = {
    edid?: true
    uid?: true
  }

  export type User_educationSumAggregateInputType = {
    edid?: true
    uid?: true
  }

  export type User_educationMinAggregateInputType = {
    edid?: true
    uid?: true
  }

  export type User_educationMaxAggregateInputType = {
    edid?: true
    uid?: true
  }

  export type User_educationCountAggregateInputType = {
    edid?: true
    uid?: true
    _all?: true
  }

  export type User_educationAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which user_education to aggregate.
     */
    where?: user_educationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of user_educations to fetch.
     */
    orderBy?: user_educationOrderByWithRelationInput | user_educationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: user_educationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` user_educations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` user_educations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned user_educations
    **/
    _count?: true | User_educationCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: User_educationAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: User_educationSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: User_educationMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: User_educationMaxAggregateInputType
  }

  export type GetUser_educationAggregateType<T extends User_educationAggregateArgs> = {
        [P in keyof T & keyof AggregateUser_education]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUser_education[P]>
      : GetScalarType<T[P], AggregateUser_education[P]>
  }




  export type user_educationGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: user_educationWhereInput
    orderBy?: user_educationOrderByWithAggregationInput | user_educationOrderByWithAggregationInput[]
    by: User_educationScalarFieldEnum[] | User_educationScalarFieldEnum
    having?: user_educationScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: User_educationCountAggregateInputType | true
    _avg?: User_educationAvgAggregateInputType
    _sum?: User_educationSumAggregateInputType
    _min?: User_educationMinAggregateInputType
    _max?: User_educationMaxAggregateInputType
  }

  export type User_educationGroupByOutputType = {
    edid: number
    uid: number
    _count: User_educationCountAggregateOutputType | null
    _avg: User_educationAvgAggregateOutputType | null
    _sum: User_educationSumAggregateOutputType | null
    _min: User_educationMinAggregateOutputType | null
    _max: User_educationMaxAggregateOutputType | null
  }

  type GetUser_educationGroupByPayload<T extends user_educationGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<User_educationGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof User_educationGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], User_educationGroupByOutputType[P]>
            : GetScalarType<T[P], User_educationGroupByOutputType[P]>
        }
      >
    >


  export type user_educationSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    edid?: boolean
    uid?: boolean
    education?: boolean | educationDefaultArgs<ExtArgs>
    user?: boolean | userDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user_education"]>

  export type user_educationSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    edid?: boolean
    uid?: boolean
    education?: boolean | educationDefaultArgs<ExtArgs>
    user?: boolean | userDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user_education"]>

  export type user_educationSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    edid?: boolean
    uid?: boolean
    education?: boolean | educationDefaultArgs<ExtArgs>
    user?: boolean | userDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user_education"]>

  export type user_educationSelectScalar = {
    edid?: boolean
    uid?: boolean
  }

  export type user_educationOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"edid" | "uid", ExtArgs["result"]["user_education"]>
  export type user_educationInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    education?: boolean | educationDefaultArgs<ExtArgs>
    user?: boolean | userDefaultArgs<ExtArgs>
  }
  export type user_educationIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    education?: boolean | educationDefaultArgs<ExtArgs>
    user?: boolean | userDefaultArgs<ExtArgs>
  }
  export type user_educationIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    education?: boolean | educationDefaultArgs<ExtArgs>
    user?: boolean | userDefaultArgs<ExtArgs>
  }

  export type $user_educationPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "user_education"
    objects: {
      education: Prisma.$educationPayload<ExtArgs>
      user: Prisma.$userPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      edid: number
      uid: number
    }, ExtArgs["result"]["user_education"]>
    composites: {}
  }

  type user_educationGetPayload<S extends boolean | null | undefined | user_educationDefaultArgs> = $Result.GetResult<Prisma.$user_educationPayload, S>

  type user_educationCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<user_educationFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: User_educationCountAggregateInputType | true
    }

  export interface user_educationDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['user_education'], meta: { name: 'user_education' } }
    /**
     * Find zero or one User_education that matches the filter.
     * @param {user_educationFindUniqueArgs} args - Arguments to find a User_education
     * @example
     * // Get one User_education
     * const user_education = await prisma.user_education.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends user_educationFindUniqueArgs>(args: SelectSubset<T, user_educationFindUniqueArgs<ExtArgs>>): Prisma__user_educationClient<$Result.GetResult<Prisma.$user_educationPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one User_education that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {user_educationFindUniqueOrThrowArgs} args - Arguments to find a User_education
     * @example
     * // Get one User_education
     * const user_education = await prisma.user_education.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends user_educationFindUniqueOrThrowArgs>(args: SelectSubset<T, user_educationFindUniqueOrThrowArgs<ExtArgs>>): Prisma__user_educationClient<$Result.GetResult<Prisma.$user_educationPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User_education that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {user_educationFindFirstArgs} args - Arguments to find a User_education
     * @example
     * // Get one User_education
     * const user_education = await prisma.user_education.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends user_educationFindFirstArgs>(args?: SelectSubset<T, user_educationFindFirstArgs<ExtArgs>>): Prisma__user_educationClient<$Result.GetResult<Prisma.$user_educationPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User_education that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {user_educationFindFirstOrThrowArgs} args - Arguments to find a User_education
     * @example
     * // Get one User_education
     * const user_education = await prisma.user_education.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends user_educationFindFirstOrThrowArgs>(args?: SelectSubset<T, user_educationFindFirstOrThrowArgs<ExtArgs>>): Prisma__user_educationClient<$Result.GetResult<Prisma.$user_educationPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more User_educations that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {user_educationFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all User_educations
     * const user_educations = await prisma.user_education.findMany()
     * 
     * // Get first 10 User_educations
     * const user_educations = await prisma.user_education.findMany({ take: 10 })
     * 
     * // Only select the `edid`
     * const user_educationWithEdidOnly = await prisma.user_education.findMany({ select: { edid: true } })
     * 
     */
    findMany<T extends user_educationFindManyArgs>(args?: SelectSubset<T, user_educationFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$user_educationPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a User_education.
     * @param {user_educationCreateArgs} args - Arguments to create a User_education.
     * @example
     * // Create one User_education
     * const User_education = await prisma.user_education.create({
     *   data: {
     *     // ... data to create a User_education
     *   }
     * })
     * 
     */
    create<T extends user_educationCreateArgs>(args: SelectSubset<T, user_educationCreateArgs<ExtArgs>>): Prisma__user_educationClient<$Result.GetResult<Prisma.$user_educationPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many User_educations.
     * @param {user_educationCreateManyArgs} args - Arguments to create many User_educations.
     * @example
     * // Create many User_educations
     * const user_education = await prisma.user_education.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends user_educationCreateManyArgs>(args?: SelectSubset<T, user_educationCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many User_educations and returns the data saved in the database.
     * @param {user_educationCreateManyAndReturnArgs} args - Arguments to create many User_educations.
     * @example
     * // Create many User_educations
     * const user_education = await prisma.user_education.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many User_educations and only return the `edid`
     * const user_educationWithEdidOnly = await prisma.user_education.createManyAndReturn({
     *   select: { edid: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends user_educationCreateManyAndReturnArgs>(args?: SelectSubset<T, user_educationCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$user_educationPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a User_education.
     * @param {user_educationDeleteArgs} args - Arguments to delete one User_education.
     * @example
     * // Delete one User_education
     * const User_education = await prisma.user_education.delete({
     *   where: {
     *     // ... filter to delete one User_education
     *   }
     * })
     * 
     */
    delete<T extends user_educationDeleteArgs>(args: SelectSubset<T, user_educationDeleteArgs<ExtArgs>>): Prisma__user_educationClient<$Result.GetResult<Prisma.$user_educationPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one User_education.
     * @param {user_educationUpdateArgs} args - Arguments to update one User_education.
     * @example
     * // Update one User_education
     * const user_education = await prisma.user_education.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends user_educationUpdateArgs>(args: SelectSubset<T, user_educationUpdateArgs<ExtArgs>>): Prisma__user_educationClient<$Result.GetResult<Prisma.$user_educationPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more User_educations.
     * @param {user_educationDeleteManyArgs} args - Arguments to filter User_educations to delete.
     * @example
     * // Delete a few User_educations
     * const { count } = await prisma.user_education.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends user_educationDeleteManyArgs>(args?: SelectSubset<T, user_educationDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more User_educations.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {user_educationUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many User_educations
     * const user_education = await prisma.user_education.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends user_educationUpdateManyArgs>(args: SelectSubset<T, user_educationUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more User_educations and returns the data updated in the database.
     * @param {user_educationUpdateManyAndReturnArgs} args - Arguments to update many User_educations.
     * @example
     * // Update many User_educations
     * const user_education = await prisma.user_education.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more User_educations and only return the `edid`
     * const user_educationWithEdidOnly = await prisma.user_education.updateManyAndReturn({
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
    updateManyAndReturn<T extends user_educationUpdateManyAndReturnArgs>(args: SelectSubset<T, user_educationUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$user_educationPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one User_education.
     * @param {user_educationUpsertArgs} args - Arguments to update or create a User_education.
     * @example
     * // Update or create a User_education
     * const user_education = await prisma.user_education.upsert({
     *   create: {
     *     // ... data to create a User_education
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the User_education we want to update
     *   }
     * })
     */
    upsert<T extends user_educationUpsertArgs>(args: SelectSubset<T, user_educationUpsertArgs<ExtArgs>>): Prisma__user_educationClient<$Result.GetResult<Prisma.$user_educationPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of User_educations.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {user_educationCountArgs} args - Arguments to filter User_educations to count.
     * @example
     * // Count the number of User_educations
     * const count = await prisma.user_education.count({
     *   where: {
     *     // ... the filter for the User_educations we want to count
     *   }
     * })
    **/
    count<T extends user_educationCountArgs>(
      args?: Subset<T, user_educationCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], User_educationCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a User_education.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {User_educationAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends User_educationAggregateArgs>(args: Subset<T, User_educationAggregateArgs>): Prisma.PrismaPromise<GetUser_educationAggregateType<T>>

    /**
     * Group by User_education.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {user_educationGroupByArgs} args - Group by arguments.
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
      T extends user_educationGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: user_educationGroupByArgs['orderBy'] }
        : { orderBy?: user_educationGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
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
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, user_educationGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUser_educationGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the user_education model
   */
  readonly fields: user_educationFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for user_education.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__user_educationClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    education<T extends educationDefaultArgs<ExtArgs> = {}>(args?: Subset<T, educationDefaultArgs<ExtArgs>>): Prisma__educationClient<$Result.GetResult<Prisma.$educationPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    user<T extends userDefaultArgs<ExtArgs> = {}>(args?: Subset<T, userDefaultArgs<ExtArgs>>): Prisma__userClient<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the user_education model
   */ 
  interface user_educationFieldRefs {
    readonly edid: FieldRef<"user_education", 'Int'>
    readonly uid: FieldRef<"user_education", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * user_education findUnique
   */
  export type user_educationFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user_education
     */
    select?: user_educationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the user_education
     */
    omit?: user_educationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: user_educationInclude<ExtArgs> | null
    /**
     * Filter, which user_education to fetch.
     */
    where: user_educationWhereUniqueInput
  }

  /**
   * user_education findUniqueOrThrow
   */
  export type user_educationFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user_education
     */
    select?: user_educationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the user_education
     */
    omit?: user_educationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: user_educationInclude<ExtArgs> | null
    /**
     * Filter, which user_education to fetch.
     */
    where: user_educationWhereUniqueInput
  }

  /**
   * user_education findFirst
   */
  export type user_educationFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user_education
     */
    select?: user_educationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the user_education
     */
    omit?: user_educationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: user_educationInclude<ExtArgs> | null
    /**
     * Filter, which user_education to fetch.
     */
    where?: user_educationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of user_educations to fetch.
     */
    orderBy?: user_educationOrderByWithRelationInput | user_educationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for user_educations.
     */
    cursor?: user_educationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` user_educations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` user_educations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of user_educations.
     */
    distinct?: User_educationScalarFieldEnum | User_educationScalarFieldEnum[]
  }

  /**
   * user_education findFirstOrThrow
   */
  export type user_educationFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user_education
     */
    select?: user_educationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the user_education
     */
    omit?: user_educationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: user_educationInclude<ExtArgs> | null
    /**
     * Filter, which user_education to fetch.
     */
    where?: user_educationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of user_educations to fetch.
     */
    orderBy?: user_educationOrderByWithRelationInput | user_educationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for user_educations.
     */
    cursor?: user_educationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` user_educations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` user_educations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of user_educations.
     */
    distinct?: User_educationScalarFieldEnum | User_educationScalarFieldEnum[]
  }

  /**
   * user_education findMany
   */
  export type user_educationFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user_education
     */
    select?: user_educationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the user_education
     */
    omit?: user_educationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: user_educationInclude<ExtArgs> | null
    /**
     * Filter, which user_educations to fetch.
     */
    where?: user_educationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of user_educations to fetch.
     */
    orderBy?: user_educationOrderByWithRelationInput | user_educationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing user_educations.
     */
    cursor?: user_educationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` user_educations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` user_educations.
     */
    skip?: number
    distinct?: User_educationScalarFieldEnum | User_educationScalarFieldEnum[]
  }

  /**
   * user_education create
   */
  export type user_educationCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user_education
     */
    select?: user_educationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the user_education
     */
    omit?: user_educationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: user_educationInclude<ExtArgs> | null
    /**
     * The data needed to create a user_education.
     */
    data: XOR<user_educationCreateInput, user_educationUncheckedCreateInput>
  }

  /**
   * user_education createMany
   */
  export type user_educationCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many user_educations.
     */
    data: user_educationCreateManyInput | user_educationCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * user_education createManyAndReturn
   */
  export type user_educationCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user_education
     */
    select?: user_educationSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the user_education
     */
    omit?: user_educationOmit<ExtArgs> | null
    /**
     * The data used to create many user_educations.
     */
    data: user_educationCreateManyInput | user_educationCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: user_educationIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * user_education update
   */
  export type user_educationUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user_education
     */
    select?: user_educationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the user_education
     */
    omit?: user_educationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: user_educationInclude<ExtArgs> | null
    /**
     * The data needed to update a user_education.
     */
    data: XOR<user_educationUpdateInput, user_educationUncheckedUpdateInput>
    /**
     * Choose, which user_education to update.
     */
    where: user_educationWhereUniqueInput
  }

  /**
   * user_education updateMany
   */
  export type user_educationUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update user_educations.
     */
    data: XOR<user_educationUpdateManyMutationInput, user_educationUncheckedUpdateManyInput>
    /**
     * Filter which user_educations to update
     */
    where?: user_educationWhereInput
    /**
     * Limit how many user_educations to update.
     */
    limit?: number
  }

  /**
   * user_education updateManyAndReturn
   */
  export type user_educationUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user_education
     */
    select?: user_educationSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the user_education
     */
    omit?: user_educationOmit<ExtArgs> | null
    /**
     * The data used to update user_educations.
     */
    data: XOR<user_educationUpdateManyMutationInput, user_educationUncheckedUpdateManyInput>
    /**
     * Filter which user_educations to update
     */
    where?: user_educationWhereInput
    /**
     * Limit how many user_educations to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: user_educationIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * user_education upsert
   */
  export type user_educationUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user_education
     */
    select?: user_educationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the user_education
     */
    omit?: user_educationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: user_educationInclude<ExtArgs> | null
    /**
     * The filter to search for the user_education to update in case it exists.
     */
    where: user_educationWhereUniqueInput
    /**
     * In case the user_education found by the `where` argument doesn't exist, create a new user_education with this data.
     */
    create: XOR<user_educationCreateInput, user_educationUncheckedCreateInput>
    /**
     * In case the user_education was found with the provided `where` argument, update it with this data.
     */
    update: XOR<user_educationUpdateInput, user_educationUncheckedUpdateInput>
  }

  /**
   * user_education delete
   */
  export type user_educationDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user_education
     */
    select?: user_educationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the user_education
     */
    omit?: user_educationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: user_educationInclude<ExtArgs> | null
    /**
     * Filter which user_education to delete.
     */
    where: user_educationWhereUniqueInput
  }

  /**
   * user_education deleteMany
   */
  export type user_educationDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which user_educations to delete
     */
    where?: user_educationWhereInput
    /**
     * Limit how many user_educations to delete.
     */
    limit?: number
  }

  /**
   * user_education without action
   */
  export type user_educationDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user_education
     */
    select?: user_educationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the user_education
     */
    omit?: user_educationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: user_educationInclude<ExtArgs> | null
  }


  /**
   * Model skills
   */

  export type AggregateSkills = {
    _count: SkillsCountAggregateOutputType | null
    _avg: SkillsAvgAggregateOutputType | null
    _sum: SkillsSumAggregateOutputType | null
    _min: SkillsMinAggregateOutputType | null
    _max: SkillsMaxAggregateOutputType | null
  }

  export type SkillsAvgAggregateOutputType = {
    uid: number | null
  }

  export type SkillsSumAggregateOutputType = {
    uid: number | null
  }

  export type SkillsMinAggregateOutputType = {
    uid: number | null
    style: string | null
  }

  export type SkillsMaxAggregateOutputType = {
    uid: number | null
    style: string | null
  }

  export type SkillsCountAggregateOutputType = {
    uid: number
    frontend: number
    style: number
    backend: number
    database: number
    mobile: number
    other: number
    languages: number
    _all: number
  }


  export type SkillsAvgAggregateInputType = {
    uid?: true
  }

  export type SkillsSumAggregateInputType = {
    uid?: true
  }

  export type SkillsMinAggregateInputType = {
    uid?: true
    style?: true
  }

  export type SkillsMaxAggregateInputType = {
    uid?: true
    style?: true
  }

  export type SkillsCountAggregateInputType = {
    uid?: true
    frontend?: true
    style?: true
    backend?: true
    database?: true
    mobile?: true
    other?: true
    languages?: true
    _all?: true
  }

  export type SkillsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which skills to aggregate.
     */
    where?: skillsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of skills to fetch.
     */
    orderBy?: skillsOrderByWithRelationInput | skillsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: skillsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` skills from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` skills.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned skills
    **/
    _count?: true | SkillsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: SkillsAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: SkillsSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: SkillsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: SkillsMaxAggregateInputType
  }

  export type GetSkillsAggregateType<T extends SkillsAggregateArgs> = {
        [P in keyof T & keyof AggregateSkills]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSkills[P]>
      : GetScalarType<T[P], AggregateSkills[P]>
  }




  export type skillsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: skillsWhereInput
    orderBy?: skillsOrderByWithAggregationInput | skillsOrderByWithAggregationInput[]
    by: SkillsScalarFieldEnum[] | SkillsScalarFieldEnum
    having?: skillsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: SkillsCountAggregateInputType | true
    _avg?: SkillsAvgAggregateInputType
    _sum?: SkillsSumAggregateInputType
    _min?: SkillsMinAggregateInputType
    _max?: SkillsMaxAggregateInputType
  }

  export type SkillsGroupByOutputType = {
    uid: number
    frontend: string[]
    style: string
    backend: string[]
    database: string[]
    mobile: string[]
    other: string[]
    languages: string[]
    _count: SkillsCountAggregateOutputType | null
    _avg: SkillsAvgAggregateOutputType | null
    _sum: SkillsSumAggregateOutputType | null
    _min: SkillsMinAggregateOutputType | null
    _max: SkillsMaxAggregateOutputType | null
  }

  type GetSkillsGroupByPayload<T extends skillsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<SkillsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof SkillsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], SkillsGroupByOutputType[P]>
            : GetScalarType<T[P], SkillsGroupByOutputType[P]>
        }
      >
    >


  export type skillsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    uid?: boolean
    frontend?: boolean
    style?: boolean
    backend?: boolean
    database?: boolean
    mobile?: boolean
    other?: boolean
    languages?: boolean
    user?: boolean | userDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["skills"]>

  export type skillsSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    uid?: boolean
    frontend?: boolean
    style?: boolean
    backend?: boolean
    database?: boolean
    mobile?: boolean
    other?: boolean
    languages?: boolean
    user?: boolean | userDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["skills"]>

  export type skillsSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    uid?: boolean
    frontend?: boolean
    style?: boolean
    backend?: boolean
    database?: boolean
    mobile?: boolean
    other?: boolean
    languages?: boolean
    user?: boolean | userDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["skills"]>

  export type skillsSelectScalar = {
    uid?: boolean
    frontend?: boolean
    style?: boolean
    backend?: boolean
    database?: boolean
    mobile?: boolean
    other?: boolean
    languages?: boolean
  }

  export type skillsOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"uid" | "frontend" | "style" | "backend" | "database" | "mobile" | "other" | "languages", ExtArgs["result"]["skills"]>
  export type skillsInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | userDefaultArgs<ExtArgs>
  }
  export type skillsIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | userDefaultArgs<ExtArgs>
  }
  export type skillsIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | userDefaultArgs<ExtArgs>
  }

  export type $skillsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "skills"
    objects: {
      user: Prisma.$userPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      uid: number
      frontend: string[]
      style: string
      backend: string[]
      database: string[]
      mobile: string[]
      other: string[]
      languages: string[]
    }, ExtArgs["result"]["skills"]>
    composites: {}
  }

  type skillsGetPayload<S extends boolean | null | undefined | skillsDefaultArgs> = $Result.GetResult<Prisma.$skillsPayload, S>

  type skillsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<skillsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: SkillsCountAggregateInputType | true
    }

  export interface skillsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['skills'], meta: { name: 'skills' } }
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
    findUnique<T extends skillsFindUniqueArgs>(args: SelectSubset<T, skillsFindUniqueArgs<ExtArgs>>): Prisma__skillsClient<$Result.GetResult<Prisma.$skillsPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

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
    findUniqueOrThrow<T extends skillsFindUniqueOrThrowArgs>(args: SelectSubset<T, skillsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__skillsClient<$Result.GetResult<Prisma.$skillsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

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
    findFirst<T extends skillsFindFirstArgs>(args?: SelectSubset<T, skillsFindFirstArgs<ExtArgs>>): Prisma__skillsClient<$Result.GetResult<Prisma.$skillsPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

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
    findFirstOrThrow<T extends skillsFindFirstOrThrowArgs>(args?: SelectSubset<T, skillsFindFirstOrThrowArgs<ExtArgs>>): Prisma__skillsClient<$Result.GetResult<Prisma.$skillsPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

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
     * // Only select the `uid`
     * const skillsWithUidOnly = await prisma.skills.findMany({ select: { uid: true } })
     * 
     */
    findMany<T extends skillsFindManyArgs>(args?: SelectSubset<T, skillsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$skillsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

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
    create<T extends skillsCreateArgs>(args: SelectSubset<T, skillsCreateArgs<ExtArgs>>): Prisma__skillsClient<$Result.GetResult<Prisma.$skillsPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

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
    createMany<T extends skillsCreateManyArgs>(args?: SelectSubset<T, skillsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

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
     * // Create many Skills and only return the `uid`
     * const skillsWithUidOnly = await prisma.skills.createManyAndReturn({
     *   select: { uid: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends skillsCreateManyAndReturnArgs>(args?: SelectSubset<T, skillsCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$skillsPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

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
    delete<T extends skillsDeleteArgs>(args: SelectSubset<T, skillsDeleteArgs<ExtArgs>>): Prisma__skillsClient<$Result.GetResult<Prisma.$skillsPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

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
    update<T extends skillsUpdateArgs>(args: SelectSubset<T, skillsUpdateArgs<ExtArgs>>): Prisma__skillsClient<$Result.GetResult<Prisma.$skillsPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

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
    deleteMany<T extends skillsDeleteManyArgs>(args?: SelectSubset<T, skillsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

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
    updateMany<T extends skillsUpdateManyArgs>(args: SelectSubset<T, skillsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

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
     * // Update zero or more Skills and only return the `uid`
     * const skillsWithUidOnly = await prisma.skills.updateManyAndReturn({
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
    updateManyAndReturn<T extends skillsUpdateManyAndReturnArgs>(args: SelectSubset<T, skillsUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$skillsPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

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
    upsert<T extends skillsUpsertArgs>(args: SelectSubset<T, skillsUpsertArgs<ExtArgs>>): Prisma__skillsClient<$Result.GetResult<Prisma.$skillsPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


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
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], SkillsCountAggregateOutputType>
        : number
    >

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
    aggregate<T extends SkillsAggregateArgs>(args: Subset<T, SkillsAggregateArgs>): Prisma.PrismaPromise<GetSkillsAggregateType<T>>

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
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: skillsGroupByArgs['orderBy'] }
        : { orderBy?: skillsGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
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
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, skillsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSkillsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
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
  export interface Prisma__skillsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends userDefaultArgs<ExtArgs> = {}>(args?: Subset<T, userDefaultArgs<ExtArgs>>): Prisma__userClient<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the skills model
   */ 
  interface skillsFieldRefs {
    readonly uid: FieldRef<"skills", 'Int'>
    readonly frontend: FieldRef<"skills", 'String[]'>
    readonly style: FieldRef<"skills", 'String'>
    readonly backend: FieldRef<"skills", 'String[]'>
    readonly database: FieldRef<"skills", 'String[]'>
    readonly mobile: FieldRef<"skills", 'String[]'>
    readonly other: FieldRef<"skills", 'String[]'>
    readonly languages: FieldRef<"skills", 'String[]'>
  }
    

  // Custom InputTypes
  /**
   * skills findUnique
   */
  export type skillsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the skills
     */
    select?: skillsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the skills
     */
    omit?: skillsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: skillsInclude<ExtArgs> | null
    /**
     * Filter, which skills to fetch.
     */
    where: skillsWhereUniqueInput
  }

  /**
   * skills findUniqueOrThrow
   */
  export type skillsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the skills
     */
    select?: skillsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the skills
     */
    omit?: skillsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: skillsInclude<ExtArgs> | null
    /**
     * Filter, which skills to fetch.
     */
    where: skillsWhereUniqueInput
  }

  /**
   * skills findFirst
   */
  export type skillsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the skills
     */
    select?: skillsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the skills
     */
    omit?: skillsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: skillsInclude<ExtArgs> | null
    /**
     * Filter, which skills to fetch.
     */
    where?: skillsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of skills to fetch.
     */
    orderBy?: skillsOrderByWithRelationInput | skillsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for skills.
     */
    cursor?: skillsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` skills from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` skills.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of skills.
     */
    distinct?: SkillsScalarFieldEnum | SkillsScalarFieldEnum[]
  }

  /**
   * skills findFirstOrThrow
   */
  export type skillsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the skills
     */
    select?: skillsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the skills
     */
    omit?: skillsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: skillsInclude<ExtArgs> | null
    /**
     * Filter, which skills to fetch.
     */
    where?: skillsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of skills to fetch.
     */
    orderBy?: skillsOrderByWithRelationInput | skillsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for skills.
     */
    cursor?: skillsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` skills from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` skills.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of skills.
     */
    distinct?: SkillsScalarFieldEnum | SkillsScalarFieldEnum[]
  }

  /**
   * skills findMany
   */
  export type skillsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the skills
     */
    select?: skillsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the skills
     */
    omit?: skillsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: skillsInclude<ExtArgs> | null
    /**
     * Filter, which skills to fetch.
     */
    where?: skillsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of skills to fetch.
     */
    orderBy?: skillsOrderByWithRelationInput | skillsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing skills.
     */
    cursor?: skillsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` skills from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` skills.
     */
    skip?: number
    distinct?: SkillsScalarFieldEnum | SkillsScalarFieldEnum[]
  }

  /**
   * skills create
   */
  export type skillsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the skills
     */
    select?: skillsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the skills
     */
    omit?: skillsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: skillsInclude<ExtArgs> | null
    /**
     * The data needed to create a skills.
     */
    data: XOR<skillsCreateInput, skillsUncheckedCreateInput>
  }

  /**
   * skills createMany
   */
  export type skillsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many skills.
     */
    data: skillsCreateManyInput | skillsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * skills createManyAndReturn
   */
  export type skillsCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the skills
     */
    select?: skillsSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the skills
     */
    omit?: skillsOmit<ExtArgs> | null
    /**
     * The data used to create many skills.
     */
    data: skillsCreateManyInput | skillsCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: skillsIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * skills update
   */
  export type skillsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the skills
     */
    select?: skillsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the skills
     */
    omit?: skillsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: skillsInclude<ExtArgs> | null
    /**
     * The data needed to update a skills.
     */
    data: XOR<skillsUpdateInput, skillsUncheckedUpdateInput>
    /**
     * Choose, which skills to update.
     */
    where: skillsWhereUniqueInput
  }

  /**
   * skills updateMany
   */
  export type skillsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update skills.
     */
    data: XOR<skillsUpdateManyMutationInput, skillsUncheckedUpdateManyInput>
    /**
     * Filter which skills to update
     */
    where?: skillsWhereInput
    /**
     * Limit how many skills to update.
     */
    limit?: number
  }

  /**
   * skills updateManyAndReturn
   */
  export type skillsUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the skills
     */
    select?: skillsSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the skills
     */
    omit?: skillsOmit<ExtArgs> | null
    /**
     * The data used to update skills.
     */
    data: XOR<skillsUpdateManyMutationInput, skillsUncheckedUpdateManyInput>
    /**
     * Filter which skills to update
     */
    where?: skillsWhereInput
    /**
     * Limit how many skills to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: skillsIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * skills upsert
   */
  export type skillsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the skills
     */
    select?: skillsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the skills
     */
    omit?: skillsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: skillsInclude<ExtArgs> | null
    /**
     * The filter to search for the skills to update in case it exists.
     */
    where: skillsWhereUniqueInput
    /**
     * In case the skills found by the `where` argument doesn't exist, create a new skills with this data.
     */
    create: XOR<skillsCreateInput, skillsUncheckedCreateInput>
    /**
     * In case the skills was found with the provided `where` argument, update it with this data.
     */
    update: XOR<skillsUpdateInput, skillsUncheckedUpdateInput>
  }

  /**
   * skills delete
   */
  export type skillsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the skills
     */
    select?: skillsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the skills
     */
    omit?: skillsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: skillsInclude<ExtArgs> | null
    /**
     * Filter which skills to delete.
     */
    where: skillsWhereUniqueInput
  }

  /**
   * skills deleteMany
   */
  export type skillsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which skills to delete
     */
    where?: skillsWhereInput
    /**
     * Limit how many skills to delete.
     */
    limit?: number
  }

  /**
   * skills without action
   */
  export type skillsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the skills
     */
    select?: skillsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the skills
     */
    omit?: skillsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: skillsInclude<ExtArgs> | null
  }


  /**
   * Model contact
   */

  export type AggregateContact = {
    _count: ContactCountAggregateOutputType | null
    _avg: ContactAvgAggregateOutputType | null
    _sum: ContactSumAggregateOutputType | null
    _min: ContactMinAggregateOutputType | null
    _max: ContactMaxAggregateOutputType | null
  }

  export type ContactAvgAggregateOutputType = {
    uid: number | null
  }

  export type ContactSumAggregateOutputType = {
    uid: number | null
  }

  export type ContactMinAggregateOutputType = {
    uid: number | null
    email: string | null
    phone: string | null
    location: string | null
    linkedin: string | null
  }

  export type ContactMaxAggregateOutputType = {
    uid: number | null
    email: string | null
    phone: string | null
    location: string | null
    linkedin: string | null
  }

  export type ContactCountAggregateOutputType = {
    uid: number
    email: number
    phone: number
    location: number
    linkedin: number
    _all: number
  }


  export type ContactAvgAggregateInputType = {
    uid?: true
  }

  export type ContactSumAggregateInputType = {
    uid?: true
  }

  export type ContactMinAggregateInputType = {
    uid?: true
    email?: true
    phone?: true
    location?: true
    linkedin?: true
  }

  export type ContactMaxAggregateInputType = {
    uid?: true
    email?: true
    phone?: true
    location?: true
    linkedin?: true
  }

  export type ContactCountAggregateInputType = {
    uid?: true
    email?: true
    phone?: true
    location?: true
    linkedin?: true
    _all?: true
  }

  export type ContactAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which contact to aggregate.
     */
    where?: contactWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of contacts to fetch.
     */
    orderBy?: contactOrderByWithRelationInput | contactOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: contactWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` contacts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` contacts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned contacts
    **/
    _count?: true | ContactCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ContactAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ContactSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ContactMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ContactMaxAggregateInputType
  }

  export type GetContactAggregateType<T extends ContactAggregateArgs> = {
        [P in keyof T & keyof AggregateContact]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateContact[P]>
      : GetScalarType<T[P], AggregateContact[P]>
  }




  export type contactGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: contactWhereInput
    orderBy?: contactOrderByWithAggregationInput | contactOrderByWithAggregationInput[]
    by: ContactScalarFieldEnum[] | ContactScalarFieldEnum
    having?: contactScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ContactCountAggregateInputType | true
    _avg?: ContactAvgAggregateInputType
    _sum?: ContactSumAggregateInputType
    _min?: ContactMinAggregateInputType
    _max?: ContactMaxAggregateInputType
  }

  export type ContactGroupByOutputType = {
    uid: number
    email: string
    phone: string
    location: string
    linkedin: string
    _count: ContactCountAggregateOutputType | null
    _avg: ContactAvgAggregateOutputType | null
    _sum: ContactSumAggregateOutputType | null
    _min: ContactMinAggregateOutputType | null
    _max: ContactMaxAggregateOutputType | null
  }

  type GetContactGroupByPayload<T extends contactGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ContactGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ContactGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ContactGroupByOutputType[P]>
            : GetScalarType<T[P], ContactGroupByOutputType[P]>
        }
      >
    >


  export type contactSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    uid?: boolean
    email?: boolean
    phone?: boolean
    location?: boolean
    linkedin?: boolean
    user?: boolean | userDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["contact"]>

  export type contactSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    uid?: boolean
    email?: boolean
    phone?: boolean
    location?: boolean
    linkedin?: boolean
    user?: boolean | userDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["contact"]>

  export type contactSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    uid?: boolean
    email?: boolean
    phone?: boolean
    location?: boolean
    linkedin?: boolean
    user?: boolean | userDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["contact"]>

  export type contactSelectScalar = {
    uid?: boolean
    email?: boolean
    phone?: boolean
    location?: boolean
    linkedin?: boolean
  }

  export type contactOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"uid" | "email" | "phone" | "location" | "linkedin", ExtArgs["result"]["contact"]>
  export type contactInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | userDefaultArgs<ExtArgs>
  }
  export type contactIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | userDefaultArgs<ExtArgs>
  }
  export type contactIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | userDefaultArgs<ExtArgs>
  }

  export type $contactPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "contact"
    objects: {
      user: Prisma.$userPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      uid: number
      email: string
      phone: string
      location: string
      linkedin: string
    }, ExtArgs["result"]["contact"]>
    composites: {}
  }

  type contactGetPayload<S extends boolean | null | undefined | contactDefaultArgs> = $Result.GetResult<Prisma.$contactPayload, S>

  type contactCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<contactFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ContactCountAggregateInputType | true
    }

  export interface contactDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['contact'], meta: { name: 'contact' } }
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
    findUnique<T extends contactFindUniqueArgs>(args: SelectSubset<T, contactFindUniqueArgs<ExtArgs>>): Prisma__contactClient<$Result.GetResult<Prisma.$contactPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

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
    findUniqueOrThrow<T extends contactFindUniqueOrThrowArgs>(args: SelectSubset<T, contactFindUniqueOrThrowArgs<ExtArgs>>): Prisma__contactClient<$Result.GetResult<Prisma.$contactPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

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
    findFirst<T extends contactFindFirstArgs>(args?: SelectSubset<T, contactFindFirstArgs<ExtArgs>>): Prisma__contactClient<$Result.GetResult<Prisma.$contactPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

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
    findFirstOrThrow<T extends contactFindFirstOrThrowArgs>(args?: SelectSubset<T, contactFindFirstOrThrowArgs<ExtArgs>>): Prisma__contactClient<$Result.GetResult<Prisma.$contactPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

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
     * // Only select the `uid`
     * const contactWithUidOnly = await prisma.contact.findMany({ select: { uid: true } })
     * 
     */
    findMany<T extends contactFindManyArgs>(args?: SelectSubset<T, contactFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$contactPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

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
    create<T extends contactCreateArgs>(args: SelectSubset<T, contactCreateArgs<ExtArgs>>): Prisma__contactClient<$Result.GetResult<Prisma.$contactPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

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
    createMany<T extends contactCreateManyArgs>(args?: SelectSubset<T, contactCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

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
     * // Create many Contacts and only return the `uid`
     * const contactWithUidOnly = await prisma.contact.createManyAndReturn({
     *   select: { uid: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends contactCreateManyAndReturnArgs>(args?: SelectSubset<T, contactCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$contactPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

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
    delete<T extends contactDeleteArgs>(args: SelectSubset<T, contactDeleteArgs<ExtArgs>>): Prisma__contactClient<$Result.GetResult<Prisma.$contactPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

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
    update<T extends contactUpdateArgs>(args: SelectSubset<T, contactUpdateArgs<ExtArgs>>): Prisma__contactClient<$Result.GetResult<Prisma.$contactPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

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
    deleteMany<T extends contactDeleteManyArgs>(args?: SelectSubset<T, contactDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

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
    updateMany<T extends contactUpdateManyArgs>(args: SelectSubset<T, contactUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

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
     * // Update zero or more Contacts and only return the `uid`
     * const contactWithUidOnly = await prisma.contact.updateManyAndReturn({
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
    updateManyAndReturn<T extends contactUpdateManyAndReturnArgs>(args: SelectSubset<T, contactUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$contactPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

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
    upsert<T extends contactUpsertArgs>(args: SelectSubset<T, contactUpsertArgs<ExtArgs>>): Prisma__contactClient<$Result.GetResult<Prisma.$contactPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


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
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ContactCountAggregateOutputType>
        : number
    >

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
    aggregate<T extends ContactAggregateArgs>(args: Subset<T, ContactAggregateArgs>): Prisma.PrismaPromise<GetContactAggregateType<T>>

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
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: contactGroupByArgs['orderBy'] }
        : { orderBy?: contactGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
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
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, contactGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetContactGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
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
  export interface Prisma__contactClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends userDefaultArgs<ExtArgs> = {}>(args?: Subset<T, userDefaultArgs<ExtArgs>>): Prisma__userClient<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the contact model
   */ 
  interface contactFieldRefs {
    readonly uid: FieldRef<"contact", 'Int'>
    readonly email: FieldRef<"contact", 'String'>
    readonly phone: FieldRef<"contact", 'String'>
    readonly location: FieldRef<"contact", 'String'>
    readonly linkedin: FieldRef<"contact", 'String'>
  }
    

  // Custom InputTypes
  /**
   * contact findUnique
   */
  export type contactFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the contact
     */
    select?: contactSelect<ExtArgs> | null
    /**
     * Omit specific fields from the contact
     */
    omit?: contactOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: contactInclude<ExtArgs> | null
    /**
     * Filter, which contact to fetch.
     */
    where: contactWhereUniqueInput
  }

  /**
   * contact findUniqueOrThrow
   */
  export type contactFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the contact
     */
    select?: contactSelect<ExtArgs> | null
    /**
     * Omit specific fields from the contact
     */
    omit?: contactOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: contactInclude<ExtArgs> | null
    /**
     * Filter, which contact to fetch.
     */
    where: contactWhereUniqueInput
  }

  /**
   * contact findFirst
   */
  export type contactFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the contact
     */
    select?: contactSelect<ExtArgs> | null
    /**
     * Omit specific fields from the contact
     */
    omit?: contactOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: contactInclude<ExtArgs> | null
    /**
     * Filter, which contact to fetch.
     */
    where?: contactWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of contacts to fetch.
     */
    orderBy?: contactOrderByWithRelationInput | contactOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for contacts.
     */
    cursor?: contactWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` contacts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` contacts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of contacts.
     */
    distinct?: ContactScalarFieldEnum | ContactScalarFieldEnum[]
  }

  /**
   * contact findFirstOrThrow
   */
  export type contactFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the contact
     */
    select?: contactSelect<ExtArgs> | null
    /**
     * Omit specific fields from the contact
     */
    omit?: contactOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: contactInclude<ExtArgs> | null
    /**
     * Filter, which contact to fetch.
     */
    where?: contactWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of contacts to fetch.
     */
    orderBy?: contactOrderByWithRelationInput | contactOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for contacts.
     */
    cursor?: contactWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` contacts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` contacts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of contacts.
     */
    distinct?: ContactScalarFieldEnum | ContactScalarFieldEnum[]
  }

  /**
   * contact findMany
   */
  export type contactFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the contact
     */
    select?: contactSelect<ExtArgs> | null
    /**
     * Omit specific fields from the contact
     */
    omit?: contactOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: contactInclude<ExtArgs> | null
    /**
     * Filter, which contacts to fetch.
     */
    where?: contactWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of contacts to fetch.
     */
    orderBy?: contactOrderByWithRelationInput | contactOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing contacts.
     */
    cursor?: contactWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` contacts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` contacts.
     */
    skip?: number
    distinct?: ContactScalarFieldEnum | ContactScalarFieldEnum[]
  }

  /**
   * contact create
   */
  export type contactCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the contact
     */
    select?: contactSelect<ExtArgs> | null
    /**
     * Omit specific fields from the contact
     */
    omit?: contactOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: contactInclude<ExtArgs> | null
    /**
     * The data needed to create a contact.
     */
    data: XOR<contactCreateInput, contactUncheckedCreateInput>
  }

  /**
   * contact createMany
   */
  export type contactCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many contacts.
     */
    data: contactCreateManyInput | contactCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * contact createManyAndReturn
   */
  export type contactCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the contact
     */
    select?: contactSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the contact
     */
    omit?: contactOmit<ExtArgs> | null
    /**
     * The data used to create many contacts.
     */
    data: contactCreateManyInput | contactCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: contactIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * contact update
   */
  export type contactUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the contact
     */
    select?: contactSelect<ExtArgs> | null
    /**
     * Omit specific fields from the contact
     */
    omit?: contactOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: contactInclude<ExtArgs> | null
    /**
     * The data needed to update a contact.
     */
    data: XOR<contactUpdateInput, contactUncheckedUpdateInput>
    /**
     * Choose, which contact to update.
     */
    where: contactWhereUniqueInput
  }

  /**
   * contact updateMany
   */
  export type contactUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update contacts.
     */
    data: XOR<contactUpdateManyMutationInput, contactUncheckedUpdateManyInput>
    /**
     * Filter which contacts to update
     */
    where?: contactWhereInput
    /**
     * Limit how many contacts to update.
     */
    limit?: number
  }

  /**
   * contact updateManyAndReturn
   */
  export type contactUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the contact
     */
    select?: contactSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the contact
     */
    omit?: contactOmit<ExtArgs> | null
    /**
     * The data used to update contacts.
     */
    data: XOR<contactUpdateManyMutationInput, contactUncheckedUpdateManyInput>
    /**
     * Filter which contacts to update
     */
    where?: contactWhereInput
    /**
     * Limit how many contacts to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: contactIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * contact upsert
   */
  export type contactUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the contact
     */
    select?: contactSelect<ExtArgs> | null
    /**
     * Omit specific fields from the contact
     */
    omit?: contactOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: contactInclude<ExtArgs> | null
    /**
     * The filter to search for the contact to update in case it exists.
     */
    where: contactWhereUniqueInput
    /**
     * In case the contact found by the `where` argument doesn't exist, create a new contact with this data.
     */
    create: XOR<contactCreateInput, contactUncheckedCreateInput>
    /**
     * In case the contact was found with the provided `where` argument, update it with this data.
     */
    update: XOR<contactUpdateInput, contactUncheckedUpdateInput>
  }

  /**
   * contact delete
   */
  export type contactDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the contact
     */
    select?: contactSelect<ExtArgs> | null
    /**
     * Omit specific fields from the contact
     */
    omit?: contactOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: contactInclude<ExtArgs> | null
    /**
     * Filter which contact to delete.
     */
    where: contactWhereUniqueInput
  }

  /**
   * contact deleteMany
   */
  export type contactDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which contacts to delete
     */
    where?: contactWhereInput
    /**
     * Limit how many contacts to delete.
     */
    limit?: number
  }

  /**
   * contact without action
   */
  export type contactDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the contact
     */
    select?: contactSelect<ExtArgs> | null
    /**
     * Omit specific fields from the contact
     */
    omit?: contactOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: contactInclude<ExtArgs> | null
  }


  /**
   * Model About
   */

  export type AggregateAbout = {
    _count: AboutCountAggregateOutputType | null
    _avg: AboutAvgAggregateOutputType | null
    _sum: AboutSumAggregateOutputType | null
    _min: AboutMinAggregateOutputType | null
    _max: AboutMaxAggregateOutputType | null
  }

  export type AboutAvgAggregateOutputType = {
    uid: number | null
  }

  export type AboutSumAggregateOutputType = {
    uid: number | null
  }

  export type AboutMinAggregateOutputType = {
    uid: number | null
    image: string | null
    about: string | null
    style: string | null
  }

  export type AboutMaxAggregateOutputType = {
    uid: number | null
    image: string | null
    about: string | null
    style: string | null
  }

  export type AboutCountAggregateOutputType = {
    uid: number
    image: number
    about: number
    style: number
    _all: number
  }


  export type AboutAvgAggregateInputType = {
    uid?: true
  }

  export type AboutSumAggregateInputType = {
    uid?: true
  }

  export type AboutMinAggregateInputType = {
    uid?: true
    image?: true
    about?: true
    style?: true
  }

  export type AboutMaxAggregateInputType = {
    uid?: true
    image?: true
    about?: true
    style?: true
  }

  export type AboutCountAggregateInputType = {
    uid?: true
    image?: true
    about?: true
    style?: true
    _all?: true
  }

  export type AboutAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which About to aggregate.
     */
    where?: AboutWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Abouts to fetch.
     */
    orderBy?: AboutOrderByWithRelationInput | AboutOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: AboutWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Abouts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Abouts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Abouts
    **/
    _count?: true | AboutCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: AboutAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: AboutSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AboutMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AboutMaxAggregateInputType
  }

  export type GetAboutAggregateType<T extends AboutAggregateArgs> = {
        [P in keyof T & keyof AggregateAbout]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAbout[P]>
      : GetScalarType<T[P], AggregateAbout[P]>
  }




  export type AboutGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AboutWhereInput
    orderBy?: AboutOrderByWithAggregationInput | AboutOrderByWithAggregationInput[]
    by: AboutScalarFieldEnum[] | AboutScalarFieldEnum
    having?: AboutScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AboutCountAggregateInputType | true
    _avg?: AboutAvgAggregateInputType
    _sum?: AboutSumAggregateInputType
    _min?: AboutMinAggregateInputType
    _max?: AboutMaxAggregateInputType
  }

  export type AboutGroupByOutputType = {
    uid: number
    image: string
    about: string
    style: string
    _count: AboutCountAggregateOutputType | null
    _avg: AboutAvgAggregateOutputType | null
    _sum: AboutSumAggregateOutputType | null
    _min: AboutMinAggregateOutputType | null
    _max: AboutMaxAggregateOutputType | null
  }

  type GetAboutGroupByPayload<T extends AboutGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AboutGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AboutGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AboutGroupByOutputType[P]>
            : GetScalarType<T[P], AboutGroupByOutputType[P]>
        }
      >
    >


  export type AboutSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    uid?: boolean
    image?: boolean
    about?: boolean
    style?: boolean
    user?: boolean | userDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["about"]>

  export type AboutSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    uid?: boolean
    image?: boolean
    about?: boolean
    style?: boolean
    user?: boolean | userDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["about"]>

  export type AboutSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    uid?: boolean
    image?: boolean
    about?: boolean
    style?: boolean
    user?: boolean | userDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["about"]>

  export type AboutSelectScalar = {
    uid?: boolean
    image?: boolean
    about?: boolean
    style?: boolean
  }

  export type AboutOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"uid" | "image" | "about" | "style", ExtArgs["result"]["about"]>
  export type AboutInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | userDefaultArgs<ExtArgs>
  }
  export type AboutIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | userDefaultArgs<ExtArgs>
  }
  export type AboutIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | userDefaultArgs<ExtArgs>
  }

  export type $AboutPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "About"
    objects: {
      user: Prisma.$userPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      uid: number
      image: string
      about: string
      style: string
    }, ExtArgs["result"]["about"]>
    composites: {}
  }

  type AboutGetPayload<S extends boolean | null | undefined | AboutDefaultArgs> = $Result.GetResult<Prisma.$AboutPayload, S>

  type AboutCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<AboutFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: AboutCountAggregateInputType | true
    }

  export interface AboutDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['About'], meta: { name: 'About' } }
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
    findUnique<T extends AboutFindUniqueArgs>(args: SelectSubset<T, AboutFindUniqueArgs<ExtArgs>>): Prisma__AboutClient<$Result.GetResult<Prisma.$AboutPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

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
    findUniqueOrThrow<T extends AboutFindUniqueOrThrowArgs>(args: SelectSubset<T, AboutFindUniqueOrThrowArgs<ExtArgs>>): Prisma__AboutClient<$Result.GetResult<Prisma.$AboutPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

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
    findFirst<T extends AboutFindFirstArgs>(args?: SelectSubset<T, AboutFindFirstArgs<ExtArgs>>): Prisma__AboutClient<$Result.GetResult<Prisma.$AboutPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

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
    findFirstOrThrow<T extends AboutFindFirstOrThrowArgs>(args?: SelectSubset<T, AboutFindFirstOrThrowArgs<ExtArgs>>): Prisma__AboutClient<$Result.GetResult<Prisma.$AboutPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

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
     * // Only select the `uid`
     * const aboutWithUidOnly = await prisma.about.findMany({ select: { uid: true } })
     * 
     */
    findMany<T extends AboutFindManyArgs>(args?: SelectSubset<T, AboutFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AboutPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

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
    create<T extends AboutCreateArgs>(args: SelectSubset<T, AboutCreateArgs<ExtArgs>>): Prisma__AboutClient<$Result.GetResult<Prisma.$AboutPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

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
    createMany<T extends AboutCreateManyArgs>(args?: SelectSubset<T, AboutCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

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
     * // Create many Abouts and only return the `uid`
     * const aboutWithUidOnly = await prisma.about.createManyAndReturn({
     *   select: { uid: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends AboutCreateManyAndReturnArgs>(args?: SelectSubset<T, AboutCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AboutPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

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
    delete<T extends AboutDeleteArgs>(args: SelectSubset<T, AboutDeleteArgs<ExtArgs>>): Prisma__AboutClient<$Result.GetResult<Prisma.$AboutPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

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
    update<T extends AboutUpdateArgs>(args: SelectSubset<T, AboutUpdateArgs<ExtArgs>>): Prisma__AboutClient<$Result.GetResult<Prisma.$AboutPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

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
    deleteMany<T extends AboutDeleteManyArgs>(args?: SelectSubset<T, AboutDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

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
    updateMany<T extends AboutUpdateManyArgs>(args: SelectSubset<T, AboutUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

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
     * // Update zero or more Abouts and only return the `uid`
     * const aboutWithUidOnly = await prisma.about.updateManyAndReturn({
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
    updateManyAndReturn<T extends AboutUpdateManyAndReturnArgs>(args: SelectSubset<T, AboutUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AboutPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

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
    upsert<T extends AboutUpsertArgs>(args: SelectSubset<T, AboutUpsertArgs<ExtArgs>>): Prisma__AboutClient<$Result.GetResult<Prisma.$AboutPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


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
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AboutCountAggregateOutputType>
        : number
    >

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
    aggregate<T extends AboutAggregateArgs>(args: Subset<T, AboutAggregateArgs>): Prisma.PrismaPromise<GetAboutAggregateType<T>>

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
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: AboutGroupByArgs['orderBy'] }
        : { orderBy?: AboutGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
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
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, AboutGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAboutGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
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
  export interface Prisma__AboutClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends userDefaultArgs<ExtArgs> = {}>(args?: Subset<T, userDefaultArgs<ExtArgs>>): Prisma__userClient<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the About model
   */ 
  interface AboutFieldRefs {
    readonly uid: FieldRef<"About", 'Int'>
    readonly image: FieldRef<"About", 'String'>
    readonly about: FieldRef<"About", 'String'>
    readonly style: FieldRef<"About", 'String'>
  }
    

  // Custom InputTypes
  /**
   * About findUnique
   */
  export type AboutFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the About
     */
    select?: AboutSelect<ExtArgs> | null
    /**
     * Omit specific fields from the About
     */
    omit?: AboutOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AboutInclude<ExtArgs> | null
    /**
     * Filter, which About to fetch.
     */
    where: AboutWhereUniqueInput
  }

  /**
   * About findUniqueOrThrow
   */
  export type AboutFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the About
     */
    select?: AboutSelect<ExtArgs> | null
    /**
     * Omit specific fields from the About
     */
    omit?: AboutOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AboutInclude<ExtArgs> | null
    /**
     * Filter, which About to fetch.
     */
    where: AboutWhereUniqueInput
  }

  /**
   * About findFirst
   */
  export type AboutFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the About
     */
    select?: AboutSelect<ExtArgs> | null
    /**
     * Omit specific fields from the About
     */
    omit?: AboutOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AboutInclude<ExtArgs> | null
    /**
     * Filter, which About to fetch.
     */
    where?: AboutWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Abouts to fetch.
     */
    orderBy?: AboutOrderByWithRelationInput | AboutOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Abouts.
     */
    cursor?: AboutWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Abouts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Abouts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Abouts.
     */
    distinct?: AboutScalarFieldEnum | AboutScalarFieldEnum[]
  }

  /**
   * About findFirstOrThrow
   */
  export type AboutFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the About
     */
    select?: AboutSelect<ExtArgs> | null
    /**
     * Omit specific fields from the About
     */
    omit?: AboutOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AboutInclude<ExtArgs> | null
    /**
     * Filter, which About to fetch.
     */
    where?: AboutWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Abouts to fetch.
     */
    orderBy?: AboutOrderByWithRelationInput | AboutOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Abouts.
     */
    cursor?: AboutWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Abouts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Abouts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Abouts.
     */
    distinct?: AboutScalarFieldEnum | AboutScalarFieldEnum[]
  }

  /**
   * About findMany
   */
  export type AboutFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the About
     */
    select?: AboutSelect<ExtArgs> | null
    /**
     * Omit specific fields from the About
     */
    omit?: AboutOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AboutInclude<ExtArgs> | null
    /**
     * Filter, which Abouts to fetch.
     */
    where?: AboutWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Abouts to fetch.
     */
    orderBy?: AboutOrderByWithRelationInput | AboutOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Abouts.
     */
    cursor?: AboutWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Abouts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Abouts.
     */
    skip?: number
    distinct?: AboutScalarFieldEnum | AboutScalarFieldEnum[]
  }

  /**
   * About create
   */
  export type AboutCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the About
     */
    select?: AboutSelect<ExtArgs> | null
    /**
     * Omit specific fields from the About
     */
    omit?: AboutOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AboutInclude<ExtArgs> | null
    /**
     * The data needed to create a About.
     */
    data: XOR<AboutCreateInput, AboutUncheckedCreateInput>
  }

  /**
   * About createMany
   */
  export type AboutCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Abouts.
     */
    data: AboutCreateManyInput | AboutCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * About createManyAndReturn
   */
  export type AboutCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the About
     */
    select?: AboutSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the About
     */
    omit?: AboutOmit<ExtArgs> | null
    /**
     * The data used to create many Abouts.
     */
    data: AboutCreateManyInput | AboutCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AboutIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * About update
   */
  export type AboutUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the About
     */
    select?: AboutSelect<ExtArgs> | null
    /**
     * Omit specific fields from the About
     */
    omit?: AboutOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AboutInclude<ExtArgs> | null
    /**
     * The data needed to update a About.
     */
    data: XOR<AboutUpdateInput, AboutUncheckedUpdateInput>
    /**
     * Choose, which About to update.
     */
    where: AboutWhereUniqueInput
  }

  /**
   * About updateMany
   */
  export type AboutUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Abouts.
     */
    data: XOR<AboutUpdateManyMutationInput, AboutUncheckedUpdateManyInput>
    /**
     * Filter which Abouts to update
     */
    where?: AboutWhereInput
    /**
     * Limit how many Abouts to update.
     */
    limit?: number
  }

  /**
   * About updateManyAndReturn
   */
  export type AboutUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the About
     */
    select?: AboutSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the About
     */
    omit?: AboutOmit<ExtArgs> | null
    /**
     * The data used to update Abouts.
     */
    data: XOR<AboutUpdateManyMutationInput, AboutUncheckedUpdateManyInput>
    /**
     * Filter which Abouts to update
     */
    where?: AboutWhereInput
    /**
     * Limit how many Abouts to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AboutIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * About upsert
   */
  export type AboutUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the About
     */
    select?: AboutSelect<ExtArgs> | null
    /**
     * Omit specific fields from the About
     */
    omit?: AboutOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AboutInclude<ExtArgs> | null
    /**
     * The filter to search for the About to update in case it exists.
     */
    where: AboutWhereUniqueInput
    /**
     * In case the About found by the `where` argument doesn't exist, create a new About with this data.
     */
    create: XOR<AboutCreateInput, AboutUncheckedCreateInput>
    /**
     * In case the About was found with the provided `where` argument, update it with this data.
     */
    update: XOR<AboutUpdateInput, AboutUncheckedUpdateInput>
  }

  /**
   * About delete
   */
  export type AboutDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the About
     */
    select?: AboutSelect<ExtArgs> | null
    /**
     * Omit specific fields from the About
     */
    omit?: AboutOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AboutInclude<ExtArgs> | null
    /**
     * Filter which About to delete.
     */
    where: AboutWhereUniqueInput
  }

  /**
   * About deleteMany
   */
  export type AboutDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Abouts to delete
     */
    where?: AboutWhereInput
    /**
     * Limit how many Abouts to delete.
     */
    limit?: number
  }

  /**
   * About without action
   */
  export type AboutDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the About
     */
    select?: AboutSelect<ExtArgs> | null
    /**
     * Omit specific fields from the About
     */
    omit?: AboutOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AboutInclude<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const UserScalarFieldEnum: {
    uid: 'uid',
    username: 'username',
    password: 'password',
    style: 'style',
    hero: 'hero',
    subhero: 'subhero'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const ProjectScalarFieldEnum: {
    pid: 'pid',
    title: 'title',
    image: 'image',
    desc: 'desc',
    tags: 'tags',
    github: 'github',
    Link: 'Link',
    style: 'style'
  };

  export type ProjectScalarFieldEnum = (typeof ProjectScalarFieldEnum)[keyof typeof ProjectScalarFieldEnum]


  export const User_projectScalarFieldEnum: {
    pid: 'pid',
    uid: 'uid'
  };

  export type User_projectScalarFieldEnum = (typeof User_projectScalarFieldEnum)[keyof typeof User_projectScalarFieldEnum]


  export const ExperienceScalarFieldEnum: {
    eid: 'eid',
    title: 'title',
    corp: 'corp',
    style: 'style',
    startdate: 'startdate',
    enddate: 'enddate',
    desc: 'desc'
  };

  export type ExperienceScalarFieldEnum = (typeof ExperienceScalarFieldEnum)[keyof typeof ExperienceScalarFieldEnum]


  export const User_experienceScalarFieldEnum: {
    eid: 'eid',
    uid: 'uid'
  };

  export type User_experienceScalarFieldEnum = (typeof User_experienceScalarFieldEnum)[keyof typeof User_experienceScalarFieldEnum]


  export const EducationScalarFieldEnum: {
    edid: 'edid',
    inst: 'inst',
    degree: 'degree',
    startdate: 'startdate',
    enddate: 'enddate',
    style: 'style'
  };

  export type EducationScalarFieldEnum = (typeof EducationScalarFieldEnum)[keyof typeof EducationScalarFieldEnum]


  export const User_educationScalarFieldEnum: {
    edid: 'edid',
    uid: 'uid'
  };

  export type User_educationScalarFieldEnum = (typeof User_educationScalarFieldEnum)[keyof typeof User_educationScalarFieldEnum]


  export const SkillsScalarFieldEnum: {
    uid: 'uid',
    frontend: 'frontend',
    style: 'style',
    backend: 'backend',
    database: 'database',
    mobile: 'mobile',
    other: 'other',
    languages: 'languages'
  };

  export type SkillsScalarFieldEnum = (typeof SkillsScalarFieldEnum)[keyof typeof SkillsScalarFieldEnum]


  export const ContactScalarFieldEnum: {
    uid: 'uid',
    email: 'email',
    phone: 'phone',
    location: 'location',
    linkedin: 'linkedin'
  };

  export type ContactScalarFieldEnum = (typeof ContactScalarFieldEnum)[keyof typeof ContactScalarFieldEnum]


  export const AboutScalarFieldEnum: {
    uid: 'uid',
    image: 'image',
    about: 'about',
    style: 'style'
  };

  export type AboutScalarFieldEnum = (typeof AboutScalarFieldEnum)[keyof typeof AboutScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  /**
   * Field references 
   */


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    
  /**
   * Deep Input Types
   */


  export type userWhereInput = {
    AND?: userWhereInput | userWhereInput[]
    OR?: userWhereInput[]
    NOT?: userWhereInput | userWhereInput[]
    uid?: IntFilter<"user"> | number
    username?: StringFilter<"user"> | string
    password?: StringFilter<"user"> | string
    style?: StringFilter<"user"> | string
    hero?: StringFilter<"user"> | string
    subhero?: StringFilter<"user"> | string
    skills?: XOR<SkillsNullableScalarRelationFilter, skillsWhereInput> | null
    user_education?: User_educationListRelationFilter
    user_experience?: User_experienceListRelationFilter
    user_project?: User_projectListRelationFilter
    contact?: ContactListRelationFilter
    About?: AboutListRelationFilter
  }

  export type userOrderByWithRelationInput = {
    uid?: SortOrder
    username?: SortOrder
    password?: SortOrder
    style?: SortOrder
    hero?: SortOrder
    subhero?: SortOrder
    skills?: skillsOrderByWithRelationInput
    user_education?: user_educationOrderByRelationAggregateInput
    user_experience?: user_experienceOrderByRelationAggregateInput
    user_project?: user_projectOrderByRelationAggregateInput
    contact?: contactOrderByRelationAggregateInput
    About?: AboutOrderByRelationAggregateInput
  }

  export type userWhereUniqueInput = Prisma.AtLeast<{
    uid?: number
    username?: string
    AND?: userWhereInput | userWhereInput[]
    OR?: userWhereInput[]
    NOT?: userWhereInput | userWhereInput[]
    password?: StringFilter<"user"> | string
    style?: StringFilter<"user"> | string
    hero?: StringFilter<"user"> | string
    subhero?: StringFilter<"user"> | string
    skills?: XOR<SkillsNullableScalarRelationFilter, skillsWhereInput> | null
    user_education?: User_educationListRelationFilter
    user_experience?: User_experienceListRelationFilter
    user_project?: User_projectListRelationFilter
    contact?: ContactListRelationFilter
    About?: AboutListRelationFilter
  }, "uid" | "username">

  export type userOrderByWithAggregationInput = {
    uid?: SortOrder
    username?: SortOrder
    password?: SortOrder
    style?: SortOrder
    hero?: SortOrder
    subhero?: SortOrder
    _count?: userCountOrderByAggregateInput
    _avg?: userAvgOrderByAggregateInput
    _max?: userMaxOrderByAggregateInput
    _min?: userMinOrderByAggregateInput
    _sum?: userSumOrderByAggregateInput
  }

  export type userScalarWhereWithAggregatesInput = {
    AND?: userScalarWhereWithAggregatesInput | userScalarWhereWithAggregatesInput[]
    OR?: userScalarWhereWithAggregatesInput[]
    NOT?: userScalarWhereWithAggregatesInput | userScalarWhereWithAggregatesInput[]
    uid?: IntWithAggregatesFilter<"user"> | number
    username?: StringWithAggregatesFilter<"user"> | string
    password?: StringWithAggregatesFilter<"user"> | string
    style?: StringWithAggregatesFilter<"user"> | string
    hero?: StringWithAggregatesFilter<"user"> | string
    subhero?: StringWithAggregatesFilter<"user"> | string
  }

  export type projectWhereInput = {
    AND?: projectWhereInput | projectWhereInput[]
    OR?: projectWhereInput[]
    NOT?: projectWhereInput | projectWhereInput[]
    pid?: IntFilter<"project"> | number
    title?: StringFilter<"project"> | string
    image?: StringFilter<"project"> | string
    desc?: StringFilter<"project"> | string
    tags?: StringNullableListFilter<"project">
    github?: StringFilter<"project"> | string
    Link?: StringFilter<"project"> | string
    style?: StringFilter<"project"> | string
    user_project?: User_projectListRelationFilter
  }

  export type projectOrderByWithRelationInput = {
    pid?: SortOrder
    title?: SortOrder
    image?: SortOrder
    desc?: SortOrder
    tags?: SortOrder
    github?: SortOrder
    Link?: SortOrder
    style?: SortOrder
    user_project?: user_projectOrderByRelationAggregateInput
  }

  export type projectWhereUniqueInput = Prisma.AtLeast<{
    pid?: number
    AND?: projectWhereInput | projectWhereInput[]
    OR?: projectWhereInput[]
    NOT?: projectWhereInput | projectWhereInput[]
    title?: StringFilter<"project"> | string
    image?: StringFilter<"project"> | string
    desc?: StringFilter<"project"> | string
    tags?: StringNullableListFilter<"project">
    github?: StringFilter<"project"> | string
    Link?: StringFilter<"project"> | string
    style?: StringFilter<"project"> | string
    user_project?: User_projectListRelationFilter
  }, "pid">

  export type projectOrderByWithAggregationInput = {
    pid?: SortOrder
    title?: SortOrder
    image?: SortOrder
    desc?: SortOrder
    tags?: SortOrder
    github?: SortOrder
    Link?: SortOrder
    style?: SortOrder
    _count?: projectCountOrderByAggregateInput
    _avg?: projectAvgOrderByAggregateInput
    _max?: projectMaxOrderByAggregateInput
    _min?: projectMinOrderByAggregateInput
    _sum?: projectSumOrderByAggregateInput
  }

  export type projectScalarWhereWithAggregatesInput = {
    AND?: projectScalarWhereWithAggregatesInput | projectScalarWhereWithAggregatesInput[]
    OR?: projectScalarWhereWithAggregatesInput[]
    NOT?: projectScalarWhereWithAggregatesInput | projectScalarWhereWithAggregatesInput[]
    pid?: IntWithAggregatesFilter<"project"> | number
    title?: StringWithAggregatesFilter<"project"> | string
    image?: StringWithAggregatesFilter<"project"> | string
    desc?: StringWithAggregatesFilter<"project"> | string
    tags?: StringNullableListFilter<"project">
    github?: StringWithAggregatesFilter<"project"> | string
    Link?: StringWithAggregatesFilter<"project"> | string
    style?: StringWithAggregatesFilter<"project"> | string
  }

  export type user_projectWhereInput = {
    AND?: user_projectWhereInput | user_projectWhereInput[]
    OR?: user_projectWhereInput[]
    NOT?: user_projectWhereInput | user_projectWhereInput[]
    pid?: IntFilter<"user_project"> | number
    uid?: IntFilter<"user_project"> | number
    project?: XOR<ProjectScalarRelationFilter, projectWhereInput>
    user?: XOR<UserScalarRelationFilter, userWhereInput>
  }

  export type user_projectOrderByWithRelationInput = {
    pid?: SortOrder
    uid?: SortOrder
    project?: projectOrderByWithRelationInput
    user?: userOrderByWithRelationInput
  }

  export type user_projectWhereUniqueInput = Prisma.AtLeast<{
    pid_uid?: user_projectPidUidCompoundUniqueInput
    AND?: user_projectWhereInput | user_projectWhereInput[]
    OR?: user_projectWhereInput[]
    NOT?: user_projectWhereInput | user_projectWhereInput[]
    pid?: IntFilter<"user_project"> | number
    uid?: IntFilter<"user_project"> | number
    project?: XOR<ProjectScalarRelationFilter, projectWhereInput>
    user?: XOR<UserScalarRelationFilter, userWhereInput>
  }, "pid_uid">

  export type user_projectOrderByWithAggregationInput = {
    pid?: SortOrder
    uid?: SortOrder
    _count?: user_projectCountOrderByAggregateInput
    _avg?: user_projectAvgOrderByAggregateInput
    _max?: user_projectMaxOrderByAggregateInput
    _min?: user_projectMinOrderByAggregateInput
    _sum?: user_projectSumOrderByAggregateInput
  }

  export type user_projectScalarWhereWithAggregatesInput = {
    AND?: user_projectScalarWhereWithAggregatesInput | user_projectScalarWhereWithAggregatesInput[]
    OR?: user_projectScalarWhereWithAggregatesInput[]
    NOT?: user_projectScalarWhereWithAggregatesInput | user_projectScalarWhereWithAggregatesInput[]
    pid?: IntWithAggregatesFilter<"user_project"> | number
    uid?: IntWithAggregatesFilter<"user_project"> | number
  }

  export type experienceWhereInput = {
    AND?: experienceWhereInput | experienceWhereInput[]
    OR?: experienceWhereInput[]
    NOT?: experienceWhereInput | experienceWhereInput[]
    eid?: IntFilter<"experience"> | number
    title?: StringFilter<"experience"> | string
    corp?: StringFilter<"experience"> | string
    style?: StringFilter<"experience"> | string
    startdate?: DateTimeFilter<"experience"> | Date | string
    enddate?: DateTimeFilter<"experience"> | Date | string
    desc?: StringFilter<"experience"> | string
    user_experience?: User_experienceListRelationFilter
  }

  export type experienceOrderByWithRelationInput = {
    eid?: SortOrder
    title?: SortOrder
    corp?: SortOrder
    style?: SortOrder
    startdate?: SortOrder
    enddate?: SortOrder
    desc?: SortOrder
    user_experience?: user_experienceOrderByRelationAggregateInput
  }

  export type experienceWhereUniqueInput = Prisma.AtLeast<{
    eid?: number
    AND?: experienceWhereInput | experienceWhereInput[]
    OR?: experienceWhereInput[]
    NOT?: experienceWhereInput | experienceWhereInput[]
    title?: StringFilter<"experience"> | string
    corp?: StringFilter<"experience"> | string
    style?: StringFilter<"experience"> | string
    startdate?: DateTimeFilter<"experience"> | Date | string
    enddate?: DateTimeFilter<"experience"> | Date | string
    desc?: StringFilter<"experience"> | string
    user_experience?: User_experienceListRelationFilter
  }, "eid">

  export type experienceOrderByWithAggregationInput = {
    eid?: SortOrder
    title?: SortOrder
    corp?: SortOrder
    style?: SortOrder
    startdate?: SortOrder
    enddate?: SortOrder
    desc?: SortOrder
    _count?: experienceCountOrderByAggregateInput
    _avg?: experienceAvgOrderByAggregateInput
    _max?: experienceMaxOrderByAggregateInput
    _min?: experienceMinOrderByAggregateInput
    _sum?: experienceSumOrderByAggregateInput
  }

  export type experienceScalarWhereWithAggregatesInput = {
    AND?: experienceScalarWhereWithAggregatesInput | experienceScalarWhereWithAggregatesInput[]
    OR?: experienceScalarWhereWithAggregatesInput[]
    NOT?: experienceScalarWhereWithAggregatesInput | experienceScalarWhereWithAggregatesInput[]
    eid?: IntWithAggregatesFilter<"experience"> | number
    title?: StringWithAggregatesFilter<"experience"> | string
    corp?: StringWithAggregatesFilter<"experience"> | string
    style?: StringWithAggregatesFilter<"experience"> | string
    startdate?: DateTimeWithAggregatesFilter<"experience"> | Date | string
    enddate?: DateTimeWithAggregatesFilter<"experience"> | Date | string
    desc?: StringWithAggregatesFilter<"experience"> | string
  }

  export type user_experienceWhereInput = {
    AND?: user_experienceWhereInput | user_experienceWhereInput[]
    OR?: user_experienceWhereInput[]
    NOT?: user_experienceWhereInput | user_experienceWhereInput[]
    eid?: IntFilter<"user_experience"> | number
    uid?: IntFilter<"user_experience"> | number
    experience?: XOR<ExperienceScalarRelationFilter, experienceWhereInput>
    user?: XOR<UserScalarRelationFilter, userWhereInput>
  }

  export type user_experienceOrderByWithRelationInput = {
    eid?: SortOrder
    uid?: SortOrder
    experience?: experienceOrderByWithRelationInput
    user?: userOrderByWithRelationInput
  }

  export type user_experienceWhereUniqueInput = Prisma.AtLeast<{
    eid_uid?: user_experienceEidUidCompoundUniqueInput
    AND?: user_experienceWhereInput | user_experienceWhereInput[]
    OR?: user_experienceWhereInput[]
    NOT?: user_experienceWhereInput | user_experienceWhereInput[]
    eid?: IntFilter<"user_experience"> | number
    uid?: IntFilter<"user_experience"> | number
    experience?: XOR<ExperienceScalarRelationFilter, experienceWhereInput>
    user?: XOR<UserScalarRelationFilter, userWhereInput>
  }, "eid_uid">

  export type user_experienceOrderByWithAggregationInput = {
    eid?: SortOrder
    uid?: SortOrder
    _count?: user_experienceCountOrderByAggregateInput
    _avg?: user_experienceAvgOrderByAggregateInput
    _max?: user_experienceMaxOrderByAggregateInput
    _min?: user_experienceMinOrderByAggregateInput
    _sum?: user_experienceSumOrderByAggregateInput
  }

  export type user_experienceScalarWhereWithAggregatesInput = {
    AND?: user_experienceScalarWhereWithAggregatesInput | user_experienceScalarWhereWithAggregatesInput[]
    OR?: user_experienceScalarWhereWithAggregatesInput[]
    NOT?: user_experienceScalarWhereWithAggregatesInput | user_experienceScalarWhereWithAggregatesInput[]
    eid?: IntWithAggregatesFilter<"user_experience"> | number
    uid?: IntWithAggregatesFilter<"user_experience"> | number
  }

  export type educationWhereInput = {
    AND?: educationWhereInput | educationWhereInput[]
    OR?: educationWhereInput[]
    NOT?: educationWhereInput | educationWhereInput[]
    edid?: IntFilter<"education"> | number
    inst?: StringFilter<"education"> | string
    degree?: StringFilter<"education"> | string
    startdate?: DateTimeFilter<"education"> | Date | string
    enddate?: DateTimeFilter<"education"> | Date | string
    style?: StringFilter<"education"> | string
    user_education?: User_educationListRelationFilter
  }

  export type educationOrderByWithRelationInput = {
    edid?: SortOrder
    inst?: SortOrder
    degree?: SortOrder
    startdate?: SortOrder
    enddate?: SortOrder
    style?: SortOrder
    user_education?: user_educationOrderByRelationAggregateInput
  }

  export type educationWhereUniqueInput = Prisma.AtLeast<{
    edid?: number
    AND?: educationWhereInput | educationWhereInput[]
    OR?: educationWhereInput[]
    NOT?: educationWhereInput | educationWhereInput[]
    inst?: StringFilter<"education"> | string
    degree?: StringFilter<"education"> | string
    startdate?: DateTimeFilter<"education"> | Date | string
    enddate?: DateTimeFilter<"education"> | Date | string
    style?: StringFilter<"education"> | string
    user_education?: User_educationListRelationFilter
  }, "edid">

  export type educationOrderByWithAggregationInput = {
    edid?: SortOrder
    inst?: SortOrder
    degree?: SortOrder
    startdate?: SortOrder
    enddate?: SortOrder
    style?: SortOrder
    _count?: educationCountOrderByAggregateInput
    _avg?: educationAvgOrderByAggregateInput
    _max?: educationMaxOrderByAggregateInput
    _min?: educationMinOrderByAggregateInput
    _sum?: educationSumOrderByAggregateInput
  }

  export type educationScalarWhereWithAggregatesInput = {
    AND?: educationScalarWhereWithAggregatesInput | educationScalarWhereWithAggregatesInput[]
    OR?: educationScalarWhereWithAggregatesInput[]
    NOT?: educationScalarWhereWithAggregatesInput | educationScalarWhereWithAggregatesInput[]
    edid?: IntWithAggregatesFilter<"education"> | number
    inst?: StringWithAggregatesFilter<"education"> | string
    degree?: StringWithAggregatesFilter<"education"> | string
    startdate?: DateTimeWithAggregatesFilter<"education"> | Date | string
    enddate?: DateTimeWithAggregatesFilter<"education"> | Date | string
    style?: StringWithAggregatesFilter<"education"> | string
  }

  export type user_educationWhereInput = {
    AND?: user_educationWhereInput | user_educationWhereInput[]
    OR?: user_educationWhereInput[]
    NOT?: user_educationWhereInput | user_educationWhereInput[]
    edid?: IntFilter<"user_education"> | number
    uid?: IntFilter<"user_education"> | number
    education?: XOR<EducationScalarRelationFilter, educationWhereInput>
    user?: XOR<UserScalarRelationFilter, userWhereInput>
  }

  export type user_educationOrderByWithRelationInput = {
    edid?: SortOrder
    uid?: SortOrder
    education?: educationOrderByWithRelationInput
    user?: userOrderByWithRelationInput
  }

  export type user_educationWhereUniqueInput = Prisma.AtLeast<{
    edid_uid?: user_educationEdidUidCompoundUniqueInput
    AND?: user_educationWhereInput | user_educationWhereInput[]
    OR?: user_educationWhereInput[]
    NOT?: user_educationWhereInput | user_educationWhereInput[]
    edid?: IntFilter<"user_education"> | number
    uid?: IntFilter<"user_education"> | number
    education?: XOR<EducationScalarRelationFilter, educationWhereInput>
    user?: XOR<UserScalarRelationFilter, userWhereInput>
  }, "edid_uid">

  export type user_educationOrderByWithAggregationInput = {
    edid?: SortOrder
    uid?: SortOrder
    _count?: user_educationCountOrderByAggregateInput
    _avg?: user_educationAvgOrderByAggregateInput
    _max?: user_educationMaxOrderByAggregateInput
    _min?: user_educationMinOrderByAggregateInput
    _sum?: user_educationSumOrderByAggregateInput
  }

  export type user_educationScalarWhereWithAggregatesInput = {
    AND?: user_educationScalarWhereWithAggregatesInput | user_educationScalarWhereWithAggregatesInput[]
    OR?: user_educationScalarWhereWithAggregatesInput[]
    NOT?: user_educationScalarWhereWithAggregatesInput | user_educationScalarWhereWithAggregatesInput[]
    edid?: IntWithAggregatesFilter<"user_education"> | number
    uid?: IntWithAggregatesFilter<"user_education"> | number
  }

  export type skillsWhereInput = {
    AND?: skillsWhereInput | skillsWhereInput[]
    OR?: skillsWhereInput[]
    NOT?: skillsWhereInput | skillsWhereInput[]
    uid?: IntFilter<"skills"> | number
    frontend?: StringNullableListFilter<"skills">
    style?: StringFilter<"skills"> | string
    backend?: StringNullableListFilter<"skills">
    database?: StringNullableListFilter<"skills">
    mobile?: StringNullableListFilter<"skills">
    other?: StringNullableListFilter<"skills">
    languages?: StringNullableListFilter<"skills">
    user?: XOR<UserScalarRelationFilter, userWhereInput>
  }

  export type skillsOrderByWithRelationInput = {
    uid?: SortOrder
    frontend?: SortOrder
    style?: SortOrder
    backend?: SortOrder
    database?: SortOrder
    mobile?: SortOrder
    other?: SortOrder
    languages?: SortOrder
    user?: userOrderByWithRelationInput
  }

  export type skillsWhereUniqueInput = Prisma.AtLeast<{
    uid?: number
    AND?: skillsWhereInput | skillsWhereInput[]
    OR?: skillsWhereInput[]
    NOT?: skillsWhereInput | skillsWhereInput[]
    frontend?: StringNullableListFilter<"skills">
    style?: StringFilter<"skills"> | string
    backend?: StringNullableListFilter<"skills">
    database?: StringNullableListFilter<"skills">
    mobile?: StringNullableListFilter<"skills">
    other?: StringNullableListFilter<"skills">
    languages?: StringNullableListFilter<"skills">
    user?: XOR<UserScalarRelationFilter, userWhereInput>
  }, "uid" | "uid">

  export type skillsOrderByWithAggregationInput = {
    uid?: SortOrder
    frontend?: SortOrder
    style?: SortOrder
    backend?: SortOrder
    database?: SortOrder
    mobile?: SortOrder
    other?: SortOrder
    languages?: SortOrder
    _count?: skillsCountOrderByAggregateInput
    _avg?: skillsAvgOrderByAggregateInput
    _max?: skillsMaxOrderByAggregateInput
    _min?: skillsMinOrderByAggregateInput
    _sum?: skillsSumOrderByAggregateInput
  }

  export type skillsScalarWhereWithAggregatesInput = {
    AND?: skillsScalarWhereWithAggregatesInput | skillsScalarWhereWithAggregatesInput[]
    OR?: skillsScalarWhereWithAggregatesInput[]
    NOT?: skillsScalarWhereWithAggregatesInput | skillsScalarWhereWithAggregatesInput[]
    uid?: IntWithAggregatesFilter<"skills"> | number
    frontend?: StringNullableListFilter<"skills">
    style?: StringWithAggregatesFilter<"skills"> | string
    backend?: StringNullableListFilter<"skills">
    database?: StringNullableListFilter<"skills">
    mobile?: StringNullableListFilter<"skills">
    other?: StringNullableListFilter<"skills">
    languages?: StringNullableListFilter<"skills">
  }

  export type contactWhereInput = {
    AND?: contactWhereInput | contactWhereInput[]
    OR?: contactWhereInput[]
    NOT?: contactWhereInput | contactWhereInput[]
    uid?: IntFilter<"contact"> | number
    email?: StringFilter<"contact"> | string
    phone?: StringFilter<"contact"> | string
    location?: StringFilter<"contact"> | string
    linkedin?: StringFilter<"contact"> | string
    user?: XOR<UserScalarRelationFilter, userWhereInput>
  }

  export type contactOrderByWithRelationInput = {
    uid?: SortOrder
    email?: SortOrder
    phone?: SortOrder
    location?: SortOrder
    linkedin?: SortOrder
    user?: userOrderByWithRelationInput
  }

  export type contactWhereUniqueInput = Prisma.AtLeast<{
    uid?: number
    AND?: contactWhereInput | contactWhereInput[]
    OR?: contactWhereInput[]
    NOT?: contactWhereInput | contactWhereInput[]
    email?: StringFilter<"contact"> | string
    phone?: StringFilter<"contact"> | string
    location?: StringFilter<"contact"> | string
    linkedin?: StringFilter<"contact"> | string
    user?: XOR<UserScalarRelationFilter, userWhereInput>
  }, "uid">

  export type contactOrderByWithAggregationInput = {
    uid?: SortOrder
    email?: SortOrder
    phone?: SortOrder
    location?: SortOrder
    linkedin?: SortOrder
    _count?: contactCountOrderByAggregateInput
    _avg?: contactAvgOrderByAggregateInput
    _max?: contactMaxOrderByAggregateInput
    _min?: contactMinOrderByAggregateInput
    _sum?: contactSumOrderByAggregateInput
  }

  export type contactScalarWhereWithAggregatesInput = {
    AND?: contactScalarWhereWithAggregatesInput | contactScalarWhereWithAggregatesInput[]
    OR?: contactScalarWhereWithAggregatesInput[]
    NOT?: contactScalarWhereWithAggregatesInput | contactScalarWhereWithAggregatesInput[]
    uid?: IntWithAggregatesFilter<"contact"> | number
    email?: StringWithAggregatesFilter<"contact"> | string
    phone?: StringWithAggregatesFilter<"contact"> | string
    location?: StringWithAggregatesFilter<"contact"> | string
    linkedin?: StringWithAggregatesFilter<"contact"> | string
  }

  export type AboutWhereInput = {
    AND?: AboutWhereInput | AboutWhereInput[]
    OR?: AboutWhereInput[]
    NOT?: AboutWhereInput | AboutWhereInput[]
    uid?: IntFilter<"About"> | number
    image?: StringFilter<"About"> | string
    about?: StringFilter<"About"> | string
    style?: StringFilter<"About"> | string
    user?: XOR<UserScalarRelationFilter, userWhereInput>
  }

  export type AboutOrderByWithRelationInput = {
    uid?: SortOrder
    image?: SortOrder
    about?: SortOrder
    style?: SortOrder
    user?: userOrderByWithRelationInput
  }

  export type AboutWhereUniqueInput = Prisma.AtLeast<{
    uid?: number
    AND?: AboutWhereInput | AboutWhereInput[]
    OR?: AboutWhereInput[]
    NOT?: AboutWhereInput | AboutWhereInput[]
    image?: StringFilter<"About"> | string
    about?: StringFilter<"About"> | string
    style?: StringFilter<"About"> | string
    user?: XOR<UserScalarRelationFilter, userWhereInput>
  }, "uid">

  export type AboutOrderByWithAggregationInput = {
    uid?: SortOrder
    image?: SortOrder
    about?: SortOrder
    style?: SortOrder
    _count?: AboutCountOrderByAggregateInput
    _avg?: AboutAvgOrderByAggregateInput
    _max?: AboutMaxOrderByAggregateInput
    _min?: AboutMinOrderByAggregateInput
    _sum?: AboutSumOrderByAggregateInput
  }

  export type AboutScalarWhereWithAggregatesInput = {
    AND?: AboutScalarWhereWithAggregatesInput | AboutScalarWhereWithAggregatesInput[]
    OR?: AboutScalarWhereWithAggregatesInput[]
    NOT?: AboutScalarWhereWithAggregatesInput | AboutScalarWhereWithAggregatesInput[]
    uid?: IntWithAggregatesFilter<"About"> | number
    image?: StringWithAggregatesFilter<"About"> | string
    about?: StringWithAggregatesFilter<"About"> | string
    style?: StringWithAggregatesFilter<"About"> | string
  }

  export type userCreateInput = {
    username: string
    password: string
    style: string
    hero: string
    subhero: string
    skills?: skillsCreateNestedOneWithoutUserInput
    user_education?: user_educationCreateNestedManyWithoutUserInput
    user_experience?: user_experienceCreateNestedManyWithoutUserInput
    user_project?: user_projectCreateNestedManyWithoutUserInput
    contact?: contactCreateNestedManyWithoutUserInput
    About?: AboutCreateNestedManyWithoutUserInput
  }

  export type userUncheckedCreateInput = {
    uid?: number
    username: string
    password: string
    style: string
    hero: string
    subhero: string
    skills?: skillsUncheckedCreateNestedOneWithoutUserInput
    user_education?: user_educationUncheckedCreateNestedManyWithoutUserInput
    user_experience?: user_experienceUncheckedCreateNestedManyWithoutUserInput
    user_project?: user_projectUncheckedCreateNestedManyWithoutUserInput
    contact?: contactUncheckedCreateNestedManyWithoutUserInput
    About?: AboutUncheckedCreateNestedManyWithoutUserInput
  }

  export type userUpdateInput = {
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    style?: StringFieldUpdateOperationsInput | string
    hero?: StringFieldUpdateOperationsInput | string
    subhero?: StringFieldUpdateOperationsInput | string
    skills?: skillsUpdateOneWithoutUserNestedInput
    user_education?: user_educationUpdateManyWithoutUserNestedInput
    user_experience?: user_experienceUpdateManyWithoutUserNestedInput
    user_project?: user_projectUpdateManyWithoutUserNestedInput
    contact?: contactUpdateManyWithoutUserNestedInput
    About?: AboutUpdateManyWithoutUserNestedInput
  }

  export type userUncheckedUpdateInput = {
    uid?: IntFieldUpdateOperationsInput | number
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    style?: StringFieldUpdateOperationsInput | string
    hero?: StringFieldUpdateOperationsInput | string
    subhero?: StringFieldUpdateOperationsInput | string
    skills?: skillsUncheckedUpdateOneWithoutUserNestedInput
    user_education?: user_educationUncheckedUpdateManyWithoutUserNestedInput
    user_experience?: user_experienceUncheckedUpdateManyWithoutUserNestedInput
    user_project?: user_projectUncheckedUpdateManyWithoutUserNestedInput
    contact?: contactUncheckedUpdateManyWithoutUserNestedInput
    About?: AboutUncheckedUpdateManyWithoutUserNestedInput
  }

  export type userCreateManyInput = {
    uid?: number
    username: string
    password: string
    style: string
    hero: string
    subhero: string
  }

  export type userUpdateManyMutationInput = {
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    style?: StringFieldUpdateOperationsInput | string
    hero?: StringFieldUpdateOperationsInput | string
    subhero?: StringFieldUpdateOperationsInput | string
  }

  export type userUncheckedUpdateManyInput = {
    uid?: IntFieldUpdateOperationsInput | number
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    style?: StringFieldUpdateOperationsInput | string
    hero?: StringFieldUpdateOperationsInput | string
    subhero?: StringFieldUpdateOperationsInput | string
  }

  export type projectCreateInput = {
    title: string
    image: string
    desc: string
    tags?: projectCreatetagsInput | string[]
    github: string
    Link: string
    style: string
    user_project?: user_projectCreateNestedManyWithoutProjectInput
  }

  export type projectUncheckedCreateInput = {
    pid?: number
    title: string
    image: string
    desc: string
    tags?: projectCreatetagsInput | string[]
    github: string
    Link: string
    style: string
    user_project?: user_projectUncheckedCreateNestedManyWithoutProjectInput
  }

  export type projectUpdateInput = {
    title?: StringFieldUpdateOperationsInput | string
    image?: StringFieldUpdateOperationsInput | string
    desc?: StringFieldUpdateOperationsInput | string
    tags?: projectUpdatetagsInput | string[]
    github?: StringFieldUpdateOperationsInput | string
    Link?: StringFieldUpdateOperationsInput | string
    style?: StringFieldUpdateOperationsInput | string
    user_project?: user_projectUpdateManyWithoutProjectNestedInput
  }

  export type projectUncheckedUpdateInput = {
    pid?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    image?: StringFieldUpdateOperationsInput | string
    desc?: StringFieldUpdateOperationsInput | string
    tags?: projectUpdatetagsInput | string[]
    github?: StringFieldUpdateOperationsInput | string
    Link?: StringFieldUpdateOperationsInput | string
    style?: StringFieldUpdateOperationsInput | string
    user_project?: user_projectUncheckedUpdateManyWithoutProjectNestedInput
  }

  export type projectCreateManyInput = {
    pid?: number
    title: string
    image: string
    desc: string
    tags?: projectCreatetagsInput | string[]
    github: string
    Link: string
    style: string
  }

  export type projectUpdateManyMutationInput = {
    title?: StringFieldUpdateOperationsInput | string
    image?: StringFieldUpdateOperationsInput | string
    desc?: StringFieldUpdateOperationsInput | string
    tags?: projectUpdatetagsInput | string[]
    github?: StringFieldUpdateOperationsInput | string
    Link?: StringFieldUpdateOperationsInput | string
    style?: StringFieldUpdateOperationsInput | string
  }

  export type projectUncheckedUpdateManyInput = {
    pid?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    image?: StringFieldUpdateOperationsInput | string
    desc?: StringFieldUpdateOperationsInput | string
    tags?: projectUpdatetagsInput | string[]
    github?: StringFieldUpdateOperationsInput | string
    Link?: StringFieldUpdateOperationsInput | string
    style?: StringFieldUpdateOperationsInput | string
  }

  export type user_projectCreateInput = {
    project: projectCreateNestedOneWithoutUser_projectInput
    user: userCreateNestedOneWithoutUser_projectInput
  }

  export type user_projectUncheckedCreateInput = {
    pid: number
    uid: number
  }

  export type user_projectUpdateInput = {
    project?: projectUpdateOneRequiredWithoutUser_projectNestedInput
    user?: userUpdateOneRequiredWithoutUser_projectNestedInput
  }

  export type user_projectUncheckedUpdateInput = {
    pid?: IntFieldUpdateOperationsInput | number
    uid?: IntFieldUpdateOperationsInput | number
  }

  export type user_projectCreateManyInput = {
    pid: number
    uid: number
  }

  export type user_projectUpdateManyMutationInput = {

  }

  export type user_projectUncheckedUpdateManyInput = {
    pid?: IntFieldUpdateOperationsInput | number
    uid?: IntFieldUpdateOperationsInput | number
  }

  export type experienceCreateInput = {
    title: string
    corp: string
    style: string
    startdate: Date | string
    enddate: Date | string
    desc: string
    user_experience?: user_experienceCreateNestedManyWithoutExperienceInput
  }

  export type experienceUncheckedCreateInput = {
    eid?: number
    title: string
    corp: string
    style: string
    startdate: Date | string
    enddate: Date | string
    desc: string
    user_experience?: user_experienceUncheckedCreateNestedManyWithoutExperienceInput
  }

  export type experienceUpdateInput = {
    title?: StringFieldUpdateOperationsInput | string
    corp?: StringFieldUpdateOperationsInput | string
    style?: StringFieldUpdateOperationsInput | string
    startdate?: DateTimeFieldUpdateOperationsInput | Date | string
    enddate?: DateTimeFieldUpdateOperationsInput | Date | string
    desc?: StringFieldUpdateOperationsInput | string
    user_experience?: user_experienceUpdateManyWithoutExperienceNestedInput
  }

  export type experienceUncheckedUpdateInput = {
    eid?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    corp?: StringFieldUpdateOperationsInput | string
    style?: StringFieldUpdateOperationsInput | string
    startdate?: DateTimeFieldUpdateOperationsInput | Date | string
    enddate?: DateTimeFieldUpdateOperationsInput | Date | string
    desc?: StringFieldUpdateOperationsInput | string
    user_experience?: user_experienceUncheckedUpdateManyWithoutExperienceNestedInput
  }

  export type experienceCreateManyInput = {
    eid?: number
    title: string
    corp: string
    style: string
    startdate: Date | string
    enddate: Date | string
    desc: string
  }

  export type experienceUpdateManyMutationInput = {
    title?: StringFieldUpdateOperationsInput | string
    corp?: StringFieldUpdateOperationsInput | string
    style?: StringFieldUpdateOperationsInput | string
    startdate?: DateTimeFieldUpdateOperationsInput | Date | string
    enddate?: DateTimeFieldUpdateOperationsInput | Date | string
    desc?: StringFieldUpdateOperationsInput | string
  }

  export type experienceUncheckedUpdateManyInput = {
    eid?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    corp?: StringFieldUpdateOperationsInput | string
    style?: StringFieldUpdateOperationsInput | string
    startdate?: DateTimeFieldUpdateOperationsInput | Date | string
    enddate?: DateTimeFieldUpdateOperationsInput | Date | string
    desc?: StringFieldUpdateOperationsInput | string
  }

  export type user_experienceCreateInput = {
    experience: experienceCreateNestedOneWithoutUser_experienceInput
    user: userCreateNestedOneWithoutUser_experienceInput
  }

  export type user_experienceUncheckedCreateInput = {
    eid: number
    uid: number
  }

  export type user_experienceUpdateInput = {
    experience?: experienceUpdateOneRequiredWithoutUser_experienceNestedInput
    user?: userUpdateOneRequiredWithoutUser_experienceNestedInput
  }

  export type user_experienceUncheckedUpdateInput = {
    eid?: IntFieldUpdateOperationsInput | number
    uid?: IntFieldUpdateOperationsInput | number
  }

  export type user_experienceCreateManyInput = {
    eid: number
    uid: number
  }

  export type user_experienceUpdateManyMutationInput = {

  }

  export type user_experienceUncheckedUpdateManyInput = {
    eid?: IntFieldUpdateOperationsInput | number
    uid?: IntFieldUpdateOperationsInput | number
  }

  export type educationCreateInput = {
    inst: string
    degree: string
    startdate: Date | string
    enddate: Date | string
    style: string
    user_education?: user_educationCreateNestedManyWithoutEducationInput
  }

  export type educationUncheckedCreateInput = {
    edid?: number
    inst: string
    degree: string
    startdate: Date | string
    enddate: Date | string
    style: string
    user_education?: user_educationUncheckedCreateNestedManyWithoutEducationInput
  }

  export type educationUpdateInput = {
    inst?: StringFieldUpdateOperationsInput | string
    degree?: StringFieldUpdateOperationsInput | string
    startdate?: DateTimeFieldUpdateOperationsInput | Date | string
    enddate?: DateTimeFieldUpdateOperationsInput | Date | string
    style?: StringFieldUpdateOperationsInput | string
    user_education?: user_educationUpdateManyWithoutEducationNestedInput
  }

  export type educationUncheckedUpdateInput = {
    edid?: IntFieldUpdateOperationsInput | number
    inst?: StringFieldUpdateOperationsInput | string
    degree?: StringFieldUpdateOperationsInput | string
    startdate?: DateTimeFieldUpdateOperationsInput | Date | string
    enddate?: DateTimeFieldUpdateOperationsInput | Date | string
    style?: StringFieldUpdateOperationsInput | string
    user_education?: user_educationUncheckedUpdateManyWithoutEducationNestedInput
  }

  export type educationCreateManyInput = {
    edid?: number
    inst: string
    degree: string
    startdate: Date | string
    enddate: Date | string
    style: string
  }

  export type educationUpdateManyMutationInput = {
    inst?: StringFieldUpdateOperationsInput | string
    degree?: StringFieldUpdateOperationsInput | string
    startdate?: DateTimeFieldUpdateOperationsInput | Date | string
    enddate?: DateTimeFieldUpdateOperationsInput | Date | string
    style?: StringFieldUpdateOperationsInput | string
  }

  export type educationUncheckedUpdateManyInput = {
    edid?: IntFieldUpdateOperationsInput | number
    inst?: StringFieldUpdateOperationsInput | string
    degree?: StringFieldUpdateOperationsInput | string
    startdate?: DateTimeFieldUpdateOperationsInput | Date | string
    enddate?: DateTimeFieldUpdateOperationsInput | Date | string
    style?: StringFieldUpdateOperationsInput | string
  }

  export type user_educationCreateInput = {
    education: educationCreateNestedOneWithoutUser_educationInput
    user: userCreateNestedOneWithoutUser_educationInput
  }

  export type user_educationUncheckedCreateInput = {
    edid: number
    uid: number
  }

  export type user_educationUpdateInput = {
    education?: educationUpdateOneRequiredWithoutUser_educationNestedInput
    user?: userUpdateOneRequiredWithoutUser_educationNestedInput
  }

  export type user_educationUncheckedUpdateInput = {
    edid?: IntFieldUpdateOperationsInput | number
    uid?: IntFieldUpdateOperationsInput | number
  }

  export type user_educationCreateManyInput = {
    edid: number
    uid: number
  }

  export type user_educationUpdateManyMutationInput = {

  }

  export type user_educationUncheckedUpdateManyInput = {
    edid?: IntFieldUpdateOperationsInput | number
    uid?: IntFieldUpdateOperationsInput | number
  }

  export type skillsCreateInput = {
    frontend?: skillsCreatefrontendInput | string[]
    style: string
    backend?: skillsCreatebackendInput | string[]
    database?: skillsCreatedatabaseInput | string[]
    mobile?: skillsCreatemobileInput | string[]
    other?: skillsCreateotherInput | string[]
    languages?: skillsCreatelanguagesInput | string[]
    user: userCreateNestedOneWithoutSkillsInput
  }

  export type skillsUncheckedCreateInput = {
    uid: number
    frontend?: skillsCreatefrontendInput | string[]
    style: string
    backend?: skillsCreatebackendInput | string[]
    database?: skillsCreatedatabaseInput | string[]
    mobile?: skillsCreatemobileInput | string[]
    other?: skillsCreateotherInput | string[]
    languages?: skillsCreatelanguagesInput | string[]
  }

  export type skillsUpdateInput = {
    frontend?: skillsUpdatefrontendInput | string[]
    style?: StringFieldUpdateOperationsInput | string
    backend?: skillsUpdatebackendInput | string[]
    database?: skillsUpdatedatabaseInput | string[]
    mobile?: skillsUpdatemobileInput | string[]
    other?: skillsUpdateotherInput | string[]
    languages?: skillsUpdatelanguagesInput | string[]
    user?: userUpdateOneRequiredWithoutSkillsNestedInput
  }

  export type skillsUncheckedUpdateInput = {
    uid?: IntFieldUpdateOperationsInput | number
    frontend?: skillsUpdatefrontendInput | string[]
    style?: StringFieldUpdateOperationsInput | string
    backend?: skillsUpdatebackendInput | string[]
    database?: skillsUpdatedatabaseInput | string[]
    mobile?: skillsUpdatemobileInput | string[]
    other?: skillsUpdateotherInput | string[]
    languages?: skillsUpdatelanguagesInput | string[]
  }

  export type skillsCreateManyInput = {
    uid: number
    frontend?: skillsCreatefrontendInput | string[]
    style: string
    backend?: skillsCreatebackendInput | string[]
    database?: skillsCreatedatabaseInput | string[]
    mobile?: skillsCreatemobileInput | string[]
    other?: skillsCreateotherInput | string[]
    languages?: skillsCreatelanguagesInput | string[]
  }

  export type skillsUpdateManyMutationInput = {
    frontend?: skillsUpdatefrontendInput | string[]
    style?: StringFieldUpdateOperationsInput | string
    backend?: skillsUpdatebackendInput | string[]
    database?: skillsUpdatedatabaseInput | string[]
    mobile?: skillsUpdatemobileInput | string[]
    other?: skillsUpdateotherInput | string[]
    languages?: skillsUpdatelanguagesInput | string[]
  }

  export type skillsUncheckedUpdateManyInput = {
    uid?: IntFieldUpdateOperationsInput | number
    frontend?: skillsUpdatefrontendInput | string[]
    style?: StringFieldUpdateOperationsInput | string
    backend?: skillsUpdatebackendInput | string[]
    database?: skillsUpdatedatabaseInput | string[]
    mobile?: skillsUpdatemobileInput | string[]
    other?: skillsUpdateotherInput | string[]
    languages?: skillsUpdatelanguagesInput | string[]
  }

  export type contactCreateInput = {
    email: string
    phone: string
    location: string
    linkedin: string
    user: userCreateNestedOneWithoutContactInput
  }

  export type contactUncheckedCreateInput = {
    uid: number
    email: string
    phone: string
    location: string
    linkedin: string
  }

  export type contactUpdateInput = {
    email?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    location?: StringFieldUpdateOperationsInput | string
    linkedin?: StringFieldUpdateOperationsInput | string
    user?: userUpdateOneRequiredWithoutContactNestedInput
  }

  export type contactUncheckedUpdateInput = {
    uid?: IntFieldUpdateOperationsInput | number
    email?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    location?: StringFieldUpdateOperationsInput | string
    linkedin?: StringFieldUpdateOperationsInput | string
  }

  export type contactCreateManyInput = {
    uid: number
    email: string
    phone: string
    location: string
    linkedin: string
  }

  export type contactUpdateManyMutationInput = {
    email?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    location?: StringFieldUpdateOperationsInput | string
    linkedin?: StringFieldUpdateOperationsInput | string
  }

  export type contactUncheckedUpdateManyInput = {
    uid?: IntFieldUpdateOperationsInput | number
    email?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    location?: StringFieldUpdateOperationsInput | string
    linkedin?: StringFieldUpdateOperationsInput | string
  }

  export type AboutCreateInput = {
    image: string
    about: string
    style: string
    user: userCreateNestedOneWithoutAboutInput
  }

  export type AboutUncheckedCreateInput = {
    uid: number
    image: string
    about: string
    style: string
  }

  export type AboutUpdateInput = {
    image?: StringFieldUpdateOperationsInput | string
    about?: StringFieldUpdateOperationsInput | string
    style?: StringFieldUpdateOperationsInput | string
    user?: userUpdateOneRequiredWithoutAboutNestedInput
  }

  export type AboutUncheckedUpdateInput = {
    uid?: IntFieldUpdateOperationsInput | number
    image?: StringFieldUpdateOperationsInput | string
    about?: StringFieldUpdateOperationsInput | string
    style?: StringFieldUpdateOperationsInput | string
  }

  export type AboutCreateManyInput = {
    uid: number
    image: string
    about: string
    style: string
  }

  export type AboutUpdateManyMutationInput = {
    image?: StringFieldUpdateOperationsInput | string
    about?: StringFieldUpdateOperationsInput | string
    style?: StringFieldUpdateOperationsInput | string
  }

  export type AboutUncheckedUpdateManyInput = {
    uid?: IntFieldUpdateOperationsInput | number
    image?: StringFieldUpdateOperationsInput | string
    about?: StringFieldUpdateOperationsInput | string
    style?: StringFieldUpdateOperationsInput | string
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type SkillsNullableScalarRelationFilter = {
    is?: skillsWhereInput | null
    isNot?: skillsWhereInput | null
  }

  export type User_educationListRelationFilter = {
    every?: user_educationWhereInput
    some?: user_educationWhereInput
    none?: user_educationWhereInput
  }

  export type User_experienceListRelationFilter = {
    every?: user_experienceWhereInput
    some?: user_experienceWhereInput
    none?: user_experienceWhereInput
  }

  export type User_projectListRelationFilter = {
    every?: user_projectWhereInput
    some?: user_projectWhereInput
    none?: user_projectWhereInput
  }

  export type ContactListRelationFilter = {
    every?: contactWhereInput
    some?: contactWhereInput
    none?: contactWhereInput
  }

  export type AboutListRelationFilter = {
    every?: AboutWhereInput
    some?: AboutWhereInput
    none?: AboutWhereInput
  }

  export type user_educationOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type user_experienceOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type user_projectOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type contactOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type AboutOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type userCountOrderByAggregateInput = {
    uid?: SortOrder
    username?: SortOrder
    password?: SortOrder
    style?: SortOrder
    hero?: SortOrder
    subhero?: SortOrder
  }

  export type userAvgOrderByAggregateInput = {
    uid?: SortOrder
  }

  export type userMaxOrderByAggregateInput = {
    uid?: SortOrder
    username?: SortOrder
    password?: SortOrder
    style?: SortOrder
    hero?: SortOrder
    subhero?: SortOrder
  }

  export type userMinOrderByAggregateInput = {
    uid?: SortOrder
    username?: SortOrder
    password?: SortOrder
    style?: SortOrder
    hero?: SortOrder
    subhero?: SortOrder
  }

  export type userSumOrderByAggregateInput = {
    uid?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type StringNullableListFilter<$PrismaModel = never> = {
    equals?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    has?: string | StringFieldRefInput<$PrismaModel> | null
    hasEvery?: string[] | ListStringFieldRefInput<$PrismaModel>
    hasSome?: string[] | ListStringFieldRefInput<$PrismaModel>
    isEmpty?: boolean
  }

  export type projectCountOrderByAggregateInput = {
    pid?: SortOrder
    title?: SortOrder
    image?: SortOrder
    desc?: SortOrder
    tags?: SortOrder
    github?: SortOrder
    Link?: SortOrder
    style?: SortOrder
  }

  export type projectAvgOrderByAggregateInput = {
    pid?: SortOrder
  }

  export type projectMaxOrderByAggregateInput = {
    pid?: SortOrder
    title?: SortOrder
    image?: SortOrder
    desc?: SortOrder
    github?: SortOrder
    Link?: SortOrder
    style?: SortOrder
  }

  export type projectMinOrderByAggregateInput = {
    pid?: SortOrder
    title?: SortOrder
    image?: SortOrder
    desc?: SortOrder
    github?: SortOrder
    Link?: SortOrder
    style?: SortOrder
  }

  export type projectSumOrderByAggregateInput = {
    pid?: SortOrder
  }

  export type ProjectScalarRelationFilter = {
    is?: projectWhereInput
    isNot?: projectWhereInput
  }

  export type UserScalarRelationFilter = {
    is?: userWhereInput
    isNot?: userWhereInput
  }

  export type user_projectPidUidCompoundUniqueInput = {
    pid: number
    uid: number
  }

  export type user_projectCountOrderByAggregateInput = {
    pid?: SortOrder
    uid?: SortOrder
  }

  export type user_projectAvgOrderByAggregateInput = {
    pid?: SortOrder
    uid?: SortOrder
  }

  export type user_projectMaxOrderByAggregateInput = {
    pid?: SortOrder
    uid?: SortOrder
  }

  export type user_projectMinOrderByAggregateInput = {
    pid?: SortOrder
    uid?: SortOrder
  }

  export type user_projectSumOrderByAggregateInput = {
    pid?: SortOrder
    uid?: SortOrder
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type experienceCountOrderByAggregateInput = {
    eid?: SortOrder
    title?: SortOrder
    corp?: SortOrder
    style?: SortOrder
    startdate?: SortOrder
    enddate?: SortOrder
    desc?: SortOrder
  }

  export type experienceAvgOrderByAggregateInput = {
    eid?: SortOrder
  }

  export type experienceMaxOrderByAggregateInput = {
    eid?: SortOrder
    title?: SortOrder
    corp?: SortOrder
    style?: SortOrder
    startdate?: SortOrder
    enddate?: SortOrder
    desc?: SortOrder
  }

  export type experienceMinOrderByAggregateInput = {
    eid?: SortOrder
    title?: SortOrder
    corp?: SortOrder
    style?: SortOrder
    startdate?: SortOrder
    enddate?: SortOrder
    desc?: SortOrder
  }

  export type experienceSumOrderByAggregateInput = {
    eid?: SortOrder
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type ExperienceScalarRelationFilter = {
    is?: experienceWhereInput
    isNot?: experienceWhereInput
  }

  export type user_experienceEidUidCompoundUniqueInput = {
    eid: number
    uid: number
  }

  export type user_experienceCountOrderByAggregateInput = {
    eid?: SortOrder
    uid?: SortOrder
  }

  export type user_experienceAvgOrderByAggregateInput = {
    eid?: SortOrder
    uid?: SortOrder
  }

  export type user_experienceMaxOrderByAggregateInput = {
    eid?: SortOrder
    uid?: SortOrder
  }

  export type user_experienceMinOrderByAggregateInput = {
    eid?: SortOrder
    uid?: SortOrder
  }

  export type user_experienceSumOrderByAggregateInput = {
    eid?: SortOrder
    uid?: SortOrder
  }

  export type educationCountOrderByAggregateInput = {
    edid?: SortOrder
    inst?: SortOrder
    degree?: SortOrder
    startdate?: SortOrder
    enddate?: SortOrder
    style?: SortOrder
  }

  export type educationAvgOrderByAggregateInput = {
    edid?: SortOrder
  }

  export type educationMaxOrderByAggregateInput = {
    edid?: SortOrder
    inst?: SortOrder
    degree?: SortOrder
    startdate?: SortOrder
    enddate?: SortOrder
    style?: SortOrder
  }

  export type educationMinOrderByAggregateInput = {
    edid?: SortOrder
    inst?: SortOrder
    degree?: SortOrder
    startdate?: SortOrder
    enddate?: SortOrder
    style?: SortOrder
  }

  export type educationSumOrderByAggregateInput = {
    edid?: SortOrder
  }

  export type EducationScalarRelationFilter = {
    is?: educationWhereInput
    isNot?: educationWhereInput
  }

  export type user_educationEdidUidCompoundUniqueInput = {
    edid: number
    uid: number
  }

  export type user_educationCountOrderByAggregateInput = {
    edid?: SortOrder
    uid?: SortOrder
  }

  export type user_educationAvgOrderByAggregateInput = {
    edid?: SortOrder
    uid?: SortOrder
  }

  export type user_educationMaxOrderByAggregateInput = {
    edid?: SortOrder
    uid?: SortOrder
  }

  export type user_educationMinOrderByAggregateInput = {
    edid?: SortOrder
    uid?: SortOrder
  }

  export type user_educationSumOrderByAggregateInput = {
    edid?: SortOrder
    uid?: SortOrder
  }

  export type skillsCountOrderByAggregateInput = {
    uid?: SortOrder
    frontend?: SortOrder
    style?: SortOrder
    backend?: SortOrder
    database?: SortOrder
    mobile?: SortOrder
    other?: SortOrder
    languages?: SortOrder
  }

  export type skillsAvgOrderByAggregateInput = {
    uid?: SortOrder
  }

  export type skillsMaxOrderByAggregateInput = {
    uid?: SortOrder
    style?: SortOrder
  }

  export type skillsMinOrderByAggregateInput = {
    uid?: SortOrder
    style?: SortOrder
  }

  export type skillsSumOrderByAggregateInput = {
    uid?: SortOrder
  }

  export type contactCountOrderByAggregateInput = {
    uid?: SortOrder
    email?: SortOrder
    phone?: SortOrder
    location?: SortOrder
    linkedin?: SortOrder
  }

  export type contactAvgOrderByAggregateInput = {
    uid?: SortOrder
  }

  export type contactMaxOrderByAggregateInput = {
    uid?: SortOrder
    email?: SortOrder
    phone?: SortOrder
    location?: SortOrder
    linkedin?: SortOrder
  }

  export type contactMinOrderByAggregateInput = {
    uid?: SortOrder
    email?: SortOrder
    phone?: SortOrder
    location?: SortOrder
    linkedin?: SortOrder
  }

  export type contactSumOrderByAggregateInput = {
    uid?: SortOrder
  }

  export type AboutCountOrderByAggregateInput = {
    uid?: SortOrder
    image?: SortOrder
    about?: SortOrder
    style?: SortOrder
  }

  export type AboutAvgOrderByAggregateInput = {
    uid?: SortOrder
  }

  export type AboutMaxOrderByAggregateInput = {
    uid?: SortOrder
    image?: SortOrder
    about?: SortOrder
    style?: SortOrder
  }

  export type AboutMinOrderByAggregateInput = {
    uid?: SortOrder
    image?: SortOrder
    about?: SortOrder
    style?: SortOrder
  }

  export type AboutSumOrderByAggregateInput = {
    uid?: SortOrder
  }

  export type skillsCreateNestedOneWithoutUserInput = {
    create?: XOR<skillsCreateWithoutUserInput, skillsUncheckedCreateWithoutUserInput>
    connectOrCreate?: skillsCreateOrConnectWithoutUserInput
    connect?: skillsWhereUniqueInput
  }

  export type user_educationCreateNestedManyWithoutUserInput = {
    create?: XOR<user_educationCreateWithoutUserInput, user_educationUncheckedCreateWithoutUserInput> | user_educationCreateWithoutUserInput[] | user_educationUncheckedCreateWithoutUserInput[]
    connectOrCreate?: user_educationCreateOrConnectWithoutUserInput | user_educationCreateOrConnectWithoutUserInput[]
    createMany?: user_educationCreateManyUserInputEnvelope
    connect?: user_educationWhereUniqueInput | user_educationWhereUniqueInput[]
  }

  export type user_experienceCreateNestedManyWithoutUserInput = {
    create?: XOR<user_experienceCreateWithoutUserInput, user_experienceUncheckedCreateWithoutUserInput> | user_experienceCreateWithoutUserInput[] | user_experienceUncheckedCreateWithoutUserInput[]
    connectOrCreate?: user_experienceCreateOrConnectWithoutUserInput | user_experienceCreateOrConnectWithoutUserInput[]
    createMany?: user_experienceCreateManyUserInputEnvelope
    connect?: user_experienceWhereUniqueInput | user_experienceWhereUniqueInput[]
  }

  export type user_projectCreateNestedManyWithoutUserInput = {
    create?: XOR<user_projectCreateWithoutUserInput, user_projectUncheckedCreateWithoutUserInput> | user_projectCreateWithoutUserInput[] | user_projectUncheckedCreateWithoutUserInput[]
    connectOrCreate?: user_projectCreateOrConnectWithoutUserInput | user_projectCreateOrConnectWithoutUserInput[]
    createMany?: user_projectCreateManyUserInputEnvelope
    connect?: user_projectWhereUniqueInput | user_projectWhereUniqueInput[]
  }

  export type contactCreateNestedManyWithoutUserInput = {
    create?: XOR<contactCreateWithoutUserInput, contactUncheckedCreateWithoutUserInput> | contactCreateWithoutUserInput[] | contactUncheckedCreateWithoutUserInput[]
    connectOrCreate?: contactCreateOrConnectWithoutUserInput | contactCreateOrConnectWithoutUserInput[]
    createMany?: contactCreateManyUserInputEnvelope
    connect?: contactWhereUniqueInput | contactWhereUniqueInput[]
  }

  export type AboutCreateNestedManyWithoutUserInput = {
    create?: XOR<AboutCreateWithoutUserInput, AboutUncheckedCreateWithoutUserInput> | AboutCreateWithoutUserInput[] | AboutUncheckedCreateWithoutUserInput[]
    connectOrCreate?: AboutCreateOrConnectWithoutUserInput | AboutCreateOrConnectWithoutUserInput[]
    createMany?: AboutCreateManyUserInputEnvelope
    connect?: AboutWhereUniqueInput | AboutWhereUniqueInput[]
  }

  export type skillsUncheckedCreateNestedOneWithoutUserInput = {
    create?: XOR<skillsCreateWithoutUserInput, skillsUncheckedCreateWithoutUserInput>
    connectOrCreate?: skillsCreateOrConnectWithoutUserInput
    connect?: skillsWhereUniqueInput
  }

  export type user_educationUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<user_educationCreateWithoutUserInput, user_educationUncheckedCreateWithoutUserInput> | user_educationCreateWithoutUserInput[] | user_educationUncheckedCreateWithoutUserInput[]
    connectOrCreate?: user_educationCreateOrConnectWithoutUserInput | user_educationCreateOrConnectWithoutUserInput[]
    createMany?: user_educationCreateManyUserInputEnvelope
    connect?: user_educationWhereUniqueInput | user_educationWhereUniqueInput[]
  }

  export type user_experienceUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<user_experienceCreateWithoutUserInput, user_experienceUncheckedCreateWithoutUserInput> | user_experienceCreateWithoutUserInput[] | user_experienceUncheckedCreateWithoutUserInput[]
    connectOrCreate?: user_experienceCreateOrConnectWithoutUserInput | user_experienceCreateOrConnectWithoutUserInput[]
    createMany?: user_experienceCreateManyUserInputEnvelope
    connect?: user_experienceWhereUniqueInput | user_experienceWhereUniqueInput[]
  }

  export type user_projectUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<user_projectCreateWithoutUserInput, user_projectUncheckedCreateWithoutUserInput> | user_projectCreateWithoutUserInput[] | user_projectUncheckedCreateWithoutUserInput[]
    connectOrCreate?: user_projectCreateOrConnectWithoutUserInput | user_projectCreateOrConnectWithoutUserInput[]
    createMany?: user_projectCreateManyUserInputEnvelope
    connect?: user_projectWhereUniqueInput | user_projectWhereUniqueInput[]
  }

  export type contactUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<contactCreateWithoutUserInput, contactUncheckedCreateWithoutUserInput> | contactCreateWithoutUserInput[] | contactUncheckedCreateWithoutUserInput[]
    connectOrCreate?: contactCreateOrConnectWithoutUserInput | contactCreateOrConnectWithoutUserInput[]
    createMany?: contactCreateManyUserInputEnvelope
    connect?: contactWhereUniqueInput | contactWhereUniqueInput[]
  }

  export type AboutUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<AboutCreateWithoutUserInput, AboutUncheckedCreateWithoutUserInput> | AboutCreateWithoutUserInput[] | AboutUncheckedCreateWithoutUserInput[]
    connectOrCreate?: AboutCreateOrConnectWithoutUserInput | AboutCreateOrConnectWithoutUserInput[]
    createMany?: AboutCreateManyUserInputEnvelope
    connect?: AboutWhereUniqueInput | AboutWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type skillsUpdateOneWithoutUserNestedInput = {
    create?: XOR<skillsCreateWithoutUserInput, skillsUncheckedCreateWithoutUserInput>
    connectOrCreate?: skillsCreateOrConnectWithoutUserInput
    upsert?: skillsUpsertWithoutUserInput
    disconnect?: skillsWhereInput | boolean
    delete?: skillsWhereInput | boolean
    connect?: skillsWhereUniqueInput
    update?: XOR<XOR<skillsUpdateToOneWithWhereWithoutUserInput, skillsUpdateWithoutUserInput>, skillsUncheckedUpdateWithoutUserInput>
  }

  export type user_educationUpdateManyWithoutUserNestedInput = {
    create?: XOR<user_educationCreateWithoutUserInput, user_educationUncheckedCreateWithoutUserInput> | user_educationCreateWithoutUserInput[] | user_educationUncheckedCreateWithoutUserInput[]
    connectOrCreate?: user_educationCreateOrConnectWithoutUserInput | user_educationCreateOrConnectWithoutUserInput[]
    upsert?: user_educationUpsertWithWhereUniqueWithoutUserInput | user_educationUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: user_educationCreateManyUserInputEnvelope
    set?: user_educationWhereUniqueInput | user_educationWhereUniqueInput[]
    disconnect?: user_educationWhereUniqueInput | user_educationWhereUniqueInput[]
    delete?: user_educationWhereUniqueInput | user_educationWhereUniqueInput[]
    connect?: user_educationWhereUniqueInput | user_educationWhereUniqueInput[]
    update?: user_educationUpdateWithWhereUniqueWithoutUserInput | user_educationUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: user_educationUpdateManyWithWhereWithoutUserInput | user_educationUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: user_educationScalarWhereInput | user_educationScalarWhereInput[]
  }

  export type user_experienceUpdateManyWithoutUserNestedInput = {
    create?: XOR<user_experienceCreateWithoutUserInput, user_experienceUncheckedCreateWithoutUserInput> | user_experienceCreateWithoutUserInput[] | user_experienceUncheckedCreateWithoutUserInput[]
    connectOrCreate?: user_experienceCreateOrConnectWithoutUserInput | user_experienceCreateOrConnectWithoutUserInput[]
    upsert?: user_experienceUpsertWithWhereUniqueWithoutUserInput | user_experienceUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: user_experienceCreateManyUserInputEnvelope
    set?: user_experienceWhereUniqueInput | user_experienceWhereUniqueInput[]
    disconnect?: user_experienceWhereUniqueInput | user_experienceWhereUniqueInput[]
    delete?: user_experienceWhereUniqueInput | user_experienceWhereUniqueInput[]
    connect?: user_experienceWhereUniqueInput | user_experienceWhereUniqueInput[]
    update?: user_experienceUpdateWithWhereUniqueWithoutUserInput | user_experienceUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: user_experienceUpdateManyWithWhereWithoutUserInput | user_experienceUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: user_experienceScalarWhereInput | user_experienceScalarWhereInput[]
  }

  export type user_projectUpdateManyWithoutUserNestedInput = {
    create?: XOR<user_projectCreateWithoutUserInput, user_projectUncheckedCreateWithoutUserInput> | user_projectCreateWithoutUserInput[] | user_projectUncheckedCreateWithoutUserInput[]
    connectOrCreate?: user_projectCreateOrConnectWithoutUserInput | user_projectCreateOrConnectWithoutUserInput[]
    upsert?: user_projectUpsertWithWhereUniqueWithoutUserInput | user_projectUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: user_projectCreateManyUserInputEnvelope
    set?: user_projectWhereUniqueInput | user_projectWhereUniqueInput[]
    disconnect?: user_projectWhereUniqueInput | user_projectWhereUniqueInput[]
    delete?: user_projectWhereUniqueInput | user_projectWhereUniqueInput[]
    connect?: user_projectWhereUniqueInput | user_projectWhereUniqueInput[]
    update?: user_projectUpdateWithWhereUniqueWithoutUserInput | user_projectUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: user_projectUpdateManyWithWhereWithoutUserInput | user_projectUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: user_projectScalarWhereInput | user_projectScalarWhereInput[]
  }

  export type contactUpdateManyWithoutUserNestedInput = {
    create?: XOR<contactCreateWithoutUserInput, contactUncheckedCreateWithoutUserInput> | contactCreateWithoutUserInput[] | contactUncheckedCreateWithoutUserInput[]
    connectOrCreate?: contactCreateOrConnectWithoutUserInput | contactCreateOrConnectWithoutUserInput[]
    upsert?: contactUpsertWithWhereUniqueWithoutUserInput | contactUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: contactCreateManyUserInputEnvelope
    set?: contactWhereUniqueInput | contactWhereUniqueInput[]
    disconnect?: contactWhereUniqueInput | contactWhereUniqueInput[]
    delete?: contactWhereUniqueInput | contactWhereUniqueInput[]
    connect?: contactWhereUniqueInput | contactWhereUniqueInput[]
    update?: contactUpdateWithWhereUniqueWithoutUserInput | contactUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: contactUpdateManyWithWhereWithoutUserInput | contactUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: contactScalarWhereInput | contactScalarWhereInput[]
  }

  export type AboutUpdateManyWithoutUserNestedInput = {
    create?: XOR<AboutCreateWithoutUserInput, AboutUncheckedCreateWithoutUserInput> | AboutCreateWithoutUserInput[] | AboutUncheckedCreateWithoutUserInput[]
    connectOrCreate?: AboutCreateOrConnectWithoutUserInput | AboutCreateOrConnectWithoutUserInput[]
    upsert?: AboutUpsertWithWhereUniqueWithoutUserInput | AboutUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: AboutCreateManyUserInputEnvelope
    set?: AboutWhereUniqueInput | AboutWhereUniqueInput[]
    disconnect?: AboutWhereUniqueInput | AboutWhereUniqueInput[]
    delete?: AboutWhereUniqueInput | AboutWhereUniqueInput[]
    connect?: AboutWhereUniqueInput | AboutWhereUniqueInput[]
    update?: AboutUpdateWithWhereUniqueWithoutUserInput | AboutUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: AboutUpdateManyWithWhereWithoutUserInput | AboutUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: AboutScalarWhereInput | AboutScalarWhereInput[]
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type skillsUncheckedUpdateOneWithoutUserNestedInput = {
    create?: XOR<skillsCreateWithoutUserInput, skillsUncheckedCreateWithoutUserInput>
    connectOrCreate?: skillsCreateOrConnectWithoutUserInput
    upsert?: skillsUpsertWithoutUserInput
    disconnect?: skillsWhereInput | boolean
    delete?: skillsWhereInput | boolean
    connect?: skillsWhereUniqueInput
    update?: XOR<XOR<skillsUpdateToOneWithWhereWithoutUserInput, skillsUpdateWithoutUserInput>, skillsUncheckedUpdateWithoutUserInput>
  }

  export type user_educationUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<user_educationCreateWithoutUserInput, user_educationUncheckedCreateWithoutUserInput> | user_educationCreateWithoutUserInput[] | user_educationUncheckedCreateWithoutUserInput[]
    connectOrCreate?: user_educationCreateOrConnectWithoutUserInput | user_educationCreateOrConnectWithoutUserInput[]
    upsert?: user_educationUpsertWithWhereUniqueWithoutUserInput | user_educationUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: user_educationCreateManyUserInputEnvelope
    set?: user_educationWhereUniqueInput | user_educationWhereUniqueInput[]
    disconnect?: user_educationWhereUniqueInput | user_educationWhereUniqueInput[]
    delete?: user_educationWhereUniqueInput | user_educationWhereUniqueInput[]
    connect?: user_educationWhereUniqueInput | user_educationWhereUniqueInput[]
    update?: user_educationUpdateWithWhereUniqueWithoutUserInput | user_educationUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: user_educationUpdateManyWithWhereWithoutUserInput | user_educationUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: user_educationScalarWhereInput | user_educationScalarWhereInput[]
  }

  export type user_experienceUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<user_experienceCreateWithoutUserInput, user_experienceUncheckedCreateWithoutUserInput> | user_experienceCreateWithoutUserInput[] | user_experienceUncheckedCreateWithoutUserInput[]
    connectOrCreate?: user_experienceCreateOrConnectWithoutUserInput | user_experienceCreateOrConnectWithoutUserInput[]
    upsert?: user_experienceUpsertWithWhereUniqueWithoutUserInput | user_experienceUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: user_experienceCreateManyUserInputEnvelope
    set?: user_experienceWhereUniqueInput | user_experienceWhereUniqueInput[]
    disconnect?: user_experienceWhereUniqueInput | user_experienceWhereUniqueInput[]
    delete?: user_experienceWhereUniqueInput | user_experienceWhereUniqueInput[]
    connect?: user_experienceWhereUniqueInput | user_experienceWhereUniqueInput[]
    update?: user_experienceUpdateWithWhereUniqueWithoutUserInput | user_experienceUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: user_experienceUpdateManyWithWhereWithoutUserInput | user_experienceUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: user_experienceScalarWhereInput | user_experienceScalarWhereInput[]
  }

  export type user_projectUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<user_projectCreateWithoutUserInput, user_projectUncheckedCreateWithoutUserInput> | user_projectCreateWithoutUserInput[] | user_projectUncheckedCreateWithoutUserInput[]
    connectOrCreate?: user_projectCreateOrConnectWithoutUserInput | user_projectCreateOrConnectWithoutUserInput[]
    upsert?: user_projectUpsertWithWhereUniqueWithoutUserInput | user_projectUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: user_projectCreateManyUserInputEnvelope
    set?: user_projectWhereUniqueInput | user_projectWhereUniqueInput[]
    disconnect?: user_projectWhereUniqueInput | user_projectWhereUniqueInput[]
    delete?: user_projectWhereUniqueInput | user_projectWhereUniqueInput[]
    connect?: user_projectWhereUniqueInput | user_projectWhereUniqueInput[]
    update?: user_projectUpdateWithWhereUniqueWithoutUserInput | user_projectUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: user_projectUpdateManyWithWhereWithoutUserInput | user_projectUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: user_projectScalarWhereInput | user_projectScalarWhereInput[]
  }

  export type contactUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<contactCreateWithoutUserInput, contactUncheckedCreateWithoutUserInput> | contactCreateWithoutUserInput[] | contactUncheckedCreateWithoutUserInput[]
    connectOrCreate?: contactCreateOrConnectWithoutUserInput | contactCreateOrConnectWithoutUserInput[]
    upsert?: contactUpsertWithWhereUniqueWithoutUserInput | contactUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: contactCreateManyUserInputEnvelope
    set?: contactWhereUniqueInput | contactWhereUniqueInput[]
    disconnect?: contactWhereUniqueInput | contactWhereUniqueInput[]
    delete?: contactWhereUniqueInput | contactWhereUniqueInput[]
    connect?: contactWhereUniqueInput | contactWhereUniqueInput[]
    update?: contactUpdateWithWhereUniqueWithoutUserInput | contactUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: contactUpdateManyWithWhereWithoutUserInput | contactUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: contactScalarWhereInput | contactScalarWhereInput[]
  }

  export type AboutUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<AboutCreateWithoutUserInput, AboutUncheckedCreateWithoutUserInput> | AboutCreateWithoutUserInput[] | AboutUncheckedCreateWithoutUserInput[]
    connectOrCreate?: AboutCreateOrConnectWithoutUserInput | AboutCreateOrConnectWithoutUserInput[]
    upsert?: AboutUpsertWithWhereUniqueWithoutUserInput | AboutUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: AboutCreateManyUserInputEnvelope
    set?: AboutWhereUniqueInput | AboutWhereUniqueInput[]
    disconnect?: AboutWhereUniqueInput | AboutWhereUniqueInput[]
    delete?: AboutWhereUniqueInput | AboutWhereUniqueInput[]
    connect?: AboutWhereUniqueInput | AboutWhereUniqueInput[]
    update?: AboutUpdateWithWhereUniqueWithoutUserInput | AboutUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: AboutUpdateManyWithWhereWithoutUserInput | AboutUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: AboutScalarWhereInput | AboutScalarWhereInput[]
  }

  export type projectCreatetagsInput = {
    set: string[]
  }

  export type user_projectCreateNestedManyWithoutProjectInput = {
    create?: XOR<user_projectCreateWithoutProjectInput, user_projectUncheckedCreateWithoutProjectInput> | user_projectCreateWithoutProjectInput[] | user_projectUncheckedCreateWithoutProjectInput[]
    connectOrCreate?: user_projectCreateOrConnectWithoutProjectInput | user_projectCreateOrConnectWithoutProjectInput[]
    createMany?: user_projectCreateManyProjectInputEnvelope
    connect?: user_projectWhereUniqueInput | user_projectWhereUniqueInput[]
  }

  export type user_projectUncheckedCreateNestedManyWithoutProjectInput = {
    create?: XOR<user_projectCreateWithoutProjectInput, user_projectUncheckedCreateWithoutProjectInput> | user_projectCreateWithoutProjectInput[] | user_projectUncheckedCreateWithoutProjectInput[]
    connectOrCreate?: user_projectCreateOrConnectWithoutProjectInput | user_projectCreateOrConnectWithoutProjectInput[]
    createMany?: user_projectCreateManyProjectInputEnvelope
    connect?: user_projectWhereUniqueInput | user_projectWhereUniqueInput[]
  }

  export type projectUpdatetagsInput = {
    set?: string[]
    push?: string | string[]
  }

  export type user_projectUpdateManyWithoutProjectNestedInput = {
    create?: XOR<user_projectCreateWithoutProjectInput, user_projectUncheckedCreateWithoutProjectInput> | user_projectCreateWithoutProjectInput[] | user_projectUncheckedCreateWithoutProjectInput[]
    connectOrCreate?: user_projectCreateOrConnectWithoutProjectInput | user_projectCreateOrConnectWithoutProjectInput[]
    upsert?: user_projectUpsertWithWhereUniqueWithoutProjectInput | user_projectUpsertWithWhereUniqueWithoutProjectInput[]
    createMany?: user_projectCreateManyProjectInputEnvelope
    set?: user_projectWhereUniqueInput | user_projectWhereUniqueInput[]
    disconnect?: user_projectWhereUniqueInput | user_projectWhereUniqueInput[]
    delete?: user_projectWhereUniqueInput | user_projectWhereUniqueInput[]
    connect?: user_projectWhereUniqueInput | user_projectWhereUniqueInput[]
    update?: user_projectUpdateWithWhereUniqueWithoutProjectInput | user_projectUpdateWithWhereUniqueWithoutProjectInput[]
    updateMany?: user_projectUpdateManyWithWhereWithoutProjectInput | user_projectUpdateManyWithWhereWithoutProjectInput[]
    deleteMany?: user_projectScalarWhereInput | user_projectScalarWhereInput[]
  }

  export type user_projectUncheckedUpdateManyWithoutProjectNestedInput = {
    create?: XOR<user_projectCreateWithoutProjectInput, user_projectUncheckedCreateWithoutProjectInput> | user_projectCreateWithoutProjectInput[] | user_projectUncheckedCreateWithoutProjectInput[]
    connectOrCreate?: user_projectCreateOrConnectWithoutProjectInput | user_projectCreateOrConnectWithoutProjectInput[]
    upsert?: user_projectUpsertWithWhereUniqueWithoutProjectInput | user_projectUpsertWithWhereUniqueWithoutProjectInput[]
    createMany?: user_projectCreateManyProjectInputEnvelope
    set?: user_projectWhereUniqueInput | user_projectWhereUniqueInput[]
    disconnect?: user_projectWhereUniqueInput | user_projectWhereUniqueInput[]
    delete?: user_projectWhereUniqueInput | user_projectWhereUniqueInput[]
    connect?: user_projectWhereUniqueInput | user_projectWhereUniqueInput[]
    update?: user_projectUpdateWithWhereUniqueWithoutProjectInput | user_projectUpdateWithWhereUniqueWithoutProjectInput[]
    updateMany?: user_projectUpdateManyWithWhereWithoutProjectInput | user_projectUpdateManyWithWhereWithoutProjectInput[]
    deleteMany?: user_projectScalarWhereInput | user_projectScalarWhereInput[]
  }

  export type projectCreateNestedOneWithoutUser_projectInput = {
    create?: XOR<projectCreateWithoutUser_projectInput, projectUncheckedCreateWithoutUser_projectInput>
    connectOrCreate?: projectCreateOrConnectWithoutUser_projectInput
    connect?: projectWhereUniqueInput
  }

  export type userCreateNestedOneWithoutUser_projectInput = {
    create?: XOR<userCreateWithoutUser_projectInput, userUncheckedCreateWithoutUser_projectInput>
    connectOrCreate?: userCreateOrConnectWithoutUser_projectInput
    connect?: userWhereUniqueInput
  }

  export type projectUpdateOneRequiredWithoutUser_projectNestedInput = {
    create?: XOR<projectCreateWithoutUser_projectInput, projectUncheckedCreateWithoutUser_projectInput>
    connectOrCreate?: projectCreateOrConnectWithoutUser_projectInput
    upsert?: projectUpsertWithoutUser_projectInput
    connect?: projectWhereUniqueInput
    update?: XOR<XOR<projectUpdateToOneWithWhereWithoutUser_projectInput, projectUpdateWithoutUser_projectInput>, projectUncheckedUpdateWithoutUser_projectInput>
  }

  export type userUpdateOneRequiredWithoutUser_projectNestedInput = {
    create?: XOR<userCreateWithoutUser_projectInput, userUncheckedCreateWithoutUser_projectInput>
    connectOrCreate?: userCreateOrConnectWithoutUser_projectInput
    upsert?: userUpsertWithoutUser_projectInput
    connect?: userWhereUniqueInput
    update?: XOR<XOR<userUpdateToOneWithWhereWithoutUser_projectInput, userUpdateWithoutUser_projectInput>, userUncheckedUpdateWithoutUser_projectInput>
  }

  export type user_experienceCreateNestedManyWithoutExperienceInput = {
    create?: XOR<user_experienceCreateWithoutExperienceInput, user_experienceUncheckedCreateWithoutExperienceInput> | user_experienceCreateWithoutExperienceInput[] | user_experienceUncheckedCreateWithoutExperienceInput[]
    connectOrCreate?: user_experienceCreateOrConnectWithoutExperienceInput | user_experienceCreateOrConnectWithoutExperienceInput[]
    createMany?: user_experienceCreateManyExperienceInputEnvelope
    connect?: user_experienceWhereUniqueInput | user_experienceWhereUniqueInput[]
  }

  export type user_experienceUncheckedCreateNestedManyWithoutExperienceInput = {
    create?: XOR<user_experienceCreateWithoutExperienceInput, user_experienceUncheckedCreateWithoutExperienceInput> | user_experienceCreateWithoutExperienceInput[] | user_experienceUncheckedCreateWithoutExperienceInput[]
    connectOrCreate?: user_experienceCreateOrConnectWithoutExperienceInput | user_experienceCreateOrConnectWithoutExperienceInput[]
    createMany?: user_experienceCreateManyExperienceInputEnvelope
    connect?: user_experienceWhereUniqueInput | user_experienceWhereUniqueInput[]
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type user_experienceUpdateManyWithoutExperienceNestedInput = {
    create?: XOR<user_experienceCreateWithoutExperienceInput, user_experienceUncheckedCreateWithoutExperienceInput> | user_experienceCreateWithoutExperienceInput[] | user_experienceUncheckedCreateWithoutExperienceInput[]
    connectOrCreate?: user_experienceCreateOrConnectWithoutExperienceInput | user_experienceCreateOrConnectWithoutExperienceInput[]
    upsert?: user_experienceUpsertWithWhereUniqueWithoutExperienceInput | user_experienceUpsertWithWhereUniqueWithoutExperienceInput[]
    createMany?: user_experienceCreateManyExperienceInputEnvelope
    set?: user_experienceWhereUniqueInput | user_experienceWhereUniqueInput[]
    disconnect?: user_experienceWhereUniqueInput | user_experienceWhereUniqueInput[]
    delete?: user_experienceWhereUniqueInput | user_experienceWhereUniqueInput[]
    connect?: user_experienceWhereUniqueInput | user_experienceWhereUniqueInput[]
    update?: user_experienceUpdateWithWhereUniqueWithoutExperienceInput | user_experienceUpdateWithWhereUniqueWithoutExperienceInput[]
    updateMany?: user_experienceUpdateManyWithWhereWithoutExperienceInput | user_experienceUpdateManyWithWhereWithoutExperienceInput[]
    deleteMany?: user_experienceScalarWhereInput | user_experienceScalarWhereInput[]
  }

  export type user_experienceUncheckedUpdateManyWithoutExperienceNestedInput = {
    create?: XOR<user_experienceCreateWithoutExperienceInput, user_experienceUncheckedCreateWithoutExperienceInput> | user_experienceCreateWithoutExperienceInput[] | user_experienceUncheckedCreateWithoutExperienceInput[]
    connectOrCreate?: user_experienceCreateOrConnectWithoutExperienceInput | user_experienceCreateOrConnectWithoutExperienceInput[]
    upsert?: user_experienceUpsertWithWhereUniqueWithoutExperienceInput | user_experienceUpsertWithWhereUniqueWithoutExperienceInput[]
    createMany?: user_experienceCreateManyExperienceInputEnvelope
    set?: user_experienceWhereUniqueInput | user_experienceWhereUniqueInput[]
    disconnect?: user_experienceWhereUniqueInput | user_experienceWhereUniqueInput[]
    delete?: user_experienceWhereUniqueInput | user_experienceWhereUniqueInput[]
    connect?: user_experienceWhereUniqueInput | user_experienceWhereUniqueInput[]
    update?: user_experienceUpdateWithWhereUniqueWithoutExperienceInput | user_experienceUpdateWithWhereUniqueWithoutExperienceInput[]
    updateMany?: user_experienceUpdateManyWithWhereWithoutExperienceInput | user_experienceUpdateManyWithWhereWithoutExperienceInput[]
    deleteMany?: user_experienceScalarWhereInput | user_experienceScalarWhereInput[]
  }

  export type experienceCreateNestedOneWithoutUser_experienceInput = {
    create?: XOR<experienceCreateWithoutUser_experienceInput, experienceUncheckedCreateWithoutUser_experienceInput>
    connectOrCreate?: experienceCreateOrConnectWithoutUser_experienceInput
    connect?: experienceWhereUniqueInput
  }

  export type userCreateNestedOneWithoutUser_experienceInput = {
    create?: XOR<userCreateWithoutUser_experienceInput, userUncheckedCreateWithoutUser_experienceInput>
    connectOrCreate?: userCreateOrConnectWithoutUser_experienceInput
    connect?: userWhereUniqueInput
  }

  export type experienceUpdateOneRequiredWithoutUser_experienceNestedInput = {
    create?: XOR<experienceCreateWithoutUser_experienceInput, experienceUncheckedCreateWithoutUser_experienceInput>
    connectOrCreate?: experienceCreateOrConnectWithoutUser_experienceInput
    upsert?: experienceUpsertWithoutUser_experienceInput
    connect?: experienceWhereUniqueInput
    update?: XOR<XOR<experienceUpdateToOneWithWhereWithoutUser_experienceInput, experienceUpdateWithoutUser_experienceInput>, experienceUncheckedUpdateWithoutUser_experienceInput>
  }

  export type userUpdateOneRequiredWithoutUser_experienceNestedInput = {
    create?: XOR<userCreateWithoutUser_experienceInput, userUncheckedCreateWithoutUser_experienceInput>
    connectOrCreate?: userCreateOrConnectWithoutUser_experienceInput
    upsert?: userUpsertWithoutUser_experienceInput
    connect?: userWhereUniqueInput
    update?: XOR<XOR<userUpdateToOneWithWhereWithoutUser_experienceInput, userUpdateWithoutUser_experienceInput>, userUncheckedUpdateWithoutUser_experienceInput>
  }

  export type user_educationCreateNestedManyWithoutEducationInput = {
    create?: XOR<user_educationCreateWithoutEducationInput, user_educationUncheckedCreateWithoutEducationInput> | user_educationCreateWithoutEducationInput[] | user_educationUncheckedCreateWithoutEducationInput[]
    connectOrCreate?: user_educationCreateOrConnectWithoutEducationInput | user_educationCreateOrConnectWithoutEducationInput[]
    createMany?: user_educationCreateManyEducationInputEnvelope
    connect?: user_educationWhereUniqueInput | user_educationWhereUniqueInput[]
  }

  export type user_educationUncheckedCreateNestedManyWithoutEducationInput = {
    create?: XOR<user_educationCreateWithoutEducationInput, user_educationUncheckedCreateWithoutEducationInput> | user_educationCreateWithoutEducationInput[] | user_educationUncheckedCreateWithoutEducationInput[]
    connectOrCreate?: user_educationCreateOrConnectWithoutEducationInput | user_educationCreateOrConnectWithoutEducationInput[]
    createMany?: user_educationCreateManyEducationInputEnvelope
    connect?: user_educationWhereUniqueInput | user_educationWhereUniqueInput[]
  }

  export type user_educationUpdateManyWithoutEducationNestedInput = {
    create?: XOR<user_educationCreateWithoutEducationInput, user_educationUncheckedCreateWithoutEducationInput> | user_educationCreateWithoutEducationInput[] | user_educationUncheckedCreateWithoutEducationInput[]
    connectOrCreate?: user_educationCreateOrConnectWithoutEducationInput | user_educationCreateOrConnectWithoutEducationInput[]
    upsert?: user_educationUpsertWithWhereUniqueWithoutEducationInput | user_educationUpsertWithWhereUniqueWithoutEducationInput[]
    createMany?: user_educationCreateManyEducationInputEnvelope
    set?: user_educationWhereUniqueInput | user_educationWhereUniqueInput[]
    disconnect?: user_educationWhereUniqueInput | user_educationWhereUniqueInput[]
    delete?: user_educationWhereUniqueInput | user_educationWhereUniqueInput[]
    connect?: user_educationWhereUniqueInput | user_educationWhereUniqueInput[]
    update?: user_educationUpdateWithWhereUniqueWithoutEducationInput | user_educationUpdateWithWhereUniqueWithoutEducationInput[]
    updateMany?: user_educationUpdateManyWithWhereWithoutEducationInput | user_educationUpdateManyWithWhereWithoutEducationInput[]
    deleteMany?: user_educationScalarWhereInput | user_educationScalarWhereInput[]
  }

  export type user_educationUncheckedUpdateManyWithoutEducationNestedInput = {
    create?: XOR<user_educationCreateWithoutEducationInput, user_educationUncheckedCreateWithoutEducationInput> | user_educationCreateWithoutEducationInput[] | user_educationUncheckedCreateWithoutEducationInput[]
    connectOrCreate?: user_educationCreateOrConnectWithoutEducationInput | user_educationCreateOrConnectWithoutEducationInput[]
    upsert?: user_educationUpsertWithWhereUniqueWithoutEducationInput | user_educationUpsertWithWhereUniqueWithoutEducationInput[]
    createMany?: user_educationCreateManyEducationInputEnvelope
    set?: user_educationWhereUniqueInput | user_educationWhereUniqueInput[]
    disconnect?: user_educationWhereUniqueInput | user_educationWhereUniqueInput[]
    delete?: user_educationWhereUniqueInput | user_educationWhereUniqueInput[]
    connect?: user_educationWhereUniqueInput | user_educationWhereUniqueInput[]
    update?: user_educationUpdateWithWhereUniqueWithoutEducationInput | user_educationUpdateWithWhereUniqueWithoutEducationInput[]
    updateMany?: user_educationUpdateManyWithWhereWithoutEducationInput | user_educationUpdateManyWithWhereWithoutEducationInput[]
    deleteMany?: user_educationScalarWhereInput | user_educationScalarWhereInput[]
  }

  export type educationCreateNestedOneWithoutUser_educationInput = {
    create?: XOR<educationCreateWithoutUser_educationInput, educationUncheckedCreateWithoutUser_educationInput>
    connectOrCreate?: educationCreateOrConnectWithoutUser_educationInput
    connect?: educationWhereUniqueInput
  }

  export type userCreateNestedOneWithoutUser_educationInput = {
    create?: XOR<userCreateWithoutUser_educationInput, userUncheckedCreateWithoutUser_educationInput>
    connectOrCreate?: userCreateOrConnectWithoutUser_educationInput
    connect?: userWhereUniqueInput
  }

  export type educationUpdateOneRequiredWithoutUser_educationNestedInput = {
    create?: XOR<educationCreateWithoutUser_educationInput, educationUncheckedCreateWithoutUser_educationInput>
    connectOrCreate?: educationCreateOrConnectWithoutUser_educationInput
    upsert?: educationUpsertWithoutUser_educationInput
    connect?: educationWhereUniqueInput
    update?: XOR<XOR<educationUpdateToOneWithWhereWithoutUser_educationInput, educationUpdateWithoutUser_educationInput>, educationUncheckedUpdateWithoutUser_educationInput>
  }

  export type userUpdateOneRequiredWithoutUser_educationNestedInput = {
    create?: XOR<userCreateWithoutUser_educationInput, userUncheckedCreateWithoutUser_educationInput>
    connectOrCreate?: userCreateOrConnectWithoutUser_educationInput
    upsert?: userUpsertWithoutUser_educationInput
    connect?: userWhereUniqueInput
    update?: XOR<XOR<userUpdateToOneWithWhereWithoutUser_educationInput, userUpdateWithoutUser_educationInput>, userUncheckedUpdateWithoutUser_educationInput>
  }

  export type skillsCreatefrontendInput = {
    set: string[]
  }

  export type skillsCreatebackendInput = {
    set: string[]
  }

  export type skillsCreatedatabaseInput = {
    set: string[]
  }

  export type skillsCreatemobileInput = {
    set: string[]
  }

  export type skillsCreateotherInput = {
    set: string[]
  }

  export type skillsCreatelanguagesInput = {
    set: string[]
  }

  export type userCreateNestedOneWithoutSkillsInput = {
    create?: XOR<userCreateWithoutSkillsInput, userUncheckedCreateWithoutSkillsInput>
    connectOrCreate?: userCreateOrConnectWithoutSkillsInput
    connect?: userWhereUniqueInput
  }

  export type skillsUpdatefrontendInput = {
    set?: string[]
    push?: string | string[]
  }

  export type skillsUpdatebackendInput = {
    set?: string[]
    push?: string | string[]
  }

  export type skillsUpdatedatabaseInput = {
    set?: string[]
    push?: string | string[]
  }

  export type skillsUpdatemobileInput = {
    set?: string[]
    push?: string | string[]
  }

  export type skillsUpdateotherInput = {
    set?: string[]
    push?: string | string[]
  }

  export type skillsUpdatelanguagesInput = {
    set?: string[]
    push?: string | string[]
  }

  export type userUpdateOneRequiredWithoutSkillsNestedInput = {
    create?: XOR<userCreateWithoutSkillsInput, userUncheckedCreateWithoutSkillsInput>
    connectOrCreate?: userCreateOrConnectWithoutSkillsInput
    upsert?: userUpsertWithoutSkillsInput
    connect?: userWhereUniqueInput
    update?: XOR<XOR<userUpdateToOneWithWhereWithoutSkillsInput, userUpdateWithoutSkillsInput>, userUncheckedUpdateWithoutSkillsInput>
  }

  export type userCreateNestedOneWithoutContactInput = {
    create?: XOR<userCreateWithoutContactInput, userUncheckedCreateWithoutContactInput>
    connectOrCreate?: userCreateOrConnectWithoutContactInput
    connect?: userWhereUniqueInput
  }

  export type userUpdateOneRequiredWithoutContactNestedInput = {
    create?: XOR<userCreateWithoutContactInput, userUncheckedCreateWithoutContactInput>
    connectOrCreate?: userCreateOrConnectWithoutContactInput
    upsert?: userUpsertWithoutContactInput
    connect?: userWhereUniqueInput
    update?: XOR<XOR<userUpdateToOneWithWhereWithoutContactInput, userUpdateWithoutContactInput>, userUncheckedUpdateWithoutContactInput>
  }

  export type userCreateNestedOneWithoutAboutInput = {
    create?: XOR<userCreateWithoutAboutInput, userUncheckedCreateWithoutAboutInput>
    connectOrCreate?: userCreateOrConnectWithoutAboutInput
    connect?: userWhereUniqueInput
  }

  export type userUpdateOneRequiredWithoutAboutNestedInput = {
    create?: XOR<userCreateWithoutAboutInput, userUncheckedCreateWithoutAboutInput>
    connectOrCreate?: userCreateOrConnectWithoutAboutInput
    upsert?: userUpsertWithoutAboutInput
    connect?: userWhereUniqueInput
    update?: XOR<XOR<userUpdateToOneWithWhereWithoutAboutInput, userUpdateWithoutAboutInput>, userUncheckedUpdateWithoutAboutInput>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type skillsCreateWithoutUserInput = {
    frontend?: skillsCreatefrontendInput | string[]
    style: string
    backend?: skillsCreatebackendInput | string[]
    database?: skillsCreatedatabaseInput | string[]
    mobile?: skillsCreatemobileInput | string[]
    other?: skillsCreateotherInput | string[]
    languages?: skillsCreatelanguagesInput | string[]
  }

  export type skillsUncheckedCreateWithoutUserInput = {
    frontend?: skillsCreatefrontendInput | string[]
    style: string
    backend?: skillsCreatebackendInput | string[]
    database?: skillsCreatedatabaseInput | string[]
    mobile?: skillsCreatemobileInput | string[]
    other?: skillsCreateotherInput | string[]
    languages?: skillsCreatelanguagesInput | string[]
  }

  export type skillsCreateOrConnectWithoutUserInput = {
    where: skillsWhereUniqueInput
    create: XOR<skillsCreateWithoutUserInput, skillsUncheckedCreateWithoutUserInput>
  }

  export type user_educationCreateWithoutUserInput = {
    education: educationCreateNestedOneWithoutUser_educationInput
  }

  export type user_educationUncheckedCreateWithoutUserInput = {
    edid: number
  }

  export type user_educationCreateOrConnectWithoutUserInput = {
    where: user_educationWhereUniqueInput
    create: XOR<user_educationCreateWithoutUserInput, user_educationUncheckedCreateWithoutUserInput>
  }

  export type user_educationCreateManyUserInputEnvelope = {
    data: user_educationCreateManyUserInput | user_educationCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type user_experienceCreateWithoutUserInput = {
    experience: experienceCreateNestedOneWithoutUser_experienceInput
  }

  export type user_experienceUncheckedCreateWithoutUserInput = {
    eid: number
  }

  export type user_experienceCreateOrConnectWithoutUserInput = {
    where: user_experienceWhereUniqueInput
    create: XOR<user_experienceCreateWithoutUserInput, user_experienceUncheckedCreateWithoutUserInput>
  }

  export type user_experienceCreateManyUserInputEnvelope = {
    data: user_experienceCreateManyUserInput | user_experienceCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type user_projectCreateWithoutUserInput = {
    project: projectCreateNestedOneWithoutUser_projectInput
  }

  export type user_projectUncheckedCreateWithoutUserInput = {
    pid: number
  }

  export type user_projectCreateOrConnectWithoutUserInput = {
    where: user_projectWhereUniqueInput
    create: XOR<user_projectCreateWithoutUserInput, user_projectUncheckedCreateWithoutUserInput>
  }

  export type user_projectCreateManyUserInputEnvelope = {
    data: user_projectCreateManyUserInput | user_projectCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type contactCreateWithoutUserInput = {
    email: string
    phone: string
    location: string
    linkedin: string
  }

  export type contactUncheckedCreateWithoutUserInput = {
    email: string
    phone: string
    location: string
    linkedin: string
  }

  export type contactCreateOrConnectWithoutUserInput = {
    where: contactWhereUniqueInput
    create: XOR<contactCreateWithoutUserInput, contactUncheckedCreateWithoutUserInput>
  }

  export type contactCreateManyUserInputEnvelope = {
    data: contactCreateManyUserInput | contactCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type AboutCreateWithoutUserInput = {
    image: string
    about: string
    style: string
  }

  export type AboutUncheckedCreateWithoutUserInput = {
    image: string
    about: string
    style: string
  }

  export type AboutCreateOrConnectWithoutUserInput = {
    where: AboutWhereUniqueInput
    create: XOR<AboutCreateWithoutUserInput, AboutUncheckedCreateWithoutUserInput>
  }

  export type AboutCreateManyUserInputEnvelope = {
    data: AboutCreateManyUserInput | AboutCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type skillsUpsertWithoutUserInput = {
    update: XOR<skillsUpdateWithoutUserInput, skillsUncheckedUpdateWithoutUserInput>
    create: XOR<skillsCreateWithoutUserInput, skillsUncheckedCreateWithoutUserInput>
    where?: skillsWhereInput
  }

  export type skillsUpdateToOneWithWhereWithoutUserInput = {
    where?: skillsWhereInput
    data: XOR<skillsUpdateWithoutUserInput, skillsUncheckedUpdateWithoutUserInput>
  }

  export type skillsUpdateWithoutUserInput = {
    frontend?: skillsUpdatefrontendInput | string[]
    style?: StringFieldUpdateOperationsInput | string
    backend?: skillsUpdatebackendInput | string[]
    database?: skillsUpdatedatabaseInput | string[]
    mobile?: skillsUpdatemobileInput | string[]
    other?: skillsUpdateotherInput | string[]
    languages?: skillsUpdatelanguagesInput | string[]
  }

  export type skillsUncheckedUpdateWithoutUserInput = {
    frontend?: skillsUpdatefrontendInput | string[]
    style?: StringFieldUpdateOperationsInput | string
    backend?: skillsUpdatebackendInput | string[]
    database?: skillsUpdatedatabaseInput | string[]
    mobile?: skillsUpdatemobileInput | string[]
    other?: skillsUpdateotherInput | string[]
    languages?: skillsUpdatelanguagesInput | string[]
  }

  export type user_educationUpsertWithWhereUniqueWithoutUserInput = {
    where: user_educationWhereUniqueInput
    update: XOR<user_educationUpdateWithoutUserInput, user_educationUncheckedUpdateWithoutUserInput>
    create: XOR<user_educationCreateWithoutUserInput, user_educationUncheckedCreateWithoutUserInput>
  }

  export type user_educationUpdateWithWhereUniqueWithoutUserInput = {
    where: user_educationWhereUniqueInput
    data: XOR<user_educationUpdateWithoutUserInput, user_educationUncheckedUpdateWithoutUserInput>
  }

  export type user_educationUpdateManyWithWhereWithoutUserInput = {
    where: user_educationScalarWhereInput
    data: XOR<user_educationUpdateManyMutationInput, user_educationUncheckedUpdateManyWithoutUserInput>
  }

  export type user_educationScalarWhereInput = {
    AND?: user_educationScalarWhereInput | user_educationScalarWhereInput[]
    OR?: user_educationScalarWhereInput[]
    NOT?: user_educationScalarWhereInput | user_educationScalarWhereInput[]
    edid?: IntFilter<"user_education"> | number
    uid?: IntFilter<"user_education"> | number
  }

  export type user_experienceUpsertWithWhereUniqueWithoutUserInput = {
    where: user_experienceWhereUniqueInput
    update: XOR<user_experienceUpdateWithoutUserInput, user_experienceUncheckedUpdateWithoutUserInput>
    create: XOR<user_experienceCreateWithoutUserInput, user_experienceUncheckedCreateWithoutUserInput>
  }

  export type user_experienceUpdateWithWhereUniqueWithoutUserInput = {
    where: user_experienceWhereUniqueInput
    data: XOR<user_experienceUpdateWithoutUserInput, user_experienceUncheckedUpdateWithoutUserInput>
  }

  export type user_experienceUpdateManyWithWhereWithoutUserInput = {
    where: user_experienceScalarWhereInput
    data: XOR<user_experienceUpdateManyMutationInput, user_experienceUncheckedUpdateManyWithoutUserInput>
  }

  export type user_experienceScalarWhereInput = {
    AND?: user_experienceScalarWhereInput | user_experienceScalarWhereInput[]
    OR?: user_experienceScalarWhereInput[]
    NOT?: user_experienceScalarWhereInput | user_experienceScalarWhereInput[]
    eid?: IntFilter<"user_experience"> | number
    uid?: IntFilter<"user_experience"> | number
  }

  export type user_projectUpsertWithWhereUniqueWithoutUserInput = {
    where: user_projectWhereUniqueInput
    update: XOR<user_projectUpdateWithoutUserInput, user_projectUncheckedUpdateWithoutUserInput>
    create: XOR<user_projectCreateWithoutUserInput, user_projectUncheckedCreateWithoutUserInput>
  }

  export type user_projectUpdateWithWhereUniqueWithoutUserInput = {
    where: user_projectWhereUniqueInput
    data: XOR<user_projectUpdateWithoutUserInput, user_projectUncheckedUpdateWithoutUserInput>
  }

  export type user_projectUpdateManyWithWhereWithoutUserInput = {
    where: user_projectScalarWhereInput
    data: XOR<user_projectUpdateManyMutationInput, user_projectUncheckedUpdateManyWithoutUserInput>
  }

  export type user_projectScalarWhereInput = {
    AND?: user_projectScalarWhereInput | user_projectScalarWhereInput[]
    OR?: user_projectScalarWhereInput[]
    NOT?: user_projectScalarWhereInput | user_projectScalarWhereInput[]
    pid?: IntFilter<"user_project"> | number
    uid?: IntFilter<"user_project"> | number
  }

  export type contactUpsertWithWhereUniqueWithoutUserInput = {
    where: contactWhereUniqueInput
    update: XOR<contactUpdateWithoutUserInput, contactUncheckedUpdateWithoutUserInput>
    create: XOR<contactCreateWithoutUserInput, contactUncheckedCreateWithoutUserInput>
  }

  export type contactUpdateWithWhereUniqueWithoutUserInput = {
    where: contactWhereUniqueInput
    data: XOR<contactUpdateWithoutUserInput, contactUncheckedUpdateWithoutUserInput>
  }

  export type contactUpdateManyWithWhereWithoutUserInput = {
    where: contactScalarWhereInput
    data: XOR<contactUpdateManyMutationInput, contactUncheckedUpdateManyWithoutUserInput>
  }

  export type contactScalarWhereInput = {
    AND?: contactScalarWhereInput | contactScalarWhereInput[]
    OR?: contactScalarWhereInput[]
    NOT?: contactScalarWhereInput | contactScalarWhereInput[]
    uid?: IntFilter<"contact"> | number
    email?: StringFilter<"contact"> | string
    phone?: StringFilter<"contact"> | string
    location?: StringFilter<"contact"> | string
    linkedin?: StringFilter<"contact"> | string
  }

  export type AboutUpsertWithWhereUniqueWithoutUserInput = {
    where: AboutWhereUniqueInput
    update: XOR<AboutUpdateWithoutUserInput, AboutUncheckedUpdateWithoutUserInput>
    create: XOR<AboutCreateWithoutUserInput, AboutUncheckedCreateWithoutUserInput>
  }

  export type AboutUpdateWithWhereUniqueWithoutUserInput = {
    where: AboutWhereUniqueInput
    data: XOR<AboutUpdateWithoutUserInput, AboutUncheckedUpdateWithoutUserInput>
  }

  export type AboutUpdateManyWithWhereWithoutUserInput = {
    where: AboutScalarWhereInput
    data: XOR<AboutUpdateManyMutationInput, AboutUncheckedUpdateManyWithoutUserInput>
  }

  export type AboutScalarWhereInput = {
    AND?: AboutScalarWhereInput | AboutScalarWhereInput[]
    OR?: AboutScalarWhereInput[]
    NOT?: AboutScalarWhereInput | AboutScalarWhereInput[]
    uid?: IntFilter<"About"> | number
    image?: StringFilter<"About"> | string
    about?: StringFilter<"About"> | string
    style?: StringFilter<"About"> | string
  }

  export type user_projectCreateWithoutProjectInput = {
    user: userCreateNestedOneWithoutUser_projectInput
  }

  export type user_projectUncheckedCreateWithoutProjectInput = {
    uid: number
  }

  export type user_projectCreateOrConnectWithoutProjectInput = {
    where: user_projectWhereUniqueInput
    create: XOR<user_projectCreateWithoutProjectInput, user_projectUncheckedCreateWithoutProjectInput>
  }

  export type user_projectCreateManyProjectInputEnvelope = {
    data: user_projectCreateManyProjectInput | user_projectCreateManyProjectInput[]
    skipDuplicates?: boolean
  }

  export type user_projectUpsertWithWhereUniqueWithoutProjectInput = {
    where: user_projectWhereUniqueInput
    update: XOR<user_projectUpdateWithoutProjectInput, user_projectUncheckedUpdateWithoutProjectInput>
    create: XOR<user_projectCreateWithoutProjectInput, user_projectUncheckedCreateWithoutProjectInput>
  }

  export type user_projectUpdateWithWhereUniqueWithoutProjectInput = {
    where: user_projectWhereUniqueInput
    data: XOR<user_projectUpdateWithoutProjectInput, user_projectUncheckedUpdateWithoutProjectInput>
  }

  export type user_projectUpdateManyWithWhereWithoutProjectInput = {
    where: user_projectScalarWhereInput
    data: XOR<user_projectUpdateManyMutationInput, user_projectUncheckedUpdateManyWithoutProjectInput>
  }

  export type projectCreateWithoutUser_projectInput = {
    title: string
    image: string
    desc: string
    tags?: projectCreatetagsInput | string[]
    github: string
    Link: string
    style: string
  }

  export type projectUncheckedCreateWithoutUser_projectInput = {
    pid?: number
    title: string
    image: string
    desc: string
    tags?: projectCreatetagsInput | string[]
    github: string
    Link: string
    style: string
  }

  export type projectCreateOrConnectWithoutUser_projectInput = {
    where: projectWhereUniqueInput
    create: XOR<projectCreateWithoutUser_projectInput, projectUncheckedCreateWithoutUser_projectInput>
  }

  export type userCreateWithoutUser_projectInput = {
    username: string
    password: string
    style: string
    hero: string
    subhero: string
    skills?: skillsCreateNestedOneWithoutUserInput
    user_education?: user_educationCreateNestedManyWithoutUserInput
    user_experience?: user_experienceCreateNestedManyWithoutUserInput
    contact?: contactCreateNestedManyWithoutUserInput
    About?: AboutCreateNestedManyWithoutUserInput
  }

  export type userUncheckedCreateWithoutUser_projectInput = {
    uid?: number
    username: string
    password: string
    style: string
    hero: string
    subhero: string
    skills?: skillsUncheckedCreateNestedOneWithoutUserInput
    user_education?: user_educationUncheckedCreateNestedManyWithoutUserInput
    user_experience?: user_experienceUncheckedCreateNestedManyWithoutUserInput
    contact?: contactUncheckedCreateNestedManyWithoutUserInput
    About?: AboutUncheckedCreateNestedManyWithoutUserInput
  }

  export type userCreateOrConnectWithoutUser_projectInput = {
    where: userWhereUniqueInput
    create: XOR<userCreateWithoutUser_projectInput, userUncheckedCreateWithoutUser_projectInput>
  }

  export type projectUpsertWithoutUser_projectInput = {
    update: XOR<projectUpdateWithoutUser_projectInput, projectUncheckedUpdateWithoutUser_projectInput>
    create: XOR<projectCreateWithoutUser_projectInput, projectUncheckedCreateWithoutUser_projectInput>
    where?: projectWhereInput
  }

  export type projectUpdateToOneWithWhereWithoutUser_projectInput = {
    where?: projectWhereInput
    data: XOR<projectUpdateWithoutUser_projectInput, projectUncheckedUpdateWithoutUser_projectInput>
  }

  export type projectUpdateWithoutUser_projectInput = {
    title?: StringFieldUpdateOperationsInput | string
    image?: StringFieldUpdateOperationsInput | string
    desc?: StringFieldUpdateOperationsInput | string
    tags?: projectUpdatetagsInput | string[]
    github?: StringFieldUpdateOperationsInput | string
    Link?: StringFieldUpdateOperationsInput | string
    style?: StringFieldUpdateOperationsInput | string
  }

  export type projectUncheckedUpdateWithoutUser_projectInput = {
    pid?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    image?: StringFieldUpdateOperationsInput | string
    desc?: StringFieldUpdateOperationsInput | string
    tags?: projectUpdatetagsInput | string[]
    github?: StringFieldUpdateOperationsInput | string
    Link?: StringFieldUpdateOperationsInput | string
    style?: StringFieldUpdateOperationsInput | string
  }

  export type userUpsertWithoutUser_projectInput = {
    update: XOR<userUpdateWithoutUser_projectInput, userUncheckedUpdateWithoutUser_projectInput>
    create: XOR<userCreateWithoutUser_projectInput, userUncheckedCreateWithoutUser_projectInput>
    where?: userWhereInput
  }

  export type userUpdateToOneWithWhereWithoutUser_projectInput = {
    where?: userWhereInput
    data: XOR<userUpdateWithoutUser_projectInput, userUncheckedUpdateWithoutUser_projectInput>
  }

  export type userUpdateWithoutUser_projectInput = {
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    style?: StringFieldUpdateOperationsInput | string
    hero?: StringFieldUpdateOperationsInput | string
    subhero?: StringFieldUpdateOperationsInput | string
    skills?: skillsUpdateOneWithoutUserNestedInput
    user_education?: user_educationUpdateManyWithoutUserNestedInput
    user_experience?: user_experienceUpdateManyWithoutUserNestedInput
    contact?: contactUpdateManyWithoutUserNestedInput
    About?: AboutUpdateManyWithoutUserNestedInput
  }

  export type userUncheckedUpdateWithoutUser_projectInput = {
    uid?: IntFieldUpdateOperationsInput | number
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    style?: StringFieldUpdateOperationsInput | string
    hero?: StringFieldUpdateOperationsInput | string
    subhero?: StringFieldUpdateOperationsInput | string
    skills?: skillsUncheckedUpdateOneWithoutUserNestedInput
    user_education?: user_educationUncheckedUpdateManyWithoutUserNestedInput
    user_experience?: user_experienceUncheckedUpdateManyWithoutUserNestedInput
    contact?: contactUncheckedUpdateManyWithoutUserNestedInput
    About?: AboutUncheckedUpdateManyWithoutUserNestedInput
  }

  export type user_experienceCreateWithoutExperienceInput = {
    user: userCreateNestedOneWithoutUser_experienceInput
  }

  export type user_experienceUncheckedCreateWithoutExperienceInput = {
    uid: number
  }

  export type user_experienceCreateOrConnectWithoutExperienceInput = {
    where: user_experienceWhereUniqueInput
    create: XOR<user_experienceCreateWithoutExperienceInput, user_experienceUncheckedCreateWithoutExperienceInput>
  }

  export type user_experienceCreateManyExperienceInputEnvelope = {
    data: user_experienceCreateManyExperienceInput | user_experienceCreateManyExperienceInput[]
    skipDuplicates?: boolean
  }

  export type user_experienceUpsertWithWhereUniqueWithoutExperienceInput = {
    where: user_experienceWhereUniqueInput
    update: XOR<user_experienceUpdateWithoutExperienceInput, user_experienceUncheckedUpdateWithoutExperienceInput>
    create: XOR<user_experienceCreateWithoutExperienceInput, user_experienceUncheckedCreateWithoutExperienceInput>
  }

  export type user_experienceUpdateWithWhereUniqueWithoutExperienceInput = {
    where: user_experienceWhereUniqueInput
    data: XOR<user_experienceUpdateWithoutExperienceInput, user_experienceUncheckedUpdateWithoutExperienceInput>
  }

  export type user_experienceUpdateManyWithWhereWithoutExperienceInput = {
    where: user_experienceScalarWhereInput
    data: XOR<user_experienceUpdateManyMutationInput, user_experienceUncheckedUpdateManyWithoutExperienceInput>
  }

  export type experienceCreateWithoutUser_experienceInput = {
    title: string
    corp: string
    style: string
    startdate: Date | string
    enddate: Date | string
    desc: string
  }

  export type experienceUncheckedCreateWithoutUser_experienceInput = {
    eid?: number
    title: string
    corp: string
    style: string
    startdate: Date | string
    enddate: Date | string
    desc: string
  }

  export type experienceCreateOrConnectWithoutUser_experienceInput = {
    where: experienceWhereUniqueInput
    create: XOR<experienceCreateWithoutUser_experienceInput, experienceUncheckedCreateWithoutUser_experienceInput>
  }

  export type userCreateWithoutUser_experienceInput = {
    username: string
    password: string
    style: string
    hero: string
    subhero: string
    skills?: skillsCreateNestedOneWithoutUserInput
    user_education?: user_educationCreateNestedManyWithoutUserInput
    user_project?: user_projectCreateNestedManyWithoutUserInput
    contact?: contactCreateNestedManyWithoutUserInput
    About?: AboutCreateNestedManyWithoutUserInput
  }

  export type userUncheckedCreateWithoutUser_experienceInput = {
    uid?: number
    username: string
    password: string
    style: string
    hero: string
    subhero: string
    skills?: skillsUncheckedCreateNestedOneWithoutUserInput
    user_education?: user_educationUncheckedCreateNestedManyWithoutUserInput
    user_project?: user_projectUncheckedCreateNestedManyWithoutUserInput
    contact?: contactUncheckedCreateNestedManyWithoutUserInput
    About?: AboutUncheckedCreateNestedManyWithoutUserInput
  }

  export type userCreateOrConnectWithoutUser_experienceInput = {
    where: userWhereUniqueInput
    create: XOR<userCreateWithoutUser_experienceInput, userUncheckedCreateWithoutUser_experienceInput>
  }

  export type experienceUpsertWithoutUser_experienceInput = {
    update: XOR<experienceUpdateWithoutUser_experienceInput, experienceUncheckedUpdateWithoutUser_experienceInput>
    create: XOR<experienceCreateWithoutUser_experienceInput, experienceUncheckedCreateWithoutUser_experienceInput>
    where?: experienceWhereInput
  }

  export type experienceUpdateToOneWithWhereWithoutUser_experienceInput = {
    where?: experienceWhereInput
    data: XOR<experienceUpdateWithoutUser_experienceInput, experienceUncheckedUpdateWithoutUser_experienceInput>
  }

  export type experienceUpdateWithoutUser_experienceInput = {
    title?: StringFieldUpdateOperationsInput | string
    corp?: StringFieldUpdateOperationsInput | string
    style?: StringFieldUpdateOperationsInput | string
    startdate?: DateTimeFieldUpdateOperationsInput | Date | string
    enddate?: DateTimeFieldUpdateOperationsInput | Date | string
    desc?: StringFieldUpdateOperationsInput | string
  }

  export type experienceUncheckedUpdateWithoutUser_experienceInput = {
    eid?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    corp?: StringFieldUpdateOperationsInput | string
    style?: StringFieldUpdateOperationsInput | string
    startdate?: DateTimeFieldUpdateOperationsInput | Date | string
    enddate?: DateTimeFieldUpdateOperationsInput | Date | string
    desc?: StringFieldUpdateOperationsInput | string
  }

  export type userUpsertWithoutUser_experienceInput = {
    update: XOR<userUpdateWithoutUser_experienceInput, userUncheckedUpdateWithoutUser_experienceInput>
    create: XOR<userCreateWithoutUser_experienceInput, userUncheckedCreateWithoutUser_experienceInput>
    where?: userWhereInput
  }

  export type userUpdateToOneWithWhereWithoutUser_experienceInput = {
    where?: userWhereInput
    data: XOR<userUpdateWithoutUser_experienceInput, userUncheckedUpdateWithoutUser_experienceInput>
  }

  export type userUpdateWithoutUser_experienceInput = {
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    style?: StringFieldUpdateOperationsInput | string
    hero?: StringFieldUpdateOperationsInput | string
    subhero?: StringFieldUpdateOperationsInput | string
    skills?: skillsUpdateOneWithoutUserNestedInput
    user_education?: user_educationUpdateManyWithoutUserNestedInput
    user_project?: user_projectUpdateManyWithoutUserNestedInput
    contact?: contactUpdateManyWithoutUserNestedInput
    About?: AboutUpdateManyWithoutUserNestedInput
  }

  export type userUncheckedUpdateWithoutUser_experienceInput = {
    uid?: IntFieldUpdateOperationsInput | number
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    style?: StringFieldUpdateOperationsInput | string
    hero?: StringFieldUpdateOperationsInput | string
    subhero?: StringFieldUpdateOperationsInput | string
    skills?: skillsUncheckedUpdateOneWithoutUserNestedInput
    user_education?: user_educationUncheckedUpdateManyWithoutUserNestedInput
    user_project?: user_projectUncheckedUpdateManyWithoutUserNestedInput
    contact?: contactUncheckedUpdateManyWithoutUserNestedInput
    About?: AboutUncheckedUpdateManyWithoutUserNestedInput
  }

  export type user_educationCreateWithoutEducationInput = {
    user: userCreateNestedOneWithoutUser_educationInput
  }

  export type user_educationUncheckedCreateWithoutEducationInput = {
    uid: number
  }

  export type user_educationCreateOrConnectWithoutEducationInput = {
    where: user_educationWhereUniqueInput
    create: XOR<user_educationCreateWithoutEducationInput, user_educationUncheckedCreateWithoutEducationInput>
  }

  export type user_educationCreateManyEducationInputEnvelope = {
    data: user_educationCreateManyEducationInput | user_educationCreateManyEducationInput[]
    skipDuplicates?: boolean
  }

  export type user_educationUpsertWithWhereUniqueWithoutEducationInput = {
    where: user_educationWhereUniqueInput
    update: XOR<user_educationUpdateWithoutEducationInput, user_educationUncheckedUpdateWithoutEducationInput>
    create: XOR<user_educationCreateWithoutEducationInput, user_educationUncheckedCreateWithoutEducationInput>
  }

  export type user_educationUpdateWithWhereUniqueWithoutEducationInput = {
    where: user_educationWhereUniqueInput
    data: XOR<user_educationUpdateWithoutEducationInput, user_educationUncheckedUpdateWithoutEducationInput>
  }

  export type user_educationUpdateManyWithWhereWithoutEducationInput = {
    where: user_educationScalarWhereInput
    data: XOR<user_educationUpdateManyMutationInput, user_educationUncheckedUpdateManyWithoutEducationInput>
  }

  export type educationCreateWithoutUser_educationInput = {
    inst: string
    degree: string
    startdate: Date | string
    enddate: Date | string
    style: string
  }

  export type educationUncheckedCreateWithoutUser_educationInput = {
    edid?: number
    inst: string
    degree: string
    startdate: Date | string
    enddate: Date | string
    style: string
  }

  export type educationCreateOrConnectWithoutUser_educationInput = {
    where: educationWhereUniqueInput
    create: XOR<educationCreateWithoutUser_educationInput, educationUncheckedCreateWithoutUser_educationInput>
  }

  export type userCreateWithoutUser_educationInput = {
    username: string
    password: string
    style: string
    hero: string
    subhero: string
    skills?: skillsCreateNestedOneWithoutUserInput
    user_experience?: user_experienceCreateNestedManyWithoutUserInput
    user_project?: user_projectCreateNestedManyWithoutUserInput
    contact?: contactCreateNestedManyWithoutUserInput
    About?: AboutCreateNestedManyWithoutUserInput
  }

  export type userUncheckedCreateWithoutUser_educationInput = {
    uid?: number
    username: string
    password: string
    style: string
    hero: string
    subhero: string
    skills?: skillsUncheckedCreateNestedOneWithoutUserInput
    user_experience?: user_experienceUncheckedCreateNestedManyWithoutUserInput
    user_project?: user_projectUncheckedCreateNestedManyWithoutUserInput
    contact?: contactUncheckedCreateNestedManyWithoutUserInput
    About?: AboutUncheckedCreateNestedManyWithoutUserInput
  }

  export type userCreateOrConnectWithoutUser_educationInput = {
    where: userWhereUniqueInput
    create: XOR<userCreateWithoutUser_educationInput, userUncheckedCreateWithoutUser_educationInput>
  }

  export type educationUpsertWithoutUser_educationInput = {
    update: XOR<educationUpdateWithoutUser_educationInput, educationUncheckedUpdateWithoutUser_educationInput>
    create: XOR<educationCreateWithoutUser_educationInput, educationUncheckedCreateWithoutUser_educationInput>
    where?: educationWhereInput
  }

  export type educationUpdateToOneWithWhereWithoutUser_educationInput = {
    where?: educationWhereInput
    data: XOR<educationUpdateWithoutUser_educationInput, educationUncheckedUpdateWithoutUser_educationInput>
  }

  export type educationUpdateWithoutUser_educationInput = {
    inst?: StringFieldUpdateOperationsInput | string
    degree?: StringFieldUpdateOperationsInput | string
    startdate?: DateTimeFieldUpdateOperationsInput | Date | string
    enddate?: DateTimeFieldUpdateOperationsInput | Date | string
    style?: StringFieldUpdateOperationsInput | string
  }

  export type educationUncheckedUpdateWithoutUser_educationInput = {
    edid?: IntFieldUpdateOperationsInput | number
    inst?: StringFieldUpdateOperationsInput | string
    degree?: StringFieldUpdateOperationsInput | string
    startdate?: DateTimeFieldUpdateOperationsInput | Date | string
    enddate?: DateTimeFieldUpdateOperationsInput | Date | string
    style?: StringFieldUpdateOperationsInput | string
  }

  export type userUpsertWithoutUser_educationInput = {
    update: XOR<userUpdateWithoutUser_educationInput, userUncheckedUpdateWithoutUser_educationInput>
    create: XOR<userCreateWithoutUser_educationInput, userUncheckedCreateWithoutUser_educationInput>
    where?: userWhereInput
  }

  export type userUpdateToOneWithWhereWithoutUser_educationInput = {
    where?: userWhereInput
    data: XOR<userUpdateWithoutUser_educationInput, userUncheckedUpdateWithoutUser_educationInput>
  }

  export type userUpdateWithoutUser_educationInput = {
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    style?: StringFieldUpdateOperationsInput | string
    hero?: StringFieldUpdateOperationsInput | string
    subhero?: StringFieldUpdateOperationsInput | string
    skills?: skillsUpdateOneWithoutUserNestedInput
    user_experience?: user_experienceUpdateManyWithoutUserNestedInput
    user_project?: user_projectUpdateManyWithoutUserNestedInput
    contact?: contactUpdateManyWithoutUserNestedInput
    About?: AboutUpdateManyWithoutUserNestedInput
  }

  export type userUncheckedUpdateWithoutUser_educationInput = {
    uid?: IntFieldUpdateOperationsInput | number
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    style?: StringFieldUpdateOperationsInput | string
    hero?: StringFieldUpdateOperationsInput | string
    subhero?: StringFieldUpdateOperationsInput | string
    skills?: skillsUncheckedUpdateOneWithoutUserNestedInput
    user_experience?: user_experienceUncheckedUpdateManyWithoutUserNestedInput
    user_project?: user_projectUncheckedUpdateManyWithoutUserNestedInput
    contact?: contactUncheckedUpdateManyWithoutUserNestedInput
    About?: AboutUncheckedUpdateManyWithoutUserNestedInput
  }

  export type userCreateWithoutSkillsInput = {
    username: string
    password: string
    style: string
    hero: string
    subhero: string
    user_education?: user_educationCreateNestedManyWithoutUserInput
    user_experience?: user_experienceCreateNestedManyWithoutUserInput
    user_project?: user_projectCreateNestedManyWithoutUserInput
    contact?: contactCreateNestedManyWithoutUserInput
    About?: AboutCreateNestedManyWithoutUserInput
  }

  export type userUncheckedCreateWithoutSkillsInput = {
    uid?: number
    username: string
    password: string
    style: string
    hero: string
    subhero: string
    user_education?: user_educationUncheckedCreateNestedManyWithoutUserInput
    user_experience?: user_experienceUncheckedCreateNestedManyWithoutUserInput
    user_project?: user_projectUncheckedCreateNestedManyWithoutUserInput
    contact?: contactUncheckedCreateNestedManyWithoutUserInput
    About?: AboutUncheckedCreateNestedManyWithoutUserInput
  }

  export type userCreateOrConnectWithoutSkillsInput = {
    where: userWhereUniqueInput
    create: XOR<userCreateWithoutSkillsInput, userUncheckedCreateWithoutSkillsInput>
  }

  export type userUpsertWithoutSkillsInput = {
    update: XOR<userUpdateWithoutSkillsInput, userUncheckedUpdateWithoutSkillsInput>
    create: XOR<userCreateWithoutSkillsInput, userUncheckedCreateWithoutSkillsInput>
    where?: userWhereInput
  }

  export type userUpdateToOneWithWhereWithoutSkillsInput = {
    where?: userWhereInput
    data: XOR<userUpdateWithoutSkillsInput, userUncheckedUpdateWithoutSkillsInput>
  }

  export type userUpdateWithoutSkillsInput = {
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    style?: StringFieldUpdateOperationsInput | string
    hero?: StringFieldUpdateOperationsInput | string
    subhero?: StringFieldUpdateOperationsInput | string
    user_education?: user_educationUpdateManyWithoutUserNestedInput
    user_experience?: user_experienceUpdateManyWithoutUserNestedInput
    user_project?: user_projectUpdateManyWithoutUserNestedInput
    contact?: contactUpdateManyWithoutUserNestedInput
    About?: AboutUpdateManyWithoutUserNestedInput
  }

  export type userUncheckedUpdateWithoutSkillsInput = {
    uid?: IntFieldUpdateOperationsInput | number
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    style?: StringFieldUpdateOperationsInput | string
    hero?: StringFieldUpdateOperationsInput | string
    subhero?: StringFieldUpdateOperationsInput | string
    user_education?: user_educationUncheckedUpdateManyWithoutUserNestedInput
    user_experience?: user_experienceUncheckedUpdateManyWithoutUserNestedInput
    user_project?: user_projectUncheckedUpdateManyWithoutUserNestedInput
    contact?: contactUncheckedUpdateManyWithoutUserNestedInput
    About?: AboutUncheckedUpdateManyWithoutUserNestedInput
  }

  export type userCreateWithoutContactInput = {
    username: string
    password: string
    style: string
    hero: string
    subhero: string
    skills?: skillsCreateNestedOneWithoutUserInput
    user_education?: user_educationCreateNestedManyWithoutUserInput
    user_experience?: user_experienceCreateNestedManyWithoutUserInput
    user_project?: user_projectCreateNestedManyWithoutUserInput
    About?: AboutCreateNestedManyWithoutUserInput
  }

  export type userUncheckedCreateWithoutContactInput = {
    uid?: number
    username: string
    password: string
    style: string
    hero: string
    subhero: string
    skills?: skillsUncheckedCreateNestedOneWithoutUserInput
    user_education?: user_educationUncheckedCreateNestedManyWithoutUserInput
    user_experience?: user_experienceUncheckedCreateNestedManyWithoutUserInput
    user_project?: user_projectUncheckedCreateNestedManyWithoutUserInput
    About?: AboutUncheckedCreateNestedManyWithoutUserInput
  }

  export type userCreateOrConnectWithoutContactInput = {
    where: userWhereUniqueInput
    create: XOR<userCreateWithoutContactInput, userUncheckedCreateWithoutContactInput>
  }

  export type userUpsertWithoutContactInput = {
    update: XOR<userUpdateWithoutContactInput, userUncheckedUpdateWithoutContactInput>
    create: XOR<userCreateWithoutContactInput, userUncheckedCreateWithoutContactInput>
    where?: userWhereInput
  }

  export type userUpdateToOneWithWhereWithoutContactInput = {
    where?: userWhereInput
    data: XOR<userUpdateWithoutContactInput, userUncheckedUpdateWithoutContactInput>
  }

  export type userUpdateWithoutContactInput = {
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    style?: StringFieldUpdateOperationsInput | string
    hero?: StringFieldUpdateOperationsInput | string
    subhero?: StringFieldUpdateOperationsInput | string
    skills?: skillsUpdateOneWithoutUserNestedInput
    user_education?: user_educationUpdateManyWithoutUserNestedInput
    user_experience?: user_experienceUpdateManyWithoutUserNestedInput
    user_project?: user_projectUpdateManyWithoutUserNestedInput
    About?: AboutUpdateManyWithoutUserNestedInput
  }

  export type userUncheckedUpdateWithoutContactInput = {
    uid?: IntFieldUpdateOperationsInput | number
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    style?: StringFieldUpdateOperationsInput | string
    hero?: StringFieldUpdateOperationsInput | string
    subhero?: StringFieldUpdateOperationsInput | string
    skills?: skillsUncheckedUpdateOneWithoutUserNestedInput
    user_education?: user_educationUncheckedUpdateManyWithoutUserNestedInput
    user_experience?: user_experienceUncheckedUpdateManyWithoutUserNestedInput
    user_project?: user_projectUncheckedUpdateManyWithoutUserNestedInput
    About?: AboutUncheckedUpdateManyWithoutUserNestedInput
  }

  export type userCreateWithoutAboutInput = {
    username: string
    password: string
    style: string
    hero: string
    subhero: string
    skills?: skillsCreateNestedOneWithoutUserInput
    user_education?: user_educationCreateNestedManyWithoutUserInput
    user_experience?: user_experienceCreateNestedManyWithoutUserInput
    user_project?: user_projectCreateNestedManyWithoutUserInput
    contact?: contactCreateNestedManyWithoutUserInput
  }

  export type userUncheckedCreateWithoutAboutInput = {
    uid?: number
    username: string
    password: string
    style: string
    hero: string
    subhero: string
    skills?: skillsUncheckedCreateNestedOneWithoutUserInput
    user_education?: user_educationUncheckedCreateNestedManyWithoutUserInput
    user_experience?: user_experienceUncheckedCreateNestedManyWithoutUserInput
    user_project?: user_projectUncheckedCreateNestedManyWithoutUserInput
    contact?: contactUncheckedCreateNestedManyWithoutUserInput
  }

  export type userCreateOrConnectWithoutAboutInput = {
    where: userWhereUniqueInput
    create: XOR<userCreateWithoutAboutInput, userUncheckedCreateWithoutAboutInput>
  }

  export type userUpsertWithoutAboutInput = {
    update: XOR<userUpdateWithoutAboutInput, userUncheckedUpdateWithoutAboutInput>
    create: XOR<userCreateWithoutAboutInput, userUncheckedCreateWithoutAboutInput>
    where?: userWhereInput
  }

  export type userUpdateToOneWithWhereWithoutAboutInput = {
    where?: userWhereInput
    data: XOR<userUpdateWithoutAboutInput, userUncheckedUpdateWithoutAboutInput>
  }

  export type userUpdateWithoutAboutInput = {
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    style?: StringFieldUpdateOperationsInput | string
    hero?: StringFieldUpdateOperationsInput | string
    subhero?: StringFieldUpdateOperationsInput | string
    skills?: skillsUpdateOneWithoutUserNestedInput
    user_education?: user_educationUpdateManyWithoutUserNestedInput
    user_experience?: user_experienceUpdateManyWithoutUserNestedInput
    user_project?: user_projectUpdateManyWithoutUserNestedInput
    contact?: contactUpdateManyWithoutUserNestedInput
  }

  export type userUncheckedUpdateWithoutAboutInput = {
    uid?: IntFieldUpdateOperationsInput | number
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    style?: StringFieldUpdateOperationsInput | string
    hero?: StringFieldUpdateOperationsInput | string
    subhero?: StringFieldUpdateOperationsInput | string
    skills?: skillsUncheckedUpdateOneWithoutUserNestedInput
    user_education?: user_educationUncheckedUpdateManyWithoutUserNestedInput
    user_experience?: user_experienceUncheckedUpdateManyWithoutUserNestedInput
    user_project?: user_projectUncheckedUpdateManyWithoutUserNestedInput
    contact?: contactUncheckedUpdateManyWithoutUserNestedInput
  }

  export type user_educationCreateManyUserInput = {
    edid: number
  }

  export type user_experienceCreateManyUserInput = {
    eid: number
  }

  export type user_projectCreateManyUserInput = {
    pid: number
  }

  export type contactCreateManyUserInput = {
    email: string
    phone: string
    location: string
    linkedin: string
  }

  export type AboutCreateManyUserInput = {
    image: string
    about: string
    style: string
  }

  export type user_educationUpdateWithoutUserInput = {
    education?: educationUpdateOneRequiredWithoutUser_educationNestedInput
  }

  export type user_educationUncheckedUpdateWithoutUserInput = {
    edid?: IntFieldUpdateOperationsInput | number
  }

  export type user_educationUncheckedUpdateManyWithoutUserInput = {
    edid?: IntFieldUpdateOperationsInput | number
  }

  export type user_experienceUpdateWithoutUserInput = {
    experience?: experienceUpdateOneRequiredWithoutUser_experienceNestedInput
  }

  export type user_experienceUncheckedUpdateWithoutUserInput = {
    eid?: IntFieldUpdateOperationsInput | number
  }

  export type user_experienceUncheckedUpdateManyWithoutUserInput = {
    eid?: IntFieldUpdateOperationsInput | number
  }

  export type user_projectUpdateWithoutUserInput = {
    project?: projectUpdateOneRequiredWithoutUser_projectNestedInput
  }

  export type user_projectUncheckedUpdateWithoutUserInput = {
    pid?: IntFieldUpdateOperationsInput | number
  }

  export type user_projectUncheckedUpdateManyWithoutUserInput = {
    pid?: IntFieldUpdateOperationsInput | number
  }

  export type contactUpdateWithoutUserInput = {
    email?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    location?: StringFieldUpdateOperationsInput | string
    linkedin?: StringFieldUpdateOperationsInput | string
  }

  export type contactUncheckedUpdateWithoutUserInput = {
    email?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    location?: StringFieldUpdateOperationsInput | string
    linkedin?: StringFieldUpdateOperationsInput | string
  }

  export type contactUncheckedUpdateManyWithoutUserInput = {
    email?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    location?: StringFieldUpdateOperationsInput | string
    linkedin?: StringFieldUpdateOperationsInput | string
  }

  export type AboutUpdateWithoutUserInput = {
    image?: StringFieldUpdateOperationsInput | string
    about?: StringFieldUpdateOperationsInput | string
    style?: StringFieldUpdateOperationsInput | string
  }

  export type AboutUncheckedUpdateWithoutUserInput = {
    image?: StringFieldUpdateOperationsInput | string
    about?: StringFieldUpdateOperationsInput | string
    style?: StringFieldUpdateOperationsInput | string
  }

  export type AboutUncheckedUpdateManyWithoutUserInput = {
    image?: StringFieldUpdateOperationsInput | string
    about?: StringFieldUpdateOperationsInput | string
    style?: StringFieldUpdateOperationsInput | string
  }

  export type user_projectCreateManyProjectInput = {
    uid: number
  }

  export type user_projectUpdateWithoutProjectInput = {
    user?: userUpdateOneRequiredWithoutUser_projectNestedInput
  }

  export type user_projectUncheckedUpdateWithoutProjectInput = {
    uid?: IntFieldUpdateOperationsInput | number
  }

  export type user_projectUncheckedUpdateManyWithoutProjectInput = {
    uid?: IntFieldUpdateOperationsInput | number
  }

  export type user_experienceCreateManyExperienceInput = {
    uid: number
  }

  export type user_experienceUpdateWithoutExperienceInput = {
    user?: userUpdateOneRequiredWithoutUser_experienceNestedInput
  }

  export type user_experienceUncheckedUpdateWithoutExperienceInput = {
    uid?: IntFieldUpdateOperationsInput | number
  }

  export type user_experienceUncheckedUpdateManyWithoutExperienceInput = {
    uid?: IntFieldUpdateOperationsInput | number
  }

  export type user_educationCreateManyEducationInput = {
    uid: number
  }

  export type user_educationUpdateWithoutEducationInput = {
    user?: userUpdateOneRequiredWithoutUser_educationNestedInput
  }

  export type user_educationUncheckedUpdateWithoutEducationInput = {
    uid?: IntFieldUpdateOperationsInput | number
  }

  export type user_educationUncheckedUpdateManyWithoutEducationInput = {
    uid?: IntFieldUpdateOperationsInput | number
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}