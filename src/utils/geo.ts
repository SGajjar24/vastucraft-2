// Geo-localisation utilities for detecting user location

export interface LocationData {
    city: string;
    state: string;
    country: string;
    coordinates?: {
        latitude: number;
        longitude: number;
    };
}

/**
 * Get user's location using browser Geolocation API
 * Requires user permission
 */
export const getUserGeolocation = (): Promise<LocationData> => {
    return new Promise((resolve, reject) => {
        if (!navigator.geolocation) {
            reject(new Error('Geolocation not supported'));
            return;
        }

        navigator.geolocation.getCurrentPosition(
            async (position) => {
                const { latitude, longitude } = position.coords;

                // Reverse geocoding would normally use a service like Google Maps API
                // For now, detect if coordinates are in Gujarat region
                const isGujarat =
                    latitude >= 20.1 && latitude <= 24.7 &&
                    longitude >= 68.2 && longitude <= 74.5;

                if (isGujarat) {
                    // Simple detection - in production, use reverse geocoding API
                    resolve({
                        city: 'Ahmedabad',
                        state: 'Gujarat',
                        country: 'India',
                        coordinates: { latitude, longitude }
                    });
                } else {
                    resolve({
                        city: 'Unknown',
                        state: 'Unknown',
                        country: 'India',
                        coordinates: { latitude, longitude }
                    });
                }
            },
            (error) => {
                reject(error);
            }
        );
    });
};

/**
 * Get cached location from localStorage
 */
export const getCachedLocation = (): LocationData | null => {
    const cached = localStorage.getItem('user-location');
    if (cached) {
        try {
            return JSON.parse(cached);
        } catch {
            return null;
        }
    }
    return null;
};

/**
 * Save location to localStorage
 */
export const cacheLocation = (location: LocationData): void => {
    localStorage.setItem('user-location', JSON.stringify(location));
    localStorage.setItem('location-timestamp', new Date().toISOString());
};

/**
 * Check if user is in Gujarat based on coordinates
 */
export const isInGujarat = (latitude: number, longitude: number): boolean => {
    // Gujarat approximate bounds
    return (
        latitude >= 20.1 &&
        latitude <= 24.7 &&
        longitude >= 68.2 &&
        longitude <= 74.5
    );
};

/**
 * Get location with fallback strategy:
 * 1. Check cache (if fresh)
 * 2. Try geolocation API
 * 3. Fallback to IP-based (would need external service)
 */
export const getLocationWithFallback = async (): Promise<LocationData> => {
    // Check cache first
    const cached = getCachedLocation();
    if (cached) {
        return cached;
    }

    // Try geolocation
    try {
        const location = await getUserGeolocation();
        cacheLocation(location);
        return location;
    } catch (error) {
        // Fallback to default (Ahmedabad)
        const fallback: LocationData = {
            city: 'Ahmedabad',
            state: 'Gujarat',
            country: 'India'
        };
        return fallback;
    }
};
