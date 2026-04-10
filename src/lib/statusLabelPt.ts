/** Portuguese labels for Kitsu `status` values. */
export function statusLabelPt(
  status: string | null | undefined,
  whenEmpty = "Desconhecido"
): string {
  if (!status) return whenEmpty;
  const map: Record<string, string> = {
    current: "Em exibição",
    finished: "Finalizado",
    tba: "A definir",
    unreleased: "Não lançado",
  };
  return map[status.toLowerCase()] ?? status;
}
