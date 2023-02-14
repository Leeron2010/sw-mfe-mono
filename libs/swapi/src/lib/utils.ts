export function getId(url: string): string {

    const parts = url.split('/');

    return parts[parts.length - 2];
}

export function getIds(urls: string[]): string[] {
    return urls.map(getId);
}