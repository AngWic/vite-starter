export default function ExerciseTs() {
  //UTILITY TYPES:

  type User = {
    name: string;
    age: number;
    address: string;
    occupation: string;
  };

  type BasicUser = Pick<User, "name" | "age">; //da ten sam wynik, co BasicUserA
  //wynik:
  // type BasicUser = {
  //   name: string;
  //   age: number;
  // }

  type BasicUserAlt = Pick<User, "name">;

  type BasicUserA = Omit<User, "address" | "occupation">;

  type PartialUser = Partial<User>;

  //to samo, co:
  // type PartialUser = {
  //   name?: string;
  //   age?: number;
  //   address?: string;
  //   occupation?: string;
  // }

  type Location = {
    country: string;
    amountOfCitizens: number;
    capital: string;
    currency: string;
  };

  type BasicLocation = Omit<Location, "amountOfCitizens" | "currency">;

  type PartialLocation = Partial<Location>;

  const LocationInfo = {
    country: "Republic of Ireland",
    amountOfCitizens: 5224884,
    capital: "Dublin",
    currency: "euro",
    anthem: "Amhrán na bhFiann",
  };

  function showLocationInfo(LocationInfo: BasicLocation): BasicLocation {
    return { country: LocationInfo.country, capital: LocationInfo.capital };
  }

  console.log("location info: ", showLocationInfo(LocationInfo));

  function showLocationOptional(
    LocationInfo: PartialLocation
  ): PartialLocation {
    return { country: LocationInfo.country };
  }

  console.log("optional location info: ", showLocationOptional(LocationInfo));

  const userData = {
    name: "Anna",
    age: 45,
  };

  function user(userData: BasicUser): BasicUserAlt {
    return { name: userData.name };
  }

  //GENERIC TYPES
  // one
  function someFunc<T, U, W>(arg1: T, arg2: U, arg3: W): [T, U, W] {
    return [arg1, arg2, arg3];

    // `${arg1} ${arg2} ${arg3}!`; //NIE DZIAŁA: Type 'string' is not assignable to type '[T, U, W]'.
  }
  //   someFunc<string>("Awesome!"); // Awesome
  //GENERIC TYPES
  // two
  type Add<T> = (a: T, b: T) => T;

  const addNumbers: Add<number> = (a, b) => {
    return a + b;
  };

  const addStrings: Add<string> = (a, b) => {
    return a + b;
  };

  return (
    <>
      <h3>Exercises with TypeScript</h3>

      <div>{someFunc<string, string, string>("you ", "are ", "awesome!")}</div>
      <div></div>
    </>
  );
}
