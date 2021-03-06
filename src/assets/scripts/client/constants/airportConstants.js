/**
 * @enum AIRPORT_CONSTANTS {object}
 * @type {object}
 * @final
 */
export const AIRPORT_CONSTANTS = {
    /**
     * @memberof AIRPORT_CONSTANTS
     * @property DEFAULT_SPAWN_ALTITUDE_MIN
     * @type {number}
     * @final
     */
    DEFAULT_SPAWN_ALTITUDE_MIN: 10000,

    /**
     * @memberof AIRPORT_CONSTANTS
     * @property DEFAULT_SPAWN_ALTITUDE_MAX
     * @type {number}
     * @final
     */
    DEFAULT_SPAWN_ALTITUDE_MAX: 10000,

    /**
     * @memberof AIRPORT_CONSTANTS
     * @property DEFAULT_SPAWN_AIRCRAFT_SPEED_KTS
     * @type {number}
     * @final
     */
    DEFAULT_SPAWN_AIRCRAFT_SPEED_KTS: 250,

    /**
     * Maximum allowable indicated airspeed for aircraft below 10,000 feet MSL
     *
     * @memberof AIRPORT_CONSTANTS
     * @property MAX_SPEED_BELOW_10K_FEET
     * @type {Number}
     * @final
     */
    MAX_SPEED_BELOW_10K_FEET: 250,

    /**
     * @memberof AIRPORT_CONSTANTS
     * @property MIN_ENTRAIL_DISTANCE_NM
     * @type {number}
     * @final
     */
    MIN_ENTRAIL_DISTANCE_NM: 5.5
};

/**
 * List of control positions at the airport, used to differentiate which ATC callsign to used
 *
 * @enum AIRPORT_CONTROL_POSITION_NAME
 * @type {object}
 * @final
 */
export const AIRPORT_CONTROL_POSITION_NAME = {
    /**
    * Provides approach control services
    *
    * @memberof AIRPORT_CONTROL_POSITION_NAME
    * @property APPROACH
    * @type {string}
    * @final
    */
    APPROACH: 'app',

    /**
    * Provides departure control services
    *
    * @memberof AIRPORT_CONTROL_POSITION_NAME
    * @property TOWER
    * @type {string}
    * @final
    */
    DEPARTURE: 'dep',

    /**
    * Provides Air Traffic Control Tower (ATCT) services for surface and runway movements
    *
    * @memberof AIRPORT_CONTROL_POSITION_NAME
    * @property TOWER
    * @type {string}
    * @final
    */
    TOWER: 'twr'
};
