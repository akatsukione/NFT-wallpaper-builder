import * as React from 'react';
import { toPng } from "html-to-image";
import { useState, useCallback } from 'react';

export default function useDownloadPng({ ref, widthEl, heightEl, name, typeCover }: any) {

    const [isDownload, setIsDownload] = useState(false)

    const doDownload: (React.MouseEventHandler<HTMLButtonElement> | undefined) = useCallback(() => {

        if (ref.current === null) {
            return
        }

        toPng(ref.current, {
            cacheBust: true,
            width: widthEl,
            height: heightEl,
            pixelRatio: 1

        })
            .then((dataUrl) => {
                const link = document.createElement('a')
                link.download = `${typeCover}-0xaps3s-${name}.png`;
                link.href = dataUrl;
                link.click();
                setIsDownload(true)
            })
            .catch((err) => {
                console.log(err)
            })
    }, [ref, widthEl, heightEl, name]);

    return [isDownload, doDownload] as const
}
