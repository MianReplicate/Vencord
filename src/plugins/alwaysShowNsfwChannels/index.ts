/*
* Vencord, a Discord client mod
* Copyright (c) 2025 Vendicated and contributors*
* SPDX-License-Identifier: GPL-3.0-or-later
*/
import { Devs } from "@utils/constants";
import definePlugin from "@utils/types";

export default definePlugin({
    name: "Bypass NSFW Gate",
    description: "Bypasses NSFW channels",
    authors: [Devs.Mian],
    patches: [
        {
            find: ".nsfwAllowed=null",
            replacement: [
                {
                    match: /(?<=\.nsfwAllowed=)null!=.+?(?=[,;])/,
                    replace: "true",
                },
                {
                    match: /(?<=\.ageVerificationStatus=)null!=.+?(?=[,;])/,
                    replace: "3", // VERIFIED_ADULT
                }
            ],
        }
    ],
});

