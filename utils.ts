import {MutableRefObject, useEffect, useState} from "react";

export const gql = ([content]: TemplateStringsArray) => content;

export async function fetchGraphQL(
    query: string,
    variables?: Record<string, any>
) {
    return fetch('http://localhost:3000/api/graphql', {
        method: 'POST',
        body: JSON.stringify({query, variables}),
        headers: {'Content-Type': 'application/json'},
    })
        .then(x => x.json())
        .then(({data, errors}) => {
            if (errors) {
                throw new Error(
                    `GraphQL errors occurred:\n${errors
                        .map((x: any) => x.message)
                        .join('\n')}`
                );
            }
            return data;
        });
}

export const useIntersection = (element:any, rootMargin: string) => {
    const [isVisible, setState] = useState(false);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                setState(entry.isIntersecting);
            }, { rootMargin }
        );

        element.current && observer.observe(element.current);
        console.log(element.current)
        // @ts-ignore
        return () => element.current ? observer.unobserve(element.current) : undefined;
    }, [isVisible]);

    return isVisible;
};

export const useWindowScrollPositions = () => {
    const [scrollPosition, setPosition] = useState({ scrollX: 0, scrollY: 0 })

    useEffect(() => {
        function updatePosition() {
            setPosition({ scrollX: window.scrollX, scrollY: window.scrollY })
        }

        window.addEventListener('scroll', updatePosition)
        // updatePosition()

        return () => window.removeEventListener('scroll', updatePosition)
    }, [scrollPosition])

    return scrollPosition
}
export function useWindowSize() {
    // Initialize state with undefined width/height so server and client renders match
    // Learn more here: https://joshwcomeau.com/react/the-perils-of-rehydration/
    const [windowSize, setWindowSize] = useState({
        width: undefined,
        height: undefined,
    });
    const range = [
        360, 768, 1024, 1440, 1920
    ]

    const [viewPort, setViewport ] = useState({
        mobile: undefined, tablet: undefined, desktop: undefined, wideDesktop: undefined
    })
    useEffect(() => {
        // only execute all the code below in client side
        if (typeof window !== 'undefined') {
            // Handler to call on window resize
            function handleResize() {
                // Set window width/height to state
                setWindowSize({
                    width: window.innerWidth,
                    height: window.innerHeight,
                });

                setViewport({
                    mobile:  range[1] > window.innerWidth &&  window.innerWidth > range[0],
                    tablet:  range[2] > window.innerWidth && window.innerWidth > range[1],
                    desktop:  range[3] > window.innerWidth && window.innerWidth > range[2],
                    wideDesktop:  window.innerWidth > range[3]
                });
            }
            // function handleView() {
            //     // Set window width/height to state
            //     const range = [
            //         360, 768, 1024, 1440, 1920
            //     ]
            //
            //     setViewport({
            //         mobile:  range[1] > windowSize.width &&  windowSize.width > range[0] , tablet:  range[2] > windowSize.width && windowSize.width > range[1], desktop:  range[3] > windowSize.width && windowSize.width > range[2], wideDesktop:  range[4] > windowSize.width && windowSize.width > range[3]
            //     })
            // }

            // Add event listener
            window.addEventListener("resize", handleResize);
            // window.addEventListener("resize", handleView);

            // Call handler right away so state gets updated with initial window size
            handleResize();
            // handleView();

            // Remove event listener on cleanup
            return () => {
                window.removeEventListener("resize", handleResize);
                // window.removeEventListener("resize", handleView);
            }
        }
    }, []); // Empty array ensures that effect is only run on mount
    return (
        {
            windowSize, viewPort
        })

}
