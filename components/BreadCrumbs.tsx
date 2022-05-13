import Breadcrumbs from '@mui/material/Breadcrumbs';
import Link from '@mui/material/Link';
import Typography from '@mui/material/Typography';
import { useRouter } from 'next/router';
import React, {useEffect} from 'react';
const _defaultGetTextGenerator = (param, query) => null;
const _defaultGetDefaultTextGenerator = path => path;

const generatePathParts = pathStr => {
    const pathWithoutQuery = pathStr.split("?")[0];
    return pathWithoutQuery.split("/")
        .filter(v => v.length > 0);
}
export default function NextBreadcrumbs({
                                            getTextGenerator=_defaultGetTextGenerator,
                                            getDefaultTextGenerator=_defaultGetDefaultTextGenerator
                                        }) {
    // Gives us ability to load the current route details
    const router = useRouter();

    function generateBreadcrumbs() {
        // Remove any query parameters, as those aren't included in breadcrumbs
        const asPathWithoutQuery = router.asPath.split("?")[0];

        // Break down the path between "/"s, removing empty entities
        // Ex:"/my/nested/path" --> ["my", "nested", "path"]
        const asPathNestedRoutes = asPathWithoutQuery.split("/")
            .filter(v => v.length > 0);

        // Iterate over the list of nested route parts and build
        // a "crumb" object for each one.
        const crumblist = asPathNestedRoutes.map((subpath, idx) => {
            // We can get the partial nested route for the crumb
            // by joining together the path parts up to this point.
            const href = "/" + asPathNestedRoutes.slice(0, idx + 1).join("/");
            // The title will just be the route string for now
            const title = subpath;
            return { href, text };
        })

        // Add in a default "Home" crumb for the top-level
        return [{ href: "/", text: "Home" }, ...crumblist];
    }

    // Call the function to generate the breadcrumbs list
    const breadcrumbs = React.useMemo(function generateBreadcrumbs() {
        const asPathNestedRoutes = generatePathParts(router.asPath);
        const pathnameNestedRoutes = generatePathParts(router.pathname);

        const crumblist = asPathNestedRoutes.map((subpath, idx) => {
            // Pull out and convert "[post_id]" into "post_id"
            const param = pathnameNestedRoutes[idx].replace("[", "").replace("]", "");

            const href = "/" + asPathNestedRoutes.slice(0, idx + 1).join("/");
            return {
                href, textGenerator: getTextGenerator(param, router.query),
                text: getDefaultTextGenerator(subpath, href)
            };
        })

        return [{ href: "/", text: "Home" }, ...crumblist];
    }, [router.asPath, router.pathname, router.query, getTextGenerator, getDefaultTextGenerator]);

    return (
<div className={'breadcrumbs'}>
    <Breadcrumbs >
        {breadcrumbs.map((crumb, idx) => (
            <Crumb {...crumb} key={idx} last={idx === breadcrumbs.length - 1} />
        ))}
    </Breadcrumbs>
</div>
);
}

// Each individual "crumb" in the breadcrumbs list
function Crumb({ text: defaultText, textGenerator, href, last=false }) {

    const [text, setText] = React.useState(defaultText);

    useEffect(async () => {
        // If `textGenerator` is nonexistent, then don't do anything
        if (!Boolean(textGenerator)) { return; }
        // Run the text generator and set the text again
        const finalText = await textGenerator();
        setText(finalText);
    }, [textGenerator]);

    if (last) {
        return <Typography color="text.primary">{text}</Typography>
    }

    return (
        <Link underline="hover" color="inherit" href={href}>
            {text}
        </Link>
    );
}